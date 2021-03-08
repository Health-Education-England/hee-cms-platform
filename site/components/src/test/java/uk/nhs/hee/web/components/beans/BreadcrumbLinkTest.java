package uk.nhs.hee.web.components.beans;

import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class BreadcrumbLinkTest {

    @Test
    public void breadcrumbLink() {
        // Mocks & stubs
        final String linkText = "Evidence and resources";
        final String linkURL = "/site/evidence-and-resources";

        // Execute the method to be tested
        final BreadcrumbLink breadcrumbLink =
                new BreadcrumbLink(linkText, linkURL);

        // Verify
        assertThat(breadcrumbLink)
                .extracting("text", "url")
                .contains(linkText, linkURL);
    }
}
