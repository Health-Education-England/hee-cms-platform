package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import java.util.List;

/** 
 * TODO: Beanwriter: Failed to create getter for node type: hippo:compound
 */
@HippoEssentialsGenerated(internalName = "hee:event")
@Node(jcrType = "hee:event")
public class Event extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:location")
    public String getLocation() {
        return getSingleProperty("hee:location");
    }

    @HippoEssentialsGenerated(internalName = "hee:summary")
    public String getSummary() {
        return getSingleProperty("hee:summary");
    }

    @HippoEssentialsGenerated(internalName = "hee:bookingEmail")
    public String getBookingEmail() {
        return getSingleProperty("hee:bookingEmail");
    }

    @HippoEssentialsGenerated(internalName = "hee:bookingLink")
    public String getBookingLink() {
        return getSingleProperty("hee:bookingLink");
    }

    @HippoEssentialsGenerated(internalName = "hee:opening")
    public Calendar getOpening() {
        return getSingleProperty("hee:opening");
    }

    @HippoEssentialsGenerated(internalName = "hee:closing")
    public Calendar getClosing() {
        return getSingleProperty("hee:closing");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyProfessions")
    public String[] getGlobalTaxonomyProfessions() {
        return getMultipleProperty("hee:globalTaxonomyProfessions");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyHealthcareTopics")
    public String[] getGlobalTaxonomyHealthcareTopics() {
        return getMultipleProperty("hee:globalTaxonomyHealthcareTopics");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyRegion")
    public String[] getGlobalTaxonomyRegion() {
        return getMultipleProperty("hee:globalTaxonomyRegion");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyEventType")
    public String[] getGlobalTaxonomyEventType() {
        return getMultipleProperty("hee:globalTaxonomyEventType");
    }

    @HippoEssentialsGenerated(internalName = "hee:globalTaxonomyDeliveryMethod")
    public String[] getGlobalTaxonomyDeliveryMethod() {
        return getMultipleProperty("hee:globalTaxonomyDeliveryMethod");
    }

    @HippoEssentialsGenerated(internalName = "hee:cost")
    public Long getCost() {
        return getSingleProperty("hee:cost");
    }

    @HippoEssentialsGenerated(internalName = "hee:officialEventWebsite")
    public String getOfficialEventWebsite() {
        return getSingleProperty("hee:officialEventWebsite");
    }

    @HippoEssentialsGenerated(internalName = "hee:logoGroup")
    public HippoBean getLogoGroup() {
        return getLinkedBean("hee:logoGroup", HippoBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:contentBlocks")
    public <T extends HippoBean> List<T> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }

}
