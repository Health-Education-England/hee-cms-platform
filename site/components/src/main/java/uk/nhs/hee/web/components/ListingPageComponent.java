package uk.nhs.hee.web.components;

import com.google.common.base.Strings;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.builder.HstQueryBuilder;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstComponentException;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.cms7.essentials.components.paging.Pageable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.ListingPage;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.List;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

/**
 * Base abstract component class for Listing Pages ({@code hee:listingPage}).
 */
public abstract class ListingPageComponent extends EssentialsDocumentComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(ListingPageComponent.class);

    private static final String ASCENDING_SORT_ORDER = "asc";
    private static final String DESCENDING_SORT_ORDER = "desc";
    private static final String SORT_BY_DATE_QUERY_PARAM = "sortByDate";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final Pageable<HippoBean> pageable;
        try {
            pageable = executeQuery(request);
        } catch (final QueryException e) {
            throw new HstComponentException("An error has occurred while trying to execute hst query.", e);
        }

        request.setModel("selectedSortOrder", getSelectedSortOrder(request));
        request.setModel(REQUEST_ATTR_PAGEABLE, pageable);
    }

    /**
     * Builds and executes the Query to list pages for the current Listing Page request.
     *
     * @param request the {@link HstRequest} instance.
     * @return the {@link Pageable<HippoBean>} instance.
     * @throws QueryException thrown when an error occurs during execution of the query built.
     */
    private Pageable<HippoBean> executeQuery(final HstRequest request) throws QueryException {
        final ListingPage listingPage = request.getModel(REQUEST_ATTR_DOCUMENT);

        final HstQuery query = buildQuery(request, listingPage);
        LOGGER.debug("Execute query: {}", query.getQueryAsString(false));

        final HstQueryResult results = query.execute();

        // Removes/filters out the documents whose page is not found.
        final List<HippoBean> resultsWithoutNonPageBeans = StreamSupport.stream(
                Spliterators.spliteratorUnknownSize(results.getHippoBeans(), Spliterator.ORDERED), false)
                .filter(hippoBean -> HstUtils.isPageFound(request.getRequestContext(), hippoBean))
                .collect(Collectors.toList());

        return getPageableFactory().createPageable(
                resultsWithoutNonPageBeans,
                getCurrentPage(request),
                listingPage.getPageSize().intValue());
    }

    /**
     * Builds Query for the current Listing Page request.
     *
     * @param request     the {@link HstRequest} instance.
     * @param listingPage the {@link ListingPage} instance.
     * @return the {@link HstQuery} instance built for the current Listing Page request.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    private HstQuery buildQuery(final HstRequest request, final ListingPage listingPage) throws FilterException {
        final String documentPath = listingPage.getPath();
        final HippoBean scopeBean = doGetScopeBean(documentPath);

        final HstQuery query = createQuery(scopeBean, getDocumentTypes(request, listingPage));

        final int pageSize = listingPage.getPageSize().intValue();
        final int page = getCurrentPage(request);
        query.setLimit(pageSize);
        query.setOffset((page - 1) * pageSize);

        query.setFilter(createQueryFilters(request, query));
        applySortOrdering(request, query);

        return query;
    }

    /**
     * Returns {@link HstQuery} built based on the given {@code scope} bean and {@code documentTypes}.
     *
     * @param scope         the scope {@link HippoBean} instance.
     * @param documentTypes the list of document types against which the query needs to be executed.
     * @return the {@link HstQuery} built based on the given {@code scope} bean and {@code documentTypes}.
     */
    private HstQuery createQuery(final HippoBean scope, final String[] documentTypes) {
        final HstQueryBuilder builder = HstQueryBuilder.create(scope);
        return builder.ofTypes(documentTypes).build();
    }

    /**
     * Returns an array of document types against which the Query will be executed.
     *
     * <p>Returns document types from {@link ListingPageType} instance if available.
     * Otherwise, returns from the {@link ListingPage} instance</p>
     *
     * @param request     the {@link HstRequest} instance.
     * @param listingPage the {@link ListingPage} instance.
     * @return An array of document types against which the Query will be executed.
     */
    protected String[] getDocumentTypes(final HstRequest request, final ListingPage listingPage) {
        final ListingPageType listingPageType =
                ListingPageType.getByName(getListingPageModel(request).getListingPageType());
        if (listingPageType.getDocumentTypes().length == 0) {
            return listingPage.getDocumentTypes();
        }

        return listingPageType.getDocumentTypes();
    }

    /**
     * Returns current result/listing page number.
     *
     * @param request the {@link HstRequest} instance.
     * @return current result/listing page number.
     */
    private int getCurrentPage(final HstRequest request) {
        return getAnyIntParameter(request, REQUEST_PARAM_PAGE, 1);
    }

    /**
     * Abstract method for extending classes to override the logic to build Query Filters.
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the {@link Filter} instance built based on the given inputs.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    protected abstract Filter createQueryFilters(
            final HstRequest request, final HstQuery query) throws FilterException;

    /**
     * Returns Query {@link Filter} built based on the given inputs.
     *
     * @param query         the {@link HstQuery} instance.
     * @param values        the Filter field values.
     * @param attributeName the Filter field name.
     * @return the Query {@link Filter} built based on the given inputs.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    protected Filter createOrFilter(
            final HstQuery query,
            final List<String> values,
            final String attributeName) throws FilterException {
        final Filter baseFilter = query.createFilter();

        for (final String value : values) {
            final Filter filter = query.createFilter();
            filter.addEqualTo(attributeName, value);
            baseFilter.addOrFilter(filter);
        }

        return baseFilter;
    }

    /**
     * Adds sorting order on the given {@code query} instance based
     * on the requested sorting order via {@code sortByDate} query parameter.
     *
     * <p>Defaults to Descending sort order.</p>
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     */
    private void applySortOrdering(final HstRequest request, final HstQuery query) {
        String sortOrder = DESCENDING_SORT_ORDER;

        final List<String> sortByDateQueryParamValues =
                HstUtils.getQueryParameterValues(request, SORT_BY_DATE_QUERY_PARAM);
        if (!sortByDateQueryParamValues.isEmpty()) {
            sortOrder = sortByDateQueryParamValues.get(0);
        }

        final String sortByDateField =
                ListingPageType.getByName(getListingPageModel(request).getListingPageType()).getSortByDateField();

        if (sortOrder.equals(ASCENDING_SORT_ORDER)) {
            query.addOrderByAscending(sortByDateField);
        } else {
            query.addOrderByDescending(sortByDateField);
        }
    }

    /**
     * Returns requested sort order. Defaults to Descending sort order.
     *
     * @param request the {@link HstRequest} instance.
     * @return the requested sort order. Defaults to Descending sort order.
     */
    private String getSelectedSortOrder(final HstRequest request) {
        final String sortQueryParam = getAnyParameter(request, SORT_BY_DATE_QUERY_PARAM);
        return Strings.isNullOrEmpty(sortQueryParam) ? DESCENDING_SORT_ORDER : sortQueryParam;
    }

    /**
     * Returns {@link ListingPage} instance of the current {@code request}.
     *
     * @param request the {@link HstRequest} instance.
     * @return the {@link ListingPage} instance of the current {@code request}.
     */
    protected ListingPage getListingPageModel(final HstRequest request) {
        return request.getModel(REQUEST_ATTR_DOCUMENT);
    }

    /**
     * Returns {@link ListingPageType} instance of the current {@code request}.
     *
     * @param request the {@link HstRequest} instance.
     * @return the {@link ListingPageType} instance of the current {@code request}.
     */
    protected ListingPageType getListing(final HstRequest request) {
        return ListingPageType.getByName(getListingPageModel(request).getListingPageType());
    }
}
