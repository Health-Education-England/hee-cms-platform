package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:contactCard")
@Node(jcrType = "hee:contactCard")
public class ContactCard extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:contentItem")
    public HippoBean getContentItem() {
        return getLinkedBean("hee:contentItem", HippoBean.class);
    }
}
