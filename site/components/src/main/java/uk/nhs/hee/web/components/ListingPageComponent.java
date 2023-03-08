package uk.nhs.hee.web.components;

import com.google.common.base.Strings;
import org.apache.commons.lang.StringUtils;
import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.builder.HstQueryBuilder;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoBeanIterator;
import org.hippoecm.hst.core.component.HstComponentException;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.linking.HstLinkCreator;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.cms7.essentials.components.paging.Pageable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.ListingPage;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.DocumentUtils;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.MiniHubGuidanceLinkUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Map;

import javax.jcr.RepositoryException;

/**
 * Base abstract component class for Listing Pages ({@code hee:listingPage}).
 */
public abstract class ListingPageComponent extends EssentialsDocumentComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(ListingPageComponent.class);

    private static final String ASCENDING_SORT_ORDER = "asc";
    private static final String DESCENDING_SORT_ORDER = "desc";
    private static final String ATOZ_SORT_ORDER = "az";
    private static final String SORT_BY_QUERY_PARAM = "sortBy";
    public static final String HEE_GUIDANCE_CONTENT_TYPE = "hee:guidance";
    public static final String URL_PROPERTY = "derived_url";
    public static final String PAGENOTFOUND_REFID = "pagenotfound";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final Pageable<HippoBean> pageable;

        try {
            pageable = executeQuery(request);
        } catch (final QueryException e) {
            throw new HstComponentException("An error has occurred while trying to execute hst query.", e);
        }

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
        final HippoBeanIterator beans = results.getHippoBeans();
        final HstRequestContext reqContext = request.getRequestContext();

        List<HippoBean> beansWithValidURLs = findBeansThatHaveAValidPageUrl(reqContext, beans);

        return getPageableFactory().createPageable(
                beansWithValidURLs,
                getCurrentPage(request),
                listingPage.getPageSize().intValue()
        );
    }

    /**
     * Iterate through the candidate beans and decide if they can be surfaced. That will rely on whether they are associated with a
     * page, either directly or through a guidance minihub page
     *
     * @param reqContext is used to get request specific data
     * @param beans are those beans that were initially identified but now need filtering
     * @return will be a {@link List} of {@link HippoBean} instances that were found to be associated with a page
     */
    private List<HippoBean> findBeansThatHaveAValidPageUrl(HstRequestContext reqContext, HippoBeanIterator beans) {
        final HstLinkCreator linkCreator = reqContext.getHstLinkCreator();
        Mount mount = reqContext.getResolvedMount().getMount();
        final HstLink pageNotFound = linkCreator.createByRefId(PAGENOTFOUND_REFID, mount);
        final String pageNotFoundURL = pageNotFound.toUrlForm(reqContext, false);

        List<HippoBean> beansWithValidURLs = new ArrayList<>();

        while (beans.hasNext()) {
            HippoBean bean = beans.nextHippoBean();
            HstLink link = linkCreator.create(bean.getNode(), reqContext);

            String url = link.toUrlForm(reqContext, false);
            if (url != null) {
                if (!url.equals(pageNotFoundURL)) {
                    LOGGER.debug("Found a proper URL of {} so now adding it", url);
                    beansWithValidURLs.add(bean);
                    bean.getProperties().put(URL_PROPERTY, url);
                } else {
                    //* if it's a guidance page, then we can still use it's parent
                    if (HEE_GUIDANCE_CONTENT_TYPE.equals(bean.getContentType())) {
                        LOGGER.debug("URL for {} evaluated to PageNotFound so now checking for minihub link", bean.getPath());
                        try {
                            //* Figure out if we have a guidance page that is part of a mini-hub
                            HstLink possibleGuidanceHubLink = MiniHubGuidanceLinkUtils.getLink(bean.getNode().getParent(), false, reqContext, mount);

                            if (possibleGuidanceHubLink != null) {
                                String possibleUrl = possibleGuidanceHubLink.toUrlForm(reqContext, false);
                                LOGGER.debug("Minihub link evaluated to: {}", possibleUrl);

                                if (!pageNotFoundURL.equals(possibleUrl)) {
                                    beansWithValidURLs.add(bean);
                                    bean.getProperties().put(URL_PROPERTY, possibleUrl);
                                }
                            }
                        } catch (RepositoryException e) {
                            LOGGER.debug("Problem trying to get the Guidance hub link: {}", e.getMessage());
                            e.printStackTrace();
                        }
                    } else {
                        if (beanUrlObtainedDifferently(bean)) {
                            beansWithValidURLs.add(bean);
                        } else {
                            LOGGER.debug("Not a Guidance content type so there was no Minihub link");
                        }
                    }
                }
            } else {
                LOGGER.debug("URL was null for this bean");
            }
        }
        return beansWithValidURLs;
    }

    /**
     * Some beans can be let through automatically as they resolve their URLs slightly differently
     * @param bean the bean we are checking. It will never be null
     * @return indicates if its one of those special beans
     */
    private boolean beanUrlObtainedDifferently(HippoBean bean) {
        String simpleName = bean.getClass().getSimpleName();
        if ("Event".equals(simpleName) || "Bulletin".equals(simpleName) || "SearchBank".equals(simpleName) || "CaseStudy".equals(simpleName)) {
            return true;
        } else {
            return false;
        }
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
        final ListingPageType listingPageType = getListing(request);
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
        final ListingPageType listingPageType = getListing(request);

        if (!listingPageType.isSortingEnabled()) {
            return;
        }

        String sortOrder = DESCENDING_SORT_ORDER;

        final List<String> sortByDateQueryParamValues =
                HstUtils.getQueryParameterValues(request, SORT_BY_QUERY_PARAM);
        if (!sortByDateQueryParamValues.isEmpty()) {
            sortOrder = sortByDateQueryParamValues.get(0);
        }

        if (sortOrder.equals(ASCENDING_SORT_ORDER)) {
            query.addOrderByAscending(listingPageType.getSortByDateField());
        } else if (sortOrder.equals(ATOZ_SORT_ORDER)) {
            query.addOrderByAscending(HEEField.DOCUMENT_TITLE.getName());
        } else {
            query.addOrderByDescending(listingPageType.getSortByDateField());
        }
    }

    /**
     * Returns value-list map for the filter.
     *
     * <p>This gets the identifier of the value-list to be returned as map
     * from its {@link ListingPageType} instance (identified by current Listing Page Type).</p>
     *
     * @param request the {@link HstRequest} instance.
     * @return the value-list map for the filter.
     */
    protected Map<String, String> getFilterValueListMap(final HstRequest request) {
        final ListingPageType listingPageType = getListing(request);

        if (StringUtils.isEmpty(listingPageType.getFilterValueListIdentifier())) {
            return Collections.emptyMap();
        }

        String valueListIdentifier = listingPageType.getFilterValueListIdentifier();

        if (listingPageType.isChannelSpecificValueListIdentifier()) {
            valueListIdentifier = ValueListUtils.getChannelSpecificValueListIdentifier(
                    valueListIdentifier,
                    DocumentUtils.getChannel(getListingPageModel(request).getPath())
            );
        }

        return ValueListUtils.getValueListMap(valueListIdentifier);
    }

    /**
     * Returns requested sort order. Defaults to Descending sort order.
     *
     * @param request the {@link HstRequest} instance.
     * @return the requested sort order. Defaults to Descending sort order.
     */
    protected String getSelectedSortOrder(final HstRequest request) {
        final String sortQueryParam = getAnyParameter(request, SORT_BY_QUERY_PARAM);
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
