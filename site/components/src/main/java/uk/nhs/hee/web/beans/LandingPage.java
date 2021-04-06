package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:landingPage")
@Node(jcrType = "hee:landingPage")
public class LandingPage extends BaseDocument implements ListItem {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @Override
    public String getCategory() {
        return "test";
    }

    @Override
    public String getOverview() {
        return getSummary();
    }

    @Override
    public String getWebsiteUrl() {
        return "test";
    }

    @Override
    public String getWebsiteTitle() {
        return "test";
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:contentCards")
    public ContentCards getContentCards() {
        return getBean("hee:contentCards", ContentCards.class);
    }
}
