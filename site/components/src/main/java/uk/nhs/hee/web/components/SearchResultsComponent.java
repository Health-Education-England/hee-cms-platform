package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;
import uk.nhs.hee.web.beans.ListingPage;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.StringUtils;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ParametersInfo(type = EssentialsDocumentComponentInfo.class)
public class SearchResultsComponent extends ListingPageComponent {
    private static final String CONTENT_TYPE_QUERY_PARAM = "contentTypes";
    private static final String SEARCH_TEXT_QUERY_PARAM = "q";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        request.setModel("contentTypesMap", buildContentMaps(request.getModel(REQUEST_ATTR_DOCUMENT)));
        request.setModel("selectedContentTypes", HstUtils.getQueryParameterValues(request, CONTENT_TYPE_QUERY_PARAM));
        request.setModel("searchText", request.getParameter(SEARCH_TEXT_QUERY_PARAM));
    }

    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        final Filter baseFilter = query.createFilter();

        final String searchText = request.getParameter(SEARCH_TEXT_QUERY_PARAM);
        if (StringUtils.isNotEmpty(searchText)) {
            final Filter searchTextFilter = query.createFilter();
            searchTextFilter.addContains(".", searchText);

            baseFilter.addAndFilter(searchTextFilter);
        }

        return baseFilter;
    }

    @Override
    protected String[] getDocumentTypes(final HstRequest request, final ListingPage listingPage) {
        final List<String> selectedContentTypes = HstUtils.getQueryParameterValues(request, CONTENT_TYPE_QUERY_PARAM);
        if (!selectedContentTypes.isEmpty()) {
            return selectedContentTypes.toArray(new String[0]);
        }

        return listingPage.getDocumentTypes();
    }

    private Map<String, String> buildContentMaps(final ListingPage listingPage) {
        final String[] documentTypes = listingPage.getDocumentTypes();
        return Arrays.stream(documentTypes)
                .collect(Collectors.toMap(
                        documentType -> documentType,
                        StringUtils::getDocumentTypeDisplayName));
    }
}
