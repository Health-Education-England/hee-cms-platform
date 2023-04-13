package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;

@HippoEssentialsGenerated(internalName = "hee:expanderTableRow")
@Node(jcrType = "hee:expanderTableRow")
public class ExpanderTableRow extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:dataTitle")
    public String getDataTitle() {
        return getSingleProperty("hee:dataTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:data")
    public String getData() {
        return getSingleProperty("hee:data");
    }

    @HippoEssentialsGenerated(internalName = "hee:url")
    public String getUrl() {
        return getSingleProperty("hee:url");
    }
}
