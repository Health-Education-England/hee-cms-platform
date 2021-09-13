package uk.nhs.hee.web.selection.frontend.provider;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.onehippo.forge.selection.frontend.plugin.Config;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

@RunWith(MockitoJUnitRunner.class)
public class ChannelBasedValueListNameProviderTest {

    private final ChannelBasedValueListNameProvider systemUnderTest = new ChannelBasedValueListNameProvider();

    @Test
    public void getValueListName_WithChannelAndVLNameAndVLBasePathFormat_ReturnsVLPath() {
        // Mocks & stubs
        final String channel = "lks";
        final IPluginConfig mockPluginConfig = mock(IPluginConfig.class);

        final IPluginConfig mockClusterOptionsConfig = mock(IPluginConfig.class);
        when(mockClusterOptionsConfig.getString("valueListName")).thenReturn("blogcategories");
        when(mockClusterOptionsConfig.getString("valueListBasePathFormat"))
                .thenReturn("/content/documents/administration/value-lists/${channel}");

        when(mockPluginConfig.getPluginConfig(Config.CLUSTER_OPTIONS)).thenReturn(mockClusterOptionsConfig);

        // Execute the method to be tested
        final String valueListPath = systemUnderTest.getValueListName(channel, mockPluginConfig);

        // Verify
        assertThat(valueListPath).isEqualTo("/content/documents/administration/value-lists/lks/blogcategories");
    }

    @Test
    public void getValueListName_WithChannelAndVLNameButVLBasePathFormatNotConfigured_ReturnsVLPath() {
        // Mocks & stubs
        final String channel = "lks";
        final IPluginConfig mockPluginConfig = mock(IPluginConfig.class);

        final IPluginConfig mockClusterOptionsConfig = mock(IPluginConfig.class);
        when(mockClusterOptionsConfig.getString("valueListName")).thenReturn("blogcategories");

        when(mockPluginConfig.getPluginConfig(Config.CLUSTER_OPTIONS)).thenReturn(mockClusterOptionsConfig);

        // Execute the method to be tested
        final String valueListPath = systemUnderTest.getValueListName(channel, mockPluginConfig);

        // Verify
        assertThat(valueListPath).isEqualTo("/content/documents/administration/valuelists/lks/blogcategories");
    }

    @Test
    public void getValueListName_WithChannelAndVLNameNotConfigured_ReturnsEmptyVLPath() {
        // Mocks & stubs
        final String channel = "lks";
        final IPluginConfig mockPluginConfig = mock(IPluginConfig.class);

        final IPluginConfig mockClusterOptionsConfig = mock(IPluginConfig.class);
        when(mockPluginConfig.getPluginConfig(Config.CLUSTER_OPTIONS)).thenReturn(mockClusterOptionsConfig);

        // Execute the method to be tested
        final String valueListPath = systemUnderTest.getValueListName(channel, mockPluginConfig);

        // Verify
        assertThat(valueListPath).isEmpty();
    }

    @Test
    public void getValueListName_WithEmptyChannel_ReturnsEmptyVLPath() {
        // Mocks & stubs
        final IPluginConfig mockPluginConfig = mock(IPluginConfig.class);

        // Execute the method to be tested
        final String valueListPath = systemUnderTest.getValueListName(StringUtils.EMPTY, mockPluginConfig);

        // Verify
        assertThat(valueListPath).isEmpty();
    }
}
