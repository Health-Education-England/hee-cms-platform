package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.onehippo.taxonomy.contentbean.TaxonomyClassification;
import uk.nhs.hee.web.constants.HEETaxonomy;
import uk.nhs.hee.web.utils.TaxonomyTemplateUtils;

import javax.jcr.RepositoryException;
import java.util.List;

@HippoEssentialsGenerated(internalName = "hee:featuredContent")
@Node(jcrType = "hee:featuredContent")
public class FeaturedContent extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:method")
    public String getMethod() {
        return getSingleProperty("hee:method");
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredContentType")
    public String getFeaturedContentType() {
        return getSingleProperty("hee:featuredContentType");
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredDocuments")
    public List<HippoBean> getFeaturedDocuments() {
        return getLinkedBeans("hee:featuredDocuments", HippoBean.class);
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

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyPublicationType", allowModifications = false)
    public TaxonomyClassification getGlobalTaxonomyPublicationType() throws RepositoryException {
        return TaxonomyTemplateUtils.getTaxonomyClassification(
                this.getNode(),
                "hee:globalTaxonomyPublicationType",
                HEETaxonomy.HEE_GLOBAL_PUBLICATION_TYPES);
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyTags", allowModifications = false)
    public TaxonomyClassification getGlobalTaxonomyTags() throws RepositoryException {
        return TaxonomyTemplateUtils.getTaxonomyClassification(
                this.getNode(),
                "hee:globalTaxonomyTags",
                HEETaxonomy.HEE_GLOBAL_TAGS);
    }
}
