package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:mediaEmbed")
@Node(jcrType = "hee:mediaEmbed")
public class MediaEmbed extends BaseDocument {
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

    @HippoEssentialsGenerated(internalName = "hee:transcript")
    public HippoHtml getTranscript() {
        return getHippoHtml("hee:transcript");
    }
}
