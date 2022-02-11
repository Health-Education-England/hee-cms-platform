package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.MiniHub;
import uk.nhs.hee.web.beans.MinihubSection;
import uk.nhs.hee.web.components.info.MiniHubComponentInfo;

import java.util.List;

@ParametersInfo(type = MiniHubComponentInfo.class)
public class MiniHubComponent extends EssentialsDocumentComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(AToZListingPageComponent.class);

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        HippoBean document = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (document == null) {
            document = (HippoBean) request.getRequestContext().getContentBean();
        }
        request.setModel(REQUEST_ATTR_DOCUMENT, document.getParentBean().getChildBeans(MiniHub.class).get(0));
        List<MinihubSection> miniHubSections = getMiniHubSections(document);
        request.setModel("miniHubSections", miniHubSections);
        MinihubSection currentSection = getCurrentSection(request, miniHubSections);
        request.setModel("currentSection", currentSection);
    }

    List<MinihubSection> getMiniHubSections(HippoBean document) {
        List<MinihubSection> miniHubSections = document.getParentBean().getChildBeans(MinihubSection.class);
        miniHubSections.sort((section1, section2) -> section1.getDisplayName().compareTo(section2.getDisplayName()));
        return miniHubSections;
    }

    MinihubSection getCurrentSection(final HstRequest request, List<MinihubSection> miniHubSections) {
        MinihubSection currentSection = null;
        if(request.getRequestContext().getContentBean().getContentType().equals("hee:MiniHub")) {
            currentSection = miniHubSections.get(0);
        }
        else {
            for (int i=0; i<miniHubSections.size(); i++) {
                if(miniHubSections.get(i).getName().equalsIgnoreCase(request.getRequestContext().getContentBean().getName())){
                    currentSection = miniHubSections.get(i);
                }
            }
        }
        return currentSection;
    }
}
