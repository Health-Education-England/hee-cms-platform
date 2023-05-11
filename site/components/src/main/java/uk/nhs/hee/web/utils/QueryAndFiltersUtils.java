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
     * Create of a Query
     *
     * @param requestContext is from the request context that will l
     * @param limit is the maximum number of Beans to get from the query
     * @param type  is the document type which is going to be searched
     * @return a query
     * @throws RepositoryException if there was an issue looking up the bean details or performing the query
     */
    public HstQuery createQuery( final HstRequestContext requestContext, final int limit, final String type)
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


    /**
     * Returns Query {@link Filter} built based on the given inputs.
     *
     * @param query         the {@link HstQuery} instance.
     * @param values        the Filter field values.
     * @param attributeName the Filter field name.
     * @return the Query {@link Filter} built based on the given inputs.
     * @throws FilterException thrown when an error occurs during Query Filter build.
     */
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
