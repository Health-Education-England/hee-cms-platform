package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.FilterException;
import org.hippoecm.hst.content.beans.query.filter.Filter;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.components.info.ListingPageComponentInfo;
import uk.nhs.hee.web.repository.HEEField;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.List;

import static org.apache.commons.lang3.StringUtils.isNotEmpty;

/**
 * Base component for A to Z Listing Page.
 */
@ParametersInfo(type = ListingPageComponentInfo.class)
public class AToZListingPageComponent extends ListingPageComponent {
    private static final Logger LOGGER = LoggerFactory.getLogger(AToZListingPageComponent.class);


    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);
        request.setModel("searchText", "Hello mateyyyy");
        LOGGER.info("HELLO WORLDS321");
    }

    @Override
    protected Filter createQueryFilters(final HstRequest request, final HstQuery query) throws FilterException {
        final Filter baseFilter = query.createFilter();

        LOGGER.info("desfedsfdsf");
        return baseFilter;
    }
}
