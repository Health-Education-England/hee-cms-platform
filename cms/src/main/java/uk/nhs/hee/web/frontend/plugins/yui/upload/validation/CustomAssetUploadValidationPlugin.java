package uk.nhs.hee.web.frontend.plugins.yui.upload.validation;

import org.hippoecm.frontend.plugin.IPluginContext;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.hippoecm.frontend.plugins.yui.upload.validation.AssetUploadValidationPlugin;
import org.hippoecm.frontend.plugins.yui.upload.validation.FileUploadValidationService;

public class CustomAssetUploadValidationPlugin extends AssetUploadValidationPlugin {

    private static final long serialVersionUID = -8589467963800374859L;

    public CustomAssetUploadValidationPlugin(final IPluginContext context, final IPluginConfig config) {
        super(context, config);
    }

    @Override
    protected FileUploadValidationService createValidator() {
        return new CustomUploadValidationService(this.getPluginConfig());
    }
}
