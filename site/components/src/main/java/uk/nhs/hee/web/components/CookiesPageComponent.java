package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.ObjectBeanManagerException;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.components.info.CookiesPageComponentInfo;

@ParametersInfo(type = CookiesPageComponentInfo.class)
public class CookiesPageComponent extends GuidanceComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(CookiesPageComponent.class);

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        final Guidance cookieGuidance = request.getModel(REQUEST_ATTR_DOCUMENT);

        if (cookieGuidance != null) {
            return;
        }

        LOGGER.debug("No 'Cookies' Guidance/Standard Content Page document exists on the current channel. " +
                "Checking if one exists on the fallback channel configured via 'fallbackSiteContentBasePath' " +
                "component parameter.");

        final String fallbackSiteContentBasePath = getComponentParameter("fallbackSiteContentBasePath");
        LOGGER.debug("Configured 'fallbackSiteContentBasePath' component parameter = {}",
                fallbackSiteContentBasePath);

        HippoBean fallbackSiteContentBean = null;
        try {
            fallbackSiteContentBean = (HippoBean) request.getRequestContext()
                    .getObjectBeanManager().getObject(fallbackSiteContentBasePath);
        } catch (final ObjectBeanManagerException e) {
            LOGGER.info(
                    "Caught error '{}' while getting HippoBean object for the path '{}'",
                    e.getMessage(),
                    fallbackSiteContentBasePath,
                    e);
        }

        if (fallbackSiteContentBean == null) {
            pageNotFound(response);
            return;
        }

        final Guidance fallbackCookieGuidance =
                fallbackSiteContentBean.getBean(getComponentParameter("document"), Guidance.class);

        if (fallbackCookieGuidance == null) {
            pageNotFound(response);
            return;
        }

        LOGGER.debug("'Cookies' Guidance/Standard Content Page document exists on the " +
                        "fallback channel content base path '{}' configured via 'fallbackSiteContentBasePath'",
                fallbackSiteContentBasePath);
        request.setModel(REQUEST_ATTR_DOCUMENT, fallbackCookieGuidance);
    }
}
