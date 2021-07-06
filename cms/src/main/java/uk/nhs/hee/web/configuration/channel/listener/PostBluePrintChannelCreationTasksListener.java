package uk.nhs.hee.web.configuration.channel.listener;

import org.hippoecm.hst.configuration.channel.ChannelManagerEvent;
import org.hippoecm.hst.configuration.channel.ChannelManagerEventListener;
import org.hippoecm.hst.configuration.channel.ChannelManagerEventListenerException;
import org.hippoecm.hst.container.RequestContextProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.yaml.YAMLImporter;

import javax.jcr.RepositoryException;
import java.io.IOException;
import java.util.AbstractMap;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * An implementation of {@link ChannelManagerEventListener} to perform post-channel creation tasks
 * for channels created via {@code website-blueprint} blueprint.
 */
public class PostBluePrintChannelCreationTasksListener implements ChannelManagerEventListener {

    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(PostBluePrintChannelCreationTasksListener.class);

    // Website blueprint ID
    private static final String WEBSITE_BLUEPRINT_ID = "website-blueprint";

    @Override
    public void channelCreated(final ChannelManagerEvent event) throws ChannelManagerEventListenerException {
        LOGGER.debug("BluePrint = {}, ChannelId = {}, ChannelName = {}",
                event.getBlueprint(), event.getChannel().getId(), event.getChannel().getName());

        if (event.getBlueprint() == null || !WEBSITE_BLUEPRINT_ID.equals(event.getBlueprint().getId())) {
            return;
        }

        try {
            final YAMLImporter yamlImporter = new YAMLImporter(
                    RequestContextProvider.get().getSession(),
                    event.getBlueprint().getId(),
                    getChannelPlaceholderValueMap(
                            event.getChannel().getId(),
                            event.getChannel().getName()
                    )
            );
            yamlImporter.importFiles();
        } catch (final RepositoryException | IOException e) {
            LOGGER.error(
                    "Caught error {} while performing post blueprint channel creation tasks",
                    e.getMessage(),
                    e);
            throw new ChannelManagerEventListenerException(
                    ChannelManagerEventListenerException.Status.STOP_CHANNEL_PROCESSING, e);
        }
    }

    @Override
    public void channelUpdated(final ChannelManagerEvent event) {
        // No actions are required to be performed during channel update event.
    }

    /**
     * Returns a {@link Map} containing {@code channelId} & {@code channelName} placeholders.
     *
     * @return the {@link Map} containing {@code channelId} & {@code channelName} placeholders.
     */
    private Map<String, String> getChannelPlaceholderValueMap(final String channelId, final String channelName) {
        return Stream.of(
                new AbstractMap.SimpleImmutableEntry<>("channelId", channelId),
                new AbstractMap.SimpleImmutableEntry<>("channelName", channelName))
                .collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
    }
}