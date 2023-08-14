package uk.nhs.hee.web.taxonomy;

import org.apache.wicket.model.IModel;
import org.apache.wicket.model.Model;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.hippoecm.frontend.plugins.cms.browse.tree.FolderTreePlugin;
import org.hippoecm.frontend.plugins.standards.tree.icon.ITreeNodeIconProvider;
import org.onehippo.taxonomy.plugin.ITaxonomyService;
import org.onehippo.taxonomy.plugin.TaxonomySingleBrowser;
import org.onehippo.taxonomy.plugin.TaxonomyPickerDialog;
import org.onehippo.taxonomy.plugin.model.Classification;
import org.onehippo.taxonomy.plugin.model.TaxonomyModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Locale;

/**
 * This is a modified version of the supplied {@link TaxonomyPickerDialog} which is able to
 * manage parameterised taxonomy names as well as managing selections as single/multiple options
 */
public class TaxonomySinglePickerDialog extends TaxonomyPickerDialog {

    private static final Logger log = LoggerFactory.getLogger(TaxonomySinglePickerDialog.class);

    public static final String MULTIPLE = "multiple";

    /**
     * Differs from the original constructor in that it will look for and manage parameterised taxonomy names
     * @param context
     * @param config
     * @param model
     * @param preferredLocale
     */
    public TaxonomySinglePickerDialog(IPluginContext context, IPluginConfig config, IModel<Classification> model, Locale preferredLocale) {
        this(context, config, model, preferredLocale,
                new TaxonomyModel(context,
                        config,
                        null,
                        config.getString(ITaxonomyService.TAXONOMY_NAME)),
                false);
    }

    public TaxonomySinglePickerDialog(final IPluginContext context, final IPluginConfig config, IModel<Classification> model,
                                             final Locale preferredLocale, final TaxonomyModel taxonomyModel,
                                             final boolean detailsReadOnly) {
        super(context, config, model, preferredLocale, taxonomyModel, detailsReadOnly);
        if (!TREE.equals(viewType)) {
            log.warn("Invalid taxonomy picker type " + viewType + ", falling back to 'tree'");
        }

        ITreeNodeIconProvider iconProvider = FolderTreePlugin.newTreeNodeIconProvider(context, config);
        addOrReplace(browser = new TaxonomySingleBrowser("content", new Model<>(model.getObject()),
                taxonomyModel, preferredLocale, detailsReadOnly, iconProvider, config.getAsBoolean(MULTIPLE, false)) {
            @Override
            protected void onModelChanged() {
                setOkEnabled(true);
            }
        });
    }
}