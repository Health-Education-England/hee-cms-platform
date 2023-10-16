package uk.nhs.hee.web.components;

import org.apache.commons.collections4.ListUtils;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoFacetNavigationBean;
import org.hippoecm.hst.content.beans.standard.HippoFolderBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.util.ContentBeanUtils;
import uk.nhs.hee.web.components.info.PublicationListingPageComponentInfo;
import uk.nhs.hee.web.constants.HEETaxonomy;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.TaxonomyTemplateUtils;

import java.util.Collections;
import java.util.List;


/**
 * Base component for Publication Listing Page.
 */
@ParametersInfo(type = PublicationListingPageComponentInfo.class)
public class PublicationListingPageComponent extends ListingPageComponent {
    // Query parameters
    private static final String QUERY_PARAM_PUBLICATION_TYPE = "publicationType";
    private static final String QUERY_PARAM_PUBLICATION_TOPIC = "publicationTopic";
    private static final String QUERY_PARAM_PUBLICATION_SUB_TOPIC = "publicationSubTopic";
    private static final String QUERY_PARAM_PUBLICATION_PROFESSION = "publicationProfession";
    private static final String QUERY_PARAM_PUBLICATION_SUB_PROFESSION = "publicationSubProfession";

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
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TYPE));
        request.setModel("selectedPublicationTopics",
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TOPIC));
        request.setModel("selectedPublicationSubTopics",
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_SUB_TOPIC));
        request.setModel("selectedPublicationProfessions",
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_PROFESSION));
        request.setModel("selectedPublicationSubProfessions",
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_SUB_PROFESSION));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));

        loadTaxonomiesIntoKeyValueMaps(request);

        // Adds publication filter facets
        addPublicationFilterFacetsToModel(request);
    }

    private void loadTaxonomiesIntoKeyValueMaps(final HstRequest request) {
        request.setModel("publicationRootProfessionMap",
                TaxonomyTemplateUtils.getRootCategoriesAsMap(HEETaxonomy.HEE_GLOBAL_PROFESSIONS.getName()));

        final List<String> publicationProfessionQueryParameterList =
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_PROFESSION);
        if (!publicationProfessionQueryParameterList.isEmpty()) {
            request.setModel("publicationSubProfessionMap",
                    TaxonomyTemplateUtils.getSubCategoriesAsMap(
                            HEETaxonomy.HEE_GLOBAL_PROFESSIONS.getName(),
                            publicationProfessionQueryParameterList.get(0)));
        }

        request.setModel("publicationRootTopicMap",
                TaxonomyTemplateUtils.getRootCategoriesAsMap(HEETaxonomy.HEE_GLOBAL_HEALTHCARE_TOPICS.getName()));

        final List<String> publicationTopicQueryParameterList =
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TOPIC);
        if (!publicationTopicQueryParameterList.isEmpty()) {
            request.setModel("publicationSubTopicMap", TaxonomyTemplateUtils.getSubCategoriesAsMap(
                    HEETaxonomy.HEE_GLOBAL_HEALTHCARE_TOPICS.getName(),
                    publicationTopicQueryParameterList.get(0)));
        }

        request.setModel("publicationTypeMap",
                TaxonomyTemplateUtils.getTaxonomyAsMap(HEETaxonomy.HEE_GLOBAL_PUBLICATION_TYPES.getName()));
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
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TYPE),
                HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE.getName()
        ).addAndFilter(
                createAndFilter(
                        query,
                        ListUtils.sum(getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_PROFESSION),
                                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_SUB_PROFESSION)),
                        HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS_WITH_ANCESTORS.getName()
                )
        ).addAndFilter(
                createAndFilter(
                        query,
                        ListUtils.sum(getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TOPIC),
                                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_SUB_TOPIC)),
                        HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS_WITH_ANCESTORS.getName()
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

        // Get query parameters
        final List<String> pubTypeQueryParams = getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TYPE);
        final List<String> professionQueryParams = getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_PROFESSION);
        final List<String> subProfessionQueryParams =
                getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_SUB_PROFESSION);
        final List<String> topicQueryParams = getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TOPIC);
        final List<String> subTopicQueryParams = getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_SUB_TOPIC);

        // Navigate through facets based on the query parameters and find the target facet bean
        HippoFolderBean targetFacetBean = getTargetFacetBean(facetNavigation,
                HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE_WITH_ANCESTORS.getName(), pubTypeQueryParams);
        targetFacetBean = getTargetFacetBean(targetFacetBean,
                HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS_WITH_ANCESTORS.getName(), professionQueryParams);
        targetFacetBean = getTargetFacetBean(targetFacetBean,
                HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS_WITH_ANCESTORS.getName(), subProfessionQueryParams);
        targetFacetBean = getTargetFacetBean(targetFacetBean,
                HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS_WITH_ANCESTORS.getName(), topicQueryParams);
        targetFacetBean = getTargetFacetBean(targetFacetBean,
                HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS_WITH_ANCESTORS.getName(), subTopicQueryParams);

        // Add target publication type, profession and topic facet bean to the model
        request.setModel("publicationTypeFacet",
                targetFacetBean.getBean(HEEField.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPE_WITH_ANCESTORS.getName()));
        request.setModel("publicationProfessionFacet",
                targetFacetBean.getBean(HEEField.HEE_GLOBAL_TAXONOMY_PROFESSIONS_WITH_ANCESTORS.getName()));
        request.setModel("publicationTopicFacet",
                targetFacetBean.getBean(HEEField.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS_WITH_ANCESTORS.getName()));
    }

    /**
     * Returns the target facet bean by navigating through the given facet {@code currentTargetFolderBean}
     * based on the given query parameters {@code queryParams}.
     * Otherwise, returns the given {@code currentTargetFolderBean}.
     *
     * @param currentTargetFacetBean the {@link HippoFolderBean} instance which needs to be navigated
     *                               to find the target bean based on the given {@code queryParams}.
     * @param taxonomyNodeName       the name of the taxonomy node under which the target facet bean needs to be searched for
     *                               based on the given {@code queryParams}.
     * @param queryParams            the {@link List} of query parameters for which the target facet bean needs to be found.
     * @return the target facet {@link HippoFolderBean}
     * by navigating through the given facet {@code currentTargetFolderBean}
     * based on the given query parameters {@code queryParams}.
     * Otherwise, returns the given {@code currentTargetFolderBean}.
     */
    private HippoFolderBean getTargetFacetBean(
            final HippoFolderBean currentTargetFacetBean,
            final String taxonomyNodeName,
            final List<String> queryParams) {
        if (queryParams.isEmpty()) {
            return currentTargetFacetBean;
        } else {
            HippoFolderBean targetFacetBean = null;

            for (final String queryParam : queryParams) {
                if (queryParam.isEmpty()) {
                    continue;
                }

                targetFacetBean = currentTargetFacetBean.getBean(taxonomyNodeName);
                targetFacetBean = targetFacetBean.getBean(queryParam);
            }

            return targetFacetBean == null ? currentTargetFacetBean : targetFacetBean;
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

    /**
     * An extension of
     * {@link HstUtils#getQueryParameterValues(org.hippoecm.hst.core.component.HstRequest, java.lang.String)} which
     * returns an empty list if the given {@code parameter} contains one empty value.
     *
     * @param request   the {@link HstRequest} instance.
     * @param parameter the parameter whose values needs to be returned.
     * @return values of the given {@code parameter} as {@link List<String>}
     * if available in the {@code request} instance. Otherwise, returns an empty list. Also, returns an empty list
     * if the given {@code parameter} contains one empty value.
     */
    private List<String> getQueryParameterValues(final HstRequest request, final String parameter) {
        final List<String> paramValues = HstUtils.getQueryParameterValues(request, parameter);

        if (paramValues.size() == 1 && paramValues.get(0).isEmpty()) {
            return Collections.emptyList();
        }

        return paramValues;
    }

}
