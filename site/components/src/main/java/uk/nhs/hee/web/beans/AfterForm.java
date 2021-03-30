package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import uk.nhs.hee.web.beans.Link;

@HippoEssentialsGenerated(internalName = "hee:AfterForm")
@Node(jcrType = "hee:AfterForm")
public class AfterForm extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:mainBody")
    public HippoHtml getMainBody() {
        return getHippoHtml("hee:mainBody");
    }

    @HippoEssentialsGenerated(internalName = "hee:backLink")
    public Link getBackLink() {
        return getBean("hee:backLink", Link.class);
    }
}
