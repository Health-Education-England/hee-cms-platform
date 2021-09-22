package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;

public interface CookiesPageComponentInfo extends EssentialsDocumentComponentInfo {
    @Parameter(
            name = "fallbackSiteContentBasePath",
            displayName = "Fallback site content base path",
            defaultValue = "/content/documents/lks"
    )
    String getFallbackSiteContentBasePath();
}
