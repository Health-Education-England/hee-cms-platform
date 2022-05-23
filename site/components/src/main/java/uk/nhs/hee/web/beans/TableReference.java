package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:tableReference")
@Node(jcrType = "hee:tableReference")
public class TableReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:tabledataContentBlock")
    public HippoBean getTabledataContentBlock() {
        return getLinkedBean("hee:tabledataContentBlock", HippoBean.class);
    }
}
