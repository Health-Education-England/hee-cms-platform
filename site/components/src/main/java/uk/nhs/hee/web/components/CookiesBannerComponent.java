package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.CommonComponent;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;

import javax.servlet.http.Cookie;

/**
 * Component class for {@code cookies} abstract base component
 */
public class CookiesBannerComponent extends CommonComponent {
    private static final String ANALYTICS_COOKIE_NAME = "cookie_consent";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        boolean cookieConsent = false;
        boolean showCookiesBanner = true;

        final Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (final Cookie cookie : cookies) {
                if (cookie.getName().equals(ANALYTICS_COOKIE_NAME)) {
                    cookieConsent = Boolean.parseBoolean((cookie.getValue()));
                    showCookiesBanner = false;
                }
            }
        }

        request.setModel("cookie_consent", cookieConsent);
        request.setModel("showCookiesBanner", showCookiesBanner);
    }
}
