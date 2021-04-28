package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:bulletin")
@Node(jcrType = "hee:bulletin")
public class Bulletin extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:overview")
    public String getOverview() {
        return getSingleProperty("hee:overview");
    }

    @HippoEssentialsGenerated(internalName = "hee:websiteUrl")
    public String getWebsiteUrl() {
        return getSingleProperty("hee:websiteUrl");
    }

    @HippoEssentialsGenerated(internalName = "hee:websiteTitle")
    public String getWebsiteTitle() {
        return getSingleProperty("hee:websiteTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:categories")
    public String[] getCategories() {
        return getMultipleProperty("hee:categories");
    }
}
