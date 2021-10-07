package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:audioReference")
@Node(jcrType = "hee:audioReference")
public class AudioReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:audioContentBlock")
    public HippoBean getAudioContentBlock() {
        return getLinkedBean("hee:audioContentBlock", HippoBean.class);
    }
}
