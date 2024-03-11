package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.utils.ListingPageUtils;


/**
 * Base component for Training programme listing page
 * which essentially is an extension of {@link TaxonomyBasedListingPageComponent}
 * and additionally adds Training programme listing page URL, etc. to the model.
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class TrainingProgrammeListingPageComponent extends TaxonomyBasedListingPageComponent {
    /* (non-Javadoc)
     * @see uk.nhs.hee.web.components.ListingPageComponent.doBeforeRender(final HstRequest request,
     * final HstResponse response)
     */
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        // To avoid component processing the request when it has just been dropped on a page (via experience manager)
        // but, the listing page document hasn't been chosen yet.
        if (getListingPageModel(request) == null) {
            return;
        }

        // Adds training programme listing page URL to the model
        ListingPageUtils.addListingPageURLToModel(request, ListingPageType.TRAINING_PROGRAMME_LISTING,
                Model.TRAINING_PROGRAMME_LISTING_PAGE_URL);
    }
}