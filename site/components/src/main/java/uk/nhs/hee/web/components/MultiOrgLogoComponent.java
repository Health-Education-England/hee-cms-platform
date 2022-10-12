package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.CommonComponent;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.utils.ValueListUtils;

/**
 * <p>Component class for {@code multi-org-logo} component,
 * and it essentially adds {@code hee:logoGroup} document object to the model.</p>
 *
 * <p>Also, it adds {@code `/content/documents/administration/valuelists/logotypes`} value-list to model.</p>
 */
public class MultiOrgLogoComponent extends CommonComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        setContentBean(null, request, response);

        request.setModel("logoTypes", ValueListUtils.getValueListMap(ValueListIdentifier.LOGO_TYPES.getName()));
    }

}
