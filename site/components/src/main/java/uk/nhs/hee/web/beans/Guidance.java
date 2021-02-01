package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import java.util.List;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:guidance")
@Node(jcrType = "hee:guidance")
public class Guidance extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    public List<?> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:quickLinks")
    public List<HippoBean> getQuickLinks() {
        return getLinkedBeans("hee:quickLinks", HippoBean.class);
    }
}
