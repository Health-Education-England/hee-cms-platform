package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:linkBlock")
@Node(jcrType = "hee:linkBlock")
public class LinkBlock extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:blockTitle")
    public String getBlockTitle() {
        return getSingleProperty("hee:blockTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:blockLink")
    public HippoBean getBlockLink() {
        return getLinkedBean("hee:blockLink", HippoBean.class);
    }
}
