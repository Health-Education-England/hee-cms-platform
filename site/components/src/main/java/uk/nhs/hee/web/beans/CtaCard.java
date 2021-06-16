package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoHtml;
import uk.nhs.hee.web.beans.Link;

@HippoEssentialsGenerated(internalName = "hee:ctaCard")
@Node(jcrType = "hee:ctaCard")
public class CtaCard extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:ctaText")
    public HippoHtml getCtaText() {
        return getHippoHtml("hee:ctaText");
    }

    @HippoEssentialsGenerated(internalName = "hee:ctaLink")
    public Link getCtaLink() {
        return getBean("hee:ctaLink", Link.class);
    }
}
