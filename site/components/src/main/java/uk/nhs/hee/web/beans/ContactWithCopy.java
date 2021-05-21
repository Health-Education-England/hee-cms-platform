package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:contactWithCopy")
@Node(jcrType = "hee:contactWithCopy")
public class ContactWithCopy extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:copy")
    public String getCopy() {
        return getSingleProperty("hee:copy");
    }

    @HippoEssentialsGenerated(internalName = "hee:contentItem")
    public HippoBean getContentItem() {
        return getLinkedBean("hee:contentItem", HippoBean.class);
    }
}
