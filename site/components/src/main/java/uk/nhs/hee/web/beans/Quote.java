package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:quote")
@Node(jcrType = "hee:quote")
public class Quote extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:source")
    public String getSource() {
        return getSingleProperty("hee:source");
    }

    @HippoEssentialsGenerated(internalName = "hee:quoteCopy")
    public String getQuoteCopy() {
        return getSingleProperty("hee:quoteCopy");
    }
}
