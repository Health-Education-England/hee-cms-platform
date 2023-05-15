package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import java.util.List;
import uk.nhs.hee.web.beans.ExpanderTableRow;

@HippoEssentialsGenerated(internalName = "hee:expander")
@Node(jcrType = "hee:expander")
public class Expander extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:expanderTitle")
    public String getExpanderTitle() {
        return getSingleProperty("hee:expanderTitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:expanderRow")
    public List<ExpanderTableRow> getExpanderRow() {
        return getChildBeansByName("hee:expanderRow", ExpanderTableRow.class);
    }
}
