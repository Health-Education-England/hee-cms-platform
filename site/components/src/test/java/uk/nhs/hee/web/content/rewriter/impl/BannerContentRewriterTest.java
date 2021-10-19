package uk.nhs.hee.web.content.rewriter.impl;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;

import javax.jcr.Node;

import static org.assertj.core.api.Assertions.*;

@RunWith(MockitoJUnitRunner.class)
public class BannerContentRewriterTest {
    @Spy
    private final BannerContentRewriter systemUnderTest = new BannerContentRewriter();
    @Mock
    private HstRequestContext mockHstRequestContext;
    @Mock
    private Mount mockMount;
    @Mock
    private Node mockHtmlNode;

    @Test
    public void rewrite_ReturnsRewrittenHtmlWithAnchorLinksFormattedWithCorrectClassAndWrapperParagraphTagsAreRemoved() {
        // Mocks and stubs
        final String copy = "<p>This is a new service - your " +
                "<a href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=12345\" target=\"_blank\">feedback</a> " +
                "will help us to improve it.</p>";

        // Execute the method to be tested
        final String rewrittenHtml = systemUnderTest.rewrite(copy, mockHtmlNode, mockHstRequestContext, mockMount);

        // Verify
        assertThat(rewrittenHtml).isEqualTo("This is a new service - your " +
                "<a class=\"nhsuk-link\" href=\"https://forms.office.com/Pages/ResponsePage.aspx?id=12345\" " +
                "target=\"_blank\">feedback</a> will help us to improve it.");

    }
}
