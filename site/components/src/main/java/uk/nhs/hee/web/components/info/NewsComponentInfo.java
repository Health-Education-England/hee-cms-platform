package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;

public interface NewsComponentInfo extends EssentialsDocumentComponentInfo {
    @Parameter(name = "document", required = true, displayName = "News")
    @JcrPath(isRelative = true, pickerSelectableNodeTypes = {"hee:news"})
    String getDocument();
}
