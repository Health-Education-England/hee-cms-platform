package uk.nhs.hee.web.utils;

import org.junit.Test;

import static org.assertj.core.api.Assertions.*;

public class ChannelUtilsTest {

    public static final String VALID_CHANNEL_PATH = "/content/documents/lks/common/people/james-smith";
    public static final String NO_CHANNEL_NODE_PATH = "/content/documents/";

    @Test
    public void getChannelName_WithChannelNameExists_ReturnsChannelName() {
        // Mocks & stubs

        // Execute the method to be tested
        final String channelName = ChannelUtils.getChannelName(VALID_CHANNEL_PATH);

        // Verify
        assertThat(channelName).isEqualTo("lks");
    }

    @Test
    public void getChannelName_WithChannelNameDoesNotExists_ReturnsEmptyString() {
        // Mocks & stubs
        final String nodePath = NO_CHANNEL_NODE_PATH;

        // Execute the method to be tested
        final String channelName = ChannelUtils.getChannelName(nodePath);

        // Verify
        assertThat(channelName).isEmpty();
    }

    @Test
    public void getChannelNameByPattern_ReturnsChannelName() {
        String channel = ChannelUtils.findChannelUsingPattern(VALID_CHANNEL_PATH);
        assertThat(channel).isEqualTo("lks");
    }

    @Test
    public void getChannelNameByPattern_ReturnsEmptyString() {
        String channel = ChannelUtils.findChannelUsingPattern(NO_CHANNEL_NODE_PATH);
        assertThat(channel).isEmpty();
    }

    @Test
    public void getChannelNameByPatternUsingNullString_ReturnsEmptyString() {
        String channel = ChannelUtils.findChannelUsingPattern(null);
        assertThat(channel).isEmpty();
    }

    @Test
    public void getChannelNameByPatternUsingEmptyString_ReturnsEmptyString() {
        String channel = ChannelUtils.findChannelUsingPattern("");
        assertThat(channel).isEmpty();
    }
}
