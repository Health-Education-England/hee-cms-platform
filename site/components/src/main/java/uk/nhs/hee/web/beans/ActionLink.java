package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;

@HippoEssentialsGenerated(internalName = "hee:ActionLink")
@Node(jcrType = "hee:ActionLink")
public class ActionLink extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:link")
    public Link getLink() {
        return getBean("hee:link", Link.class);
    }
}
