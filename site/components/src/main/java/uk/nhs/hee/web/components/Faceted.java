package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.standard.*;
import org.hippoecm.hst.core.component.HstComponentException;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.cms7.essentials.components.paging.Pageable;
import uk.nhs.hee.web.beans.Report;
import org.hippoecm.hst.util.ContentBeanUtils;
import org.hippoecm.hst.util.PathUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.List;

public class Faceted extends AbstractFacetedComponent {

    public static final Logger log = LoggerFactory.getLogger(Faceted.class);

    @Override
    public void doBeforeRender(HstRequest request, HstResponse response) throws HstComponentException {
        super.doBeforeRender(request, response);
        HstQuery hstQuery = getHstQuery(request);

        HippoFacetNavigationBean facetNav = ContentBeanUtils.getFacetNavigationBean(hstQuery);
        final Pageable<HippoBean> pageable;
        List<Report> resultset = new ArrayList<Report>();
        request.setAttribute("resultset", resultset);

        request.setAttribute("facetNavigation", facetNav);
        if (facetNav instanceof HippoFacetChildNavigationBean) {
            request.setAttribute("subnavigation", true);
        }

        HippoResultSetBean resultSetBean = (facetNav).getResultSet();
        if (resultSetBean == null) {
            return;
        }

        HippoDocumentIterator<Report> it = resultSetBean.getDocumentIterator(Report.class);
        int skip = 0;
        it.skip(skip);
        while (it.hasNext()) {
            // the it.getPosition gets increased on it.next() call, hence above, skip - 1
            resultset.add(it.next());
        }

        boolean isNavigationStatefulLinks = true;
        if (getComponentParameter("navigationStatefulLinks") != null) {
            isNavigationStatefulLinks = Boolean.parseBoolean(getComponentParameter("navigationStatefulLinks"));
        }
        request.setAttribute("navigationStatefulLinks", isNavigationStatefulLinks);
    }
}
