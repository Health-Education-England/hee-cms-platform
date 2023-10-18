package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoFacetNavigationBean;
import org.hippoecm.hst.content.beans.standard.HippoFolderBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.site.HstServices;
import org.hippoecm.hst.util.ContentBeanUtils;
import org.onehippo.taxonomy.api.Taxonomies;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.api.TaxonomyManager;
import uk.nhs.hee.web.components.info.PublicationListingPageComponentInfo;
import uk.nhs.hee.web.constants.HEETaxonomy;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.TaxonomyTemplateUtils;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import java.util.LinkedHashMap;
import java.util.stream.Collectors;


/**
 * Base component for Publication Listing Page.
 */
@ParametersInfo(type = PublicationListingPageComponentInfo.class)
public class PublicationListingPageComponent extends ListingPageComponent {
    // Query parameters
    private static final String QUERY_PARAM_PUBLICATION_TYPE = "publicationType";
    private static final String QUERY_PARAM_PUBLICATION_TOPIC = "publicationTopic";
    private static final String QUERY_PARAM_PUBLICATION_PROFESSION = "publicationProfession";

    // Publication facet name
    private static final String PUBLICATION_FACET_NAVIGATION_RELATIVE_PATH = "publicationfacets";

    /* (non-Javadoc)
     * @see uk.nhs.hee.web.components.ListingPageComponent.doBeforeRender(final HstRequest request,
     * final HstResponse response)
     */
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        // Adds selected publication filters
        request.setModel("selectedPublicationTypes",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TYPE));
        request.setModel("selectedPublicationTopics",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TOPIC));
        request.setModel("selectedPublicationProfessions",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_PROFESSION));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));

        loadTaxonomiesIntoKeyValueMaps(request);

        // Adds publication filter facets
        addPublicationFilterFacetsToModel(request);
    }

    private void loadTaxonomiesIntoKeyValueMaps(HstRequest request) {
        final TaxonomyManager taxonomyManager = HstServices.getComponentManager()
                .getComponent(TaxonomyManager.class.getSimpleName(),"org.onehippo.taxonomy.contentbean");
        final Taxonomies taxonomies = taxonomyManager.getTaxonomies();
        final Locale locale = request.getLocale();

        request.setModel("publicationProfessionMap",
                getMapFor(taxonomies, HEETaxonomy.HEE_GLOBAL_PROFESSIONS.getName(), locale).entrySet()
                        .stream()
                        .sorted(Map.Entry.comparingByValue())
                        .collect(Collectors.toMap(
                                Map.Entry::getKey,
                                Map.Entry::getValue,
                                (oldValue, newValue) -> oldValue, LinkedHashMap::new)));
        request.setModel("publicationTopicMap",
                getMapFor(taxonomies, HEETaxonomy.HEE_GLOBAL_HEALTHCARE_TOPICS.getName(), locale).entrySet()
                        .stream()
                        .sorted(Map.Entry.comparingByValue())
                        .collect(Collectors.toMap(
                                Map.Entry::getKey,
                                Map.Entry::getValue,
                                (oldValue, newValue) -> oldValue, LinkedHashMap::new)));
        request.setModel("publicationTypeMap",
                getMapFor(taxonomies, HEETaxonomy.HEE_GLOBAL_PUBLICATION_TYPES.getName(), locale).entrySet()
                        .stream()
                        .sorted(Map.Entry.comparingByValue())
                        .collect(Collectors.toMap(
                                Map.Entry::getKey,
                                Map.Entry::getValue,
                                (oldValue, newValue) -> oldValue, LinkedHashMap::new)));
    }

    private Map<String, String> getMapFor(Taxonomies taxonomies, String taxonomyName, Locale locale) {
        Taxonomy taxonomy = taxonomies.getTaxonomy(taxonomyName);

        if (taxonomy != null) {
            return TaxonomyTemplateUtils.getTaxonomyAsMap(taxonomy, locale);
        } else {
            return new HashMap<>();
        }
    }


    /**
     * Builds Query {@link Filter} for publication listing.
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the Query {@link Filter} for publication listing.
     * @throws FilterException thrown when an error occurs while building Query {@link Filter}.
     */
    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        return createOrFilter(
                query,
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TYPE),
                HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE.getName()
        ).addAndFilter(
                createOrFilter(
                        query,
                        HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TOPIC),
                        HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS.getName()
                )
        ).addAndFilter(
                createOrFilter(
                        query,
                        HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_PROFESSION),
                        HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS.getName()
                )
        );
    }

    /**
     * Returns {@link ListingPageType} for publication.
     *
     * @param request the {@link HstRequest} instance.
     * @return {@link ListingPageType} for publication.
     */
    @Override
    protected ListingPageType getListing(final HstRequest request) {
        return ListingPageType.getByName("publication");
    }

    /**
     * Adds channel-specific publication filter facets to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addPublicationFilterFacetsToModel(final HstRequest request) {
        final HippoFacetNavigationBean facetNavigation = getPublicationFacetedNavigation();

        if (facetNavigation == null) {
            return;
        }

        for (final HippoFolderBean folder : facetNavigation.getFolders()) {
            if (HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE.getName().equals(folder.getName())) {
                request.setModel("publicationTypeFacet", folder);
            } else if (HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS.getName().equals(folder.getName())) {
                request.setModel("publicationTopicFacet", folder);
            } else if (HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS.getName().equals(folder.getName())) {
                request.setModel("publicationProfessionFacet", folder);
            }
        }
    }

    /**
     * Returns channel-specific faceted navigation ({@link HippoFacetNavigationBean}) for publication.
     *
     * It looks up for the faceted navigation node {@code publicationfacets} under the current channel content folder.
     * For instance, for {@code medical} channel, it would look up for {@code publicationfacets} node under
     * {@code /content/documents/medical} folder.
     *
     * @return the channel-specific faceted navigation ({@link HippoFacetNavigationBean}) for publication.
     */
    private HippoFacetNavigationBean getPublicationFacetedNavigation() {
        return ContentBeanUtils.getFacetNavigationBean(
                PUBLICATION_FACET_NAVIGATION_RELATIVE_PATH,
                null);
    }

}
