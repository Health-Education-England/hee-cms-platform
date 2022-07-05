package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;

@HippoEssentialsGenerated(internalName = "hee:appliesToBox")
@Node(jcrType = "hee:appliesToBox")
public class AppliesToBox extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:england")
    public Boolean getEngland() {
        return getSingleProperty("hee:england");
    }

    @HippoEssentialsGenerated(internalName = "hee:scotland")
    public Boolean getScotland() {
        return getSingleProperty("hee:scotland");
    }

    @HippoEssentialsGenerated(internalName = "hee:wales")
    public Boolean getWales() {
        return getSingleProperty("hee:wales");
    }

    @HippoEssentialsGenerated(internalName = "hee:northernIreland")
    public Boolean getNorthernIreland() {
        return getSingleProperty("hee:northernIreland");
    }

    @HippoEssentialsGenerated(internalName = "hee:urlScotland")
    public String getUrlScotland() {
        return getSingleProperty("hee:urlScotland");
    }

    @HippoEssentialsGenerated(internalName = "hee:urlWales")
    public String getUrlWales() {
        return getSingleProperty("hee:urlWales");
    }

    @HippoEssentialsGenerated(internalName = "hee:urlNorthernIreland")
    public String getUrlNorthernIreland() {
        return getSingleProperty("hee:urlNorthernIreland");
    }
}
