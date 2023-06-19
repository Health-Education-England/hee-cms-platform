//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package uk.nhs.hee.web.taxonomy;

import org.apache.commons.lang.StringUtils;
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

    public ParameterisedTaxonomyPickerPlugin(IPluginContext context, IPluginConfig config) {
        super(context, config);
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
            log.error("New channel name will be " + taxonomyName);
        } catch (RepositoryException e) {
            e.printStackTrace();
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
     * This is a duplicate of the supplied {@link TaxonomyPickerPlugin#getService(String, String, Class)} method, which was declared
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
            return new ParameterisedTaxonomyPickerDialog(this.getPluginContext(), this.getPluginConfig(), model, preferredLocale, this.getModel().getObject().getPath());
        } catch (RepositoryException e) {
            e.printStackTrace();
        }

        return null;
    }
}
