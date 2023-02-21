package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.ContactCardReference;

@HippoEssentialsGenerated(internalName = "hee:contactCardWithDescription")
@Node(jcrType = "hee:contactCardWithDescription")
public class ContactCardWithDescription extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:contactCardReference")
    public ContactCardReference getContactCardReference() {
        return getBean("hee:contactCardReference", ContactCardReference.class);
    }
}
