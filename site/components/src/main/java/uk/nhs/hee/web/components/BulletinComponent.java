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
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.CommonComponent;
import org.onehippo.cms7.essentials.components.paging.Pageable;
import org.onehippo.cms7.essentials.components.utils.SiteUtils;
import org.onehippo.forge.selection.hst.contentbean.ValueList;
import org.onehippo.forge.selection.hst.util.SelectionUtil;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.components.info.BulletinComponentInfo;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;

@ParametersInfo(type = BulletinComponentInfo.class)
public class BulletinComponent extends CommonComponent {
    private static final Logger log = LoggerFactory.getLogger(BulletinComponent.class);

    private final static String CATEGORY_QUERY_PARAM = "category";
    private final static String CATEGORY_BEAN_ATTRIBUTE = "hee:category";
    private final static String CATEGORY_VALUE_LIST_IDENTIFIER = "categories";

    private final static String ASCENDING_SORT_ORDER = "asc";
    private final static String DESCENDING_SORT_ORDER = "desc";
    private final static String LAST_MODIFICATION_DATE_BEAN_ATTRIBUTE = "hippostdpubwf:lastModificationDate";
    private final static String SORT_BY_DATE_QUERY_PARAM = "sortByDate";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        final BulletinComponentInfo paramInfo = getComponentParametersInfo(request);

        final Pageable<HippoBean> pageable = getDocumentBeans(request, paramInfo);

        request.setAttribute("selectedCategories", getQueryParameterValues(request, CATEGORY_QUERY_PARAM));
        request.setAttribute("categoriesMap", getCategoryValueListMap());
        request.setAttribute("selectedSortOrder", getSelectedSortOrder(request));
        request.setModel(REQUEST_ATTR_PAGEABLE, pageable);
    }

    private Pageable<HippoBean> getDocumentBeans(final HstRequest request, final BulletinComponentInfo paramInfo) {
        try {
            return executeQuery(request, paramInfo);
        } catch (QueryException qe) {
            log.error("An error has occurred while trying to execute hst query.", qe);
            return null;
        }
    }

    protected Pageable<HippoBean> executeQuery(final HstRequest request, final BulletinComponentInfo paramInfo) throws QueryException {
        final HstQuery query = buildQuery(request, paramInfo);

        final HstQueryResult execute = query.execute();
        return getPageableFactory().createPageable(
                execute.getHippoBeans(),
                execute.getTotalSize(),
                paramInfo.getPageSize(),
                getCurrentPage(request));
    }

    private HstQuery buildQuery(final HstRequest request, final BulletinComponentInfo paramInfo) {
        final String documentPath = paramInfo.getPath();
        final HippoBean scopeBean = doGetScopeBean(documentPath);

        final String[] documentTypes = getDocumentTypes(paramInfo);
        final HstQuery query = createQuery(scopeBean, documentTypes);

        final int pageSize = paramInfo.getPageSize();
        final int page = getCurrentPage(request);
        query.setLimit(pageSize);
        query.setOffset((page - 1) * pageSize);

        query.setFilter(createQueryFilters(request, query));
        applySortOrdering(request, query);

        return query;
    }

    private String[] getDocumentTypes(BulletinComponentInfo paramInfo) {
        final String documentTypes = paramInfo.getDocumentTypes();
        return SiteUtils.parseCommaSeparatedValue(documentTypes);
    }

    private HstQuery createQuery(HippoBean scope, String[] documentTypes) {
        HstQueryBuilder builder = HstQueryBuilder.create(scope);
        return builder.ofTypes(documentTypes).build();
    }

    /**
     * Determine the current page of the list query.
     *
     * @param request the current request
     * @return the current page of the query
     */
    protected int getCurrentPage(final HstRequest request) {
        return getAnyIntParameter(request, REQUEST_PARAM_PAGE, 1);
    }

    /**
     * Create a list of filters and apply them to the query, using AND logic.
     *
     * @param request current HST request
     * @param query   query under construction
     * @throws FilterException
     */
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) {
        Filter baseFilter = query.createFilter();
        baseFilter.addOrFilter(getCategoryFilter(request, query));

        return baseFilter;
    }

    private Filter getCategoryFilter(final HstRequest request, final HstQuery query) {
        List<String> categoriesFilter = getQueryParameterValues(request, CATEGORY_QUERY_PARAM);
        return createOrFilter(query, categoriesFilter, CATEGORY_BEAN_ATTRIBUTE);
    }

    private List<String> getQueryParameterValues(final HstRequest request, final String parameter) {
        String[] parameterValues = request.getParameterValues(parameter);
        if (parameterValues == null) {
            return Collections.emptyList();
        }

        return Arrays.asList(parameterValues);
    }

    private Filter createOrFilter(HstQuery query, final List<String> values, final String attributeName) {
        final Filter baseFilter = query.createFilter();

        values.forEach(value -> {
            try {
                final Filter filter = query.createFilter();
                filter.addEqualTo(attributeName, value);
                baseFilter.addOrFilter(filter);
            } catch (FilterException fe) {
                log.error("An error has occurred while trying to construct filter with attribute name {} and value {}",
                        attributeName, value);
            }
        });

        return baseFilter;
    }

    protected HstQuery applySortOrdering(final HstRequest request, final HstQuery query) {
        String sortOrder = DESCENDING_SORT_ORDER;

        final List<String> sortByDateQueryParamValues = getQueryParameterValues(request, SORT_BY_DATE_QUERY_PARAM);
        if (!sortByDateQueryParamValues.isEmpty()) {
            sortOrder = sortByDateQueryParamValues.get(0);
        }

        if (sortOrder.equals(ASCENDING_SORT_ORDER)) {
            query.addOrderByAscending(LAST_MODIFICATION_DATE_BEAN_ATTRIBUTE);
        } else {
            query.addOrderByDescending(LAST_MODIFICATION_DATE_BEAN_ATTRIBUTE);
        }

        return query;
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

}