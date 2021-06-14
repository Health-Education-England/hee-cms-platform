package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoCompound;
import org.hippoecm.hst.content.beans.standard.HippoResourceBean;

@HippoEssentialsGenerated(internalName = "hee:fileLink")
@Node(jcrType = "hee:fileLink")
public class FileLink extends HippoCompound {
    @HippoEssentialsGenerated(internalName = "hee:text")
    public String getText() {
        return getSingleProperty("hee:text");
    }

    @HippoEssentialsGenerated(internalName = "hee:file")
    public HippoResourceBean getFile() {
        return getBean("hee:file", HippoResourceBean.class);
    }
}
