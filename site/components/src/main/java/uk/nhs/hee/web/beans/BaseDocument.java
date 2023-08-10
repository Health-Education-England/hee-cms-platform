package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoDocument;
import org.hippoecm.hst.site.HstServices;
import org.hippoecm.repository.HippoStdPubWfNodeType;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.api.TaxonomyManager;
import uk.nhs.hee.web.utils.DateUtils;

import javax.jcr.RepositoryException;

@Node(jcrType="hee:basedocument")
public class BaseDocument extends HippoDocument {
    public String getPublishedDate() throws RepositoryException {
        return DateUtils.formatDate(
                getNode().getProperty(HippoStdPubWfNodeType.HIPPOSTDPUBWF_LAST_MODIFIED_DATE).getDate().getTime(),
                DateUtils.DD_MMMM_YYYY_PATTERN);
    }

    protected Taxonomy getTaxonomy(final String taxonomyName) {
        final TaxonomyManager taxonomyManager = HstServices.getComponentManager().getComponent(
                TaxonomyManager.class.getSimpleName(), "org.onehippo.taxonomy.contentbean");
        return taxonomyManager.getTaxonomies().getTaxonomy(taxonomyName);
    }
}
