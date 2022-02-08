package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:expanderGroupReference")
@Node(jcrType = "hee:expanderGroupReference")
public class ExpanderGroupReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:expanderContentBlock")
    public HippoBean getExpanderContentBlock() {
        return getLinkedBean("hee:expanderContentBlock", HippoBean.class);
    }
}
