package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:blockLinksReference")
@Node(jcrType = "hee:blockLinksReference")
public class BlockLinksReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:blockLinksContentBlock")
    public HippoBean getBlockLinksContentBlock() {
        return getLinkedBean("hee:blockLinksContentBlock", HippoBean.class);
    }
}
