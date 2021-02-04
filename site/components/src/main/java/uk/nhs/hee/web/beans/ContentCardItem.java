package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import uk.nhs.hee.web.beans.Link;

@HippoEssentialsGenerated(internalName = "hee:contentCardItem")
@Node(jcrType = "hee:contentCardItem")
public class ContentCardItem extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:header")
    public Link getHeader() {
        return getBean("hee:header", Link.class);
    }
}
