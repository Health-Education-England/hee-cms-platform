package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.List;
import uk.nhs.hee.web.beans.ExpanderPanel;

@HippoEssentialsGenerated(internalName = "hee:expanderGroup")
@Node(jcrType = "hee:expanderGroup")
public class ExpanderGroup extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:expanderPanel")
    public List<ExpanderPanel> getExpanderPanel() {
        return getChildBeansByName("hee:expanderPanel", ExpanderPanel.class);
    }
}
