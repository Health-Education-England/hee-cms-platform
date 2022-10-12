package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.ObjectBeanManagerException;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.List;
import java.util.Map;

@ParametersInfo(type = EssentialsDocumentComponentInfo.class)
public class CookiesPageComponent extends EssentialsDocumentComponent {
    public static final String CHANNEL_PARAMETER_DOCUMENT = "document";
    public static final String CHANNEL_PARAMETER_FALLBACK_SITE_CONTENT_BASE_PATH = "fallbackSiteContentBasePath";
    public static final String CHANNEL_PARAMETER_FALLBACK_CHANNEL_DOMAIN_WITH_PROTOCOL =
            "fallbackChannelDomainWithProtocol";

    private static final Logger LOGGER = LoggerFactory.getLogger(CookiesPageComponent.class);

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        Guidance cookieGuidance = request.getModel(REQUEST_ATTR_DOCUMENT);

        if (cookieGuidance == null) {
            LOGGER.debug("No 'Cookies' Guidance/Standard Content Page document exists on the current channel (root). " +
                    "Checking if one exists on the fallback channel configured via 'fallbackSiteContentBasePath' " +
                    "component parameter.");
            addFallbackCookiePageToModel(request, response);
            addCanonicalLink(request);
        }

        cookieGuidance = request.getModel(REQUEST_ATTR_DOCUMENT);

        if (cookieGuidance == null) {
            return;
        }

        // the page content blocks needs valueLists to be set on the model
        final List<HippoBean> pageContentBlocks = cookieGuidance.getContentBlocks();
        pageContentBlocks.addAll(cookieGuidance.getRightHandBlocks());

        final Map<String, Map<String, String>> modelToValueListMap =
                ContentBlocksUtils.getValueListMaps(pageContentBlocks);
        modelToValueListMap.forEach(request::setModel);

        request.setAttribute("tableComponentService", new TableComponentService());
    }

    private void addFallbackCookiePageToModel(final HstRequest request, final HstResponse response) {
        final String fallbackSiteContentBasePath =
                getComponentParameter(CHANNEL_PARAMETER_FALLBACK_SITE_CONTENT_BASE_PATH);
        LOGGER.debug("Configured '{}' component parameter = {}",
                CHANNEL_PARAMETER_FALLBACK_SITE_CONTENT_BASE_PATH, fallbackSiteContentBasePath);

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
                fallbackSiteContentBean.getBean(getComponentParameter(CHANNEL_PARAMETER_DOCUMENT), Guidance.class);

        if (fallbackCookieGuidance == null) {
            pageNotFound(response);
            return;
        }

        LOGGER.debug("'Cookies' Guidance/Standard Content Page document exists on the " +
                        "fallback channel content base path '{}' configured via '{}'",
                fallbackSiteContentBasePath, CHANNEL_PARAMETER_FALLBACK_SITE_CONTENT_BASE_PATH);
        request.setModel(REQUEST_ATTR_DOCUMENT, fallbackCookieGuidance);
    }

    private void addCanonicalLink(final HstRequest request) {
        final String fallbackChannelDomainWithProtocol =
                getComponentParameter(CHANNEL_PARAMETER_FALLBACK_CHANNEL_DOMAIN_WITH_PROTOCOL);
        LOGGER.debug("Configured '{}' component parameter = {}",
                CHANNEL_PARAMETER_FALLBACK_CHANNEL_DOMAIN_WITH_PROTOCOL, fallbackChannelDomainWithProtocol);

        request.setModel(Model.CANONICAL_URL.getKey(),
                getComponentParameter(CHANNEL_PARAMETER_FALLBACK_CHANNEL_DOMAIN_WITH_PROTOCOL) + "/cookies");
    }
}
