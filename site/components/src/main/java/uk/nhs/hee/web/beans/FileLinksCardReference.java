package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:fileLinksCardReference")
@Node(jcrType = "hee:fileLinksCardReference")
public class FileLinksCardReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:fileLinksCard")
    public HippoBean getFileLinksCard() {
        return getLinkedBean("hee:fileLinksCard", HippoBean.class);
    }
}
