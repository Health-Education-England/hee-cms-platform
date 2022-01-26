package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.List;
import uk.nhs.hee.web.beans.InternalLink;

@HippoEssentialsGenerated(internalName = "hee:internalLinksCard")
@Node(jcrType = "hee:internalLinksCard")
public class InternalLinksCard extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:internalLinks")
    public List<InternalLink> getInternalLinks() {
        return getChildBeansByName("hee:internalLinks", InternalLink.class);
    }
}
