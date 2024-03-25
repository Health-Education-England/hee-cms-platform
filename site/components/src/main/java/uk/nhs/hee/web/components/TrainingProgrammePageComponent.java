package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.beans.TrainingProgrammePage;
import uk.nhs.hee.web.components.info.TrainingProgrammePageComponentInfo;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.ListingPageUtils;

import java.util.List;
import java.util.Map;


@ParametersInfo(type = TrainingProgrammePageComponentInfo.class)
public class TrainingProgrammePageComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final TrainingProgrammePage trainingProgramPage = request.getModel(REQUEST_ATTR_DOCUMENT);
        Guidance currentGuidance = null;
        if (trainingProgramPage != null) {
            final boolean accessWithGuidancePath = request.getRequestContext().getResolvedSiteMapItem().getHstSiteMapItem().isWildCard();
            boolean accessFromRootHub = true;

            if (accessWithGuidancePath) {
                accessFromRootHub = false;
                final List<Guidance> guidancePages = trainingProgramPage.getApplicationInformation();

                // The guidance name in URL will be resolved as "1" parameter name
                final String guidanceName = (String) request.getRequestContext().getResolvedSiteMapItem().getLocalParameters().get("1");

                if (!"overview".equals(guidanceName)) {
                    for (final Guidance guidance : guidancePages) {
                        if (guidance.getName().equalsIgnoreCase(guidanceName)) {
                            currentGuidance = guidance;
                            request.setModel("currentGuidance", guidance);
                            break;
                        }
                    }
                }
            } else {
                request.setModel("tppSiteMapItemName",
                        request.getRequestContext().getResolvedSiteMapItem().getHstSiteMapItem().getValue());
            }

            request.setModel("accessFromRootHub", accessFromRootHub);

            // the page content blocks needs valueLists to be set on the model
            final List<HippoBean> pageContentBlocks = (List<HippoBean>) trainingProgramPage.getOverviewBlocks();
            pageContentBlocks.addAll(trainingProgramPage.getRightHandBlocks());

            // Adding current (application information) guidance content blocks as well
            if (currentGuidance != null) {
                pageContentBlocks.addAll(currentGuidance.getContentBlocks());
            }

            // Locate single fields and get their Values

            // Build the maps of repeating Values
            final Map<String, Map<String, String>> modelToValueListMap = ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);

            request.setAttribute("tableComponentService", new TableComponentService());
            request.setModel("featuredContentBlockService", new FeaturedContentBlockService());

            // Adds training programme listing page URL to the model
            ListingPageUtils.addListingPageURLToModel(request, ListingPageType.TRAINING_PROGRAMME_LISTING,
                    Model.TRAINING_PROGRAMME_LISTING_PAGE_URL);
        }
    }
}
