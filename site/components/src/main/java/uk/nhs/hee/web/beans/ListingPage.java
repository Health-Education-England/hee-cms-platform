package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import uk.nhs.hee.web.beans.ImageSetWithCaption;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:listingPage")
@Node(jcrType = "hee:listingPage")
public class ListingPage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:pageSize")
    public Long getPageSize() {
        return getSingleProperty("hee:pageSize");
    }

    @HippoEssentialsGenerated(internalName = "hee:documentTypes")
    public String[] getDocumentTypes() {
        return getMultipleProperty("hee:documentTypes");
    }

    @HippoEssentialsGenerated(internalName = "hee:listingPageType")
    public String getListingPageType() {
        return getSingleProperty("hee:listingPageType");
    }

    @HippoEssentialsGenerated(internalName = "hee:heroImage")
    public ImageSetWithCaption getHeroImage() {
        return getLinkedBean("hee:heroImage", ImageSetWithCaption.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:addToAZ")
    public Boolean getAddToAZ() {
        return getSingleProperty("hee:addToAZ");
    }
}
