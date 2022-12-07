package uk.nhs.hee.web.utils;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoDocumentBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.util.ContentBeanUtils;
import uk.nhs.hee.web.beans.PublicationLandingPage;

import javax.jcr.RepositoryException;

public class ReportAndPublicationUtils {

    /**
     * Given a specific report bean, let's look for its parent as an associated bean
     * @param reportBean is the one we are dealing with
     * @param requestContext is from the request context that will l
     * @return a Landing page bean, we hope
     * @throws RepositoryException if there was an issue looking up the bean details or performing the query
     */
    public PublicationLandingPage findMyParent(HippoDocumentBean reportBean, HstRequestContext requestContext) throws RepositoryException {
        try {
            HstQuery query = ContentBeanUtils.createIncomingBeansQuery(reportBean,
                    requestContext.getSiteContentBaseBean(),
                    "hee:webPublications/@hippo:docbase",
                    PublicationLandingPage.class,
                    false);
            HstQueryResult result = query.execute();

            if (result.getHippoBeans() != null && result.getHippoBeans().hasNext()) {
                return (PublicationLandingPage)result.getHippoBeans().nextHippoBean();
            }
        } catch (QueryException e) {
            e.printStackTrace();
        }

        return null;
    }
}
