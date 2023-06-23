package org.onehippo.taxonomy.plugin;

import org.apache.wicket.ajax.AjaxRequestTarget;
import org.apache.wicket.ajax.markup.html.AjaxLink;
import org.apache.wicket.model.IModel;
import org.hippoecm.frontend.plugins.standards.tree.icon.ITreeNodeIconProvider;
import org.onehippo.taxonomy.api.Category;
import org.onehippo.taxonomy.plugin.model.CategoryModel;
import org.onehippo.taxonomy.plugin.model.Classification;
import org.onehippo.taxonomy.plugin.model.TaxonomyModel;

import java.util.List;
import java.util.Locale;

/**
 * This class extends the TaxonomyBrowser that comes with the Taxonomy plugin for Bloomreach
 * 
 * This variant will respect a new property called 'multiple' which defaults to false and which
 * indicates whether the browser should allow multiple terms to be selected
 */
public class ParameterisedTaxonomyBrowser extends TaxonomyBrowser {
    public static final String ADD = "add";
    public static final String ADD_ANCESTORS = "addancestors";

    private boolean parameterisedDetailsReadOnly = false;

    protected boolean multiple;

    public ParameterisedTaxonomyBrowser(String id, IModel<Classification> model, TaxonomyModel taxonomyModel, Locale preferredLocale) {
        super(id, model, taxonomyModel, preferredLocale);
    }

    public ParameterisedTaxonomyBrowser(String id, IModel<Classification> model, TaxonomyModel taxonomyModel, Locale preferredLocale, boolean detailsReadOnly, ITreeNodeIconProvider iconProvider, boolean multiple) {
        super(id, model, taxonomyModel, preferredLocale, detailsReadOnly, iconProvider);

        this.multiple = multiple;
        //* Need to store this for our own access (it's private in the ancestor class)
        this.parameterisedDetailsReadOnly = detailsReadOnly;
    }

    /**
     * By default, the taxonomy picker allows multiple selections, but we can control
     * that and we need to record the preference rather than assume it is always multi-select
     */
    public boolean getMultiple() {
        return this.multiple;
    }

    @Override
    protected Details newDetails(String id, CategoryModel model) {
        return new ParameterisedDetails(id, model);
    }

    protected List<String> getKeys() {
        return getModelObject().getKeys();
    }

    private boolean isCanonised() {
        return getModelObject().isCanonised();
    }

    private void setCanonicalKey(String key) {
        getModelObject().setCanonical(key);
    }

    /**
     * Our own implementation of the {@link TaxonomyBrowser.Details} class which manages teh display of
     * termas as they are selected in the TreeView on the left of the picker
     */
    protected class ParameterisedDetails extends TaxonomyBrowser.Details {
        /**
         * In this constructor, we're going to replace the default addition operations so that
         * they are aware of the multiple selection status
         * @param id
         * @param model
         */
        public ParameterisedDetails(String id, CategoryModel model) {
            super(id, model);

            this.addOrReplace(new AjaxLink<Category>(ADD, model) {
                @Override
                public void onClick(AjaxRequestTarget target) {
                    String key = getModelObject().getKey();
                    List<String> keys = getKeys();
                    keys.add(key);
                    if (keys.size() == 1 && isCanonised()) {
                        setCanonicalKey(key);
                    }
                    ParameterisedTaxonomyBrowser.this.modelChanged();
                    target.add(container);
                }

                @Override
                /**
                 * The change to default behaviour is in here - the multiple check
                 */
                public boolean isVisible() {
                    String key = getModelObject().getKey();
                    boolean isMulti = ParameterisedTaxonomyBrowser.this.getMultiple();
                    return !parameterisedDetailsReadOnly && !getKeys().contains(key) &&
                            ((!isMulti && getKeys().size() == 0) || isMulti);
                }
            });

            addOrReplace(new AjaxLink<Category>(ADD_ANCESTORS, model) {
                @Override
                public void onClick(AjaxRequestTarget target) {
                    List<String> keys = getKeys();
                    for (Category ancestor : getModelObject().getAncestors()) {
                        if (keys.contains(ancestor.getKey())) {
                            continue;
                        }
                        keys.add(ancestor.getKey());
                    }
                    if (keys.size() == 1 && isCanonised()) {
                        setCanonicalKey(getModelObject().getKey());
                    }
                    ParameterisedTaxonomyBrowser.this.modelChanged();
                    target.add(container);
                }

                @Override
                /**
                 * The change to default behaviour is in here - the multiple check
                 */
                public boolean isVisible() {
                    String key = getModelObject().getKey();
                    if ((!ParameterisedTaxonomyBrowser.this.getMultiple() && getKeys().size() > 0)
                            || getModelObject().getParent() == null) {
                        return false;
                    }
                    return !parameterisedDetailsReadOnly && !getKeys().contains(key);
                }
            });
        }
    }
}
