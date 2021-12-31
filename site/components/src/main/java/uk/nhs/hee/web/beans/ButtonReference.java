package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:buttonReference")
@Node(jcrType = "hee:buttonReference")
public class ButtonReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:buttonContentBlock")
    public HippoBean getButtonContentBlock() {
        return getLinkedBean("hee:buttonContentBlock", HippoBean.class);
    }
}
