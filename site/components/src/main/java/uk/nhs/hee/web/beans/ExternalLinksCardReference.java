package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:externalLinksCardReference")
@Node(jcrType = "hee:externalLinksCardReference")
public class ExternalLinksCardReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:externalLinksCard")
    public HippoBean getExternalLinksCard() {
        return getLinkedBean("hee:externalLinksCard", HippoBean.class);
    }
}
