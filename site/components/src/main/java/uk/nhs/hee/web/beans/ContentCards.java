package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import java.util.List;
import uk.nhs.hee.web.beans.ContentCardItem;

@HippoEssentialsGenerated(internalName = "hee:contentCards")
@Node(jcrType = "hee:contentCards")
public class ContentCards extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:header")
    public String getHeader() {
        return getSingleProperty("hee:header");
    }

    @HippoEssentialsGenerated(internalName = "hee:items")
    public List<ContentCardItem> getItems() {
        return getChildBeansByName("hee:items", ContentCardItem.class);
    }
}
