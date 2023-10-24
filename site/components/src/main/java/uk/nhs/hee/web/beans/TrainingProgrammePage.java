package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.onehippo.taxonomy.contentbean.TaxonomyClassification;
import uk.nhs.hee.web.constants.HEETaxonomy;
import uk.nhs.hee.web.utils.TaxonomyTemplateUtils;

import javax.jcr.RepositoryException;
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

    @HippoEssentialsGenerated(internalName = "hee:overview")
    public <T extends HippoBean> List<T> getOverviewBlocks() {
        return getChildBeansByName("hee:overview");
    }

    @HippoEssentialsGenerated(internalName = "hee:rightHandBlocks")
    public <T extends HippoBean> List<T> getRightHandBlocks() {
        return getChildBeansByName("hee:rightHandBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalRecruitmentFormat", allowModifications = false)
    public TaxonomyClassification getGlobalRecruitmentFormat() throws RepositoryException {
        return TaxonomyTemplateUtils.getTaxonomyClassification(
                this.getNode(),
                "hee:globalRecruitmentFormat",
                HEETaxonomy.HEE_GLOBAL_RECRUITMENT_FORMAT);
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

    @HippoEssentialsGenerated(internalName = "hee:applicationInformation")
    public List<Guidance> getApplicationInformation() {
        return getLinkedBeans("hee:applicationInformation", Guidance.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:trainingJourneySummary")
    public String getTrainingJourneySummary() {
        return getSingleProperty("hee:trainingJourneySummary");
    }

    @HippoEssentialsGenerated(internalName = "hee:trainingJourneyPrerequisites")
    public List<HippoBean> getTrainingJourneyPrerequisites() {
        return getLinkedBeans("hee:trainingJourneyPrerequisites", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:trainingJourneyOptions")
    public List<HippoBean> getTrainingJourneyOptions() {
        return getLinkedBeans("hee:trainingJourneyOptions", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:applicationButtonTitle")
    public String getApplicationButtonTitle() {
        return getSingleProperty("hee:applicationButtonTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:applicationButtonLink")
    public String getApplicationButtonLink() {
        return getSingleProperty("hee:applicationButtonLink");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyProfessions", allowModifications = false)
    public TaxonomyClassification getGlobalTaxonomyProfessions() throws RepositoryException {
        return TaxonomyTemplateUtils.getTaxonomyClassification(
                this.getNode(),
                "hee:globalTaxonomyProfessions",
                HEETaxonomy.HEE_GLOBAL_PROFESSIONS);
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyHealthcareTopics", allowModifications = false)
    public TaxonomyClassification getGlobalTaxonomyHealthcareTopics() throws RepositoryException {
        return TaxonomyTemplateUtils.getTaxonomyClassification(
                this.getNode(),
                "hee:globalTaxonomyHealthcareTopics",
                HEETaxonomy.HEE_GLOBAL_HEALTHCARE_TOPICS);
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyTrainingType", allowModifications = false)
    public TaxonomyClassification getGlobalTaxonomyTrainingType() throws RepositoryException {
        return TaxonomyTemplateUtils.getTaxonomyClassification(
                this.getNode(),
                "hee:globalTaxonomyTrainingType",
                HEETaxonomy.HEE_GLOBAL_TRAINING_TYPES);
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyClinicalDiscipline", allowModifications = false)
    public TaxonomyClassification getDiscipline() throws RepositoryException {
        return TaxonomyTemplateUtils.getTaxonomyClassification(
                this.getNode(),
                "hee:globalTaxonomyClinicalDiscipline",
                HEETaxonomy.HEE_GLOBAL_CLINICAL_DISCIPLINE);
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredContentBlock")
    public HippoBean getFeaturedContentBlock() {
        return getLinkedBean("hee:featuredContentBlock", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:pageLastNextReview")
    public PageLastNextReview getPageLastNextReview() {
        return getBean("hee:pageLastNextReview", PageLastNextReview.class);
    }
}
