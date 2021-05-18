package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import java.util.Calendar;
import org.hippoecm.hst.content.beans.standard.HippoResourceBean;

@HippoEssentialsGenerated(internalName = "hee:searchBank")
@Node(jcrType = "hee:searchBank")
public class SearchBank extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:description")
    public String getDescription() {
        return getSingleProperty("hee:description");
    }

    @HippoEssentialsGenerated(internalName = "hee:details")
    public String getDetails() {
        return getSingleProperty("hee:details");
    }

    @HippoEssentialsGenerated(internalName = "hee:provider")
    public String getProvider() {
        return getSingleProperty("hee:provider");
    }

    @HippoEssentialsGenerated(internalName = "hee:categories")
    public String[] getCategories() {
        return getMultipleProperty("hee:categories");
    }

    @HippoEssentialsGenerated(internalName = "hee:strategyDocument")
    public HippoResourceBean getStrategyDocument() {
        return getBean("hee:strategyDocument", HippoResourceBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:searchDocument")
    public HippoResourceBean getSearchDocument() {
        return getBean("hee:searchDocument", HippoResourceBean.class);
    }

    @HippoEssentialsGenerated(internalName = "hee:completedDate")
    public Calendar getCompletedDate() {
        return getSingleProperty("hee:completedDate");
    }
}
