package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.ContentCards;
import uk.nhs.hee.web.beans.HeroSection;

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

    @HippoEssentialsGenerated(internalName = "hee:contentCards")
    public ContentCards getContentCards() {
        return getBean("hee:contentCards", ContentCards.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:HeroSection")
    public HeroSection getHeroSection() {
        return getBean("hee:HeroSection", HeroSection.class);
    }
}
