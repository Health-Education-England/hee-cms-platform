package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.PublicationLandingPage;
import uk.nhs.hee.web.components.info.PublicationLandingPageComponentInfo;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.ReportAndPublicationUtils;

import java.util.Locale;

/**
 * Component class for {@code hee:publicationLandingPage} document type pages.
 */
@ParametersInfo(type = PublicationLandingPageComponentInfo.class)
public class PublicationLandingPageComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        final PublicationLandingPage publicationLandingPage = request.getModel(REQUEST_ATTR_DOCUMENT);
        addPublicationListingPageURLToModel(request);

        addTaxonomyFieldsToMap(request, publicationLandingPage);
    }

    /**
     * Convenience method for loading the map
     *
     * @param request
     * @param publicationLandingPage
     */
    private void addTaxonomyFieldsToMap(final HstRequest request, PublicationLandingPage publicationLandingPage) {
        final Locale locale = request.getLocale();

        new ReportAndPublicationUtils().addPublicationLandingPageTaxonomyFieldsToModel(request, locale, publicationLandingPage);
    }

    /**
     * Adds Publication listing Page URL to model.
     *
     * <p>Adds the first publication listing/collection ({@code hee:publicationListingPage}) page
     * that it finds in the current channel.</p>
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addPublicationListingPageURLToModel(final HstRequest request) {
        final HstRequestContext hstRequestContext = request.getRequestContext();
        final HippoBean publicationListingPageBean = HstUtils.getPublicationListingPageBean(hstRequestContext);

        if (publicationListingPageBean == null) {
            return;
        }
        
        request.setModel(
                "publicationListingPageURL",
                HstUtils.getURLByBean(hstRequestContext, publicationListingPageBean, false));
    }
}

