package uk.nhs.hee.web.linking;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.core.linking.AbstractResourceContainer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.util.regex.Pattern;

/**
 * Resource container for {@code hee:fileLink} node type to rewrite resource index without square brackets
 * in order to avoid the {@code 404} error returned by brCloud for index based resources/documents.
 *
 * For example, this resource container would rewrite
 * {@code /content/documents/lks/common/file-links-cards/downloads/downloads/hee:fileLinks[2]/hee:file} node path
 * as {@code /content/documents/lks/common/file-links-cards/downloads/downloads/hee:fileLinks/2/hee:file} and vice versa.
 *
 * Note that the container wouldn't rewrite resource node path which doesn't contain index
 * (e.g. {@code /content/documents/lks/common/file-links-cards/downloads/downloads/hee:fileLinks/hee:file})
 * i.e. the first {@code hee:fileLink} node path of the document.
 */
public class FileLinkResourceContainer extends AbstractResourceContainer {
    private static final Logger LOGGER = LoggerFactory.getLogger(FileLinkResourceContainer.class);

    private static final String NODE_TYPE_FILE_LINK = "hee:fileLink";
    private static final String NODE_NAME_FILE_LINK = "hee:fileLinks";
    private static final String NODE_NAME_FILE_LINK_HIPPO_RESOURCE = "hee:file";

    private static final Pattern REGEX_PATTERN_FILE_LINK_RESOURCE_NODE_PATH =
            Pattern.compile(String.format("(/content/documents/.*?/%s)\\[(\\d+)](/%s)$",
                    NODE_NAME_FILE_LINK, NODE_NAME_FILE_LINK_HIPPO_RESOURCE));

    private static final Pattern REGEX_PATTERN_FILE_LINK_RESOURCE_LINK_PATH =
            Pattern.compile(String.format("(/content/documents/.*?/%s)/(\\d+)(/%s)$",
                    NODE_NAME_FILE_LINK, NODE_NAME_FILE_LINK_HIPPO_RESOURCE));

    /**
     * @return resource container node type.
     */
    @Override
    public String getNodeType() {
        return NODE_TYPE_FILE_LINK;
    }

    /**
     * Returns the (rewritten) resolved path (which will in turn will be used for resource link generation)
     * for the given resource node in {@code {document_path}/hee:fileLinks/{resource_index}/hee:file} format.
     *
     * For example, if the given resource node resolves to
     * {@code /content/documents/lks/common/file-links-cards/downloads/downloads/hee:fileLinks[2]/hee:file} path, it would
     * rewrite it as {@code /content/documents/lks/common/file-links-cards/downloads/downloads/hee:fileLinks/2/hee:file}
     * in order to rewrite resource index as slash separated path without square bracket. This workaround is to avoid
     * the {@code 404} error returned by brCloud for index based resources/documents of {@code hee:fileLink} type.
     *
     * @param resourceContainerNode the {@code hee:fileLink} resource container {@link Node} instance.
     * @param resourceNode the {@code hippo:resource} resource {@link Node} instance.
     * @param mount the {@link Mount} instance.
     * @return the (rewritten) resolved path (which will in turn will be used for resource link generation)
     * for the given resource node in {@code {document_path}/hee:fileLinks/{resource_index}/hee:file} format.
     */
    @Override
    public String resolveToPathInfo(final Node resourceContainerNode, final Node resourceNode, final Mount mount) {
        try {
            System.out.println("resourceNode = " + resourceNode.getName());
        } catch (final RepositoryException e) {
            e.printStackTrace();
        }
        final String pathInfo = super.resolveToPathInfo(resourceContainerNode, resourceNode, mount);
        String rewrittenPathInfo = pathInfo;

        if (REGEX_PATTERN_FILE_LINK_RESOURCE_NODE_PATH.matcher(pathInfo).find()) {
            rewrittenPathInfo = REGEX_PATTERN_FILE_LINK_RESOURCE_NODE_PATH
                    .matcher(pathInfo)
                    .replaceAll("$1/$2$3");

            LOGGER.debug("Resource node path '{}' has been rewritten to '{}' for resource link generation",
                    pathInfo, rewrittenPathInfo);
        }

        return rewrittenPathInfo;
    }

    /**
     * Returns the resolved resource node based on the given (and rewritten) {@code pathInfo}
     * in {@code {document_path}/hee:fileLinks[{resource_index}]/hee:file} format.
     *
     * For example, if the given resource path ({@code pathInfo}) resolves to
     * {@code /content/documents/lks/common/file-links-cards/downloads/downloads/hee:fileLinks/2/hee:file} path, it would
     * rewrite it as {@code /content/documents/lks/common/file-links-cards/downloads/downloads/hee:fileLinks[2]hee:file}
     * in order to rewrite resource index within square bracket and without slash separation. This workaround is to avoid
     * the {@code 404} error returned by brCloud for index based resources/documents of {@code hee:fileLink} type.
     *
     * @param session the {@link Session} instance.
     * @param pathInfo the resource path which needs to be resolved to its {@link Node} if available.
     * @return the resolved resource node based on the given (and rewritten) {@code pathInfo}
     * in {@code {document_path}/hee:fileLinks[{resource_index}]/hee:file} format.
     */
    @Override
    public Node resolveToResourceNode(final Session session, final String pathInfo) {
        String rewrittenPathInfo = pathInfo;

        if (REGEX_PATTERN_FILE_LINK_RESOURCE_LINK_PATH.matcher(pathInfo).find()) {
            rewrittenPathInfo = REGEX_PATTERN_FILE_LINK_RESOURCE_LINK_PATH
                    .matcher(pathInfo)
                    .replaceAll("$1[$2]$3");
            LOGGER.debug("Path '{}' has been rewritten to '{}' for resource node resolution", pathInfo, rewrittenPathInfo);
        }

        return super.resolveToResourceNode(session, rewrittenPathInfo);
    }

}
