package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:featuredContent")
@Node(jcrType = "hee:featuredContent")
public class FeaturedContent extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:method")
    public String getMethod() {
        return getSingleProperty("hee:method");
    }

    @HippoEssentialsGenerated(internalName = "hee:topics")
    public String[] getTopics() {
        return getMultipleProperty("hee:topics");
    }

    @HippoEssentialsGenerated(internalName = "hee:profession")
    public String[] getProfession() {
        return getMultipleProperty("hee:profession");
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationtype")
    public String getPublicationtype() {
        return getSingleProperty("hee:publicationtype");
    }

    @HippoEssentialsGenerated(internalName = "hee:contentType")
    public String getContentType() {
        return getSingleProperty("hee:contentType");
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredDocuments")
    public HippoBean getFeaturedDocuments() {
        return getLinkedBean("hee:featuredDocuments", HippoBean.class);
    }
}
