package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.beans.MiniHub;
import uk.nhs.hee.web.components.info.MiniHubComponentInfo;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.List;
import java.util.Map;

@ParametersInfo(type = MiniHubComponentInfo.class)
public class MiniHubComponent extends EssentialsDocumentComponent {
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final MiniHub miniHub = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (miniHub == null) {
            return;
        }

        // When the page accessed from URL minihubName/guidanceName,
        // request will be forward to te related _default_ sitemap item
        final boolean accessWithGuidancePath =
                request.getRequestContext().getResolvedSiteMapItem().getHstSiteMapItem().isWildCard();
        Guidance previousGuidance = null, nextGuidance = null, currentGuidance = null;
        boolean accessFromRootHub = false;
        final List<Guidance> guidancePages = miniHub.getGuidancePages();

        if (guidancePages.isEmpty()) {
            return;
        }

        if (accessWithGuidancePath) {
            // The guidance name in URL will be resolved as "1" parameter name
            final String guidanceName =
                    (String) request.getRequestContext().getResolvedSiteMapItem().getLocalParameters().get("1");
            for (int i = 0; i < guidancePages.size(); i++) {
                final Guidance guidance = guidancePages.get(i);
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

            final String minihubName =
                    request.getRequestContext().getResolvedSiteMapItem().getHstSiteMapItem().getValue();
            request.setModel("minihubName", minihubName);
        }

        request.setModel("previousGuidance", previousGuidance);
        request.setModel("currentGuidance", currentGuidance);
        request.setModel("nextGuidance", nextGuidance);
        request.setModel("accessFromRootHub", accessFromRootHub);
        request.setModel("isFirstPage", guidancePages.get(0).equals(currentGuidance));

        if (currentGuidance == null) {
            return;
        }

        // the guidance page contains content blocks that need valueLists to be set on the model
        final List<HippoBean> pageContentBlocks = currentGuidance.getContentBlocks();
        pageContentBlocks.addAll(currentGuidance.getRightHandBlocks());

        final Map<String, Map<String, String>> modelToValueListMap =
                ContentBlocksUtils.getValueListMaps(pageContentBlocks);
        modelToValueListMap.forEach(request::setModel);

        request.setAttribute("tableComponentService", new TableComponentService());
    }
}
