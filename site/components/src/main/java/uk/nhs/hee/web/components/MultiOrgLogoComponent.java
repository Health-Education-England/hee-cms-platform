package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.components.info.MultiOrgLogoComponentInfo;

/**
 * Component class for {@code multi-org-logo} component,
 * and it essentially adds {@code hee:logoGroup} document object to the model.
 */
@ParametersInfo(type = MultiOrgLogoComponentInfo.class)
public class MultiOrgLogoComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
    }

}
