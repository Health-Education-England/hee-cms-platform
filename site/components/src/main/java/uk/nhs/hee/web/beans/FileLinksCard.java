package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.List;
import uk.nhs.hee.web.beans.FileLink;

@HippoEssentialsGenerated(internalName = "hee:fileLinksCard")
@Node(jcrType = "hee:fileLinksCard")
public class FileLinksCard extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:fileLinks")
    public List<FileLink> getFileLinks() {
        return getChildBeansByName("hee:fileLinks", FileLink.class);
    }
}
