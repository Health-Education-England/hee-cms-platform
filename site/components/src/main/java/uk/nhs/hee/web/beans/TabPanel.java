package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

import java.util.List;

@HippoEssentialsGenerated(internalName = "hee:tabPanel")
@Node(jcrType = "hee:tabPanel")
public class TabPanel extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:tabTitle")
    public String getTabTitle() {
        return getSingleProperty("hee:tabTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:tabBody")
    public HippoHtml getTabBody() {
        return getHippoHtml("hee:tabBody");
    }

    @HippoEssentialsGenerated(internalName = "hee:contentBlocks")
    public <T extends HippoBean> List<T> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }
}
