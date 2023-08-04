package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.PublicationLandingPage;
import uk.nhs.hee.web.beans.Report;
import uk.nhs.hee.web.components.info.ReportComponentInfo;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.ReportAndPublicationUtils;

import javax.jcr.RepositoryException;
import java.util.List;
import java.util.Locale;
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
        if (reportPage != null) {
            // the page content blocks needs valueLists to be set on the model
            final List<HippoBean> pageContentBlocks = reportPage.getContentBlocks();

            final Map<String, Map<String, String>> modelToValueListMap =
                    ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);

            request.setModel("tableComponentService", new TableComponentService());
            request.setModel("featuredContentBlockService", new FeaturedContentBlockService());

            addRelatedPublicationLandingPageToModel(request, reportPage);
            addPublicationListingPageURLToModel(request);
        }
    }

    /**
     * Gets the Publication landing page document {@link PublicationLandingPage} to which
     * the given {@code reportPage} document has been associated to and adds it to the model.
     * Also adds the taxinomy fields from that Publication for use in the Report's sidebar
     *
     * @param request    the {@link HstRequest} instance.
     * @param reportPage the {@link Report} instance.
     */
    private void addRelatedPublicationLandingPageToModel(final HstRequest request, final Report reportPage) {
        try {
            final Locale locale = request.getLocale();
            final ReportAndPublicationUtils reportAndPublicationUtils = new ReportAndPublicationUtils();

            PublicationLandingPage publicationLandingPage = reportAndPublicationUtils.findMyParent(reportPage, request.getRequestContext());

            if (publicationLandingPage != null) {
                request.setModel("landingPage", publicationLandingPage);
                reportAndPublicationUtils.addPublicationLandingPageTaxonomyFieldsToModel(request, locale, publicationLandingPage);
            }
        } catch (final RepositoryException e) {
            log.error("Caught error '{}' while getting the Publication landing page document to which " +
                    "the Publication page document '{}' is associated to", e.getMessage(), reportPage.getPath(), e);
        }
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
