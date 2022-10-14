package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;

public interface MultiOrgLogoComponentInfo extends EssentialsDocumentComponentInfo {
    @Override
    @Parameter(name = "document", required = true, displayName = "[Page] document")
    @JcrPath(
            isRelative = true,
            pickerSelectableNodeTypes = {
                    "hee:blogPost",
                    "hee:guidance",
                    "hee:HomePage",
                    "hee:landingPage",
                    "hee:listingPage",
                    "hee:news",
                    "hee:MiniHub",
                    "hee:report"
            }
    )
    String getDocument();
}
