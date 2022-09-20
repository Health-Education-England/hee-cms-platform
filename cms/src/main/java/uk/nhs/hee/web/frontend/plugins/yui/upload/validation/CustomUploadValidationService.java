package uk.nhs.hee.web.frontend.plugins.yui.upload.validation;

import org.apache.wicket.util.value.IValueMap;
import org.hippoecm.frontend.plugins.yui.upload.validation.DefaultUploadValidationService;

public class CustomUploadValidationService extends DefaultUploadValidationService {
    private static final long serialVersionUID = 2125255722853436577L;

    public CustomUploadValidationService(final IValueMap params) {
        super(params);
    }
}
