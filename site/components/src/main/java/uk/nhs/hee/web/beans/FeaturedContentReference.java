package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:featuredContentReference")
@Node(jcrType = "hee:featuredContentReference")
public class FeaturedContentReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:featuredContentBlock")
    public HippoBean getFeaturedContentBlock() {
        return getLinkedBean("hee:featuredContentBlock", HippoBean.class);
    }
}
