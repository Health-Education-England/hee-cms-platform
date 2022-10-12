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
 * Base component for Search Bank Listing Page.
 */
public class SearchBankListingPageComponent extends ListingPageComponent {

    private static final String TOPIC_QUERY_PARAM = "topic";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        request.setModel("selectedTopics", HstUtils.getQueryParameterValues(request, TOPIC_QUERY_PARAM));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));

        request.setModel("topicMap", getFilterValueListMap(request));
        request.setModel("keyTermMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.SEARCH_BANK_KEY_TERMS.getName()));
        request.setModel("providerMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.SEARCH_BANK_PROVIDERS.getName()));
    }

    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        return createTopicsFilter(request, query);
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
    private Filter createTopicsFilter(final HstRequest request, final HstQuery query) throws FilterException {
        final List<String> impactGroupFilter = HstUtils.getQueryParameterValues(request, TOPIC_QUERY_PARAM);
        return createOrFilter(query, impactGroupFilter, HEEField.TOPICS.getName());
    }
}
