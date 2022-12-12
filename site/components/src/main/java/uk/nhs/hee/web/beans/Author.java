package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:author")
@Node(jcrType = "hee:author")
public class Author extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:person")
    public HippoBean getPerson() {
        return getLinkedBean("hee:person", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:bioSummary")
    public HippoHtml getBioSummary() {
        return getHippoHtml("hee:bioSummary");
    }
}
