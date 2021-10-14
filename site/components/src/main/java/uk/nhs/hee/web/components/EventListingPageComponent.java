package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.repository.HippoStdNodeType;
import org.hippoecm.repository.util.DateTools;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;

import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.query.Query;
import javax.jcr.query.QueryResult;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Event Listing Page Component.
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class EventListingPageComponent extends ListingPageComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(EventListingPageComponent.class);

    private static final String YEAR_QUERY_PARAM = "year";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        request.setModel("selectedYears", HstUtils.getQueryParameterValues(request, YEAR_QUERY_PARAM));
        request.setModel("years", getDistinctEventYears(request));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));
    }

    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        return createEventDateFilter(request, query);
    }

    /**
     * Returns Query Filters built based on the requested years (identified by {@code year} query parameter).
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the {@link Filter} instance built based on the requested years.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    private Filter createEventDateFilter(final HstRequest request, final HstQuery query) throws FilterException {
        final List<String> yearsFilter = HstUtils.getQueryParameterValues(request, YEAR_QUERY_PARAM);
        final Filter baseFilter = query.createFilter();

        for (final String year : yearsFilter) {
            final Filter filter = query.createFilter();
            final Calendar yearCalendar = Calendar.getInstance();
            yearCalendar.set(Calendar.YEAR, Integer.parseInt(year));
            filter.addBetween(HEEField.DATE.getName(), yearCalendar, yearCalendar, DateTools.Resolution.YEAR);
            baseFilter.addOrFilter(filter);
        }

        return baseFilter;
    }

    /**
     * Returns distinct event years (as a {@link List<Integer>})
     * based on the events (as {@code hee:event} documents) available in CMS.
     *
     * @param request the {@link HstRequest} instance.
     * @return the distinct event years based on the events (as {@code hee:event} documents) available in CMS.
     */
    private List<Integer> getDistinctEventYears(final HstRequest request) {
        final Set<Integer> eventYearsSet = new HashSet<>();
        try {
            final Query query = request.getRequestContext().getSession().getWorkspace().getQueryManager().createQuery(
                    String.format("SELECT date FROM [hee:event] WHERE [%s] = '%s'",
                            HippoStdNodeType.HIPPOSTD_STATE, HippoStdNodeType.PUBLISHED),
                    Query.JCR_SQL2);
            final QueryResult results = query.execute();
            final NodeIterator eventNodeIterator = results.getNodes();

            while (eventNodeIterator.hasNext()) {
                eventYearsSet.add(eventNodeIterator.nextNode()
                        .getProperty(HEEField.DATE.getName()).getDate().get(Calendar.YEAR));
            }
        } catch (final RepositoryException e) {
            LOGGER.error("Caught {} while extracting distinct event years from 'hee:event' documents",
                    e.getMessage(), e);
        }

        if (eventYearsSet.isEmpty()) {
            return Collections.emptyList();
        }

        final List<Integer> distinctEventYearsList =
                eventYearsSet.stream().sorted().collect(Collectors.toCollection(ArrayList::new));
        LOGGER.debug("Distinct event years extracted from 'hee:event' documents = {}", distinctEventYearsList);

        return distinctEventYearsList;
    }
}
