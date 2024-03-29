package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:newsletterSubscribeFormReference")
@Node(jcrType = "hee:newsletterSubscribeFormReference")
public class NewsletterSubscribeFormReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:newsletterSubscribeFormContentBlock")
    public HippoBean getNewsletterSubscribeFormContentBlock() {
        return getLinkedBean("hee:newsletterSubscribeFormContentBlock",
                HippoBean.class);
    }
}
