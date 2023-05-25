package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:googleMap")
@Node(jcrType = "hee:googleMap")
public class GoogleMap extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:embedCode")
    public String getEmbedCode() {
        return getSingleProperty("hee:embedCode");
    }

    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:caption")
    public String getCaption() {
        return getSingleProperty("hee:caption");
    }
}
