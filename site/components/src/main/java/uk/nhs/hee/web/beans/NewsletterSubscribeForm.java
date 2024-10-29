package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:newsletterSubscribeForm")
@Node(jcrType = "hee:newsletterSubscribeForm")
public class NewsletterSubscribeForm extends BaseDocument {
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

    @HippoEssentialsGenerated(internalName = "hee:showOrganisationField")
    public Boolean getShowOrganisationField() {
        return getSingleProperty("hee:showOrganisationField");
    }

    @HippoEssentialsGenerated(internalName = "hee:showRegionField")
    public Boolean getShowRegionField() {
        return getSingleProperty("hee:showRegionField");
    }

    @HippoEssentialsGenerated(internalName = "hee:showProfessionField")
    public Boolean getShowProfessionField() {
        return getSingleProperty("hee:showProfessionField");
    }

    @HippoEssentialsGenerated(internalName = "hee:consentText")
    public HippoHtml getConsentText() {
        return getHippoHtml("hee:consentText");
    }

    @HippoEssentialsGenerated(internalName = "hee:enableDoubleOptIn")
    public Boolean getEnableDoubleOptIn() {
        return getSingleProperty("hee:enableDoubleOptIn");
    }

    @HippoEssentialsGenerated(internalName = "hee:enableCaptcha")
    public Boolean getEnableCaptcha() {
        return getSingleProperty("hee:enableCaptcha");
    }

    @HippoEssentialsGenerated(internalName = "hee:dataId")
    public String getDataId() { return getSingleProperty("hee:dataId"); }
}
