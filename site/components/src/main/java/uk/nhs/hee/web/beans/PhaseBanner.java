package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:phaseBanner")
@Node(jcrType = "hee:phaseBanner")
public class PhaseBanner extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:tag")
    public String getTag() {
        return getSingleProperty("hee:tag");
    }

    @HippoEssentialsGenerated(internalName = "hee:copy")
    public HippoHtml getCopy() {
        return getHippoHtml("hee:copy");
    }
}
