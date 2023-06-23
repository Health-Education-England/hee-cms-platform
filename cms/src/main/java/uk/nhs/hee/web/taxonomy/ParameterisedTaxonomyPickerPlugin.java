package uk.nhs.hee.web.taxonomy;

import org.apache.commons.lang.StringUtils;
import org.apache.wicket.Component;
import org.apache.wicket.model.Model;
import org.apache.wicket.util.io.IClusterable;
import org.hippoecm.frontend.dialog.Dialog;
import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.plugin.ITaxonomyService;
import org.onehippo.taxonomy.plugin.TaxonomyPickerPlugin;
import org.onehippo.taxonomy.plugin.model.Classification;
import org.onehippo.taxonomy.plugin.model.ClassificationModel;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.utils.TaxonomyUtils;

import java.util.Locale;

import javax.jcr.RepositoryException;

public class ParameterisedTaxonomyPickerPlugin extends TaxonomyPickerPlugin {
    private static final Logger log = LoggerFactory.getLogger(ParameterisedTaxonomyPickerPlugin.class);

    public static final String EDIT = "edit";
    public static final String MODE = "mode";
    public static final String BUTTON_TEXT = "button.text";
    public static final String DIALOG_LINK = "dialog-link";
    public static final String DIALOG_LINK_TEXT = "dialog-link-text";

    /**
     * We call the ctor but then adjust the appearance based on whether we are editing
     * @param context
     * @param config
     */
    public ParameterisedTaxonomyPickerPlugin(IPluginContext context, IPluginConfig config) {
        super(context, config);
        replaceButtonTextIfRequired(config);
    }

    /**
     * Change "Selecton" button text. Useful when you don't want the "Select the terms" standard text
     *
     * @param config which wil include a potential value for the overriding button text
     */
    private void replaceButtonTextIfRequired(IPluginConfig config) {
        if (!EDIT.equals(config.getString(MODE, ""))) {
            return;
        }

        final String buttonText = config.getString(BUTTON_TEXT);
        if (buttonText == null) {
            return;
        }

        final Component dialogLink = get(EDIT).get(DIALOG_LINK);
        if (dialogLink == null) {
            return;
        }

        final Component linkText = dialogLink.get(DIALOG_LINK_TEXT);
        if (linkText == null) {
            return;
        }

        linkText.setDefaultModel(Model.of(buttonText));
    }

    /**
     * This is our overridden version of the getTaxonomy method which will look for, and replace, parameterised taxonomy names
     *
     * Note that we can manage non-parameterised taxonomy names here
     *
     * @return the {@link Taxonomy} object which will have been located (or null if none found)
     */
    @Override
    protected Taxonomy getTaxonomy() {
        final ITaxonomyService service = getService(ITaxonomyService.SERVICE_ID, ITaxonomyService.DEFAULT_SERVICE_TAXONOMY_ID, ITaxonomyService.class);
        String taxonomyName = getPluginConfig().getString(ITaxonomyService.TAXONOMY_NAME);

        try {
            taxonomyName = TaxonomyUtils.getTaxonomyName(this.getModel().getObject().getPath(), taxonomyName);
        } catch (RepositoryException repositoryException) {
            log.error("Failed to locate/load the taxonomy called '{}'", taxonomyName, repositoryException);
        }

        if (StringUtils.isBlank(taxonomyName)) {
            log.info("No configured/chosen taxonomy name. Found '{}'", taxonomyName);
            return null;
        } else if (service != null) {
            return service.getTaxonomy(taxonomyName);
        } else {
            log.warn("Taxonomy service not found.");
            return null;
        }
    }

    /**
     * This is a duplicate of the supplied TaxonomyPickerPlugin#getService(String, String, Class) method, which was declared
     * private, meaning we are not able to call it from an ancestor class
     * @param serviceConfigKey
     * @param defaultServiceId
     * @param clazz
     * @param <T>
     * @return
     */
    private <T extends IClusterable> T getService(String serviceConfigKey, String defaultServiceId, Class<T> clazz) {
        IPluginConfig config = this.getPluginConfig();
        String serviceId = config.getString(serviceConfigKey, defaultServiceId);
        if (serviceId == null) {
            log.debug("ServiceId not found for key {}, config={}", serviceConfigKey, config);
            return null;
        } else {
            IPluginContext context = this.getPluginContext();
            T service = context.getService(serviceId, clazz);
            if (service == null) {
                log.debug("Service {} not found for id {}", clazz.getName(), serviceId);
            }

            return service;
        }
    }

    @Override
    protected Dialog<Classification> createTaxonomyPickerDialog(ClassificationModel model, Locale preferredLocale) {
        try {
            return new ParameterisedTaxonomyPickerDialog(this.getPluginContext(), this.getPluginConfig(),
                    model,
                    preferredLocale,
                    this.getModel().getObject().getPath());
        } catch (RepositoryException repositoryException) {
            log.error("Unable to initialise the parent class for the taxonomy picker dialog", repositoryException);
        }

        return null;
    }
}
