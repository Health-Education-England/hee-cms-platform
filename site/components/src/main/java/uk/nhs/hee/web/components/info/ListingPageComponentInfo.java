package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.FieldGroup;
import org.hippoecm.hst.core.parameters.FieldGroupList;
import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;
import org.onehippo.cms7.essentials.components.info.EssentialsPageable;

public interface ListingPageComponentInfo extends EssentialsDocumentComponentInfo {
    @Parameter(name = "document", required = true, displayName = "Listing Document")
    @JcrPath(isRelative = true, pickerSelectableNodeTypes = {"hee:listingPage"})
    String getDocument();
}
