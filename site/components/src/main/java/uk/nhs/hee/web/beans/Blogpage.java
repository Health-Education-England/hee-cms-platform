package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.ContentCards;
import uk.nhs.hee.web.beans.PageLastNextReview;
import java.util.List;
import uk.nhs.hee.web.beans.ActionLink;

@HippoEssentialsGenerated(internalName = "hee:blogpage")
@Node(jcrType = "hee:blogpage")
public class Blogpage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:author")
    public String getAuthor() {
        return getSingleProperty("hee:author");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:pageLastNextReview")
    public PageLastNextReview getPageLastNextReview() {
        return getBean("hee:pageLastNextReview", PageLastNextReview.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:relatedPosts")
    public List<ActionLink> getRelatedPosts() {
        return getChildBeansByName("hee:relatedPosts", ActionLink.class);
    }
}
