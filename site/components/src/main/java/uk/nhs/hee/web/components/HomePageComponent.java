package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.EssentialsContentComponent;
import uk.nhs.hee.web.beans.HomePage;
import uk.nhs.hee.web.beans.NavMap;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.utils.ValueListUtils;

import java.util.List;

/**
 * Component for Home page.
 */
public class HomePageComponent extends EssentialsContentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final HomePage homePage = request.getModel(REQUEST_ATTR_DOCUMENT);
        final List<HippoBean> contentBlocks = (List<HippoBean>) homePage.getContentBlocks();
        final boolean hasNavMap = contentBlocks.stream().anyMatch(NavMap.class::isInstance);

        // Add 'NavMapRegions' value-list (as a map) to the model
        // if the Content Block contains at least one hee:navMap block.
        if (hasNavMap) {
            request.setModel(Model.NAV_MAP_REGION_MAP.getKey(),
                    ValueListUtils.getValueListMap(ValueListIdentifier.NAV_MAP_REGIONS.getName()));
        }
    }
}
