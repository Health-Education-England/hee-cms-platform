package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoFacetNavigationBean;
import org.hippoecm.hst.content.beans.standard.HippoFolderBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.util.ContentBeanUtils;
import uk.nhs.hee.web.components.info.PublicationListingPageComponentInfo;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

/**
 * Base component for Publication Listing Page.
 */
@ParametersInfo(type = PublicationListingPageComponentInfo.class)
public class PublicationListingPageComponent extends ListingPageComponent {
    // Query parameters
    private static final String QUERY_PARAM_PUBLICATION_TYPE = "publicationType";
    private static final String QUERY_PARAM_PUBLICATION_TOPIC = "publicationTopic";
    private static final String QUERY_PARAM_PUBLICATION_PROFESSION = "publicationProfession";

    // Publication facet name
    private static final String PUBLICATION_FACET_NAVIGATION_RELATIVE_PATH = "publicationfacets";

    /* (non-Javadoc)
     * @see uk.nhs.hee.web.components.ListingPageComponent.doBeforeRender(final HstRequest request,
     * final HstResponse response)
     */
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        // Adds selected publication filters
        request.setModel("selectedPublicationTypes",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TYPE));
        request.setModel("selectedPublicationTopics",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TOPIC));
        request.setModel("selectedPublicationProfessions",
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_PROFESSION));
        request.setModel("selectedSortOrder", getSelectedSortOrder(request));

        // Adds all publications filters
        request.setModel("publicationTypeMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.PUBLICATION_TYPES.getName()));
        request.setModel("publicationTopicMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.PUBLICATION_TOPICS.getName()));
        request.setModel("publicationProfessionMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.PUBLICATION_PROFESSIONS.getName()));

        // Adds publication filter facets
        addPublicationFilterFacetsToModel(request);
    }

    /**
     * Builds Query {@link Filter} for publication listing.
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the Query {@link Filter} for publication listing.
     * @throws FilterException thrown when an error occurs while building Query {@link Filter}.
     */
    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        return createOrFilter(
                query,
                HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TYPE),
                HEEField.PUBLICATION_TYPE.getName()
        ).addAndFilter(
                createOrFilter(
                    query,
                    HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_TOPIC),
                    HEEField.PUBLICATION_TOPICS.getName()
                )
        ).addAndFilter(
                createOrFilter(
                        query,
                        HstUtils.getQueryParameterValues(request, QUERY_PARAM_PUBLICATION_PROFESSION),
                        HEEField.PUBLICATION_PROFESSIONS.getName()
                )
        );
    }

    /**
     * Returns {@link ListingPageType} for publication.
     *
     * @param request the {@link HstRequest} instance.
     * @return {@link ListingPageType} for publication.
     */
    @Override
    protected ListingPageType getListing(final HstRequest request) {
        return ListingPageType.getByName("publication");
    }

    /**
     * Adds channel-specific publication filter facets to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addPublicationFilterFacetsToModel(final HstRequest request) {
        final HippoFacetNavigationBean facetNavigation = getPublicationFacetedNavigation(request);

        if (facetNavigation == null) {
            return;
        }

        for (final HippoFolderBean folder : facetNavigation.getFolders()) {
            if (HEEField.PUBLICATION_TYPE.getName().equals(folder.getName())) {
                request.setModel("publicationTypeFacet", folder);
            } else if (HEEField.PUBLICATION_TOPICS.getName().equals(folder.getName())) {
                request.setModel("publicationTopicFacet", folder);
            } else if (HEEField.PUBLICATION_PROFESSIONS.getName().equals(folder.getName())) {
                request.setModel("publicationProfessionFacet", folder);
            }
        }
    }

    /**
     * Returns channel-specific faceted navigation ({@link HippoFacetNavigationBean}) for publication.
     *
     * It looks up for the faceted navigation node {@code publicationfacets} under the current channel content folder.
     * For instance, for {@code medical} channel, it would look up for {@code publicationfacets} node under
     * {@code /content/documents/medical} folder.
     *
     * @return the channel-specific faceted navigation ({@link HippoFacetNavigationBean}) for publication.
     */
    private HippoFacetNavigationBean getPublicationFacetedNavigation(final HstRequest request) {
        return ContentBeanUtils.getFacetNavigationBean(
                request.getRequestContext().getSiteContentBaseBean().getParentBean().getPath(), // Global
                PUBLICATION_FACET_NAVIGATION_RELATIVE_PATH,
                null);
    }

    /**
     * Returns root documents ({@code /content/documents}) folder.
     *
     * @param path the document path.
     * @return the root documents ({@code /content/documents}) folder.
     */
    @Override
    public HippoBean doGetScopeBean(final String path) {
        return super.doGetScopeBean(path).getParentBean();
    }

}
