package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:minihubSection")
@Node(jcrType = "hee:minihubSection")
public class MinihubSection extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:document")
    public HippoBean getDocument() {
        return getLinkedBean("hee:document", HippoBean.class);
    }
}
