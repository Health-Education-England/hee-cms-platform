package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:richTextBlock")
@Node(jcrType = "hee:richTextBlock")
public class RichTextBlock extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:html")
    public HippoHtml getHtml() {
        return getHippoHtml("hee:html");
    }
}
