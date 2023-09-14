package org.onehippo.taxonomy.plugin;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.AjaxLink;
import org.apache.wicket.markup.html.basic.Label;
import org.apache.wicket.markup.html.list.ListItem;
import org.apache.wicket.markup.html.list.ListView;
import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;
import org.apache.wicket.model.ResourceModel;
import org.hippoecm.frontend.plugins.standards.tree.icon.ITreeNodeIconProvider;
import org.onehippo.taxonomy.api.Category;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.plugin.api.TaxonomyHelper;
import org.onehippo.taxonomy.plugin.model.CategoryModel;
import org.onehippo.taxonomy.plugin.model.Classification;
import org.onehippo.taxonomy.plugin.model.TaxonomyModel;

import java.util.List;
import java.util.Locale;
import java.util.stream.Collectors;

/**
 * An extension of {@link TaxonomyBrowser} supporting the following customisations:
 * <ul>
 *     <li>Support for single-valued taxonomy fields i.e. restrict content editors to select one term only
 *     for single-valued fields via {@code multiple} property field cluster configuration.
 *     By default, it supports multi-valued fields.
 *     (For information: Out-of-the-box, taxonomy plugin supports only multi-valued fields).</li>
 *     <li>Hide the {@code Select term} button from the taxonomy picker dialog for terms containing ancestors.</li>
 *     <li>Hide the remove (X) button from the terms of {@code Selected taxonomy terms} list view for the root terms
 *     whose one/more of its children has already been chosen.</li>
 * </ul>
 */
public class CustomTaxonomyBrowser extends TaxonomyBrowser {
    private static final long serialVersionUID = -3850198688059066922L;
    private boolean detailsReadOnly = false;
    private boolean multiple;

    /**
     * Synonymous to {@link TaxonomyBrowser#TaxonomyBrowser(java.lang.String, org.apache.wicket.model.IModel,
     * org.onehippo.taxonomy.plugin.model.TaxonomyModel, java.util.Locale)} constructor.
     */
    public CustomTaxonomyBrowser(
            final String id,
            final IModel<Classification> model,
            final TaxonomyModel taxonomyModel,
            final Locale preferredLocale
    ) {
        super(id, model, taxonomyModel, preferredLocale);
    }

    /**
     * Synonymous to {@link TaxonomyBrowser#TaxonomyBrowser(java.lang.String, org.apache.wicket.model.IModel,
     * org.onehippo.taxonomy.plugin.model.TaxonomyModel, java.util.Locale, boolean,
     * org.hippoecm.frontend.plugins.standards.tree.icon.ITreeNodeIconProvider)} constructor with the addition that:
     * <ul>
     *     <li>it takes a {@code multiple} parameter to provide support for single-valued taxonomy fields.</li>
     *     <li>provides a custom implementation for the {@code Selected taxonomy terms} remove (X) button visibility
     *     for the root terms.</li>
     * </ul>
     */
    public CustomTaxonomyBrowser(
            final String id,
            final IModel<Classification> model,
            final TaxonomyModel taxonomyModel,
            final Locale preferredLocale,
            final boolean detailsReadOnly,
            final ITreeNodeIconProvider iconProvider,
            final boolean multiple
    ) {
        super(id, model, taxonomyModel, preferredLocale, detailsReadOnly, iconProvider);

        this.multiple = multiple;
        this.detailsReadOnly = detailsReadOnly;

        final Taxonomy taxonomy = taxonomyModel.getObject();
        // Rebuilds 'Selected taxonomy terms' list view including a custom implementation
        // for the remove (X) button visibility for the root terms.
        final ListView<String> lv = new ListView<>("list", getKeys()) {
            private static final long serialVersionUID = 8461736279529974244L;

            @Override
            protected void populateItem(final ListItem<String> item) {
                final String categoryKey = item.getModelObject();
                Category category = taxonomy.getCategoryByKey(categoryKey);
                final IModel<String> labelModel;
                if (category != null) {
                    String name = TaxonomyHelper.getCategoryDisplayName(category, preferredLocale);
                    while (category.getParent() != null) {
                        category = category.getParent();
                        name = TaxonomyHelper.getCategoryDisplayName(category, preferredLocale) + " > " + name;
                    }
                    labelModel = new Model<>(name);
                } else {
                    labelModel = new ResourceModel("invalid.taxonomy.category");
                }
                item.add(new Label("label", labelModel));

                item.add(new AjaxLink<>("remove", item.getModel()) {
                    private static final long serialVersionUID = 9180697793697580314L;

                    @Override
                    public void onClick(final AjaxRequestTarget target) {
                        final List<String> keys = getKeys();
                        if (isCanonised()) {
                            // change canonical key if current is the one that is removed
                            if (getModelObject().equals(getCanonicalKey())) {
                                setCanonicalKey(null);
                                keys.remove(getModelObject());
                                if (keys.size() > 0) {
                                    final String siblingKey = keys.get(0);
                                    setCanonicalKey(siblingKey);
                                }
                            } else {
                                keys.remove(getModelObject());
                            }
                        } else {
                            keys.remove(getModelObject());
                        }
                        CustomTaxonomyBrowser.this.modelChanged();
                        target.add(container);
                    }

                    /**
                     * A custom implementation for the {@code Selected taxonomy terms} remove (X) button visibility
                     * so that root terms remove button (X) won't be displayed
                     * if any of its children has already been chosen.
                     * For instance, the remove button (X) on the {@code Dental professional} term
                     * will not be visible/available if its children term {@code Dentist} has already been chosen.
                     */
                    @Override
                    public boolean isVisible() {
                        final String categoryKey = item.getModelObject();
                        final Category category = taxonomy.getCategoryByKey(categoryKey);

                        if (category.getParent() == null) {
                            final List<String> categoryChildrenKeys = category.getChildren().stream()
                                    .map(Category::getKey)
                                    .collect(Collectors.toUnmodifiableList());

                            return categoryChildrenKeys.stream().noneMatch(getKeys()::contains);
                        }

                        return true;
                    }
                });
            }
        };
        container.addOrReplace(lv);
    }

