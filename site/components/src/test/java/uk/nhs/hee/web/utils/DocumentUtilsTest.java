package uk.nhs.hee.web.utils;

import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class DocumentUtilsTest {

    @Test
    public void getChannel_WithDocumentPath_ReturnsChannel() {
        // Execute the method to be tested
        final String channel =
                DocumentUtils.getChannel("/content/documents/lks/blogposts/expertssearch");

        // Verify
        assertThat(channel).isEqualTo("lks");
    }

}
