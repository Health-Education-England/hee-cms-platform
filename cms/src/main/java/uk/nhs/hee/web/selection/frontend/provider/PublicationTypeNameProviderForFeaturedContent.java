package uk.nhs.hee.web.selection.frontend.provider;

import org.apache.commons.lang.StringUtils;
import org.hippoecm.frontend.plugin.config.IPluginConfig;
import org.onehippo.forge.selection.frontend.plugin.Config;
import org.onehippo.forge.selection.frontend.provider.IValueListNameProvider;
import org.onehippo.forge.selection.frontend.utils.SelectionUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Value-list name provider for {@code Publication type} (for {@code Publication landing page} {@code Content type}).
 */
public class PublicationTypeNameProviderForFeaturedContent implements IValueListNameProvider {
    static final Logger log = LoggerFactory.getLogger(PublicationTypeNameProviderForFeaturedContent.class);

    // 'Publication landing page' content type key
    public static final String PUBLICATION_LANDING_PAGE_CONTENT_TYPE_KEY = "hee:publicationLandingPage";

    // Publication types value-list name
    public static final String PUBLICATION_TYPES_VALUE_LIST_NAME = "publicationtypes";

    /**
     * <p>Returns value-list source path for {@code Publication type} ({@code hee:publicationType}) field
     * (if {@code Publication landing page} has been chosen as the {@code Content type}).
     * Otherwise, returns {@code null}.</p>
     *
     * <p>It does this by concatenating Publication types value-list name ({@code publicationtypes})
     * with the base path ({@code sourceBasePath})</p>
     *
     * @param contentTypeKey the key of the chosen {@code Content type} ({@code hee:featuredContentType}).
     * @param config the plugin config that contains the base path property
     * @return the value-list source path for {@code Publication type} ({@code hee:publicationType}) field
     * (if {@code Publication landing page} has been chosen as the {@code Content type}).
     * Otherwise, returns {@code null}.
     */
    @Override
    public String getValueListName(final String contentTypeKey, final IPluginConfig config) {
        final String baseSourcePath = config.getString(Config.SOURCE_BASE_PATH);

        if (!PUBLICATION_LANDING_PAGE_CONTENT_TYPE_KEY.equals(contentTypeKey)) {
            return null;
        }

        if(StringUtils.isNotBlank(baseSourcePath)) {
            return SelectionUtils.ensureSlashes(baseSourcePath, PUBLICATION_TYPES_VALUE_LIST_NAME);
        } else {
            log.warn("Cannot find configuration property \"{}\" at config {}", Config.SOURCE_BASE_PATH, config);
        }
        return null;
    }
}

