package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;

@HippoEssentialsGenerated(internalName = "hee:audio")
@Node(jcrType = "hee:audio")
public class Audio extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:embedCode")
    public String getEmbedCode() {
        return getSingleProperty("hee:embedCode");
    }

    @HippoEssentialsGenerated(internalName = "hee:lastReviewed")
    public Calendar getLastReviewed() {
        return getSingleProperty("hee:lastReviewed");
    }

    @HippoEssentialsGenerated(internalName = "hee:nextReview")
    public Calendar getNextReview() {
        return getSingleProperty("hee:nextReview");
    }
}
