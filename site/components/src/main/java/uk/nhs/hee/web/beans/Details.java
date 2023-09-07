package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

import java.util.List;

@HippoEssentialsGenerated(internalName = "hee:details")
@Node(jcrType = "hee:details")
public class Details extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:richStatement")
    public HippoHtml getRichStatement() {
        return getHippoHtml("hee:richStatement");
    }

    @HippoEssentialsGenerated(internalName = "hee:contentBlocks")
    public <T extends HippoBean> List<T> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }

}
