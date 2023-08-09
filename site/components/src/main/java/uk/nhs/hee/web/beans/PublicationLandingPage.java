package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import java.util.Calendar;
import java.util.List;

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

    @HippoEssentialsGenerated(internalName = "hee:assetVersionsContent")
    public List<AssetResource> getAssetVersionsContent() {
        return getChildBeansByName("hee:assetVersionsContent", AssetResource.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:languageVersionsContent")
    public List<AssetResource> getLanguageVersionsContent() {
        return getChildBeansByName("hee:languageVersionsContent", AssetResource.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:featuredContentBlock")
    public HippoBean getFeaturedContentBlock() {
        return getLinkedBean("hee:featuredContentBlock", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyHealthcareTopics")
    public String[] getGlobalTaxonomyHealthcareTopics() {
        return getMultipleProperty("hee:globalTaxonomyHealthcareTopics");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyProfessions")
    public String[] getGlobalTaxonomyProfessions() {
        return getMultipleProperty("hee:globalTaxonomyProfessions");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyPublicationType")
    public String[] getGlobalTaxonomyPublicationType() {
        return getMultipleProperty("hee:globalTaxonomyPublicationType");
    }
}
