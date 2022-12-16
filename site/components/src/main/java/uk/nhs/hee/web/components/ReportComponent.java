package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.PublicationLandingPage;
import uk.nhs.hee.web.beans.Report;
import uk.nhs.hee.web.components.info.ReportComponentInfo;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.ReportAndPublicationUtils;

import javax.jcr.RepositoryException;
import java.util.List;
import java.util.Map;

/**
 * Component class for {@code hee:report} document type pages.
 */
@ParametersInfo(type = ReportComponentInfo.class)
public class ReportComponent extends EssentialsDocumentComponent {
    private static final Logger log = LoggerFactory.getLogger(ReportComponent.class);
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final Report reportPage = request.getModel(REQUEST_ATTR_DOCUMENT);
        try {
            if (reportPage != null) {
                // the page content blocks needs valueLists to be set on the model
                final List<HippoBean> pageContentBlocks = reportPage.getContentBlocks();

                final Map<String, Map<String, String>> modelToValueListMap =
                        ContentBlocksUtils.getValueListMaps(pageContentBlocks);
                modelToValueListMap.forEach(request::setModel);

                request.setAttribute("tableComponentService", new TableComponentService());
            }


            ReportAndPublicationUtils reportUtils = new ReportAndPublicationUtils();
            PublicationLandingPage landingPageParent = reportUtils.findMyParent(reportPage, request.getRequestContext());
            request.setModel("landingPage", landingPageParent);
        } catch (RepositoryException e) {
            log.error("Caught error '{}' while processing the content blocks or TableComponentService ", e.getMessage(), e);
        }
    }

}
