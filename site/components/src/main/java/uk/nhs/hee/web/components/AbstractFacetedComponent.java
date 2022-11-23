package uk.nhs.hee.web.components;

import org.hippoecm.hst.component.support.bean.BaseHstComponent;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.builder.HstQueryBuilder;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.util.SearchInputParsingUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import static org.hippoecm.hst.content.beans.query.builder.ConstraintBuilder.constraint;
import static org.hippoecm.hst.content.beans.query.builder.ConstraintBuilder.or;


public class AbstractFacetedComponent extends BaseHstComponent {

    public static final Logger LOGGER = LoggerFactory.getLogger(AbstractFacetedComponent.class);

    public HstQuery getHstQuery(HstRequest request) {

        String query = this.getPublicRequestParameter(request, "query");
        if (query != null) {
            query = SearchInputParsingUtils.parse(query, false);
        }
        HstQuery hstQuery = null;
        if ((query != null && !"".equals(query))) {
            // there was a free text query. We need to account for this.
            request.setAttribute("query", query);
            // account for the free text string


            hstQuery = HstQueryBuilder.create(request.getRequestContext().getSiteContentBaseBean())
                    .where(
                            or(
                                    constraint(".").contains(query),
                                    // boost title hits
                                    constraint("hee:title").contains(query)
                            )
                    )
                    .build();

        }
        return hstQuery;
    }

}
