package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import java.util.List;

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

    @HippoEssentialsGenerated(internalName = "hee:publicationType")
    public String getPublicationType() {
        return getSingleProperty("hee:publicationType");
    }

    @HippoEssentialsGenerated(internalName = "hee:contentType")
    public String getContentType() {
        return getSingleProperty("hee:contentType");
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredDocuments")
    public List<HippoBean> getFeaturedDocuments() {
        return getLinkedBeans("hee:featuredDocuments", HippoBean.class);
    }
}
