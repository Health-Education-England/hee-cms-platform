package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.List;
import uk.nhs.hee.web.beans.NavMapLink;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:navMap")
@Node(jcrType = "hee:navMap")
public class NavMap extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:links")
    public List<NavMapLink> getLinks() {
        return getChildBeansByName("hee:links", NavMapLink.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:mapEducation")
    public String getMapEducation() {
        return getSingleProperty("hee:mapEducation");
    }

    @HippoEssentialsGenerated(internalName = "hee:description")
    public HippoHtml getDescription() {
        return getHippoHtml("hee:description");
    }
}
