package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:internalLinksCardReference")
@Node(jcrType = "hee:internalLinksCardReference")
public class InternalLinksCardReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:internalLinksCard")
    public HippoBean getInternalLinksCard() {
        return getLinkedBean("hee:internalLinksCard", HippoBean.class);
    }
}
