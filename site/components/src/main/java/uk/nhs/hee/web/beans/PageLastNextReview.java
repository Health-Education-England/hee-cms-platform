package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import java.util.Calendar;

@HippoEssentialsGenerated(internalName = "hee:pageLastNextReview")
@Node(jcrType = "hee:pageLastNextReview")
public class PageLastNextReview extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:nextReviewed")
    public Calendar getNextReviewed() {
        return getSingleProperty("hee:nextReviewed");
    }

    @HippoEssentialsGenerated(internalName = "hee:lastReviewed")
    public Calendar getLastReviewed() {
        return getSingleProperty("hee:lastReviewed");
    }
}
