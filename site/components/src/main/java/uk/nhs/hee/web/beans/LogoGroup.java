package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.List;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:logoGroup")
@Node(jcrType = "hee:logoGroup")
public class LogoGroup extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:logos")
    public List<HippoBean> getLogos() {
        return getLinkedBeans("hee:logos", HippoBean.class);
    }
}
