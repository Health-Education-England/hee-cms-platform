package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.AppliesToCountry;

@HippoEssentialsGenerated(internalName = "hee:appliesToBox")
@Node(jcrType = "hee:appliesToBox")
public class AppliesToBox extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:appliesToEngland")
    public AppliesToCountry getAppliesToEngland() {
        return getBean("hee:appliesToEngland", AppliesToCountry.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:appliesToScotland")
    public AppliesToCountry getAppliesToScotland() {
        return getBean("hee:appliesToScotland", AppliesToCountry.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:appliesToWales")
    public AppliesToCountry getAppliesToWales() {
        return getBean("hee:appliesToWales", AppliesToCountry.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:appliesToNorthernIreland")
    public AppliesToCountry getAppliesToNorthernIreland() {
        return getBean("hee:appliesToNorthernIreland", AppliesToCountry.class);
    }
}
