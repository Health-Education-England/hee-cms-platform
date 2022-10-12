package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.CommonComponent;

import javax.servlet.http.Cookie;

/**
 * Component class for {@code cookies} abstract base component
 */
public class CookiesBannerComponent extends CommonComponent {
    private static final String ANALYTICS_COOKIE_NAME = "analyticsCookie";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        boolean allowAnalyticsCookies = false;
        boolean showCookiesBanner = true;

        final Cookie[] cookies = request.getCookies();
        if (cookies != null && cookies.length > 0) {
            for (final Cookie cookie : cookies) {
                if (cookie.getName().equals(ANALYTICS_COOKIE_NAME)) {
                    allowAnalyticsCookies = Boolean.parseBoolean((cookie.getValue()));
                    showCookiesBanner = false;
                }
            }
        }

        request.setModel("allowAnalyticsCookies", allowAnalyticsCookies);
        request.setModel("showCookiesBanner", showCookiesBanner);
    }
}
