package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:Inset")
@Node(jcrType = "hee:Inset")
public class Inset extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:html")
    public HippoHtml getHtml() {
        return getHippoHtml("hee:html");
    }
}
