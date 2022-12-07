package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import uk.nhs.hee.web.beans.PageLastNextReview;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import java.util.List;
import org.hippoecm.hst.content.beans.standard.HippoResourceBean;

/** 
 * TODO: Beanwriter: Failed to create getter for node type: hippo:compound
 */
@HippoEssentialsGenerated(internalName = "hee:publicationLandingPage")
@Node(jcrType = "hee:publicationLandingPage")
public class PublicationLandingPage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:subtitle")
    public String getSubtitle() {
        return getSingleProperty("hee:subtitle");
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationDate")
    public Calendar getPublicationDate() {
        return getSingleProperty("hee:publicationDate");
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationType")
    public String getPublicationType() {
        return getSingleProperty("hee:publicationType");
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationTopics")
    public String[] getPublicationTopics() {
        return getMultipleProperty("hee:publicationTopics");
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationProfessions")
    public String[] getPublicationProfessions() {
        return getMultipleProperty("hee:publicationProfessions");
    }

    @HippoEssentialsGenerated(internalName = "hee:readTime")
    public String getReadTime() {
        return getSingleProperty("hee:readTime");
    }

    public <T extends HippoBean> List<T> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:documentVersions")
    public List<HippoResourceBean> getDocumentVersions() {
        return getChildBeansByName("hee:documentVersions",
                HippoResourceBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:languageVersions")
    public List<HippoResourceBean> getLanguageVersions() {
        return getChildBeansByName("hee:languageVersions",
                HippoResourceBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:updatedDate")
    public Calendar getUpdatedDate() {
        return getSingleProperty("hee:updatedDate");
    }

    @HippoEssentialsGenerated(internalName = "hee:webPublications")
    public List<HippoBean> getWebPublications() {
        return getLinkedBeans("hee:webPublications", HippoBean.class);
    }
}
