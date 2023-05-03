package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;

import uk.nhs.hee.web.beans.TrainingProgrammesHomepage;
import uk.nhs.hee.web.components.info.TrainingProgrammesHomepageComponentInfo;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.List;
import java.util.Map;

@ParametersInfo(type = TrainingProgrammesHomepageComponentInfo.class)
public class TrainingProgrammesHomepageComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final TrainingProgrammesHomepage trainingHomepage = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (trainingHomepage != null) {
            // the page content blocks needs valueLists to be set on the model
            List<HippoBean> pageContentBlocks = (List<HippoBean>) trainingHomepage.getPathwaysBlocks();
            pageContentBlocks.addAll( (List<HippoBean>) trainingHomepage.getTrainingRoutesBlocks());
            pageContentBlocks.addAll( (List<HippoBean>) trainingHomepage.getSupportBlocks());
            pageContentBlocks.addAll( (List<HippoBean>) trainingHomepage.getRegionsBlocks());

            Map<String, Map<String, String>> modelToValueListMap =
                    ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);
        }
    }
}
