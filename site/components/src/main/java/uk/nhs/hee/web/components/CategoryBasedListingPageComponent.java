package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.List;

/**
 * Base component for all Categories based Listing Pages.
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class CategoryBasedListingPageComponent extends ListingPageComponent {

    private static final String CATEGORY_QUERY_PARAM = "category";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        // To avoid component processing the request when it has just been dropped on a page (via experience manager)
        // but, the listing page document hasn't been chosen yet.
        if (getListingPageModel(request) == null) {
            return;
        }

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
        return createOrFilter(query, categoriesFilter, HEEField.CATEGORIES.getName());
    }
}
