package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:listingPage")
@Node(jcrType = "hee:listingPage")
public class ListingPage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:pageSize")
    public Long getPageSize() {
        return getSingleProperty("hee:pageSize");
    }

    @HippoEssentialsGenerated(internalName = "hee:documentTypes")
    public String[] getDocumentTypes() {
        return getMultipleProperty("hee:documentTypes");
    }
}
