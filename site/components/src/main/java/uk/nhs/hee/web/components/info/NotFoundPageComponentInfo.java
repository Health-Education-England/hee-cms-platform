package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;

public interface NotFoundPageComponentInfo extends EssentialsDocumentComponentInfo {
    @Parameter(name = "document", required = true, displayName = "NotFoundPage Document")
    @JcrPath(isRelative = true, pickerSelectableNodeTypes = {"hee:notFoundPage"})
    String getDocument();
}
