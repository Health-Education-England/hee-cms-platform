package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.ImageSetWithCaption;

@HippoEssentialsGenerated(internalName = "hee:person")
@Node(jcrType = "hee:person")
public class Person extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:name")
    public String getName() {
        return getSingleProperty("hee:name");
    }

    @HippoEssentialsGenerated(internalName = "hee:departmentName")
    public String getDepartmentName() {
        return getSingleProperty("hee:departmentName");
    }

    @HippoEssentialsGenerated(internalName = "hee:jobTitle")
    public String getJobTitle() {
        return getSingleProperty("hee:jobTitle");
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

    @HippoEssentialsGenerated(internalName = "hee:image")
    public ImageSetWithCaption getImage() {
        return getLinkedBean("hee:image", ImageSetWithCaption.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:organisation")
    public String getOrganisation() {
        return getSingleProperty("hee:organisation");
    }

    @HippoEssentialsGenerated(internalName = "hee:pronouns")
    public String getPronouns() {
        return getSingleProperty("hee:pronouns");
    }

    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:website")
    public String getWebsite() {
        return getSingleProperty("hee:website");
    }

    @HippoEssentialsGenerated(internalName = "hee:bio")
    public String getBio() {
        return getSingleProperty("hee:bio");
    }

    @HippoEssentialsGenerated(internalName = "hee:linkUrl")
    public String getLinkUrl() {
        return getSingleProperty("hee:linkUrl");
    }
}
