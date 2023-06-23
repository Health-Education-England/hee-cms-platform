package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import java.util.List;

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

    @HippoEssentialsGenerated(internalName = "hee:publicationTypeClassifiable")
    public String[] getPublicationTypeClassifiable() {
        return getMultipleProperty("hee:publicationTypeClassifiable");
    }

    @HippoEssentialsGenerated(internalName = "hee:publicationTopicsClassifiable")
    public String[] getPublicationTopicsClassifiable() {
        return getMultipleProperty("hee:publicationTopicsClassifiable");
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

    @HippoEssentialsGenerated(internalName = "hee:updatedDate")
    public Calendar getUpdatedDate() {
        return getSingleProperty("hee:updatedDate");
    }

    @HippoEssentialsGenerated(internalName = "hee:webPublications")
    public List<HippoBean> getWebPublications() {
        return getLinkedBeans("hee:webPublications", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:authors")
    public List<HippoBean> getAuthors() {
        return getLinkedBeans("hee:authors", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:hideAuthorContactDetails")
    public Boolean getHideAuthorContactDetails() {
        return getSingleProperty("hee:hideAuthorContactDetails");
    }

    @HippoEssentialsGenerated(internalName = "hee:otherFormatsEmail")
    public String getOtherFormatsEmail() {
        return getSingleProperty("hee:otherFormatsEmail");
    }

    @HippoEssentialsGenerated(internalName = "hippotaxonomy:keys")
    public String[] getKeys() {
        return getMultipleProperty("hippotaxonomy:keys");
    }
}
