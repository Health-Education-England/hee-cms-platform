package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;

@HippoEssentialsGenerated(internalName = "hee:externalLink")
@Node(jcrType = "hee:externalLink")
public class ExternalLink extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:text")
    public String getText() {
        return getSingleProperty("hee:text");
    }

    @HippoEssentialsGenerated(internalName = "hee:url")
    public String getUrl() {
        return getSingleProperty("hee:url");
    }
}
