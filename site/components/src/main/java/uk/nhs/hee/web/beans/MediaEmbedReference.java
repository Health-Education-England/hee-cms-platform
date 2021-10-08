package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:mediaEmbedReference")
@Node(jcrType = "hee:mediaEmbedReference")
public class MediaEmbedReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:mediaEmbedContentBlock")
    public HippoBean getMediaContentBlock() {
        return getLinkedBean("hee:mediaEmbedContentBlock", HippoBean.class);
    }
}
