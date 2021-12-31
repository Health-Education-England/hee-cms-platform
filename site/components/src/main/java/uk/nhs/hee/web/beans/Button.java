package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:button")
@Node(jcrType = "hee:button")
public class Button extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:label")
    public String getLabel() {
        return getSingleProperty("hee:label");
    }
}
