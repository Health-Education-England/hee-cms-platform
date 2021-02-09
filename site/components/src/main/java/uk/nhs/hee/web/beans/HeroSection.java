package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;

@HippoEssentialsGenerated(internalName = "hee:HeroSection")
@Node(jcrType = "hee:HeroSection")
public class HeroSection extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:header")
    public String getHeader() {
        return getSingleProperty("hee:header");
    }

    @HippoEssentialsGenerated(internalName = "hee:text")
    public String getText() {
        return getSingleProperty("hee:text");
    }
}
