package uk.nhs.hee.web.taxonomy;

import org.hippoecm.frontend.dialog.Dialog;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.hippoecm.frontend.plugin.config.impl.JavaPluginConfig;
import org.onehippo.taxonomy.plugin.TaxonomyFieldPlugin;
import org.onehippo.taxonomy.plugin.model.Classification;
import org.onehippo.taxonomy.plugin.model.ClassificationModel;

import java.util.Locale;

public class TaxonomySingleFieldPlugin extends TaxonomyFieldPlugin {

    private final IPluginConfig config;

    public TaxonomySingleFieldPlugin(IPluginContext context, IPluginConfig config) {
        super(context, config);
        this.config = config;
    }

    @Override
    protected Dialog<Classification> createTaxonomyPickerDialog(ClassificationModel model, Locale preferredLocale) {
        IPluginConfig allPluginConfig = new JavaPluginConfig(config);
        allPluginConfig.putAll(new JavaPluginConfig(config.getPluginConfig("cluster.options")));
        return new TaxonomySinglePickerDialog(this.getPluginContext(), allPluginConfig, model, preferredLocale);
    }
}
