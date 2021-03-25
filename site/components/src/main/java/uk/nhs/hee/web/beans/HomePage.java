package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.HeroSection;

@HippoEssentialsGenerated(internalName = "hee:HomePage")
@Node(jcrType = "hee:HomePage")
public class HomePage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:HeroSection")
    public HeroSection getHeroSection() {
        return getBean("hee:HeroSection", HeroSection.class);
    }
}
