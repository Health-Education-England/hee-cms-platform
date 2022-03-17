package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import java.util.List;

/** 
 * TODO: Beanwriter: Failed to create getter for node type: hippo:compound
 */
@HippoEssentialsGenerated(internalName = "hee:guidance")
@Node(jcrType = "hee:guidance")
public class Guidance extends BaseDocument {
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

    public <T extends HippoBean> List<T> getRightHandBlocks() {
        return getChildBeansByName("hee:rightHandBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:heroImage")
    public ImageSetWithCaption getHeroImage() {
        return getLinkedBean("hee:heroImage", ImageSetWithCaption.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:relatedContent", allowModifications = false)
    public ContentCards getRelatedContent() {
        return getBean("hee:relatedContent", ContentCards.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:addToAZ")
    public Boolean getAddToAZ() {
        return getSingleProperty("hee:addToAZ");
    }
}
