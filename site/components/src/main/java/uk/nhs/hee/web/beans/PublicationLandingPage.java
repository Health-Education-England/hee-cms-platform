package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.standard.HippoAsset;
import org.hippoecm.hst.content.beans.standard.HippoMirrorBean;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import java.util.Calendar;
import java.util.List;
import java.util.stream.Collectors;

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

    @HippoEssentialsGenerated(internalName = "hee:assetVersions")
    public List<HippoResourceBean> getAssetVersions() {
        List<HippoMirrorBean> mirrorBeans = getChildBeansByName("hee:assetVersions",HippoMirrorBean.class);
        return mirrorBeans.stream().map(bean -> ((HippoAsset) bean.getReferencedBean()).getAsset()).collect(Collectors.toList());
    }

    @HippoEssentialsGenerated(internalName = "hee:assetLanguageVersions")
    public List<HippoResourceBean> getAssetLanguageVersions() {
        List<HippoMirrorBean> mirrorBeans = getChildBeansByName("hee:assetLanguageVersions",HippoMirrorBean.class);
        return mirrorBeans.stream().map(bean -> ((HippoAsset) bean.getReferencedBean()).getAsset()).collect(Collectors.toList());
    }
}
