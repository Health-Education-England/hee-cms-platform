package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import uk.nhs.hee.web.beans.Link;

@HippoEssentialsGenerated(internalName = "hee:logo")
@Node(jcrType = "hee:logo")
public class Logo extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:image")
    public HippoBean getImage() {
        return getLinkedBean("hee:image", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:linkURL")
    public String getLinkURL() {
        return getSingleProperty("hee:linkURL");
    }

    @HippoEssentialsGenerated(internalName = "hee:linkDocument")
    public HippoBean getLinkDocument() {
        return getLinkedBean("hee:linkDocument", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:linkTitle")
    public String getLinkTitle() {
        return getSingleProperty("hee:linkTitle");
    }
}
