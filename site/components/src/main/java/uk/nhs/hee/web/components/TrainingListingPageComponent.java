package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.utils.HstUtils;


/**
 * Base component for Training Listing Page
 * which essentially is an extension of {@link TaxonomyBasedListingPageComponent}
 * and additionally adds Training listing page URL, etc. to the model.
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class TrainingListingPageComponent extends TaxonomyBasedListingPageComponent {
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

        addTrainingListingPageURLToModel(request);
    }


    /**
     * Adds Training listing page URL to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addTrainingListingPageURLToModel(final HstRequest request) {
        final HstRequestContext hstRequestContext = request.getRequestContext();
        final HippoBean trainingListingPageBean =
                HstUtils.getListingPageBeanByType(hstRequestContext, ListingPageType.TRAINING_LISTING.getType());

        if (trainingListingPageBean == null) {
            return;
        }

        request.setModel(
                "trainingListingPageURL",
                HstUtils.getURLByBean(hstRequestContext, trainingListingPageBean, false));
    }
}