package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import java.util.List;

@HippoEssentialsGenerated(internalName = "hee:contentCards")
@Node(jcrType = "hee:contentCards")
public class ContentCards extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:header")
    public String getHeader() {
        return getSingleProperty("hee:header");
    }

    @HippoEssentialsGenerated(internalName = "hee:cards")
    public List<ContentCard> getCards() {
        return getLinkedBeans("hee:cards", ContentCard.class);
    }
}
