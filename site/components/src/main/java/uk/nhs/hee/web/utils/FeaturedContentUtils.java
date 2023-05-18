package uk.nhs.hee.web.utils;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoBeanIterator;
import org.hippoecm.hst.content.beans.standard.HippoDocumentBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.FeaturedContent;
import uk.nhs.hee.web.repository.HEEField;

import javax.jcr.RepositoryException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class FeaturedContentUtils {

    private static final Logger log = LoggerFactory.getLogger(FeaturedContentUtils.class);

    private static final int MAXIMUM_DOCUMENTS = 3;

    /**
     * Gets specific document types, they can be blogs, publications, news and other content types, in a Featured Content area beneath pages.
     *
     * @param featuredContentBlock is a content clock which will specify the document types
     * @param request              is from the request context that will l
     * @return HippoBeansIterator of 3 or less HippoBeans
     * @throws RepositoryException if there was an issue looking up the bean details or performing the query
     */
    public List<HippoBean> getFeaturedContent(final HstRequest request, final HippoDocumentBean basedPage, final FeaturedContent featuredContentBlock)
            throws RepositoryException {
        try {
            if(featuredContentBlock.getMethod().equals("Manual")){
                return  featuredContentBlock.getFeaturedDocuments();
            }
            QueryAndFiltersUtils featuredContent = new QueryAndFiltersUtils();
            HstQuery query = featuredContent.createQuery(request.getRequestContext(),MAXIMUM_DOCUMENTS,getContentType(featuredContentBlock));

            if(featuredContentBlock.getMethod().equals("Related")) {
                Filter filter = featuredContent.createOrFilter(
                        query,
                        Arrays.asList(featuredContentBlock.getPublicationType()),
                        HEEField.PUBLICATION_TYPE.getName());
                filter.addAndFilter(
                        featuredContent.createOrFilter(
                                query,
                                Arrays.asList(featuredContentBlock.getProfessions()),
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
                return  convertToList(result.getHippoBeans());
            }
        } catch (final QueryException | RepositoryException e) {
            log.error("Caught error '{}' while finding the Publication Landing Page " +
                    "related to the Publication (Report) Page '{}' ", e.getMessage(), basedPage.getPath(), e);
        }
        return null;
    }

    private String getContentType(FeaturedContent featuredContentBlock) {
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
        return contentType;
    }

    protected List<HippoBean> convertToList(HippoBeanIterator beans) {
        List<HippoBean> listBeans = new ArrayList<>();
        while (beans.hasNext()) {
            HippoBean bean = beans.nextHippoBean();
            if (bean != null) {
                listBeans.add(bean);
            }
        }

        return listBeans;
    }

}
