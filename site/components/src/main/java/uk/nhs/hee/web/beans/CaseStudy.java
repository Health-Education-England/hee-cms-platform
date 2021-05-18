package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoResourceBean;

@HippoEssentialsGenerated(internalName = "hee:caseStudy")
@Node(jcrType = "hee:caseStudy")
public class CaseStudy extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:sector")
    public String getSector() {
        return getSingleProperty("hee:sector");
    }

    @HippoEssentialsGenerated(internalName = "hee:region")
    public String getRegion() {
        return getSingleProperty("hee:region");
    }

    @HippoEssentialsGenerated(internalName = "hee:categories")
    public String[] getCategories() {
        return getMultipleProperty("hee:categories");
    }

    @HippoEssentialsGenerated(internalName = "hee:document")
    public HippoResourceBean getDocument() {
        return getBean("hee:document", HippoResourceBean.class);
    }
}
