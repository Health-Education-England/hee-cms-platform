package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:contactCardReference")
@Node(jcrType = "hee:contactCardReference")
public class ContactCardReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:content")
    public HippoBean getContent() {
        return getLinkedBean("hee:content", HippoBean.class);
    }
}
