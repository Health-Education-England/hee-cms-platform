package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;

public interface LandingPageComponentInfo extends EssentialsDocumentComponentInfo {
    @Parameter(name = "document", required = true, displayName = "LandingPage Document")
    @JcrPath(isRelative = true, pickerSelectableNodeTypes = {"hee:landingPage"})
    String getDocument();
}
