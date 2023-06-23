package uk.nhs.hee.web.utils;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.standard.HippoDocumentBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.site.HstServices;
import org.hippoecm.hst.util.ContentBeanUtils;
import org.onehippo.taxonomy.api.Taxonomies;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.api.TaxonomyManager;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.PublicationLandingPage;
import uk.nhs.hee.web.components.Model;
import uk.nhs.hee.web.constants.HEETaxonomy;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

import javax.jcr.RepositoryException;

public class ReportAndPublicationUtils {

    private static final Logger log = LoggerFactory.getLogger(ReportAndPublicationUtils.class);

    /**
     * Given a specific report bean, let's look for its parent as an associated bean.
     *
     * @param reportBean     is the one we are dealing with
     * @param requestContext is from the request context that will l
     * @return a Landing page bean, we hope
     * @throws RepositoryException if there was an issue looking up the bean details or performing the query
     */
    public PublicationLandingPage findMyParent(final HippoDocumentBean reportBean, final HstRequestContext requestContext)
            throws RepositoryException {
        try {
            final HstQuery query = ContentBeanUtils.createIncomingBeansQuery(reportBean,
                    requestContext.getSiteContentBaseBean(),
                    "hee:webPublications/@hippo:docbase",
                    PublicationLandingPage.class,
                    false);
            final HstQueryResult result = query.execute();
            if (result.getHippoBeans() != null && result.getHippoBeans().hasNext()) {
                return (PublicationLandingPage) result.getHippoBeans().nextHippoBean();
            }
        } catch (final QueryException e) {
            log.error("Caught error '{}' while finding the Publication Landing Page " +
                    "related to the Publication (Report) Page '{}' ", e.getMessage(), reportBean.getPath(), e);
        }
        return null;
    }

    /**
     * Load values from the PublicationLandingPage and set up the maps which hold their keys/values
     *
     * Once found, the maps are added to the request object and can be used in the template
     * @param request
     * @param locale
     * @param publicationLandingPage
     */
    public void addPublicationLandingPageTaxonomyFieldsToModel(final HstRequest request, final Locale locale, PublicationLandingPage publicationLandingPage) {
        final TaxonomyManager taxonomyManager = HstServices.getComponentManager()
                .getComponent(TaxonomyManager.class.getSimpleName(),"org.onehippo.taxonomy.contentbean");
        final Taxonomies taxonomies = taxonomyManager.getTaxonomies();

        addGlobalTaxonomyMapIntoModel(request, locale, taxonomies, publicationLandingPage);
        addPublicationTypeMapIntoModel(request, locale, taxonomies, publicationLandingPage);
        addPublicationTopicsMapIntoModel(request, locale, taxonomies, publicationLandingPage);
    }

    private void addGlobalTaxonomyMapIntoModel(HstRequest request, Locale locale, Taxonomies taxonomies, PublicationLandingPage publicationLandingPage) {
        final String[] selectedTerms = publicationLandingPage.getKeys();

        Map<String, String> keysAndCats = addTaxonomyKeysAndValues(locale, taxonomies.getTaxonomy(HEETaxonomy.HEE_GLOBAL_PROFESSIONS.getName()), selectedTerms);
        if (keysAndCats != null) {
            request.setModel(Model.GLOBAL_PROFESSION_MAP.getKey(), keysAndCats);
        }
    }

    private void addPublicationTypeMapIntoModel(HstRequest request, Locale locale, Taxonomies taxonomies, PublicationLandingPage landingPage) {
        final String[] selectedTerms = landingPage.getPublicationTypeClassifiable();

        Map<String, String> keysAndCats = addTaxonomyKeysAndValues(locale, taxonomies.getTaxonomy(HEETaxonomy.HEE_GLOBAL_PUBLICATION_TYPES.getName()), selectedTerms);
        if (keysAndCats != null) {
            request.setModel(Model.GLOBAL_PUBLICATION_TYPE_MAP.getKey(), keysAndCats);
        }
    }

    private void addPublicationTopicsMapIntoModel(HstRequest request, Locale locale, Taxonomies taxonomies, PublicationLandingPage landingPage) {
        final String[] selectedTerms = landingPage.getPublicationTopicsClassifiable();

        Map<String, String> keysAndCats = addTaxonomyKeysAndValues(locale, taxonomies.getTaxonomy(HEETaxonomy.HEE_GLOBAL_TOPICS.getName()), selectedTerms);
        if (keysAndCats != null) {
            request.setModel(Model.GLOBAL_TOPICS_MAP.getKey(), keysAndCats);
        }
    }

    /**
     * Given a taxonomy, in a specific locale, and a set of keys, go off and find the values for those keys
     * and send back a Map that holds those key-value pairs
     * @param locale
     * @param taxonomy
     * @param selectedKeys
     * @return
     */
    private Map<String, String> addTaxonomyKeysAndValues(Locale locale, Taxonomy taxonomy, String[] selectedKeys) {
        if (selectedKeys != null ) {
            return Arrays
                    .stream(selectedKeys)
                    .collect(Collectors.toMap(key -> key,
                            key -> taxonomy.getCategoryByKey(key).getInfo(locale).getName()));
        }

        return new HashMap<>();
    }
}
