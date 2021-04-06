package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;
import uk.nhs.hee.web.beans.ListingPage;
import uk.nhs.hee.web.constants.HeeNodeType;

@ParametersInfo(type = EssentialsDocumentComponentInfo.class)
public class SearchResultsComponent extends ListingPageComponent {
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

    }

    protected String[] getDocumentTypes(ListingPage listingPage) {
        return new String[]{HeeNodeType.LANDING_PAGE_TYPE,
                HeeNodeType.GUIDANCE_PAGE_TYPE,
                HeeNodeType.MINIHUB_TYPE,
                HeeNodeType.BULLETIN_TYPE};
    }

    @Override
    protected boolean isBulletinPage() {
        return false;
    }
}
