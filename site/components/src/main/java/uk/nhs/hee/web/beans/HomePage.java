package uk.nhs.hee.web.beans;

import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;
import org.hippoecm.hst.content.beans.Node;
import uk.nhs.hee.web.beans.HeroSection;

import java.util.List;

/** 
 * TODO: Beanwriter: Failed to create getter for node type: hippo:compound
 */
@HippoEssentialsGenerated(internalName = "hee:HomePage")
@Node(jcrType = "hee:HomePage")
public class HomePage extends BaseDocument {
    @HippoEssentialsGenerated(internalName = "hee:HeroSection")
    public HeroSection getHeroSection() {
        return getBean("hee:HeroSection", HeroSection.class);
    }

    public List<?> getContentBlocks() {
        return getChildBeansByName("hee:contentBlocks");
    }
}
