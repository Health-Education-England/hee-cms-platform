package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:detailsReference")
@Node(jcrType = "hee:detailsReference")
public class DetailsReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:detailsContentBlock")
    public HippoBean getDetailsContentBlock() {
        return getLinkedBean("hee:detailsContentBlock", HippoBean.class);
    }
}
