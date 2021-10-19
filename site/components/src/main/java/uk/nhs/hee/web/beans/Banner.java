package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:banner")
@Node(jcrType = "hee:banner")
public class Banner extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:tag")
    public String getTag() {
        return getSingleProperty("hee:tag");
    }

    @HippoEssentialsGenerated(internalName = "hee:copy")
    public HippoHtml getCopy() {
        return getHippoHtml("hee:copy");
    }
}
