package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:quoteReference")
@Node(jcrType = "hee:quoteReference")
public class QuoteReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:quoteContentBlock")
    public HippoBean getQuoteContentBlock() {
        return getLinkedBean("hee:quoteContentBlock", HippoBean.class);
    }
}
