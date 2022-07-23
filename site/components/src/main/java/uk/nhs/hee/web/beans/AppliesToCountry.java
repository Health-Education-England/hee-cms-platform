package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;

@HippoEssentialsGenerated(internalName = "hee:appliesToCountry")
@Node(jcrType = "hee:appliesToCountry")
public class AppliesToCountry extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:appliesTo")
    public Boolean getAppliesTo() {
        return getSingleProperty("hee:appliesTo");
    }

    @HippoEssentialsGenerated(internalName = "hee:linkURL")
    public String getLinkURL() {
        return getSingleProperty("hee:linkURL");
    }
}
