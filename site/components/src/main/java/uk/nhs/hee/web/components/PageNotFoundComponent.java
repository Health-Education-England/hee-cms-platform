package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.NotFoundPage;
import uk.nhs.hee.web.components.info.NotFoundPageComponentInfo;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.List;
import java.util.Map;




import javax.servlet.http.HttpServletResponse;

/**
 * An extension of {@link LandingPageComponent} class to render {@code Page not found}.
 */
@ParametersInfo(type = NotFoundPageComponentInfo.class)
public class PageNotFoundComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        final NotFoundPage notFoundPage = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (notFoundPage != null) {
            // the page content blocks needs valueLists to be set on the model
            List<HippoBean> pageContentBlocks = (List<HippoBean>) notFoundPage.getContentBlocks();

            Map<String, Map<String, String>> modelToValueListMap =
                    ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);

            request.setModel("featuredContentBlockService", new FeaturedContentBlockService());
        }
        // Sets 404 status code
        response.setStatus(HttpServletResponse.SC_NOT_FOUND);
    }
}
