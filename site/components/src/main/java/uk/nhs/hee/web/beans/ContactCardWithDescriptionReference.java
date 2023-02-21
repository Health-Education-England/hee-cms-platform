package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:contactCardWithDescriptionReference")
@Node(jcrType = "hee:contactCardWithDescriptionReference")
public class ContactCardWithDescriptionReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:contactCardWithDescription")
    public HippoBean getContactCardWithDescription() {
        return getLinkedBean("hee:contactCardWithDescription", HippoBean.class);
    }
}
