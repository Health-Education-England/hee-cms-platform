package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

import java.util.List;

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

    @HippoEssentialsGenerated(internalName = "hee:contentBlocks")
    public <T extends HippoBean> List<T> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }

}
