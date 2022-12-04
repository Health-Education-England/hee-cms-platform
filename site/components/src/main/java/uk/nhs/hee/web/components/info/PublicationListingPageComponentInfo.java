package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;

public interface PublicationListingPageComponentInfo extends ListingPageComponentInfo {
    @Override
    @Parameter(name = "document", required = true, displayName = "Publication listing document")
    @JcrPath(isRelative = true, pickerSelectableNodeTypes = {"hee:publicationListingPage"})
    String getDocument();
}
