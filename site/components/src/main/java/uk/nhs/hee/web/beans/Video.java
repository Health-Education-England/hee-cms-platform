package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:video")
@Node(jcrType = "hee:video")
public class Video extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:embedVideo")
    public String getEmbedVideo() {
        return getSingleProperty("hee:embedVideo");
    }
}
