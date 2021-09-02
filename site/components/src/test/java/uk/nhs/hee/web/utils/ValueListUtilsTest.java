package uk.nhs.hee.web.utils;

import org.junit.Test;

import static org.assertj.core.api.Assertions.assertThat;

public class ValueListUtilsTest {

    @Test
    public void getChannelSpecificValueListIdentifier_WithIdentifierAndChannel_ReturnsChannelSpecificIdentifier() {
        // Mocks & stubs
        final String valueListIdentifier = "blogCategories";
        final String channel = "lks";

        // Execute the method to be tested
        final String channelSpecificValueListIdentifier =
                ValueListUtils.getChannelSpecificValueListIdentifier(valueListIdentifier, channel);

        // Verify
        assertThat(channelSpecificValueListIdentifier).isEqualTo(valueListIdentifier + "_" + channel);
    }

}
