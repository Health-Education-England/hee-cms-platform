package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import java.util.List;

@HippoEssentialsGenerated(internalName = "hee:MiniHub")
@Node(jcrType = "hee:MiniHub")
public class MiniHub extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:guidancePages")
    public List<Guidance> getGuidancePages() {
        return getLinkedBeans("hee:guidancePages", Guidance.class);
    }
}
