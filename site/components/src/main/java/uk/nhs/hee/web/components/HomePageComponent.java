package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.EssentialsContentComponent;
import uk.nhs.hee.web.beans.HomePage;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.Map;

/**
 * Component for Home page.
 */
public class HomePageComponent extends EssentialsContentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final HomePage homePage = request.getModel(REQUEST_ATTR_DOCUMENT);

        // the page content blocks needs valueLists to be set on the model
        Map<String, Map<String, String>> modelToValueListMap =
                ContentBlocksUtils.getValueListMaps(homePage.getContentBlocks());
        modelToValueListMap.forEach(request::setModel);

        request.setAttribute("tableComponentService", new TableComponentService());
        request.setModel("featuredContentBlockService", new FeaturedContentBlockService());
    }
}