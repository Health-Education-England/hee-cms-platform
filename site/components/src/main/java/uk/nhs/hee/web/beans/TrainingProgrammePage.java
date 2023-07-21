package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import uk.nhs.hee.web.beans.ImageSetWithCaption;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import java.util.List;
import java.util.Calendar;
import uk.nhs.hee.web.beans.FeaturedContentReference;

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

    @HippoEssentialsGenerated(internalName = "hee:trainingType")
    public String getTrainingType() {
        return getSingleProperty("hee:trainingType");
    }

    @HippoEssentialsGenerated(internalName = "hee:professions")
    public String[] getProfessions() {
        return getMultipleProperty("hee:professions");
    }

    @HippoEssentialsGenerated(internalName = "hee:topics")
    public String[] getTopics() {
        return getMultipleProperty("hee:topics");
    }

    @HippoEssentialsGenerated(internalName = "hee:discipline")
    public String getDiscipline() {
        return getSingleProperty("hee:discipline");
    }

    @HippoEssentialsGenerated(internalName = "hee:recruitmentFormat")
    public String getRecruitmentFormat() {
        return getSingleProperty("hee:recruitmentFormat");
    }

    @HippoEssentialsGenerated(internalName = "hee:duration")
    public Long getDuration() {
        return getSingleProperty("hee:duration");
    }

    @HippoEssentialsGenerated(internalName = "hee:fillRate")
    public Long getFillRate() {
        return getSingleProperty("hee:fillRate");
    }

    @HippoEssentialsGenerated(internalName = "hee:opening")
    public Calendar getOpening() {
        return getSingleProperty("hee:opening");
    }

    @HippoEssentialsGenerated(internalName = "hee:closing")
    public Calendar getClosing() {
        return getSingleProperty("hee:closing");
    }

    @HippoEssentialsGenerated(internalName = "hee:competitionRatio")
    public Double getCompetitionRatio() {
        return getSingleProperty("hee:competitionRatio");
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
