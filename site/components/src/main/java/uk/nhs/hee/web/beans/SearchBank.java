package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoResourceBean;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;

import java.util.Calendar;

@HippoEssentialsGenerated(internalName = "hee:searchBank")
@Node(jcrType = "hee:searchBank")
public class SearchBank extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:title")
    public String getTitle() {
        return getSingleProperty("hee:title");
    }

    @HippoEssentialsGenerated(internalName = "hee:provider")
    public String getProvider() {
        return getSingleProperty("hee:provider");
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

    @HippoEssentialsGenerated(internalName = "hee:topics")
    public String[] getTopics() {
        return getMultipleProperty("hee:topics");
    }

    @HippoEssentialsGenerated(internalName = "hee:keyTerms")
    public String[] getKeyTerms() {
        return getMultipleProperty("hee:keyTerms");
    }
}
