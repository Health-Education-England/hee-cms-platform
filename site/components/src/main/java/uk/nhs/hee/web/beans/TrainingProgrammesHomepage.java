package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import java.util.List;
import uk.nhs.hee.web.beans.FeaturedContentReference;

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

    @HippoEssentialsGenerated(internalName = "hee:pathways")
    public <T extends HippoBean> List<T> getPathwaysBlocks() {
        return getChildBeansByName("hee:pathways");
    }

    @HippoEssentialsGenerated(internalName = "hee:trainingRoutes")
    public <T extends HippoBean> List<T> getTrainingRoutesBlocks() {
        return getChildBeansByName("hee:trainingRoutes");
    }

    @HippoEssentialsGenerated(internalName = "hee:support")
    public <T extends HippoBean> List<T> getSupportBlocks() {
        return getChildBeansByName("hee:support");
    }

    @HippoEssentialsGenerated(internalName = "hee:regions")
    public <T extends HippoBean> List<T> getRegionsBlocks() {
        return getChildBeansByName("hee:regions");
    }

    @HippoEssentialsGenerated(internalName = "hee:rightHandBlocks")
    public <T extends HippoBean> List<T> getRightHandBlocks() {
        return getChildBeansByName("hee:rightHandBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:caption")
    public String getCaption() {
        return getSingleProperty("hee:caption");
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredContentBlock")
    public HippoBean getFeaturedContentBlock() {
        return getLinkedBean("hee:featuredContentBlock", HippoBean.class);
    }
}
