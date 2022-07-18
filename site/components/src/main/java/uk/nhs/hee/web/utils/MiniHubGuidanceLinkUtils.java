package uk.nhs.hee.web.utils;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.query.Query;
import javax.jcr.query.QueryResult;

/**
 * A utility class providing method(s) to generate Mini-hub Guidance page links (in case if any)
 * for the given Guidance nodes.
 */
public class MiniHubGuidanceLinkUtils {
    /**
     * XPath query to find the first MiniHub ({@code hee:MiniHub}) document Handle node
     * to which a given Guidance document ({@code guidanceUUID}) has been associated.
     */
    public static final String REFERENCED_MINI_HUB_NODE_FINDER_QUERY =
            "/jcr:root/%s//element(*, hee:MiniHub)[@hippo:availability='%s']" +
                    "/hee:guidancePages[(@jcr:primaryType='hippo:mirror') and (@hippo:docbase='%s')]/..";
    private static final Logger log = LoggerFactory.getLogger(MiniHubGuidanceLinkUtils.class);
    private static final String GUIDANCE_DOCUMENT_TYPE = "hee:guidance";
    private static final String AVAILABILITY_PREVIEW = "preview";
    private static final String AVAILABILITY_LIVE = "live";

    /**
     * Private constructor to restrict instantiating this utility class.
     */
    private MiniHubGuidanceLinkUtils() {
        throw new UnsupportedOperationException("This is a utility class and cannot be instantiated");
    }

    /**
     * Returns {@link HstLink} instance (in {@code {mini-hub_URL}/{guidance_node_name}} format)
     * for the given ({@code hee:guidance}) document node.
     *
     * @param node the ({@code hee:guidance}) {@link Node} instance.
     * @param canonical boolean indicating whether canonical link should be returned or not.
     * @param requestContext the {@link HstRequestContext} instance.
     * @param mount the {@link Mount} instance.
     * @return {@link HstLink} instance (in {@code {mini-hub_URL}/{guidance_node_name}} format)
     * for the given ({@code hee:guidance}) document node.
     */
    public static HstLink getLink(
            final Node node,
            final boolean canonical,
            final HstRequestContext requestContext,
            final Mount mount
    ) {
        try {
            if (!isGuidance(node)) {
                log.debug("'{}' isn't a Guidance ({}) document", node.getPath(), GUIDANCE_DOCUMENT_TYPE);
                return null;
            }

            log.debug("'{}' is a Guidance ({}) document", node.getPath(), GUIDANCE_DOCUMENT_TYPE);

            final Node miniHubNode =
                    getReferencedMiniHubNode(requestContext, requestContext.getSiteContentBasePath(), node.getIdentifier());

            if (miniHubNode == null) {
                log.debug("Guidance node with UUID '{}' and path '{}' hasn't been associated to any Mini-hub page(s)",
                        node.getIdentifier(), node.getPath());
                return null;
            }

            log.debug("Guidance node with UUID '{}' and path '{}' has been associated to the Mini-hub page = {}",
                    node.getIdentifier(), node.getPath(), miniHubNode.getPath());

            final HstLink miniHubGuidanceLink = createInternalLink(miniHubNode, canonical, requestContext, mount);
            // Mini-hub Guidance URL format: {mini-hub_URL}/{guidance_node_name}
            final String miniHubGuidanceURL = miniHubGuidanceLink.getPath() + "/" + node.getName();
            log.debug("URL generated for the Guidance node with UUID '{}' and path '{}' " +
                            "(based on the referenced Mini-hub URL '{}') = {}",
                    node.getIdentifier(), node.getPath(), miniHubGuidanceLink.getPath(), miniHubGuidanceURL);

            miniHubGuidanceLink.setPath(miniHubGuidanceURL);
            return miniHubGuidanceLink;
        } catch (final Exception e) {
            log.error("Caught error '{}' while rewriting link for Mini-hub Guidance documents", e.getMessage(), e);
        }

        return null;
    }