    @Override
    protected Details newDetails(final String id, final CategoryModel model) {
        return new CustomDetails(id, model);
    }

    /**
     * By default, the taxonomy picker allows multiple selections, but we can control
     * that, and we need to record the preference rather than assume it is always multi-select.
     */
    public boolean getMultiple() {
        return this.multiple;
    }

    private List<String> getKeys() {
        return getModelObject().getKeys();
    }

    private String getCanonicalKey() {
        return getModelObject().getCanonical();
    }

    private boolean isCanonised() {
        return getModelObject().isCanonised();
    }

    private void setCanonicalKey(final String key) {
        getModelObject().setCanonical(key);
    }

    /**
     * An extension of {@link TaxonomyBrowser.Details}
     * customising {@code Select term} taxonomy picker button functionality.
     */
    protected class CustomDetails extends TaxonomyBrowser.Details {

        private static final long serialVersionUID = 1482209152621900499L;

        /**
         * Synonymous to
         * {@link Details#Details(java.lang.String, org.onehippo.taxonomy.plugin.model.CategoryModel)} constructor.
         */
        public CustomDetails(final String id, final CategoryModel model) {
            super(id, model);

            // Replaces 'add' AjaxLink wicket component i.e. 'Select term' taxonomy picker button component
            // to include customisation.
            addOrReplace(new AjaxLink<>("add", model) {
                private static final long serialVersionUID = 3367549512361853118L;

                @Override
                public void onClick(final AjaxRequestTarget target) {
                    final String key = getModelObject().getKey();
                    final List<String> keys = getKeys();
                    keys.add(key);
                    if (keys.size() == 1 && isCanonised()) {
                        setCanonicalKey(key);
                    }
                    CustomTaxonomyBrowser.this.modelChanged();
                    target.add(container);
                }

                @Override
                public boolean isVisible() {
                    final String key = getModelObject().getKey();

                    // Removes the visibility of 'Select term' button if the current term has ancestor(s).
                    if (getModelObject().getParent() != null) {
                        return false;
                    }

                    return !detailsReadOnly && !getKeys().contains(key)
                            // Removes the visibility of 'Select term' button for single-valued fields.
                            && (CustomTaxonomyBrowser.this.getMultiple() || getKeys().size() == 0);
                }
            });

            addOrReplace(new AjaxLink<>("removeterm", model) {
                private static final long serialVersionUID = 1308120649474203252L;

                @Override
                public void onClick(final AjaxRequestTarget target) {
                    final List<String> keys = getKeys();
                    final String key = getModelObject().getKey();
                    if (isCanonised()) {
                        // change canonical key if current is the one that is removed
                        if (key.equals(getCanonicalKey())) {
                            removeAndReassignCanonical(keys);
                        } else {
                            keys.remove(key);
                        }
                    } else {
                        keys.remove(key);
                    }
                    CustomTaxonomyBrowser.this.modelChanged();
                    target.add(container);
                }

                private void removeAndReassignCanonical(final List<String> keys) {
                    setCanonicalKey(null);
                    keys.remove(getModelObject().getKey());
                    if (keys.size() > 0) {
                        final String siblingKey = keys.get(0);
                        setCanonicalKey(siblingKey);
                    }
                }

                @Override
                public boolean isVisible() {
                    final String currentTermKey = getModelObject().getKey();
                    if (getModelObject().getParent() == null) {
                        final List<String> currentTermChildrenKeys = getModelObject().getChildren().stream()
                                .map(Category::getKey)
                                .collect(Collectors.toUnmodifiableList());

                        if (currentTermChildrenKeys.stream().anyMatch(getKeys()::contains)) {
                            return false;
                        }
                    }
                    return !detailsReadOnly && getKeys().contains(currentTermKey);
                }
            });
        }
    }
}