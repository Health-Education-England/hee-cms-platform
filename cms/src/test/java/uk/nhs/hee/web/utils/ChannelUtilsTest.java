package uk.nhs.hee.web.utils;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

public class ChannelUtilsTest {

    @Test
    public void getChannelName_WithChannelNameExists_ReturnsChannelName() {
        // Mocks & stubs
        final String nodePath = "/content/documents/lks/common/people/james-smith";

        // Execute the method to be tested
        final String channelName = ChannelUtils.getChannelName(nodePath);

        // Verify
        assertThat(channelName).isEqualTo("lks");
    }

    @Test
    public void getChannelName_WithChannelNameDoesNotExists_ReturnsEmptyString() {
        // Mocks & stubs
        final String nodePath = "/content/documents/";

        // Execute the method to be tested
        final String channelName = ChannelUtils.getChannelName(nodePath);

        // Verify
        assertThat(channelName).isEmpty();
    }

}
