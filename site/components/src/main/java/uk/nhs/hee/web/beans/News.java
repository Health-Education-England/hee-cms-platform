package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import java.util.List;

@HippoEssentialsGenerated(internalName = "hee:news")
@Node(jcrType = "hee:news")
public class News extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:author")
    public String getAuthor() {
        return getSingleProperty("hee:author");
    }

    @HippoEssentialsGenerated(internalName = "hee:categories")
    public String[] getCategories() {
        return getMultipleProperty("hee:categories");
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationDate")
    public Calendar getPublicationDate() {
        return getSingleProperty("hee:publicationDate");
    }

    @HippoEssentialsGenerated(internalName = "hee:relatedContent")
    public ContentCards getRelatedContent() {
        return getBean("hee:relatedContent", ContentCards.class);
    }

    public List<HippoBean> getRightHandBlocks() {
        return getChildBeansByName("hee:rightHandBlocks");
    }

    public List<HippoBean> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:pageLastNextReview")
    public PageLastNextReview getPageLastNextReview() {
        return getBean("hee:pageLastNextReview", PageLastNextReview.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:heroImage")
    public ImageSetWithCaption getHeroImage() {
        return getLinkedBean("hee:heroImage", ImageSetWithCaption.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }
}
