package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;

import java.util.Calendar;
import java.util.List;

/**
 * TODO: Beanwriter: Failed to create getter for node type: hippo:compound
 */
@HippoEssentialsGenerated(internalName = "hee:report")
@Node(jcrType = "hee:report")
public class Report extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    public <T extends HippoBean> List<T> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:pageLastNextReview")
    public PageLastNextReview getPageLastNextReview() {
        return getBean("hee:pageLastNextReview", PageLastNextReview.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:subtitle")
    public String getSubtitle() {
        return getSingleProperty("hee:subtitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationDate")
    public Calendar getPublicationDate() {
        return getSingleProperty("hee:publicationDate");
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }

}
