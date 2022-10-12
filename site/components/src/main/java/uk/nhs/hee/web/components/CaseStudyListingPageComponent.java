package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

import java.util.List;

/**
 * Base component for Case Study Listing Page.
 */
public class CaseStudyListingPageComponent extends ListingPageComponent {

    private static final String IMPACT_GROUP_QUERY_PARAM = "impactGroup";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        request.setModel("selectedImpactGroups",
                HstUtils.getQueryParameterValues(request, IMPACT_GROUP_QUERY_PARAM));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));

        request.setModel("impactGroupMap", getFilterValueListMap(request));
        request.setModel("impactTypesMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.CASE_STUDY_IMPACT_TYPES.getName()));
        request.setModel("sectorMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.CASE_STUDY_SECTORS.getName()));
        request.setModel("regionMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.CASE_STUDY_REGIONS.getName()));
        request.setModel("providerMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.CASE_STUDY_PROVIDERS.getName()));
    }

    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        return createImpactGroupFilter(request, query);
    }

    /**
     * Returns Query Filters built based on the requested impactGroups
     * (identified by {@code impactGroup} query parameter).
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the {@link Filter} instance built based on the requested impactedGroups.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    private Filter createImpactGroupFilter(final HstRequest request, final HstQuery query) throws FilterException {
        final List<String> impactGroupFilter = HstUtils.getQueryParameterValues(request, IMPACT_GROUP_QUERY_PARAM);
        return createOrFilter(query, impactGroupFilter, HEEField.IMPACT_GROUP.getName());
    }
}
