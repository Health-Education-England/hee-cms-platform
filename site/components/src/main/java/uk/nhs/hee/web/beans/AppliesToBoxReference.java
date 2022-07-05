package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:appliesToBoxReference")
@Node(jcrType = "hee:appliesToBoxReference")
public class AppliesToBoxReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:appliesToBoxReference")
    public HippoBean getAppliesToBoxReference() {
        return getLinkedBean("hee:appliesToBoxReference", HippoBean.class);
    }
}
