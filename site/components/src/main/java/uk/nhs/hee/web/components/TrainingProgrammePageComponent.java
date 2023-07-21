package uk.nhs.hee.web.components;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.TrainingProgrammePage;
import uk.nhs.hee.web.beans.TrainingProgrammesHomepage;
import uk.nhs.hee.web.components.info.TrainingProgrammePageComponentInfo;
import uk.nhs.hee.web.components.info.TrainingProgrammesHomepageComponentInfo;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.DocumentUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ParametersInfo(type = TrainingProgrammePageComponentInfo.class)
public class TrainingProgrammePageComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final TrainingProgrammePage trainingPage = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (trainingPage != null) {
            // the page content blocks needs valueLists to be set on the model
            List<HippoBean> pageContentBlocks = (List<HippoBean>) trainingPage.getOverviewBlocks();
            pageContentBlocks.addAll( (List<HippoBean>) trainingPage.getRegionsBlocks());
            pageContentBlocks.addAll(trainingPage.getRightHandBlocks());

            // Locate single fields and get their Values
            doModelUpdateForValueListField(trainingPage.getTrainingType(), request, ValueListIdentifier.TRAINING_TYPE);
            doModelUpdateForValueListField(trainingPage.getDiscipline(), request, ValueListIdentifier.CLINICAL_DISCIPLINE);
            doModelUpdateForValueListField(trainingPage.getRecruitmentFormat(), request, ValueListIdentifier.RECRUITMENT_FORMAT);

            // Build the maps of repeating Values
            doModelUpdateForValueListMap(Arrays.asList(trainingPage.getProfessions()), request, ValueListIdentifier.PROFESSION, Model.PROFESSION_MAP, true);
            doModelUpdateForValueListMap(Arrays.asList(trainingPage.getTopics()), request, ValueListIdentifier.TOPIC, Model.TOPIC_MAP, false);

            Map<String, Map<String, String>> modelToValueListMap = ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);
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
            String trainingTypeValue = valueListMap.get(keyFromField);

            request.setModel(identifier.getName(), trainingTypeValue);
        }
    }

    /**
     * Fill up a map with keys and values by pulling them from a named valuelist
     * @param itemKeysInValueList is the set of keys that are in the content bean
     * @param request is teh Hst Request object
     * @param identifier is the name of the ValueList we're referencing to grab the values
     * @param modelMapIdentifier is the name of teh map that we are loading up
     */
    protected void doModelUpdateForValueListMap(List<String> itemKeysInValueList, HstRequest request, ValueListIdentifier identifier, Model modelMapIdentifier, boolean trimHyphens) {
        if (itemKeysInValueList != null) {
            final Map<String, String> valueListMap = ValueListUtils.getValueListMap(identifier.getName());

            if (trimHyphens) {
                valueListMap.replaceAll((key, entry) -> stripSpace(entry));
            }

            request.setModel(
                    modelMapIdentifier.getKey(),
                    itemKeysInValueList.stream()
                            .filter(itemAsKey -> valueListMap.get(itemAsKey) != null)
                            .collect(Collectors.toMap(itemAsKey -> itemAsKey, valueListMap::get)));
        }
    }

    /**
     * Lose the first part of a value as it's essentially a classification
     * @param entry
     * @return
     */
    private String stripSpace(String entry) {
        if (entry != null) {
            int index = entry.indexOf("-");
            if (index > -1) {
                return StringUtils.stripStart(entry.substring(index+1), null);
            }
            return entry;
        }
        return null;
    }
}
