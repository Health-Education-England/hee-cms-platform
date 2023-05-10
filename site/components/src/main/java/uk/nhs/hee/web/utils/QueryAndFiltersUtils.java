package uk.nhs.hee.web.utils;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.HstQueryResult;
import org.hippoecm.hst.content.beans.query.builder.HstQueryBuilder;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoBeanIterator;
import org.hippoecm.hst.content.beans.standard.HippoDocumentBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.components.ListingPageType;
import uk.nhs.hee.web.repository.HEEField;

import javax.jcr.RepositoryException;
import java.util.List;

public class QueryAndFiltersUtils {

    private static final Logger log = LoggerFactory.getLogger(QueryAndFiltersUtils.class);

    /**
     * Given a specific report bean, let's look for its parent as an associated bean.
     *
     * @param reportBean     is the one we are dealing with
     * @param requestContext is from the request context that will l
     * @return a Landing page bean, we hope
     * @throws RepositoryException if there was an issue looking up the bean details or performing the query
     */
    public HstQuery createQuery(final HippoDocumentBean pageBean, final HstRequestContext requestContext, final int limit, final String type)
            throws RepositoryException {
        HippoBean scope = requestContext.getSiteContentBaseBean();
        final HstQueryBuilder builder = HstQueryBuilder.create(scope);
        final HstQuery query = builder.ofTypes(getDocument(type).getDocumentTypes()).build();

        query.addOrderByDescending(ListingPageType.getByName(type).getSortByDateField());
        query.setLimit(limit);

        return query;
    }

    private ListingPageType getDocument(String type) {
        return ListingPageType.getByName(type);
    }

    public Filter createOrFilter(final HstQuery query, final List<String> values, final String attributeName) throws FilterException {
        final Filter baseFilter = query.createFilter();

        for (final String value : values) {
            final Filter filter = query.createFilter();
            filter.addEqualTo(attributeName, value);
            baseFilter.addOrFilter(filter);
        }

        return baseFilter;
    }
}
