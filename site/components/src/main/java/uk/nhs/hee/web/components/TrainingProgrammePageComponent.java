package uk.nhs.hee.web.components;

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

import java.util.List;
import java.util.Map;

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

            Map<String, Map<String, String>> modelToValueListMap =
                    ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);
            request.setModel("featuredContentBlockService", new FeaturedContentBlockService());
        }
    }
}
