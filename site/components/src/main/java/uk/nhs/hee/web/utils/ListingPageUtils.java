package uk.nhs.hee.web.utils;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.request.HstRequestContext;
import uk.nhs.hee.web.components.ListingPageType;
import uk.nhs.hee.web.components.Model;

/**
 * Class containing listing page utility methods.
 */
public class ListingPageUtils {
    /**
     * Private constructor to restrict instantiating this utility class.
     */
    private ListingPageUtils() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Adds the requested listing page URL to the model if available.
     *
     * @param request                the {@link HstRequest} instance.
     * @param listingPageType        the {@link ListingPageType} instance whose listing page URL
     *                               needs to be added to the model.
     * @param listingPageURLModel    the listing page URL {@link Model} key instance.
     */
    public static void addListingPageURLToModel(
            final HstRequest request,
            final ListingPageType listingPageType,
            final Model listingPageURLModel
    ) {
        final HstRequestContext hstRequestContext = request.getRequestContext();

        final HippoBean hippoBean;
        if (listingPageType == ListingPageType.PUBLICATION_LISTING) {
            hippoBean = HstUtils.getPublicationListingPageBean(hstRequestContext);
        } else {
            hippoBean = HstUtils.getListingPageBeanByType(hstRequestContext, listingPageType.getType());
        }

        if (hippoBean == null) {
            return;
        }

        request.setModel(
                listingPageURLModel.getKey(),
                HstUtils.getURLByBean(hstRequestContext, hippoBean, false)
        );
    }
}
