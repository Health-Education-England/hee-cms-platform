package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:googleMapReference")
@Node(jcrType = "hee:googleMapReference")
public class GoogleMapReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:googleMapContentBlock")
    public HippoBean getGoogleMapContentBlock() {
        return getLinkedBean("hee:googleMapContentBlock", HippoBean.class);
    }
}
