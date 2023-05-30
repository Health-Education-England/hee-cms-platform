package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import uk.nhs.hee.web.beans.ImageSetWithCaption;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

import java.util.List;

/**
 * TODO: Beanwriter: Failed to create getter for node type: hippo:compound
 */
@HippoEssentialsGenerated(internalName = "hee:trainingProgrammesHomepage")
@Node(jcrType = "hee:trainingProgrammesHomepage")
public class TrainingProgrammesHomepage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:addToAZ")
    public Boolean getAddToAZ() {
        return getSingleProperty("hee:addToAZ");
    }

    @HippoEssentialsGenerated(internalName = "hee:text")
    public String getText() {
        return getSingleProperty("hee:text");
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:heroImage")
    public ImageSetWithCaption getHeroImage() {
        return getLinkedBean("hee:heroImage", ImageSetWithCaption.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:overview")
    public HippoHtml getOverview() {
        return getHippoHtml("hee:overview");
    }

    //Content Blocks
    public List<?> getPathwaysBlocks() {
        return getChildBeansByName("hee:pathways");
    }
    public List<?> getTrainingRoutesBlocks() {
        return getChildBeansByName("hee:trainingRoutes");
    }
    public List<?> getSupportBlocks() {
        return getChildBeansByName("hee:support");
    }
    public List<?> getRegionsBlocks() {
        return getChildBeansByName("hee:regions");
    }
    public <T extends HippoBean> List<T> getRightHandBlocks() {
        return getChildBeansByName("hee:rightHandBlocks");
    }
}
