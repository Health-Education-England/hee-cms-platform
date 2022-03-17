package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import java.util.List;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:contact")
@Node(jcrType = "hee:contact")
public class Contact extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:contactItems")
    public List<HippoBean> getContactItems() {
        return getLinkedBeans("hee:contactItems", HippoBean.class);
    }
}
