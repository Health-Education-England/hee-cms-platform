package uk.nhs.hee.web.components;

import org.apache.commons.lang3.tuple.ImmutablePair;
import org.apache.commons.lang3.tuple.Pair;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.builder.HstQueryBuilder;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoBeanIterator;
import org.hippoecm.hst.core.component.HstComponentException;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.AtozPage;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.beans.MiniHub;
import uk.nhs.hee.web.components.info.AToZPageComponentInfo;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.*;

/**
 * Base component for A to Z Listing Page.
 */
@ParametersInfo(type = AToZPageComponentInfo.class)
public class AToZListingPageComponent extends EssentialsDocumentComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(AToZListingPageComponent.class);

    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        final Map<String, List<Pair>> aToZMap;
        try {
            aToZMap = executeAtoZQuery(request);
            request.setModel("atozmap", aToZMap);
        } catch (final QueryException e) {
            throw new HstComponentException("An error has occurred while trying to execute hst query.", e);
        }
    }

    /**
     * Builds and executes the Query to list pages for the A to Z Page request.
     *
     * @param request the {@link HstRequest} instance.
     * @return the {@link Map<String, List<Pair>>} instance populated with alphabeticised lists containing title and url of pages that meets the criteria
     * @throws QueryException thrown when an error occurs during execution of the query built.
     */
    private Map<String, List<Pair>> executeAtoZQuery(final HstRequest request) throws QueryException {
        final Map <String, List<Pair>> atozmap = new HashMap<String, List<Pair>>();
        for (char ch = 'A'; ch <= 'Z'; ++ch)
            atozmap.put(String.valueOf(ch), null);

        final AtozPage atozPage = request.getModel(REQUEST_ATTR_DOCUMENT);

        final HstQuery query = buildQuery(request, atozPage);
        LOGGER.debug("Execute query: {}", query.getQueryAsString(false));
        final HstQueryResult results = query.execute();

        final HippoBeanIterator beans = results.getHippoBeans();
        while (beans.hasNext()) {
            final HippoBean bean = beans.nextHippoBean();
            if (bean != null) {
                String firstChar = String.valueOf(bean.getSingleProperty("hee:title").toString().charAt(0)).toUpperCase();
                final Pair<String, String> page = new ImmutablePair(bean.getSingleProperty("hee:title"), getPageUrl(request, bean));
                if (atozmap.get(firstChar) == null) {
                    atozmap.put(firstChar, new ArrayList<>(Arrays.asList(page)));
                } else {
                    atozmap.get(firstChar).add(page);
                }
            }
        }
        return atozmap;
    }

    /**
     * Builds Query for the A to Z Page request.
     *
     * @param request     the {@link HstRequest} instance.
     * @param atozPage    the {@link AtozPage} instance.
     * @return the {@link HstQuery} instance built for the current Listing Page request.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    private HstQuery buildQuery(final HstRequest request, final AtozPage atozPage) throws FilterException {
        final String documentPath = atozPage.getPath();
        final HippoBean scopeBean = doGetScopeBean(documentPath);

        final HstQuery query = createQuery(scopeBean, ListingPageType.ATOZ_LISTING.getDocumentTypes());
        query.setFilter(createQueryFilter(request, query));
        query.addOrderByAscending(HEEField.DOCUMENT_TITLE.getName());

        return query;
    }

    /**
     * Constructs the page url depending on whether the page is a MiniHub
     *
     * @param request   the {@link HstRequest} instance.
     * @param bean      the {@link HippoBean} instance.
     * @return the {@link String} instance.
     */
    protected String getPageUrl(final HstRequest request, HippoBean bean) {
        final boolean isMinihub = bean.getContentType().equals("hee:MiniHub");
        String pageUrl = "";
        if (isMinihub) {
            final List<Guidance> guidanceDocs = ((MiniHub) bean).getGuidancePages();
            pageUrl = HstUtils.getURLByBean(request.getRequestContext(), bean, false)
                    + "/"
                    + guidanceDocs.get(0).getName();

        } else {
            pageUrl = HstUtils.getURLByBean(request.getRequestContext(), bean, false);
        }
        return pageUrl;
    }

    /**
     * Returns {@link HstQuery} built based on the given {@code scope} bean and {@code documentTypes}.
     *
     * @param scope         the scope {@link HippoBean} instance.
     * @param documentTypes the list of document types against which the query needs to be executed.
     * @return the {@link HstQuery} built based on the given {@code scope} bean and {@code documentTypes}.
     */
    private HstQuery createQuery(final HippoBean scope, final String[] documentTypes) {
        final HstQueryBuilder builder = HstQueryBuilder.create(scope);
        return builder.ofTypes(documentTypes).build();
    }

    /**
     * Filter for documents that have been marked to add to A to Z
     *
     * @param request the {@link HstRequest} instance.
     * @param query   the {@link HstQuery} instance.
     * @return the {@link Filter} instance built based on the given inputs.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
    protected Filter createQueryFilter(final HstRequest request, final HstQuery query) throws FilterException {
        Filter baseFilter = query.createFilter();
        baseFilter.addEqualTo("hee:addToAZ", true);
        return baseFilter;
    }
}
