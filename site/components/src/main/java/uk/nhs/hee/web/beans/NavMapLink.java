package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:navMapLink")
@Node(jcrType = "hee:navMapLink")
public class NavMapLink extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:text")
    public String getText() {
        return getSingleProperty("hee:text");
    }

    @HippoEssentialsGenerated(internalName = "hee:url")
    public String getUrl() {
        return getSingleProperty("hee:url");
    }

    @HippoEssentialsGenerated(internalName = "hee:document")
    public HippoBean getDocument() {
        return getLinkedBean("hee:document", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:region")
    public String getRegion() {
        return getSingleProperty("hee:region");
    }
}
