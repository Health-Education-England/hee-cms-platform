
package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.List;
import uk.nhs.hee.web.beans.ExternalLink;

@HippoEssentialsGenerated(internalName = "hee:externalLinksCard")
@Node(jcrType = "hee:externalLinksCard")
public class ExternalLinksCard extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:externalLinks")
    public List<ExternalLink> getExternalLinks() {
        return getChildBeansByName("hee:externalLinks", ExternalLink.class);
    }
}
