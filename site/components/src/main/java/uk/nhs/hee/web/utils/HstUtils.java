package uk.nhs.hee.web.utils;

import org.apache.commons.lang.StringUtils;
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

public class HstUtils {
    private static final Logger LOGGER = LoggerFactory.getLogger(HstUtils.class);

    public static List<String> getQueryParameterValues(final HstRequest request, final String parameter) {
        final String[] parameterValues = request.getParameterValues(parameter);
        if (parameterValues == null) {
            return Collections.emptyList();
        }

        return Arrays.asList(parameterValues);
    }

    /**
     * Returns URL corresponding to the given {@code siteMapItemRefId} if exists. Otherwise, an EMPTY string
     * if the given {@code siteMapItemRefId} doesn't exists.
     *
     * @param requestContext   the {@link HstRequestContext} instance.
     * @param siteMapItemRefId the HstSiteMapItem.getRefId() of the HstSiteMapItem to link to.
     * @param fullQualified    if true, the returned link is a fully qualified URL,
     *                         in other words including http/https etc.
     * @return The URL corresponding to the given {@code siteMapItemRefId}. Otherwise, an EMPTY string
     * if the given {@code siteMapItemRefId} doesn't exists.
     */
    public static String getURLBySiteMapItemRefId(final HstRequestContext requestContext, final String siteMapItemRefId, final boolean fullQualified) {
        final HstLink hstLink = requestContext.getHstLinkCreator().createByRefId(
                siteMapItemRefId,
                requestContext.getResolvedSiteMapItem().getResolvedMount().getMount());

        if (hstLink == null) {
            return StringUtils.EMPTY;
        }

        return hstLink.toUrlForm(requestContext, fullQualified);
    }

    /**
     * Returns {@code true} if the URL for the given {@code hippoBean} is found.
     * Otherwise, returns {@code false}.
     *
     * @param requestContext the {@link HstRequestContext} instance.
     * @param hippoBean      the {@link HippoBean} instance.
     * @return {@code true} if the URL for the given {@code hippoBean} is found.
     * Otherwise, returns {@code false}.
     */
    public static boolean isPageFound(final HstRequestContext requestContext, final HippoBean hippoBean) {
        return !requestContext.getHstLinkCreator().create(hippoBean, requestContext).isNotFound();
    }

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
