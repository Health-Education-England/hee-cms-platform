package uk.nhs.hee.web.components;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.EssentialsContentComponent;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.beans.MiniHub;

import java.util.List;

public class MiniHubComponent extends EssentialsContentComponent {
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        MiniHub miniHub = (MiniHub) request.getRequestContext().getContentBean();
        if (miniHub != null) {
            String guidanceName = getComponentParameter("guidance");
            Guidance previousGuidance = null, nextGuidance = null, currentGuidance = null;
            boolean accessFromRootHub = false;
            List<Guidance> guidancePages = miniHub.getGuidancePages();
            if (StringUtils.isNotEmpty(guidanceName)) {
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
            }

            request.setModel("previousGuidance", previousGuidance);
            request.setModel("currentGuidance", currentGuidance);
            request.setModel("nextGuidance", nextGuidance);
            request.setModel("accessFromRootHub", accessFromRootHub);
        }
    }
}
