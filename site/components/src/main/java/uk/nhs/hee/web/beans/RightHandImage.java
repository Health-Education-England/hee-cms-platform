package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.ImageSetWithCaption;

@HippoEssentialsGenerated(internalName = "hee:rightHandImage")
@Node(jcrType = "hee:rightHandImage")
public class RightHandImage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:alternateText")
    public String getAlternateText() {
        return getSingleProperty("hee:alternateText");
    }

    @HippoEssentialsGenerated(internalName = "hee:caption")
    public String getCaption() {
        return getSingleProperty("hee:caption");
    }

    @HippoEssentialsGenerated(internalName = "hee:imageLink")
    public ImageSetWithCaption getImageLink() {
        return getLinkedBean("hee:imageLink", ImageSetWithCaption.class);
    }
}
