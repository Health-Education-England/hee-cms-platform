package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:emailSubscribeFormReference")
@Node(jcrType = "hee:emailSubscribeFormReference")
public class EmailSubscribeFormReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:emailSubscribeFormContentBlock")
    public HippoBean getEmailSubscribeFormContentBlock() {
        return getLinkedBean("hee:emailSubscribeFormContentBlock",
                HippoBean.class);
    }
}
