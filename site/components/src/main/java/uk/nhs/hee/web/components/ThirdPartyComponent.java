package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.Thirdpartyelement;
import uk.nhs.hee.web.components.info.ThirdPartyComponentInfo;

@ParametersInfo(type = ThirdPartyComponentInfo.class)
public class ThirdPartyComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final Thirdpartyelement thirdpartyelement = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (thirdpartyelement != null) {
            // You *could* use the attributes in the document to, for example, selecta script to use
        }
    }
}
