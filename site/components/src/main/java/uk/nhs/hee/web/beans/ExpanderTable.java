package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.List;
import uk.nhs.hee.web.beans.Expander;

@HippoEssentialsGenerated(internalName = "hee:expanderTable")
@Node(jcrType = "hee:expanderTable")
public class ExpanderTable extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:expanderTable")
    public List<Expander> getExpanderTable() {
        return getChildBeansByName("hee:expanderTable", Expander.class);
    }
}
