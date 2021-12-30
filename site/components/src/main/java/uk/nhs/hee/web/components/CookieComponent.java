package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;

import javax.servlet.http.Cookie;

/**
 * Component class for {@code cookies} abstract base component
 */
@ParametersInfo(type = EssentialsDocumentComponentInfo.class)
public class CookieComponent extends EssentialsDocumentComponent {
    private static final String ANALYTICS_COOKIE_NAME = "analyticsCookie";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        boolean allowCookies = false;
        boolean showBanner = true;

        final Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (final Cookie cookie : cookies) {
                if (cookie.getName().equals(ANALYTICS_COOKIE_NAME)) {
                    allowCookies = Boolean.parseBoolean((cookie.getValue()));
                    showBanner = false;
                }
            }
        }

        request.setModel("allowCookies", allowCookies);
        request.setModel("showBanner", showBanner);
    }
}
