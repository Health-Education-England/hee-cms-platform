package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;

@HippoEssentialsGenerated(internalName = "hee:anchorLinks")
@Node(jcrType = "hee:anchorLinks")
public class AnchorLinks extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:targetheadings")
    public String[] getTargetheadings() {
        return getMultipleProperty("hee:targetheadings");
    }
}
