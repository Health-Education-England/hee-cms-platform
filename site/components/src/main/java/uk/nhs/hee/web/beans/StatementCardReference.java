package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoBean;

@HippoEssentialsGenerated(internalName = "hee:statementCardReference")
@Node(jcrType = "hee:statementCardReference")
public class StatementCardReference extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:statementCardContentBlock")
    public HippoBean getStatementCardContentBlock() {
        return getLinkedBean("hee:statementCardContentBlock", HippoBean.class);
    }
}
