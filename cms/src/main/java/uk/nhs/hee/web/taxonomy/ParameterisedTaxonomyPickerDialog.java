package uk.nhs.hee.web.taxonomy;

import org.apache.wicket.model.IModel;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.onehippo.taxonomy.plugin.ITaxonomyService;
import org.onehippo.taxonomy.plugin.TaxonomyPickerDialog;
import org.onehippo.taxonomy.plugin.model.Classification;
import org.onehippo.taxonomy.plugin.model.TaxonomyModel;
import uk.nhs.hee.web.utils.TaxonomyUtils;

import java.util.Locale;

/**
 * This is a modified version of the supplied {@link TaxonomyPickerDialog} which is able to
 * manage parameterised taxonomy names
 *
 */
public class ParameterisedTaxonomyPickerDialog extends TaxonomyPickerDialog {

    /**
     * Differs from the original constructor in that it will look for and manage parameterised taxonomy names
     * @param context
     * @param config
     * @param model
     * @param preferredLocale
     * @param contextPath
     */
    public ParameterisedTaxonomyPickerDialog(IPluginContext context, IPluginConfig config, IModel<Classification> model, Locale preferredLocale, String contextPath) {
        super(context, config, model, preferredLocale,
                new TaxonomyModel(context,
                            config,
                        null,
                            TaxonomyUtils.getTaxonomyName(contextPath, config.getString(ITaxonomyService.TAXONOMY_NAME))),
                false);
    }
}
