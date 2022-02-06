package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.components.info.MultiOrgLogoComponentInfo;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.utils.ValueListUtils;

/**
 * <p>Component class for {@code multi-org-logo} component,
 * and it essentially adds {@code hee:logoGroup} document object to the model.</p>
 *
 * <p>Also, it adds {@code `/content/documents/administration/valuelists/logotypes`} value-list to model.</p>
 */
@ParametersInfo(type = MultiOrgLogoComponentInfo.class)
public class MultiOrgLogoComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        request.setModel("logoTypes", ValueListUtils.getValueListMap(ValueListIdentifier.LOGO_TYPES.getName()));
    }

}
