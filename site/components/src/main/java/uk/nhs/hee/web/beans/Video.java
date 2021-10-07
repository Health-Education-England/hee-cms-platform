package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

@HippoEssentialsGenerated(internalName = "hee:video")
@Node(jcrType = "hee:video")
public class Video extends BaseDocument {

    private final Pattern YOUTUBE_PATTERN = Pattern.compile("v=([^\\s&#]*)");
    private final Pattern VIMEO_PATTERN = Pattern.compile(".*\\/([^?]+)");

    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:url")
    public String getUrl() {
        return getSingleProperty("hee:url");
    }

    @HippoEssentialsGenerated(internalName = "hee:lastReviewed")
    public Calendar getLastReviewed() {
        return getSingleProperty("hee:lastReviewed");
    }

    @HippoEssentialsGenerated(internalName = "hee:nextReview")
    public Calendar getNextReview() {
        return getSingleProperty("hee:nextReview");
    }

    public String getVideoId() {
        String regex;
        String videoId;
        Matcher matcher;
        if (getUrl().contains("youtu")) {
            matcher = YOUTUBE_PATTERN.matcher(getUrl());
            if(matcher.find()) {
                videoId = matcher.group(1);
                return videoId;
            }
        }
        else if (getUrl().contains("vimeo")) {
            matcher = VIMEO_PATTERN.matcher(getUrl());
            if(matcher.find()) {
                videoId = matcher.group(1);
                return videoId;
            }
        }
        return null;
    }
}