    /**
     * Returns {@code true} if child node of the given {@code handleNode} is a Guidance document ({@code hee:guidance}).
     * Otherwise, returns {@code false}.
     *
     * @param handleNode the Handle {@link Node} instance.
     * @return {@code true} if child node of the given {@code handleNode} is a Guidance document ({@code hee:guidance}).
     * @throws RepositoryException thrown when an error occurs while working with {@code handleNode}.
     */
    private static boolean isGuidance(final Node handleNode) throws RepositoryException {
        final NodeIterator childNodeIterator = handleNode.getNodes();
        return childNodeIterator.hasNext() && childNodeIterator.nextNode().isNodeType(GUIDANCE_DOCUMENT_TYPE);
    }

    /**
     * Returns the first MiniHub ({@code hee:MiniHub}) document Handle node
     * to which the given Guidance document ({@code guidanceUUID}) has been associated. Otherwise, returns {@code null}.
     *
     * @param requestContext the {@link HstRequestContext} instance.
     * @param contentPath    the (channel) content path under which the referenced MiniHub document
     *                       needs to be searched for.
     * @param guidanceUUID   the UUID of the Guidance Handle node.
     * @return the first MiniHub ({@code hee:MiniHub}) document Handle node
     * to which the given Guidance document ({@code guidanceUUID}) has been associated. Otherwise, returns {@code null}.
     * @throws RepositoryException thrown when an error occurs while searching for referenced MiniHub in the repository.
     */
    private static Node getReferencedMiniHubNode(
            final HstRequestContext requestContext,
            final String contentPath,
            final String guidanceUUID) throws RepositoryException {
        final String formattedReferencedMiniHubNodeFinderQuery = String.format(REFERENCED_MINI_HUB_NODE_FINDER_QUERY,
                contentPath,
                requestContext.isChannelManagerPreviewRequest() ? AVAILABILITY_PREVIEW : AVAILABILITY_LIVE,
                guidanceUUID);

        log.debug("Formatted referenced Mini-hub (hee:MiniHub) node finder query = {}",
                formattedReferencedMiniHubNodeFinderQuery);

        final Query referencedMiniHubNodeFinderQuery =
                requestContext.getQueryManager().getSession().getWorkspace().getQueryManager().createQuery(
                        formattedReferencedMiniHubNodeFinderQuery,
                        Query.XPATH
                );
        final QueryResult results = referencedMiniHubNodeFinderQuery.execute();
        final NodeIterator nodeIterator = results.getNodes();

        if (nodeIterator.hasNext()) {
            return nodeIterator.nextNode();
        }

        return null;
    }

    /**
     * Create an HstLink to a referenced node in rich text.
     *
     * @param referencedNode the node to create a link to
     * @param requestContext the context for the current request
     * @param targetMount    mount that the link by preference points to. may be null. If not null, a link for a different
     *                       {@link Mount} might be returned
     * @return link to the referenced node and optional target mount. target mount is ignored in case links must be canonical.
     * @throws RepositoryException if no path can be retrieved from the referencedNode
     */
    protected static HstLink createInternalLink(
            final Node referencedNode,
            final boolean canonical,
            final HstRequestContext requestContext,
            final Mount targetMount
    ) throws RepositoryException {
        if (canonical) {
            if (targetMount != null) {
                log.info("TargetMount is defined to create a link for, but target mount is ignored in case a canonical link is " +
                                "requested. Ignoring target mount '{}' but instead return canonical link for nodepath '{}'.",
                        targetMount, referencedNode.getPath());
            }
            return requestContext.getHstLinkCreator().createCanonical(referencedNode, requestContext);
        }

        if (targetMount == null) {
            return requestContext.getHstLinkCreator().create(referencedNode, requestContext);
        } else {
            return requestContext.getHstLinkCreator().create(referencedNode, targetMount, true);
        }
    }

}
