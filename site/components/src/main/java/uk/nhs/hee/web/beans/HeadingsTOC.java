package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;

@HippoEssentialsGenerated(internalName = "hee:headingsTOC")
@Node(jcrType = "hee:headingsTOC")
public class HeadingsTOC extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:headingTitle")
    public String getHeadingTitle() {
        return getSingleProperty("hee:headingTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:shortTitle")
    public String getShortTitle() {
        return getSingleProperty("hee:shortTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:headingType")
    public String getHeadingType() {
        return getSingleProperty("hee:headingType");
    }
}
