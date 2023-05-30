package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import java.util.Calendar;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:assetResource")
@Node(jcrType = "hee:assetResource")
public class AssetResource extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:publicationDate")
    public Calendar getPublicationDate() {
        return getSingleProperty("hee:publicationDate");
    }

    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:assetData")
    public HippoBean getAssetData() {
        return getLinkedBean("hee:assetData", HippoBean.class);
    }
}
