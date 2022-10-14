package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:department")
@Node(jcrType = "hee:department")
public class Department extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:name")
    public String getName() {
        return getSingleProperty("hee:name");
    }

    @HippoEssentialsGenerated(internalName = "hee:phoneNumber")
    public String getPhoneNumber() {
        return getSingleProperty("hee:phoneNumber");
    }

    @HippoEssentialsGenerated(internalName = "hee:email")
    public String getEmail() {
        return getSingleProperty("hee:email");
    }

    @HippoEssentialsGenerated(internalName = "hee:address")
    public String getAddress() {
        return getSingleProperty("hee:address");
    }

    @HippoEssentialsGenerated(internalName = "hee:organisation")
    public String getOrganisation() {
        return getSingleProperty("hee:organisation");
    }

    @HippoEssentialsGenerated(internalName = "hee:website")
    public String getWebsite() {
        return getSingleProperty("hee:website");
    }

    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }
}
