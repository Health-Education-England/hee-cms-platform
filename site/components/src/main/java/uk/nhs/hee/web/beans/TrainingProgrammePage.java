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
@HippoEssentialsGenerated(internalName = "hee:trainingProgrammePage")
@Node(jcrType = "hee:trainingProgrammePage")
public class TrainingProgrammePage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:microHero")
    public ImageSetWithCaption getMicroHero() {
        return getLinkedBean("hee:microHero", ImageSetWithCaption.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:cardImage")
    public ImageSetWithCaption getCardImage() {
        return getLinkedBean("hee:cardImage", ImageSetWithCaption.class);
    }

    public List<?> getRegionsBlocks() {
        return getChildBeansByName("hee:regions");
    }

    public List<?> getOverviewBlocks() {
        return getChildBeansByName("hee:overview");
    }

    public <T extends HippoBean> List<T> getRightHandBlocks() {
        return getChildBeansByName("hee:rightHandBlocks");
    }
}
