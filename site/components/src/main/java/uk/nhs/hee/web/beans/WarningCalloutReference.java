package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:warningCalloutReference")
@Node(jcrType = "hee:warningCalloutReference")
public class WarningCalloutReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:warningCalloutContentBlock")
    public HippoBean getWarningCalloutContentBlock() {
        return getLinkedBean("hee:warningCalloutContentBlock", HippoBean.class);
    }
}
