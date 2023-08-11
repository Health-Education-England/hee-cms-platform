package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import uk.nhs.hee.web.beans.ImageSetWithCaption;

@HippoEssentialsGenerated(internalName = "hee:imageBlock")
@Node(jcrType = "hee:imageBlock")
public class ImageBlock extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:caption")
    public String getCaption() {
        return getSingleProperty("hee:caption");
    }

    @HippoEssentialsGenerated(internalName = "hee:image")
    public ImageSetWithCaption getImage() {
        return getLinkedBean("hee:image", ImageSetWithCaption.class);
    }
}
