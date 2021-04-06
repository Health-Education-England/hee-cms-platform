package uk.nhs.hee.web.components;

import com.google.common.base.Strings;
import org.hippoecm.hst.container.RequestContextProvider;
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
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.repository.HippoStdPubWfNodeType;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.cms7.essentials.components.paging.Pageable;
import org.onehippo.forge.selection.hst.contentbean.ValueList;
import org.onehippo.forge.selection.hst.util.SelectionUtil;
import uk.nhs.hee.web.beans.ListingPage;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.constants.HeeNodeType;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.List;
import java.util.Map;

@ParametersInfo(type = ListingPageComponentInfo.class)
public class ListingPageComponent extends EssentialsDocumentComponent {
    private final static String CATEGORY_QUERY_PARAM = "category";
    private final static String CATEGORY_VALUE_LIST_IDENTIFIER = "categories";

    private final static String ASCENDING_SORT_ORDER = "asc";
    private final static String DESCENDING_SORT_ORDER = "desc";
    private final static String SORT_BY_DATE_QUERY_PARAM = "sortByDate";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final Pageable<HippoBean> pageable = getDocumentBeans(request);

        request.setModel("selectedCategories", HstUtils.getQueryParameterValues(request, CATEGORY_QUERY_PARAM));
        request.setModel("categoriesMap", getCategoryValueListMap());
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));
        request.setModel("isBulletinPage", isBulletinPage());
        request.setModel(REQUEST_ATTR_PAGEABLE, pageable);
    }

    private Pageable<HippoBean> getDocumentBeans(final HstRequest request) {
        try {
            return executeQuery(request);
        } catch (QueryException qe) {
            throw new HstComponentException("An error has occurred while trying to execute hst query.", qe);
        }
    }

    protected Pageable<HippoBean> executeQuery(final HstRequest request) throws QueryException {
        ListingPage listingPage = request.getModel(REQUEST_ATTR_DOCUMENT);

        final HstQuery query = buildQuery(request, listingPage);


        final HstQueryResult execute = query.execute();
        return getPageableFactory().createPageable(
                execute.getHippoBeans(),
                execute.getTotalSize(),
                listingPage.getPageSize().intValue(),
                getCurrentPage(request));
    }

    private HstQuery buildQuery(final HstRequest request, ListingPage listingPage) {
        final String documentPath = listingPage.getPath();
        final HippoBean scopeBean = doGetScopeBean(documentPath);

        final HstQuery query = createQuery(scopeBean, getDocumentTypes(listingPage));

        final int pageSize = listingPage.getPageSize().intValue();
        final int page = getCurrentPage(request);
        query.setLimit(pageSize);
        query.setOffset((page - 1) * pageSize);

        query.setFilter(createQueryFilters(request, query));
        applySortOrdering(request, query);

        return query;
    }

    private HstQuery createQuery(HippoBean scope, String[] documentTypes) {
        HstQueryBuilder builder = HstQueryBuilder.create(scope);
        return builder.ofTypes(documentTypes).build();
    }

    protected String[] getDocumentTypes(ListingPage listingPage) {
        return listingPage.getDocumentTypes();
    }

    protected int getCurrentPage(final HstRequest request) {
        return getAnyIntParameter(request, REQUEST_PARAM_PAGE, 1);
    }

    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) {
        Filter baseFilter = query.createFilter();
        baseFilter.addOrFilter(getCategoryFilter(request, query));

        return baseFilter;
    }

    private Filter getCategoryFilter(final HstRequest request, final HstQuery query) {
        List<String> categoriesFilter = HstUtils.getQueryParameterValues(request, CATEGORY_QUERY_PARAM);
        return createOrFilter(query, categoriesFilter, HeeNodeType.CATEGORY);
    }

    private Filter createOrFilter(HstQuery query, final List<String> values, final String attributeName) {
        final Filter baseFilter = query.createFilter();

        values.forEach(value -> {
            try {
                final Filter filter = query.createFilter();
                filter.addEqualTo(attributeName, value);
                baseFilter.addOrFilter(filter);
            } catch (FilterException fe) {
                throw new HstComponentException(String.format("An error has occurred while trying to construct filter with attribute name %s and value %s",
                        attributeName, value), fe);
            }
        });

        return baseFilter;
    }

    protected void applySortOrdering(final HstRequest request, final HstQuery query) {
        String sortOrder = DESCENDING_SORT_ORDER;

        final List<String> sortByDateQueryParamValues = HstUtils.getQueryParameterValues(request, SORT_BY_DATE_QUERY_PARAM);
        if (!sortByDateQueryParamValues.isEmpty()) {
            sortOrder = sortByDateQueryParamValues.get(0);
        }

        if (sortOrder.equals(ASCENDING_SORT_ORDER)) {
            query.addOrderByAscending(HippoStdPubWfNodeType.HIPPOSTDPUBWF_LAST_MODIFIED_DATE);
        } else {
            query.addOrderByDescending(HippoStdPubWfNodeType.HIPPOSTDPUBWF_LAST_MODIFIED_DATE);
        }
    }

    private Map<String, String> getCategoryValueListMap() {
        final ValueList categoriesValueList =
                SelectionUtil.getValueListByIdentifier(CATEGORY_VALUE_LIST_IDENTIFIER, RequestContextProvider.get());
        return SelectionUtil.valueListAsMap(categoriesValueList);
    }

    private String getSelectedSortOrder(HstRequest request) {
        String sortQueryParam = getAnyParameter(request, SORT_BY_DATE_QUERY_PARAM);
        return Strings.isNullOrEmpty(sortQueryParam) ? DESCENDING_SORT_ORDER : sortQueryParam;
    }

    protected boolean isBulletinPage() {
        return true;
    }
}
