package uk.nhs.hee.web.selection.frontend.provider;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.onehippo.forge.selection.frontend.plugin.Config;
import org.onehippo.forge.selection.frontend.provider.IValueListNameProvider;
import org.onehippo.forge.selection.frontend.utils.SelectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * <p>Channel based value-list name provider ({@link IValueListNameProvider}).</p>
 */
public class ChannelBasedValueListNameProvider implements IValueListNameProvider {
    /**
     * Default 'valueListBasePathFormat' value in case if one isn't configured on cluster.options
     */
    public static final String DEFAULT_VALUE_LIST_BASE_PATH_FORMAT =
            "/content/documents/administration/valuelists/${channel}";

    // Cluster option properties
    private static final String CLUSTER_OPTION_VALUE_LIST_NAME = "valueListName";
    private static final String CLUSTER_OPTION_VALUE_LIST_BASE_PATH_FORMAT = "valueListBasePathFormat";

    private static final Logger log = LoggerFactory.getLogger(ChannelBasedValueListNameProvider.class);

    /**
     * Returns value-list path built based on {@code valueListName}
     * and {@code valueListFolderPathFormat} (in case if any) plugin config (added to the {@code cluster.options} node)
     * and the {@code channel} input.
     *
     * @param channel the channel in which the current document is being created.
     * @param config  the {@link IPluginConfig} instance.
     * @return the value-list path built based on {@code valueListName}
     * and {@code valueListFolderPathFormat} (in case if any) plugin config (added to the {@code cluster.options} node)
     * and the {@code channel} input.
     */
    @Override
    public String getValueListName(final String channel, final IPluginConfig config) {
        if (StringUtils.isEmpty(channel)) {
            return StringUtils.EMPTY;
        }

        final IPluginConfig clusterOptions = config.getPluginConfig(Config.CLUSTER_OPTIONS);

        final String valueListName = clusterOptions.getString(CLUSTER_OPTION_VALUE_LIST_NAME);
        log.debug("Plugin config '{}': {}", CLUSTER_OPTION_VALUE_LIST_NAME, valueListName);

        if (StringUtils.isBlank(valueListName)) {
            log.error("Plugin config '{}' doesn't seem to have been configured on cluster.options node. " +
                            "Please make sure to configure one to construct the value-list path",
                    CLUSTER_OPTION_VALUE_LIST_NAME);
            return StringUtils.EMPTY;
        }

        final String valueListBasePathFormat = getValueListBasePath(clusterOptions);

        return SelectionUtils.ensureSlashes(
                valueListBasePathFormat.replace("${channel}", channel), valueListName);
    }

    /**
     * <p>Returns value-list base (folder) path format.</p>
     *
     * <p>Returns {@code valueListBasePathFormat} plugin config in case if configured. Otherwise, returns
     * {@code DEFAULT_VALUE_LIST_BASE_PATH_FORMAT}.</p>
     *
     * @param clusterOptions the {@link IPluginConfig} instance.
     * @return the value-list base (folder) path format.
     */
    private String getValueListBasePath(final IPluginConfig clusterOptions) {
        String valueListBasePathFormat = clusterOptions.getString(CLUSTER_OPTION_VALUE_LIST_BASE_PATH_FORMAT);
        log.debug("Plugin config '{}': {}", CLUSTER_OPTION_VALUE_LIST_BASE_PATH_FORMAT, valueListBasePathFormat);

        if (StringUtils.isBlank(valueListBasePathFormat)) {
            log.warn("Plugin config '{}' isn't configured. Defaulting to '{}'",
                    CLUSTER_OPTION_VALUE_LIST_BASE_PATH_FORMAT, DEFAULT_VALUE_LIST_BASE_PATH_FORMAT);
            valueListBasePathFormat = DEFAULT_VALUE_LIST_BASE_PATH_FORMAT;
        }
        return valueListBasePathFormat;
    }
}
