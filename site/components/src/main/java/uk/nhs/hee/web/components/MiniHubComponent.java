package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.EssentialsContentComponent;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.beans.MiniHub;

public class MiniHubComponent extends EssentialsContentComponent {
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        MiniHub miniHub = (MiniHub) request.getRequestContext().getContentBean();
        if (miniHub != null) {
            String guidanceName = getComponentParameter("guidance");
            Guidance previousGuidance = null, nextGuidance = null, currentGuidance = null;
            for (int i = 0; i < miniHub.getGuidances().size(); i++) {
                Guidance guidance = miniHub.getGuidances().get(i);
                if (guidance.getName().equalsIgnoreCase(guidanceName)) {
                    currentGuidance = guidance;
                    if (i > 0) {
                        previousGuidance = miniHub.getGuidances().get(i - 1);
                    }
                    if (i < miniHub.getGuidances().size() - 1) {
                        nextGuidance = miniHub.getGuidances().get(i + 1);
                    }
                    break;
                }
            }
            request.setModel("previousGuidance", previousGuidance);
            request.setModel("currentGuidance", currentGuidance);
            request.setModel("nextGuidance", nextGuidance);
        }
    }
}
