package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:emailSubscribeForm")
@Node(jcrType = "hee:emailSubscribeForm")
public class EmailSubscribeForm extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:postSubmitUrl")
    public String getPostSubmitUrl() {
        return getSingleProperty("hee:postSubmitUrl");
    }

    @HippoEssentialsGenerated(internalName = "hee:accName")
    public String getAccName() {
        return getSingleProperty("hee:accName");
    }

    @HippoEssentialsGenerated(internalName = "hee:listName")
    public String getListName() {
        return getSingleProperty("hee:listName");
    }

    @HippoEssentialsGenerated(internalName = "hee:successUrl")
    public String getSuccessUrl() {
        return getSingleProperty("hee:successUrl");
    }

    @HippoEssentialsGenerated(internalName = "hee:errorUrl")
    public String getErrorUrl() {
        return getSingleProperty("hee:errorUrl");
    }

    @HippoEssentialsGenerated(internalName = "hee:submitButtonText")
    public String getSubmitButtonText() {
        return getSingleProperty("hee:submitButtonText");
    }
}
