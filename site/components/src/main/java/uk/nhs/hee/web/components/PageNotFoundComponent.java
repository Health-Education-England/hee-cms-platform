package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import uk.nhs.hee.web.components.info.LandingPageComponentInfo;

import javax.servlet.http.HttpServletResponse;

/**
 * An extension of {@link LandingPageComponent} class to render {@code Page not found}.
 */
@ParametersInfo(type = LandingPageComponentInfo.class)
public class PageNotFoundComponent extends LandingPageComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        // Sets 404 status code
        response.setStatus(HttpServletResponse.SC_NOT_FOUND);
    }
}
