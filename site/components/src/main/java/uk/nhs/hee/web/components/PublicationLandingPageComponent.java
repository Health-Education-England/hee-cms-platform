package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.components.info.PublicationLandingPageComponentInfo;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.utils.ListingPageUtils;

/**
 * Component class for {@code hee:publicationLandingPage} document type pages.
 */
@ParametersInfo(type = PublicationLandingPageComponentInfo.class)
public class PublicationLandingPageComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        // Adds publication listing page URL to the model
        ListingPageUtils.addListingPageURLToModel(request, ListingPageType.PUBLICATION_LISTING,
                Model.PUBLICATION_LISTING_PAGE_URL);

        request.setModel("featuredContentBlockService", new FeaturedContentBlockService());
    }
}

