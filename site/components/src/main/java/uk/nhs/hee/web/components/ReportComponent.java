package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.builder.HstQueryBuilder;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.FeaturedContent;
import uk.nhs.hee.web.beans.PublicationLandingPage;
import uk.nhs.hee.web.beans.Report;
import uk.nhs.hee.web.components.info.ReportComponentInfo;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.*;

import javax.jcr.RepositoryException;
import javax.management.Query;
import java.util.Arrays;
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
        if (reportPage != null) {
            // the page content blocks needs valueLists to be set on the model
            final List<HippoBean> pageContentBlocks = reportPage.getContentBlocks();

            final Map<String, Map<String, String>> modelToValueListMap =
                    ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);

            request.setAttribute("tableComponentService", new TableComponentService());

            addRelatedPublicationLandingPageToModel(request, reportPage);
            addPublicationTypeTopicAndProfessionMapsToModel(request);
            addPublicationListingPageURLToModel(request);

            if(reportPage.getFeaturedContentReference().getFeaturedContentBlock() != null) {

                FeaturedContent featuredContent = (FeaturedContent) reportPage.getFeaturedContentReference().getFeaturedContentBlock();
                if(!featuredContent.getMethod().equals("Manual")) {
                    addFeaturedContent(request, reportPage, featuredContent);
                }
            }
        }
    }

    private void addFeaturedContent(HstRequest request, Report reportPage, FeaturedContent featuredContentBlock) {
        try {
            final int limit = 3;
            String contentType= "publication";

            switch(featuredContentBlock.getContentType()){
                case "publicationtypes":
                    contentType = "publication";
                    break;
                case "Blog Post":
                    contentType = "blog";
                    break;
                case "News Articles":
                    contentType = "news";
                    break;
                case "Case Studies":
                    contentType = "casestudy";
                    break;
            }

            QueryAndFiltersUtils featuredContent = new QueryAndFiltersUtils();
            HstQuery query = featuredContent.createQuery(reportPage, request.getRequestContext(),limit,contentType);

            if(featuredContentBlock.getMethod().equals("Related")) {
                Filter filter = featuredContent.createOrFilter(
                        query,
                        Arrays.asList(featuredContentBlock.getPublicationType()),
                        HEEField.PUBLICATION_TYPE.getName());
                filter.addAndFilter(
                        featuredContent.createOrFilter(
                                query,
                                Arrays.asList(featuredContentBlock.getProfession()),
                                HEEField.PUBLICATION_PROFESSIONS.getName()));
                filter.addAndFilter(
                        featuredContent.createOrFilter(
                                query,
                                Arrays.asList(featuredContentBlock.getTopics()),
                                HEEField.PUBLICATION_TOPICS.getName()));
                query.setFilter(filter);
            }
            log.debug("Execute query: {}", query.getQueryAsString(false));

            final HstQueryResult result = query.execute();
            if (result.getHippoBeans() != null) {
                request.setModel("featuredContent", result.getHippoBeans());
            }
        } catch (final QueryException | RepositoryException e) {
            log.error("Caught error '{}' while finding the Publication Landing Page " +
                    "related to the Publication (Report) Page '{}' ", e.getMessage(), reportPage.getPath(), e);
        }
    }

    /**
     * Gets the Publication landing page document {@link PublicationLandingPage} to which
     * the given {@code reportPage} document has been associated to and adds it to the model.
     *
     * @param request    the {@link HstRequest} instance.
     * @param reportPage the {@link Report} instance.
     */
    private void addRelatedPublicationLandingPageToModel(final HstRequest request, final Report reportPage) {
        try {

            request.setModel("landingPage",
                    new ReportAndPublicationUtils().findMyParent(reportPage, request.getRequestContext()));
        } catch (final RepositoryException e) {
            log.error("Caught error '{}' while getting the Publication landing page document to which " +
                    "the Publication page document '{}' is associated to", e.getMessage(), reportPage.getPath(), e);
        }
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
