package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import uk.nhs.hee.web.beans.PageLastNextReview;

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

    @HippoEssentialsGenerated(internalName = "hee:transcript")
    public HippoHtml getTranscript() {
        return getHippoHtml("hee:transcript");
    }

    @HippoEssentialsGenerated(internalName = "hee:mediaLastNextReview")
    public PageLastNextReview getMediaLastNextReview() {
        return getBean("hee:mediaLastNextReview", PageLastNextReview.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:showTranscriptButtonText")
    public String getShowTranscriptButtonText() {
        return getSingleProperty("hee:showTranscriptButtonText");
    }

    @HippoEssentialsGenerated(internalName = "hee:hideTranscriptButtonText")
    public String getHideTranscriptButtonText() {
        return getSingleProperty("hee:hideTranscriptButtonText");
    }
}
