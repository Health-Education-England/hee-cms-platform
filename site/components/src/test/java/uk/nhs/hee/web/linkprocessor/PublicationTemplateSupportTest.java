package uk.nhs.hee.web.linkprocessor;

import static org.junit.Assert.assertEquals;

import org.junit.Test;

public class PublicationTemplateSupportTest {
    @Test
    public void checkPathRefIsReplacedWhenSupplied() {
        PublicationTemplateSupport support = new PublicationTemplateSupport( "/kls/publications");
        String newPath = support.managePublicationPathPrefix("/site/main/!!PATHREF!!/publications/d/info-1");
        assertEquals("/site/main/kls/publications/d/info-1", newPath);
    }

    @Test
    public void checkPathRefIsNotReplacedWhenNotSupplied() {
        PublicationTemplateSupport support = new PublicationTemplateSupport( "/kls/publications");
        String newPath = support.managePublicationPathPrefix("/site/main/fred/info-2");
        assertEquals("/site/main/fred/info-2", newPath);
    }

    @Test
    public void checkNotPublicationUrlIsNotChanged() {
        PublicationTemplateSupport support = new PublicationTemplateSupport( "/kls/fred");
        String newPath = support.managePublicationPathPrefix("/site/main/!!PATHREF!!/fred/d/info-1");
        assertEquals("/site/main/!!PATHREF!!/fred/d/info-1", newPath);
    }
}
