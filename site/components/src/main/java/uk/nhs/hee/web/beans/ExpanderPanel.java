package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:expanderPanel")
@Node(jcrType = "hee:expanderPanel")
public class ExpanderPanel extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:expanderSummary")
    public String getExpanderSummary() {
        return getSingleProperty("hee:expanderSummary");
    }

    @HippoEssentialsGenerated(internalName = "hee:expanderDetails")
    public HippoHtml getExpanderDetails() {
        return getHippoHtml("hee:expanderDetails");
    }
}
