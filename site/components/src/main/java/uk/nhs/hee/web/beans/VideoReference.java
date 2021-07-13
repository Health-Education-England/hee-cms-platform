package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:videoReference")
@Node(jcrType = "hee:videoReference")
public class VideoReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:videoContentBlock")
    public HippoBean getVideoContentBlock() {
        return getLinkedBean("hee:videoContentBlock", HippoBean.class);
    }
}
