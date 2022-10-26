package uk.nhs.hee.web.utils;

import org.apache.commons.lang.StringUtils;
import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.builder.HstQueryBuilder;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.ListingPage;
import uk.nhs.hee.web.repository.HEEField;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static org.hippoecm.hst.content.beans.query.builder.ConstraintBuilder.constraint;

/**
 * Class containing HST utility methods.
 */
public class HstUtils {
    public static final String PAGE_NOT_FOUND_SITE_MAP_PATH = "pagenotfound";
    private static final Logger LOGGER = LoggerFactory.getLogger(HstUtils.class);

    /**
     * Private constructor to restrict instantiating this utility class.
     */
    private HstUtils() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Returns values of the given {@code parameter} as {@link List<String>}
     * if available in the {@code request} instance. Otherwise, returns an empty list.
     *
     * @param request   the {@link HstRequestContext} instance.
     * @param parameter the parameter whose values needs to be returned.
     * @return values of the given {@code parameter} as {@link List<String>}
     * if available in the {@code request} instance. Otherwise, returns an empty list.
     */
    public static List<String> getQueryParameterValues(final HstRequest request, final String parameter) {
        final String[] parameterValues = request.getParameterValues(parameter);
        if (parameterValues == null) {
            return Collections.emptyList();
        }

        return Arrays.asList(parameterValues);
    }

    /**
     * Returns URL for the given {@code hippoBean} instance.
     *
     * @param requestContext the {@link HstRequestContext} instance.
     * @param hippoBean      the {@link HippoBean} instance whose URL needs to be returned.
     * @param fullQualified  Boolean indicating whether to return fully qualified URL or not.
     * @return the URL for the given {@code hippoBean} instance.
     */
    public static String getURLByBean(
            final HstRequestContext requestContext,
            final HippoBean hippoBean,
            final boolean fullQualified) {
        final HstLink hstLink = requestContext.getHstLinkCreator().create(hippoBean, requestContext);

        if (hstLink == null) {
            return StringUtils.EMPTY;
        }

        return hstLink.toUrlForm(requestContext, fullQualified);
    }

    /**
     * Returns {@code pagenotfound} {@link HstLink} instance.
     *
     * @param requestContext the {@link HstRequestContext} instance.
     * @param mount          the {@link Mount} instance.
     * @return {@code pagenotfound} {@link HstLink} instance.
     */
    private static HstLink getPageNotFoundLink(
            final HstRequestContext requestContext,
            final Mount mount
    ) {
        return requestContext.getHstLinkCreator().create(PAGE_NOT_FOUND_SITE_MAP_PATH, mount);
    }

    /**
     * Returns {@code pagenotfound} URL (as a string).
     *
     * @param requestContext the {@link HstRequestContext} instance.
     * @param mount          the {@link Mount} instance.
     * @param fullyQualified boolean indicating whether to return fully qualified URL or not.
     * @return {@code pagenotfound} URL (as a string).
     */
    public static String getPageNotFoundURL(
            final HstRequestContext requestContext,
            final Mount mount,
            final boolean fullyQualified
    ) {
        final HstLink pageNotFoundLink = getPageNotFoundLink(requestContext, mount);

        if (pageNotFoundLink == null) {
            LOGGER.error("'pagenotfound' hst:sitemapitem hasn't been configured. Please verify.");
            return null;
        }

        return pageNotFoundLink.toUrlForm(requestContext, fullyQualified);
    }

    /**
     * Returns {@code true} if the given {@code link} is a {@code pagenotfound} link.
     * Otherwise, returns {@code false}.
     *
     * @param link           the {@link HstLink} instance which needs to be verified
     *                       if it is {@code pagenotfound} link or not.
     * @param fullyQualified boolean indicating that the given {@code link} is a fully-qualified one.
     * @param requestContext the {@link HstRequestContext} instance.
     * @param mount          the {@link Mount} instance.
     * @return {@code true} if the given {@code link} is a {@code pagenotfound} link. Otherwise, returns {@code false}.
     */
    public static boolean isPageNotFound(
            final HstLink link,
            final boolean fullyQualified,
            final HstRequestContext requestContext,
            final Mount mount
    ) {
        return isPageNotFound(link.toUrlForm(requestContext, fullyQualified), fullyQualified, requestContext, mount);
    }

    /**
     * Returns {@code true} if the given {@code url} is a {@code pagenotfound} URL.
     * Otherwise, returns {@code false}.
     *
     * @param url            the URL string which needs to be verified if it is a {@code pagenotfound} URL or not.
     * @param fullyQualified boolean indicating that the given {@code link} is a fully-qualified one.
     * @param requestContext the {@link HstRequestContext} instance.
     * @param mount          the {@link Mount} instance.
     * @return {@code true} if the given {@code url} is a {@code pagenotfound} URL.
     * Otherwise, returns {@code false}.
     */
    public static boolean isPageNotFound(
            final String url,
            final boolean fullyQualified,
            final HstRequestContext requestContext,
            final Mount mount
    ) {
        final HstLink pageNotFoundLink = getPageNotFoundLink(requestContext, mount);

        if (pageNotFoundLink == null) {
            LOGGER.error("'pagenotfound' hst:sitemapitem hasn't been configured. Please verify.");
            return false;
        }

        return pageNotFoundLink.toUrlForm(requestContext, fullyQualified).equals(url);
    }

    /**
     * Returns {@link HippoBean} corresponding to the given {@code listingType}.
     *
     * @param requestContext the {@link HstRequestContext} instance.
     * @param listingType    the Listing Page Type.
     * @return the {@link HippoBean} corresponding to the given {@code listingType}.
     */
    public static HippoBean getListingPageBeanByType(final HstRequestContext requestContext, final String listingType) {
        final HstQueryBuilder builder = HstQueryBuilder.create(requestContext.getSiteContentBaseBean());
        final HstQuery query = builder.ofTypes(ListingPage.class)
                .where(constraint(HEEField.LISTING_TYPE.getName()).equalTo(listingType))
                .limit(1)
                .build();

        try {
            final HstQueryResult results = query.execute();

            if (results.getHippoBeans().hasNext()) {
                return results.getHippoBeans().nextHippoBean();
            }
        } catch (final QueryException e) {
            LOGGER.error("Caught error {} while searching for '{}' type Listing Page", e.getMessage(), listingType, e);
        }

        return null;
    }
}
