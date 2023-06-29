package uk.nhs.hee.web.components;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import static org.apache.commons.lang3.StringUtils.isNotEmpty;

@ParametersInfo(type = EssentialsDocumentComponentInfo.class)
public class SearchResultsComponent extends ListingPageComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(SearchResultsComponent.class);

    private static final String SEARCH_TEXT_QUERY_PARAM = "q";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        final String searchText = getSearchText(request);

        if (hasInvalidSearchTerms(searchText)) {
            LOGGER.warn("The requested search text '{}' contains one or more of the invalid search terms. " +
                            "Will respond with '{}' error response.", searchText, HttpServletResponse.SC_BAD_REQUEST);

            try {
                response.sendError(HttpServletResponse.SC_BAD_REQUEST);
            } catch (final IOException e) {
                LOGGER.error("Caught error '{}' while sending '{}' status error response",
                        e.getMessage(), HttpServletResponse.SC_BAD_REQUEST, e);
            }
            return;
        }

        super.doBeforeRender(request, response);

        request.setModel("searchText", getSearchText(request));
    }

    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        final Filter baseFilter = query.createFilter();

        String searchText = getSearchText(request);
        if (isNotEmpty(searchText)) {
            searchText = searchText.trim();

            if (searchText.startsWith("\"") && searchText.endsWith("\"")) {
                // Phrase search
                baseFilter.addAndFilter(buildSearchFilter(query, searchText));
            } else {
                // Performs search based on the space delimited words/terms
                Filter searchTermFilters = null;
                for (final String searchTerm : searchText.split("\\s+")) {
                    if (searchTermFilters == null) {
                        searchTermFilters = buildSearchFilter(query, searchTerm);
                    } else {
                        searchTermFilters = searchTermFilters.addOrFilter(buildSearchFilter(query, searchTerm));
                    }
                }

                baseFilter.addAndFilter(searchTermFilters);
            }
        }

        return baseFilter;
    }

    /**
     * Builds {@code OR} search {@link Filter} on {@code hee:title} and (all) document fields
     * using the given {@code searchTerm}.
     *
     * @param query      the {@link HstQuery} instance.
     * @param searchTerm the search term/word with which Filter needs to be build.
     * @return {@code OR} search {@link Filter} on {@code hee:title} and (all) document fields
     * using the given {@code searchTerm}.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    private Filter buildSearchFilter(final HstQuery query, final String searchTerm) throws FilterException {
        // Filter that searches the 'searchText' on Title field.
        final Filter titleFilter = query.createFilter();
        titleFilter.addContains("hee:title", searchTerm);

        // Filter that searches the 'searchText' on all document fields.
        final Filter documentFilter = query.createFilter();
        documentFilter.addContains(".", searchTerm);

        return titleFilter.addOrFilter(documentFilter);
    }

    /**
     * Returns requested search text (via 'q' parameter).
     *
     * @param request the {@link HstRequest} instance.
     * @return the requested search text (via 'q' parameter).
     */
    private String getSearchText(final HstRequest request) {
        return cleanupSearchQuery(request.getParameter(SEARCH_TEXT_QUERY_PARAM));
    }

    /**
     * Returns {@code true} if the requested {@code searchText} contains one or more of the {@code invalidSearchTerms}
     * configured in the component. Otherwise, returns {@code false}.
     *
     * @param searchText the requested search text.
     * @return {@code true} if the requested {@code searchText} contains one or more of the {@code invalidSearchTerms}
     * configured in the component. Otherwise, returns {@code false}.
     */
    private boolean hasInvalidSearchTerms(final String searchText) {
        if (StringUtils.isEmpty(searchText)) {
            return false;
        }

        final String invalidSearchTerms = getComponentParameter("invalidSearchTerms");

        LOGGER.debug("Invalid search terms configured in the component: {}", invalidSearchTerms);

        if (StringUtils.isEmpty(invalidSearchTerms)) {
            return false;
        }

        final List<String> invalidSearchTermList = Arrays.stream(invalidSearchTerms.split(","))
                .map(String::trim)
                .collect(Collectors.toList());
        LOGGER.debug("Parsed invalid search terms as list: {}", invalidSearchTermList);

        return invalidSearchTermList.stream().anyMatch(searchText.toLowerCase()::contains);
    }

}
