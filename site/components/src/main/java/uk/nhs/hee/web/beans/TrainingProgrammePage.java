package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import java.util.Calendar;
import java.util.List;

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

    @HippoEssentialsGenerated(internalName = "hee:regions")
    public <T extends HippoBean> List<T> getRegionsBlocks() {
        return getChildBeansByName("hee:regions");
    }

    @HippoEssentialsGenerated(internalName = "hee:overview")
    public <T extends HippoBean> List<T> getOverviewBlocks() {
        return getChildBeansByName("hee:overview");
    }

    @HippoEssentialsGenerated(internalName = "hee:rightHandBlocks")
    public <T extends HippoBean> List<T> getRightHandBlocks() {
        return getChildBeansByName("hee:rightHandBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:trainingJourneySummary")
    public String getTrainingJourneySummary() {
        return getSingleProperty("hee:trainingJourneySummary");
    }

    @HippoEssentialsGenerated(internalName = "hee:applicationButtonTitle")
    public String getApplicationButtonTitle() {
        return getSingleProperty("hee:applicationButtonTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:applicationButtonLink")
    public String getApplicationButtonLink() {
        return getSingleProperty("hee:applicationButtonLink");
    }

    @HippoEssentialsGenerated(internalName = "hee:trainingJourneyPrerequisites")
    public List<HippoBean> getTrainingJourneyPrerequisites() {
        return getLinkedBeans("hee:trainingJourneyPrerequisites", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:trainingJourneyOptions")
    public List<HippoBean> getTrainingJourneyOptions() {
        return getLinkedBeans("hee:trainingJourneyOptions", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredContent")
    public FeaturedContentReference getFeaturedContent() {
        return getBean("hee:featuredContent", FeaturedContentReference.class);
    }
}
