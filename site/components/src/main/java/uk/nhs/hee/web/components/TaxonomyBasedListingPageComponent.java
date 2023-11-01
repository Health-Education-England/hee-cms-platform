package uk.nhs.hee.web.components;

import org.apache.commons.collections4.ListUtils;
import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoFacetNavigationBean;
import org.hippoecm.hst.content.beans.standard.HippoFolderBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.util.ContentBeanUtils;
import org.hippoecm.repository.api.HippoNodeType;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.TaxonomyTemplateUtils;

import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;


/**
 * Base listing component for taxonomy-based (e.g. publication, news, blog, etc.) listing/collection pages
 * which in turn has been driven by {@link ListingFilter} configurations setup for listing/collection pages.
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class TaxonomyBasedListingPageComponent extends ListingPageComponent {
    /* (non-Javadoc)
     * @see uk.nhs.hee.web.components.ListingPageComponent.doBeforeRender(final HstRequest request,
     * final HstResponse response)
     */
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        // To avoid component processing the request when it has just been dropped on a page (via experience manager)
        // but, the listing page document hasn't been chosen yet.
        if (getListingPageModel(request) == null) {
            return;
        }

        // Add listing (page) type and filters to the model
        addListingTypeAndFiltersToModel(request);

        // Add selected filters to the model
        addSelectedFiltersToModel(request);

        // Get the target facet based on the chosen filters
        final HippoFacetNavigationBean targetFacetBean = getTargetFacetBean(request);

        // Finally, add the facet filtered taxonomy maps to the model
        addFacetedFiltersToModel(request, targetFacetBean);
    }

    /**
     * Adds listing (page) type and filters to the model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addListingTypeAndFiltersToModel(final HstRequest request) {
        // Add listing (page) type to the model
        request.setModel("listingType", getListing(request).getType());

        // Add listing filters to the model
        request.setModel("listingFilters", getListing(request).getListingFilters());
    }

    /**
     * Builds Query {@link Filter} for taxonomy-based listing.
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the Query {@link Filter} for publication listing.
     * @throws FilterException thrown when an error occurs while building Query {@link Filter}.
     */
    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        Filter queryFilter = query.createFilter();

        for (final ListingFilter filter : getListing(request).getListingFilters()) {
            if (filter.isFlatTaxonomy()) {
                queryFilter = queryFilter.addAndFilter(createOrFilter(
                        query,
                        HstUtils.getQueryParameterValues(request, filter.getQueryParameter()),
                        filter.getField().getName()
                ));
            } else {
                queryFilter = queryFilter.addAndFilter(createAndFilter(
                        query,
                        ListUtils.sum(
                                HstUtils.getQueryParameterValues(request, filter.getQueryParameter()),
                                HstUtils.getQueryParameterValues(request,
                                        buildSubLevelQueryParameter(filter.getQueryParameter()))),
                        filter.getField().getName()
                ));
            }
        }

        return queryFilter;
    }

    /**
     * Adds the selected filters (which comes to the component as query parameters) to the model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addSelectedFiltersToModel(final HstRequest request) {
        for (final ListingFilter filter : getListing(request).getListingFilters()) {
            request.setModel(
                    buildQueryParameterModelKey(filter.getQueryParameter(), false),
                    HstUtils.getQueryParameterValues(request, filter.getQueryParameter())
            );

            if (!filter.isFlatTaxonomy()) {
                request.setModel(
                        buildQueryParameterModelKey(filter.getQueryParameter(), true),
                        HstUtils.getQueryParameterValues(request,
                                buildSubLevelQueryParameter(filter.getQueryParameter()))
                );
            }
        }

        request.setModel("selectedSortOrder", getSelectedSortOrder(request));
    }

    /**
     * Adds channel-specific publication filter facets to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private HippoFacetNavigationBean getTargetFacetBean(final HstRequest request) {
        final HippoFacetNavigationBean facetNavigation = ContentBeanUtils.getFacetNavigationBean(
                getListing(request).getRelativeFacetPath(), null);

        if (facetNavigation == null) {
            return null;
        }

        HippoFacetNavigationBean targetFacetBean = facetNavigation;
        for (final ListingFilter filter : getListing(request).getListingFilters()) {
            targetFacetBean = getTargetFacetBean(
                    targetFacetBean,
                    filter.getField().getName(),
                    HstUtils.getQueryParameterValues(request, filter.getQueryParameter())
            );

            if (!filter.isFlatTaxonomy()) {
                targetFacetBean = getTargetFacetBean(
                        targetFacetBean,
                        filter.getField().getName(),
                        HstUtils.getQueryParameterValues(request, buildSubLevelQueryParameter(filter.getQueryParameter())));
            }
        }

        return targetFacetBean;
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
    private HippoFacetNavigationBean getTargetFacetBean(
            final HippoFacetNavigationBean currentTargetFacetBean,
            final String taxonomyNodeName,
            final List<String> queryParams) {
        if (queryParams.isEmpty()) {
            return currentTargetFacetBean;
        } else {
            HippoFacetNavigationBean targetFacetBean = null;

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
     * Adds faceted filter taxonomy maps (including sub-level) to the model.
     *
     * @param request the {@link HstRequest} instance.
     * @param targetFacetBean the target facet bean with which the actual taxonomy maps will be filtered
     *                        (in order to render the ones containing results).
     */
    private void addFacetedFiltersToModel(final HstRequest request, final HippoFacetNavigationBean targetFacetBean) {
        for (final ListingFilter filter : getListing(request).getListingFilters()) {
            if (filter.isFlatTaxonomy()) {
                request.setModel(
                        buildFilterMapModelKey(filter.getQueryParameter(), false),
                        getFacetedTaxonomyAsMap(
                                TaxonomyTemplateUtils.getTaxonomyAsMap(filter.getTaxonomyName().getName()),
                                filter.getField(),
                                targetFacetBean
                        )
                );
            } else {
                request.setModel(buildFilterMapModelKey(filter.getQueryParameter(), false),
                        getFacetedTaxonomyAsMap(
                                TaxonomyTemplateUtils.getRootCategoriesAsMap(filter.getTaxonomyName().getName()),
                                filter.getField(),
                                targetFacetBean
                        )
                );

                final List<String> queryParameterList =
                        HstUtils.getQueryParameterValues(request, filter.getQueryParameter());
                if (!queryParameterList.isEmpty()) {
                    request.setModel(buildFilterMapModelKey(filter.getQueryParameter(), true),
                            getFacetedTaxonomyAsMap(
                                    TaxonomyTemplateUtils.getSubCategoriesAsMap(filter.getTaxonomyName().getName(),
                                            queryParameterList.get(0)),
                                    filter.getField(),
                                    targetFacetBean
                            )
                    );
                }
            }
        }
    }

    /**
     * Returns a taxonomy map filtered by the taxonomies available under the given {@code targetFacetBean}.
     *
     * @param taxonomyMap the original taxonomy map which needs to be filtered by the given {@code targetFacetBean}.
     * @param field the {@link HEEField} instance containing the faceted field.
     * @param targetFacetBean the target facet bean with which {@code taxonomyMap} needs to be filtered
     *                        (in order to render the ones containing results).
     * @return a taxonomy map filtered by the taxonomies available under the given {@code targetFacetBean}.
     */
    private Map<String, String> getFacetedTaxonomyAsMap(
            final Map<String, String> taxonomyMap,
            final HEEField field,
            final HippoFacetNavigationBean targetFacetBean
    ) {
        if (targetFacetBean == null) {
            return taxonomyMap;
        }

        final HippoFacetNavigationBean targetTaxonomyFacetBean = targetFacetBean.getBean(field.getName());

        return targetTaxonomyFacetBean.getFolders(true).stream()
                .filter(facetFolderBean -> taxonomyMap.containsKey(facetFolderBean.getName()))
                .collect(Collectors.toMap(
                        HippoBean::getName,
                        facetFolderBean -> taxonomyMap.get(facetFolderBean.getName())
                                + " [" + facetFolderBean.getSingleProperty(HippoNodeType.HIPPO_COUNT) + "]",
                        (x, y) -> y,
                        LinkedHashMap::new)
                );
    }

    /**
     * Builds and returns sub-level query parameter based on the given {@code queryParameter}.
     *
     * <p>Example: {@code subProfession} for {@code profession} query parameter.</p>
     *
     * @param queryParameter the query parameter for which sub-level query parameter needs to be generated.
     * @return the sub-level query parameter based on the given {@code queryParameter}.
     */
    private String buildSubLevelQueryParameter(final String queryParameter) {
        return "sub" + StringUtils.capitalize(queryParameter);
    }

    /**
     * Builds and returns model key for query parameters based on whether it is for parent or sub-level.
     *
     * <p>Example: {@code selectedProfessionList} for parent-level {@code profession} query parameter
     * and {@code selectedSubProfessionList} for sub-level {@code profession} query parameter.</p>
     *
     * @param queryParameter the query parameter for which model key needs to be generated.
     * @param subLevel the boolean indicating whether the model key needs to be built for sub-level or not.
     * @return the model key for query parameters based on whether it is for parent or sub-level.
     */
    private String buildQueryParameterModelKey(final String queryParameter, final boolean subLevel) {
        return "selected" + (subLevel ? "Sub" : "") + StringUtils.capitalize(queryParameter) + "List";
    }

    /**
     * Builds and returns model key for filter maps based on the given {@code queryParameter}
     * and whether it is for parent or sub-level.
     *
     * <p>Example: {@code professionMap} for parent-level {@code profession} query parameter
     * and {@code subProfessionMap} for sub-level {@code profession} query parameter.</p>
     *
     * @param queryParameter the query parameter for which model key needs to be generated.
     * @param subLevel the boolean indicating whether the model key needs to be built for sub-level or not.
     * @return the model key for filter maps based on the given {@code queryParameter}
     * and whether it is for parent or sub-level.
     */
    private String buildFilterMapModelKey(final String queryParameter, final boolean subLevel) {
        return (subLevel ? "sub" + StringUtils.capitalize(queryParameter) : queryParameter) + "Map";
    }
}