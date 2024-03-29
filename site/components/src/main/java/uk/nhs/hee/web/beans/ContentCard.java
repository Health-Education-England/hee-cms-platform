package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.Link;
import uk.nhs.hee.web.beans.ImageSetWithCaption;

@HippoEssentialsGenerated(internalName = "hee:ContentCard")
@Node(jcrType = "hee:ContentCard")
public class ContentCard extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:header")
    public Link getHeader() {
        return getBean("hee:header", Link.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:cardImage")
    public ImageSetWithCaption getCardImage() {
        return getLinkedBean("hee:cardImage", ImageSetWithCaption.class);
    }
}
