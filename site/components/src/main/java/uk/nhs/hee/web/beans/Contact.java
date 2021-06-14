package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import java.util.List;
import uk.nhs.hee.web.beans.ContactWithCopy;

@HippoEssentialsGenerated(internalName = "hee:contact")
@Node(jcrType = "hee:contact")
public class Contact extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:display")
    public String[] getDisplay() {
        return getMultipleProperty("hee:display");
    }

    @HippoEssentialsGenerated(internalName = "hee:contentItems")
    public List<ContactWithCopy> getContentItems() {
        return getChildBeansByName("hee:contentItems", ContactWithCopy.class);
    }
}
