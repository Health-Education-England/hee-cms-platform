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

@HippoEssentialsGenerated(internalName = "hee:blogPost")
@Node(jcrType = "hee:blogPost")
public class BlogPost extends BaseDocument {
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

    @HippoEssentialsGenerated(internalName = "hee:contentBlocks")
    public <T extends HippoBean> List<T> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:rightHandBlocks")
    public <T extends HippoBean> List<T> getRightHandBlocks() {
        return getChildBeansByName("hee:rightHandBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:pageLastNextReview")
    public PageLastNextReview getPageLastNextReview() {
        return getBean("hee:pageLastNextReview", PageLastNextReview.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationDate")
    public Calendar getPublicationDate() {
        return getSingleProperty("hee:publicationDate");
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:microHero")
    public ImageSetWithCaption getMicroHero() {
        return getLinkedBean("hee:microHero", ImageSetWithCaption.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:authors")
    public List<HippoBean> getAuthors() {
        return getLinkedBeans("hee:authors", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:hideAuthorContactDetails")
    public Boolean getHideAuthorContactDetails() {
        return getSingleProperty("hee:hideAuthorContactDetails");
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredContentBlock")
    public HippoBean getFeaturedContentBlock() {
        return getLinkedBean("hee:featuredContentBlock", HippoBean.class);
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

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyTags", allowModifications = false)
    public TaxonomyClassification getGlobalTaxonomyTags() throws RepositoryException {
        return TaxonomyTemplateUtils.getTaxonomyClassification(
                this.getNode(),
                "hee:globalTaxonomyTags",
                HEETaxonomy.HEE_GLOBAL_TAGS);
    }
}
