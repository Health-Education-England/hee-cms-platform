package uk.nhs.hee.web.listeners;

import org.hippoecm.hst.configuration.HstNodeTypes;
import org.hippoecm.hst.pagecomposer.jaxrs.api.ChannelEventListenerRegistry;
import org.hippoecm.hst.pagecomposer.jaxrs.api.PageCreateContext;
import org.hippoecm.hst.pagecomposer.jaxrs.api.PageCreateEvent;
import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms7.services.eventbus.Subscribe;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.regex.Pattern;

public class PageCreateEventListener {
    private static final Logger LOGGER = LoggerFactory.getLogger(PageCreateEventListener.class);
    private static final String MINI_HUB_PAGE_PROTOTYPE_NAME = "minihub-page";

    public void init() {
        ChannelEventListenerRegistry.get().register(this);
    }

    public void destroy() {
        ChannelEventListenerRegistry.get().unregister(this);
    }

    @Subscribe
    public void onPageEvent(PageCreateEvent event) {
        if (event.getException() != null) {
            return;
        }
        // DO YOUR STUFF BUT MAKE SURE TO NEVER
        // SAVE THE JCR SESSION FOR THAT IS ACCESSIBLE VIA
        // THE PageCopyEvent#getPageActionContext#getRequestContext
        PageCreateContext pageActionContext = event.getPageActionContext();

        String newPageName = JcrUtils.getNodeNameQuietly(pageActionContext.getNewPageNode());
        // The new page name will have pattern `page-title-page-prototype-name-optional-running-number`
        // For example `patient-and-public-information-minihub-page` or `patient-and-public-information-minihub-page-1`
        Pattern pattern = Pattern.compile(MINI_HUB_PAGE_PROTOTYPE_NAME + "[-]?[0-9]*$");
        boolean isMiniHubPage = pattern.matcher(newPageName).find();
        if (isMiniHubPage) {
            processMiniHubPageCreation(pageActionContext, newPageName);
        }
    }

    private void processMiniHubPageCreation(PageCreateContext pageActionContext, String newPageName) {
        Node newSiteMapItemNode = pageActionContext.getNewSiteMapItemNode();
        try {
            Node defaultNode = newSiteMapItemNode.addNode(HstNodeTypes.WILDCARD, HstNodeTypes.NODETYPE_HST_SITEMAPITEM);
            defaultNode.setProperty(HstNodeTypes.SITEMAPITEM_PROPERTY_COMPONENTCONFIGURATIONID, newSiteMapItemNode.getProperty(HstNodeTypes.SITEMAPITEM_PROPERTY_COMPONENTCONFIGURATIONID).getString());
            defaultNode.setProperty(HstNodeTypes.SITEMAPITEM_PAGE_TITLE, newSiteMapItemNode.getProperty(HstNodeTypes.SITEMAPITEM_PAGE_TITLE).getString());
        } catch (RepositoryException e) {
            LOGGER.error(String.format("Error on creating %s sitemap item for MiniHub page %s", HstNodeTypes.WILDCARD, newPageName), e);
        }
    }
}
