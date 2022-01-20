package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:InsetReference")
@Node(jcrType = "hee:InsetReference")
public class InsetReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:insetTextBlock")
    public HippoBean getInsetTextBlock() {
        return getLinkedBean("hee:insetTextBlock", HippoBean.class);
    }
}
