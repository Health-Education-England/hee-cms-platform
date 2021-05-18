package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;

@HippoEssentialsGenerated(internalName = "hee:event")
@Node(jcrType = "hee:event")
public class Event extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:link")
    public String getLink() {
        return getSingleProperty("hee:link");
    }

    @HippoEssentialsGenerated(internalName = "hee:date")
    public Calendar getDate() {
        return getSingleProperty("hee:date");
    }

    @HippoEssentialsGenerated(internalName = "hee:location")
    public String getLocation() {
        return getSingleProperty("hee:location");
    }
}
