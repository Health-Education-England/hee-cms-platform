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
 * Base component for Case Study Listing Page.
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class CaseStudyListingPageComponent extends ListingPageComponent {

    private static final String IMPACT_GROUP_QUERY_PARAM = "impactGroup";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        request.setModel("selectedImpactGroups", HstUtils.getQueryParameterValues(request, IMPACT_GROUP_QUERY_PARAM));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));

        request.setModel("impactGroupMap", getFilterValueListMap(request));
        request.setModel("impactTypesMap", getValueListMapByIdentifier("caseStudyImpactTypes"));
        request.setModel("sectorMap", getValueListMapByIdentifier("caseStudySectors"));
        request.setModel("regionMap", getValueListMapByIdentifier("regions"));
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
