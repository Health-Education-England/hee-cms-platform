package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:richTextReference")
@Node(jcrType = "hee:richTextReference")
public class RichTextReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:richTextBlock")
    public HippoBean getRichTextBlock() {
        return getLinkedBean("hee:richTextBlock", HippoBean.class);
    }
}
