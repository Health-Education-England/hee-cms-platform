package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.LandingPage;
import uk.nhs.hee.web.components.info.LandingPageComponentInfo;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import java.util.List;
import java.util.Map;

@ParametersInfo(type = LandingPageComponentInfo.class)
public class LandingPageComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final LandingPage landingPage = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (landingPage != null) {
            // the page content blocks needs valueLists to be set on the model
            List<HippoBean> pageContentBlocks = (List<HippoBean>) landingPage.getContentBlocks();

            Map<String, Map<String, String>> modelToValueListMap =
                    ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);
        }
    }
}
