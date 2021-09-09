package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import java.util.List;
import uk.nhs.hee.web.beans.LinkBlock;

@HippoEssentialsGenerated(internalName = "hee:blockLinks")
@Node(jcrType = "hee:blockLinks")
public class BlockLinks extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:description")
    public HippoHtml getDescription() {
        return getHippoHtml("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:blockLinks")
    public List<LinkBlock> getBlockLinks() {
        return getChildBeansByName("hee:blockLinks", LinkBlock.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:columns")
    public String getColumns() {
        return getSingleProperty("hee:columns");
    }
}
