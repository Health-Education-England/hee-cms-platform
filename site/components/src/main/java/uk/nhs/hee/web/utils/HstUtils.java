package uk.nhs.hee.web.utils;

import org.apache.commons.lang.StringUtils;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class HstUtils {
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

}
