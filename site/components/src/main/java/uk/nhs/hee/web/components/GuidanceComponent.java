package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.components.info.GuidanceComponentInfo;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.List;
import java.util.Map;

@ParametersInfo(type = GuidanceComponentInfo.class)
public class GuidanceComponent extends EssentialsDocumentComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(GuidanceComponent.class);

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        final Guidance guidancePage = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (guidancePage != null) {
            List<HippoBean> pageContentBlocks = guidancePage.getContentBlocks();
            Map<String, Map<String, String>> modelToValueListMap = ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);
        }
    }
}
