package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;

@HippoEssentialsGenerated(internalName = "hee:table")
@Node(jcrType = "hee:table")
public class Table extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:caption")
    public String getCaption() {
        return getSingleProperty("hee:caption");
    }

    @HippoEssentialsGenerated(internalName = "hee:content")
    public HippoHtml getContent() {
        return getHippoHtml("hee:content");
    }
}
