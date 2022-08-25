package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:rightHandImageReference")
@Node(jcrType = "hee:rightHandImageReference")
public class RightHandImageReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:rightHandImageReference")
    public HippoBean getRightHandImageReference() {
        return getLinkedBean("hee:rightHandImageReference", HippoBean.class);
    }
}
