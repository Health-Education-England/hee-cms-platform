package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoHtml;

@HippoEssentialsGenerated(internalName = "hee:richTextWithoutHeadingOneAndTwo")
@Node(jcrType = "hee:richTextWithoutHeadingOneAndTwo")
public class RichTextWithoutHeadingOneAndTwo extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:content")
    public HippoHtml getContent() {
        return getHippoHtml("hee:content");
    }
}
