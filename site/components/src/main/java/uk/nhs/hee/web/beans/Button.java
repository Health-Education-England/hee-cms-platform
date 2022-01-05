package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:button")
@Node(jcrType = "hee:button")
public class Button extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:label")
    public String getLabel() {
        return getSingleProperty("hee:label");
    }

    @HippoEssentialsGenerated(internalName = "hee:url")
    public String getUrl() {
        return getSingleProperty("hee:url");
    }

    @HippoEssentialsGenerated(internalName = "hee:buttontype")
    public String getButtontype() {
        return getSingleProperty("hee:buttontype");
    }

    @HippoEssentialsGenerated(internalName = "hee:document")
    public HippoBean getDocument() {
        return getLinkedBean("hee:document", HippoBean.class);
    }
}
