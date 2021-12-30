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
    private boolean allowCookies = false;
    private boolean showBanner = true;

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        Cookie cookies[] = request.getCookies();
        for(int i=0; cookies!=null && i<cookies.length; i++) {
            if (cookies[i].getName().equals("analyticsCookie")){
                allowCookies = Boolean.parseBoolean((cookies[i].getValue()));
                showBanner = false;
            }
        }
        request.setModel("allowCookies", allowCookies);
        request.setModel("showBanner", showBanner);
    }
}
