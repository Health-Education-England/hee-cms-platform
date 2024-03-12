package uk.nhs.hee.web.utils;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.configuration.hosting.VirtualHosts;
import org.hippoecm.hst.platform.model.HstModel;
import org.hippoecm.hst.platform.model.HstModelRegistry;
import org.hippoecm.repository.api.HippoNodeType;
import org.onehippo.cms7.services.HippoServiceRegistry;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.util.List;
import java.util.Optional;

/**
 * Utility class for documents.
 */
public class DocumentUtils {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(DocumentUtils.class);

    // CMS context path
    public static final String CMS_CONTEXT_PATH = "/cms";

    // 'brc.environmentname' system property
    public static final String SYSTEM_PROPERTY_BRC_ENV_NAME = "brc.environmentname";

    // Host groups
    public static final String HOST_GROUP_BR_CLOUD = "br-cloud";
    public static final String HOST_GROUP_DEV_LOCAL_HOST = "dev-localhost";

    /**
     * Private constructor to hide the implicit public one.
     */
    private DocumentUtils() {
    }

    /**
     * Returns display name (i.e. {@code hippo:name}) of the document identified by {@code documentId}.
     *
     * @param session    the {@link Session} instance.
     * @param documentId the document Identifier/UUID whose display name (i.e. {@code hippo:name}) needs to be returned.
     * @return the display name (i.e. {@code hippo:name}) of the document identified by {@code documentId}.
     * @throws RepositoryException thrown when an error occurs while querying the display name (i.e. {@code hippo:name})
     *                             of the given document identified by {@code documentId}.
     */
    public static String getDocumentDisplayName(final Session session, final String documentId)
            throws RepositoryException {
        return session.getNodeByIdentifier(documentId).getProperty(HippoNodeType.HIPPO_NAME).getString();
    }

    /**
     * Returns CMS/Platform document base URL for the current environment (local/brCloud).
     *
     * <p>It checks for the existence of  {@code brc.environmentname} system property to identify
     * if the current environment is {@code brCloud} or {@code local}. If {@code brCloud}, uses {@code br-cloud}
     * host group to generate the document base URL. Otherwise, assumes that the environment is {@code local}
     * and uses {@code dev-localhost} to generate the document base URL.</p>
     *
     * @return the CMS/Platform document base URL for the current environment (local/brCloud).
     */
    public static String getDocumentBaseURL() {
        String cmsBaseURL = StringUtils.EMPTY;

        final HstModelRegistry hstModelRegistry = HippoServiceRegistry.getService(HstModelRegistry.class);
        for (final HstModel hstModel : hstModelRegistry.getHstModels()) {
            try {
                final VirtualHosts virtualHosts = hstModel.getVirtualHosts();
                if (CMS_CONTEXT_PATH.equals(virtualHosts.getContextPath())) {
                    final String hostGroupName =
                            StringUtils.isNotBlank(System.getProperty(SYSTEM_PROPERTY_BRC_ENV_NAME)) ?
                                    HOST_GROUP_BR_CLOUD : HOST_GROUP_DEV_LOCAL_HOST;
                    LOGGER.debug("'{}' virtual host group has been chosen to build the CMS base URL", hostGroupName);

                    final List<Mount> cmsMounts = hstModel.getVirtualHosts().getMountsByHostGroup(hostGroupName);
                    if (cmsMounts.isEmpty()) {
                        LOGGER.warn("Host group '{}' is either unavailable in the current instance " +
                                "or it doesn't have any mounts", hostGroupName);
                        return StringUtils.EMPTY;
                    }

                    final Optional<Mount> cmsMountOpt = cmsMounts.stream()
                            .filter(mount -> mount.isOfType(Mount.LIVE_NAME))
                            .findFirst();
                    final Mount cmsMount = cmsMountOpt.orElse(null);
                    if (cmsMount == null) {
                        LOGGER.warn("Host group '{}' doesn't seem to have any live mounts", hostGroupName);
                        return StringUtils.EMPTY;
                    }

                    cmsBaseURL = cmsMount.getScheme() +
                            "://" +
                            cmsMount.getVirtualHost().getHostName() +
                            (cmsMount.isPortInUrl() ? ":" + cmsMount.getPort() : StringUtils.EMPTY) +
                            "/cms/content/path";

                    LOGGER.debug("CMS base URL = {}", cmsBaseURL);
                }
            } catch (final Exception e) {
                LOGGER.error("Caught error '{}' while constructing CMS base URL", e.getMessage(), e);
            }
        }

        return cmsBaseURL;
    }

}
