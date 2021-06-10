package uk.nhs.hee.web.components;

import org.apache.commons.lang.StringUtils;
import org.hippoecm.hst.container.RequestContextProvider;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.forge.selection.hst.contentbean.ValueList;
import org.onehippo.forge.selection.hst.util.SelectionUtil;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.constants.HeeNodeType;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.Collections;
import java.util.List;
import java.util.Map;

/**
 * Base component for all Categories based Listing Pages.
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class CategoryBasedListingPageComponent extends ListingPageComponent {

    private static final String CATEGORY_QUERY_PARAM = "category";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        request.setModel("selectedCategories", HstUtils.getQueryParameterValues(request, CATEGORY_QUERY_PARAM));
        request.setModel("categoriesMap", getFilterValueListMap(request));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));
    }

    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        return createCategoryFilter(request, query);
    }

    /**
     * Returns Query Filters built based on the requested categories (identified by {@code category} query parameter).
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the {@link Filter} instance built based on the requested categories.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    private Filter createCategoryFilter(final HstRequest request, final HstQuery query) throws FilterException {
        final List<String> categoriesFilter = HstUtils.getQueryParameterValues(request, CATEGORY_QUERY_PARAM);
        return createOrFilter(query, categoriesFilter, HeeNodeType.CATEGORIES);
    }
}
