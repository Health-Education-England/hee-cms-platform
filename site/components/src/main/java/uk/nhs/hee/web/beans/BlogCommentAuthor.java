package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;

@HippoEssentialsGenerated(internalName = "hee:blogCommentAuthor")
@Node(jcrType = "hee:blogCommentAuthor")
public class BlogCommentAuthor extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:firstName")
    public String getFirstName() {
        return getSingleProperty("hee:firstName");
    }

    @HippoEssentialsGenerated(internalName = "hee:lastName")
    public String getLastName() {
        return getSingleProperty("hee:lastName");
    }

    @HippoEssentialsGenerated(internalName = "hee:email")
    public String getEmail() {
        return getSingleProperty("hee:email");
    }
}
