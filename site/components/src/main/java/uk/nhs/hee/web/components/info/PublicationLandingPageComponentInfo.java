package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;

public interface PublicationLandingPageComponentInfo extends EssentialsDocumentComponentInfo {
    @Override
    @Parameter(name = "document", required = true, displayName = "Publication Landing Page Document")
    @JcrPath(isRelative = true, pickerSelectableNodeTypes = {"hee:publicationLandingPage"})
    String getDocument();
}
