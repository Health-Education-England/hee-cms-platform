package uk.nhs.hee.web.components;

import org.hippoecm.hst.component.pagination.Page;
import org.hippoecm.hst.content.beans.query.HstQuery;
import org.hippoecm.hst.content.beans.query.exceptions.QueryException;
import org.hippoecm.hst.content.beans.standard.*;
import org.hippoecm.hst.core.component.HstComponentException;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.util.ContentBeanUtils;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.cms7.essentials.components.EssentialsListComponent;
import org.onehippo.cms7.essentials.components.paging.Pageable;
import uk.nhs.hee.web.beans.PublicationCollectionPage;
import uk.nhs.hee.web.beans.Report;
import uk.nhs.hee.web.components.info.PublicationCollectionComponentInfo;
import uk.nhs.hee.web.components.info.ReportComponentInfo;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Component class for {@code hee:publicationCollectionPage} document type pages.
 */
@ParametersInfo(type = PublicationCollectionComponentInfo.class)
public class PublicationCollectionComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final PublicationCollectionPage publicationCollectionPage = request.getModel(REQUEST_ATTR_DOCUMENT);


    }

}
