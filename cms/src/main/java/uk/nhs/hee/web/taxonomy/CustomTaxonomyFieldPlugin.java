package uk.nhs.hee.web.taxonomy;

import org.hippoecm.frontend.dialog.Dialog;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.hippoecm.frontend.plugin.config.impl.JavaPluginConfig;
import org.hippoecm.frontend.plugins.standards.picker.NodePickerControllerSettings;
import org.onehippo.taxonomy.plugin.TaxonomyFieldPlugin;
import org.onehippo.taxonomy.plugin.model.Classification;
import org.onehippo.taxonomy.plugin.model.ClassificationModel;

import java.util.Locale;

/**
 * An extension of {@link TaxonomyFieldPlugin}
 * which consumes a custom taxonomy picker {@link CustomTaxonomyPickerDialog}
 * to ultimately customise taxonomy picker/selection/browse functionality
 * via {@link org.onehippo.taxonomy.plugin.CustomTaxonomyBrowser}.
 */
public class CustomTaxonomyFieldPlugin extends TaxonomyFieldPlugin {
    private static final long serialVersionUID = -8523984361381154495L;
    private final IPluginConfig allPluginConfig;

    public CustomTaxonomyFieldPlugin(final IPluginContext context, final IPluginConfig config) {
        super(context, config);

        allPluginConfig = new JavaPluginConfig(config);
        allPluginConfig.putAll(new JavaPluginConfig(config.getPluginConfig(NodePickerControllerSettings.CLUSTER_OPTIONS)));
    }

    @Override
    protected Dialog<Classification> createTaxonomyPickerDialog(final ClassificationModel model,
                                                                final Locale preferredLocale) {
        return new CustomTaxonomyPickerDialog(getPluginContext(), allPluginConfig, model, preferredLocale);
    }
}
