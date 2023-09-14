package uk.nhs.hee.web.taxonomy;

import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.hippoecm.frontend.plugins.cms.browse.tree.FolderTreePlugin;
import org.hippoecm.frontend.plugins.standards.tree.icon.ITreeNodeIconProvider;
import org.onehippo.taxonomy.plugin.CustomTaxonomyBrowser;
import org.onehippo.taxonomy.plugin.TaxonomyPickerDialog;
import org.onehippo.taxonomy.plugin.model.Classification;
import org.onehippo.taxonomy.plugin.model.TaxonomyModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Locale;

/**
 * An extension of {@link TaxonomyPickerDialog} supporting the following customisations
 * with the help of custom taxonomy browser {@link CustomTaxonomyBrowser}:
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
public class CustomTaxonomyPickerDialog extends TaxonomyPickerDialog {
    private static final Logger log = LoggerFactory.getLogger(CustomTaxonomyPickerDialog.class);
    private static final long serialVersionUID = -1086825352660995018L;

    /**
     * Synonymous to {@link TaxonomyPickerDialog#TaxonomyPickerDialog(org.hippoecm.frontend.plugin.IPluginContext,
     * org.hippoecm.frontend.plugin.config.IPluginConfig, org.apache.wicket.model.IModel, java.util.Locale)} constructor.
     */
    public CustomTaxonomyPickerDialog(
            final IPluginContext context,
            final IPluginConfig config,
            final IModel<Classification> model,
            final Locale preferredLocale
    ) {
        this(context, config, model, preferredLocale, new TaxonomyModel(context, config), false);
    }

    /**
     * Synonymous to {@link TaxonomyPickerDialog#TaxonomyPickerDialog(org.hippoecm.frontend.plugin.IPluginContext,
     * org.hippoecm.frontend.plugin.config.IPluginConfig, org.apache.wicket.model.IModel, java.util.Locale,
     * org.onehippo.taxonomy.plugin.model.TaxonomyModel, boolean)} constructor with the addition that
     * it gets {@code multiple} property from field cluster ({@code cluster.options}) configuration
     * and passes over to {@link CustomTaxonomyBrowser} to provide support for single-valued taxonomy fields.
     */
    public CustomTaxonomyPickerDialog(
            final IPluginContext context,
            final IPluginConfig config,
            final IModel<Classification> model,
            final Locale preferredLocale,
            final TaxonomyModel taxonomyModel,
            final boolean detailsReadOnly
    ) {
        super(context, config, model, preferredLocale, taxonomyModel, detailsReadOnly);

        if (!PALETTE.equals(viewType)) {
            if (!TREE.equals(viewType)) {
                log.warn("Invalid taxonomy picker type " + viewType + ", falling back to 'tree'");
            }

            final ITreeNodeIconProvider iconProvider = FolderTreePlugin.newTreeNodeIconProvider(context, config);

            addOrReplace(browser = new CustomTaxonomyBrowser("content", new Model<>(
                    model.getObject()),
                    taxonomyModel,
                    preferredLocale,
                    detailsReadOnly,
                    iconProvider,
                    config.getAsBoolean("multiple", true)
            ) {
                private static final long serialVersionUID = -8294386858398394680L;

                @Override
                protected void onModelChanged() {
                    setOkEnabled(true);
                }
            });
        }
    }
}