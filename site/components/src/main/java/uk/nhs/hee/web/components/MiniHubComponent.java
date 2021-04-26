package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.beans.MiniHub;
import uk.nhs.hee.web.components.info.MiniHubComponentInfo;

import java.util.List;

@ParametersInfo(type = MiniHubComponentInfo.class)
public class MiniHubComponent extends EssentialsDocumentComponent {
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        MiniHub miniHub = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (miniHub != null) {
            // When the page accessed from URL minihubName/guidanceName, request will be forward to te related _default_ sitemap item
            boolean accessWithGuidancePath = request.getRequestContext().getResolvedSiteMapItem().getHstSiteMapItem().isWildCard();
            Guidance previousGuidance = null, nextGuidance = null, currentGuidance = null;
            boolean accessFromRootHub = false;
            List<Guidance> guidancePages = miniHub.getGuidancePages();

            if (accessWithGuidancePath) {
                // The guidance name in URL will be resolved as "1" parameter name
                String guidanceName = (String) request.getRequestContext().getResolvedSiteMapItem().getLocalParameters().get("1");
                for (int i = 0; i < guidancePages.size(); i++) {
                    Guidance guidance = guidancePages.get(i);
                    if (guidance.getName().equalsIgnoreCase(guidanceName)) {
                        currentGuidance = guidance;
                        if (i > 0) {
                            previousGuidance = guidancePages.get(i - 1);
                        }
                        if (i < guidancePages.size() - 1) {
                            nextGuidance = guidancePages.get(i + 1);
                        }
                        break;
                    }
                }
            } else {
                accessFromRootHub = true;
                // There is restriction in the CMS to make sure having at least one guidance on hub
                currentGuidance = guidancePages.get(0);
                if (guidancePages.size() > 1) {
                    nextGuidance = guidancePages.get(1);
                }

                String minihubName = request.getRequestContext().getResolvedSiteMapItem().getHstSiteMapItem().getValue();
                request.setModel("minihubName", minihubName);
            }

            request.setModel("previousGuidance", previousGuidance);
            request.setModel("currentGuidance", currentGuidance);
            request.setModel("nextGuidance", nextGuidance);
            request.setModel("accessFromRootHub", accessFromRootHub);
        }
    }
}
