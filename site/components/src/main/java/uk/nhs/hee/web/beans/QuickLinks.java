package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import uk.nhs.hee.web.beans.Link;
import java.util.List;

@HippoEssentialsGenerated(internalName = "hee:QuickLinks")
@Node(jcrType = "hee:QuickLinks")
public class QuickLinks extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:links")
    public List<Link> getLinks() {
        return getChildBeansByName("hee:links", Link.class);
    }
}
