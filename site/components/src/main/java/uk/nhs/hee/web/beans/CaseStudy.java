package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoResourceBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import java.util.Calendar;

@HippoEssentialsGenerated(internalName = "hee:caseStudy")
@Node(jcrType = "hee:caseStudy")
public class CaseStudy extends BaseDocument {
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

    @HippoEssentialsGenerated(internalName = "hee:document")
    public HippoResourceBean getDocument() {
        return getBean("hee:document", HippoResourceBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:impactTypes")
    public String[] getImpactTypes() {
        return getMultipleProperty("hee:impactTypes");
    }

    @HippoEssentialsGenerated(internalName = "hee:impactGroup")
    public String getImpactGroup() {
        return getSingleProperty("hee:impactGroup");
    }

    @HippoEssentialsGenerated(internalName = "hee:provider")
    public String getProvider() {
        return getSingleProperty("hee:provider");
    }

    @HippoEssentialsGenerated(internalName = "hee:submittedDate")
    public Calendar getSubmittedDate() {
        return getSingleProperty("hee:submittedDate");
    }
}
