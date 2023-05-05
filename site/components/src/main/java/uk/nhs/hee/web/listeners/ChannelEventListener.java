package uk.nhs.hee.web.listeners;

import org.hippoecm.hst.pagecomposer.jaxrs.api.ChannelEvent;
import org.hippoecm.hst.pagecomposer.jaxrs.api.ChannelEvent.ChannelEventType;
import org.hippoecm.hst.pagecomposer.jaxrs.api.ChannelEventListenerRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.onehippo.cms7.services.eventbus.Subscribe;

public class ChannelEventListener {

    private static final Logger log = LoggerFactory.getLogger(ChannelEventListener.class);

    @SuppressWarnings("UnusedDeclaration")
    public void init() {
        ChannelEventListenerRegistry.get().register(this);
    }

    @SuppressWarnings("UnusedDeclaration")
    public void destroy() {
        ChannelEventListenerRegistry.get().unregister(this);
    }

    @Subscribe
    public void onEvent(ChannelEvent event) {
        if (event.getException() != null) {
            return;
        }

        final ChannelEventType type = event.getChannelEventType();
        if (type != ChannelEventType.DISCARD && type != ChannelEventType.PUBLISH) {
            log.debug("Skipping ChannelEvent '{}' because type is not equal to {} or {}.", type,
                    ChannelEventType.PUBLISH, ChannelEventType.DISCARD);
            return;
        }

        log.info("Channel: {}, event: {}, user: {}", event.getEditingPreviewSite().getName(),
                event.getChannelEventType(), event.getUserIds());

    }

}