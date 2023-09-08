package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.Guidance;
import uk.nhs.hee.web.beans.TrainingProgrammePage;
import uk.nhs.hee.web.components.info.TrainingProgrammePageComponentInfo;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

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
            boolean accessWithGuidancePath = request.getRequestContext().getResolvedSiteMapItem().getHstSiteMapItem().isWildCard();
            boolean isOverview = true;
            boolean accessFromRootHub = true;

            if (accessWithGuidancePath) {
                accessFromRootHub = false;
                List<Guidance> guidancePages = trainingProgramPage.getApplicationInformation();

                // The guidance name in URL will be resolved as "1" parameter name
                String guidanceName = (String) request.getRequestContext().getResolvedSiteMapItem().getLocalParameters().get("1");

                if (!"overview".equals(guidanceName)) {
                    for (final Guidance guidance : guidancePages) {
                        if (guidance.getName().equalsIgnoreCase(guidanceName)) {
                            isOverview = false;
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
            request.setModel("isOverview", isOverview);

            // the page content blocks needs valueLists to be set on the model
            List<HippoBean> pageContentBlocks = (List<HippoBean>) trainingProgramPage.getOverviewBlocks();
            pageContentBlocks.addAll(trainingProgramPage.getRightHandBlocks());

            // Adding current (application information) guidance content blocks as well
            if (currentGuidance != null) {
                pageContentBlocks.addAll(currentGuidance.getContentBlocks());
            }

            // Locate single fields and get their Values
            doModelUpdateForValueListField(trainingProgramPage.getDiscipline(), request, ValueListIdentifier.CLINICAL_DISCIPLINE);
            doModelUpdateForValueListField(trainingProgramPage.getRecruitmentFormat(), request, ValueListIdentifier.RECRUITMENT_FORMAT);

            // Build the maps of repeating Values
            Map<String, Map<String, String>> modelToValueListMap = ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);

            request.setAttribute("tableComponentService", new TableComponentService());
            request.setModel("featuredContentBlockService", new FeaturedContentBlockService());
        }
    }

    /**
     * Find the VALUE from a ValueList based on its KEY
     * @param keyFromField - is the key that we'll use to get the value
     * @param request is the Hst Request object
     * @param identifier is the attribute name in the Model
     */
    protected void doModelUpdateForValueListField(String keyFromField, HstRequest request, ValueListIdentifier identifier) {
        if (keyFromField != null) {
            Map<String, String> valueListMap = ValueListUtils.getValueListMap(identifier.getName());
            String fieldValueLabel = valueListMap.get(keyFromField);

            request.setModel(identifier.getName(), fieldValueLabel);
        }
    }
}
