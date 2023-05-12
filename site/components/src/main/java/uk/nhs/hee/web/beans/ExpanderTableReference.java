package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:expanderTableReference")
@Node(jcrType = "hee:expanderTableReference")
public class ExpanderTableReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:expanderTableContentBlock")
    public HippoBean getExpanderTableContentBlock() {
        return getLinkedBean("hee:expanderTableContentBlock", HippoBean.class);
    }
}
