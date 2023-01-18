package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.components.info.PublicationLandingPageComponentInfo;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

/**
 * Component class for {@code hee:publicationLandingPage} document type pages.
 */
@ParametersInfo(type = PublicationLandingPageComponentInfo.class)
public class PublicationLandingPageComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        addPublicationTypeTopicAndProfessionMapsToModel(request);
        addPublicationListingPageURLToModel(request);
    }

    /**
     * Adds Publication type, topic and profession value-list maps to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addPublicationTypeTopicAndProfessionMapsToModel(final HstRequest request) {
        // Adds publications topic and profession value-lists
        request.setModel("publicationTopicMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.PUBLICATION_TOPICS.getName()));
        request.setModel("publicationProfessionMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.PUBLICATION_PROFESSIONS.getName()));
        request.setModel("publicationTypeMap",
                ValueListUtils.getValueListMap(ValueListIdentifier.PUBLICATION_TYPES.getName()));
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

