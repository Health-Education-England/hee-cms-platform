package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:ctaCardReference")
@Node(jcrType = "hee:ctaCardReference")
public class CtaCardReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:ctaCardContentBlock")
    public HippoBean getCtaCardContentBlock() {
        return getLinkedBean("hee:ctaCardContentBlock", HippoBean.class);
    }
}
