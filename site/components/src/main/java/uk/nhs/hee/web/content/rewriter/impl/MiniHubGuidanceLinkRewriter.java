package uk.nhs.hee.web.content.rewriter.impl;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.content.rewriter.impl.SimpleContentRewriter;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.repository.api.HippoNodeType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.query.Query;
import javax.jcr.query.QueryResult;

/**
 * A Content Rewriter for RichText fields extended from OOTB {@link SimpleContentRewriter}
 * to rewrite Mini-hub Guidance document links in case if they end up with 'pagenotfound'
 * by OOTB contentrewriter {@link SimpleContentRewriter}.
 */
public class MiniHubGuidanceLinkRewriter extends SimpleContentRewriter {
    public static final String REFERENCED_MINI_HUB_NODE_FINDER_QUERY =
            "/jcr:root/%s//element(*, hee:MiniHub)[@hippo:availability='%s']" +
            "/hee:guidancePages[(@jcr:primaryType='hippo:mirror') and (@hippo:docbase='%s')]/..";
    private static final Logger log = LoggerFactory.getLogger(MiniHubGuidanceLinkRewriter.class);
    private static final String DEFAULT_PAGE_NOT_FOUND_PATH = "pagenotfound";
    private static final String GUIDANCE_DOCUMENT_TYPE = "hee:guidance";
    private static final String AVAILABILITY_PREVIEW = "preview";
    private static final String AVAILABILITY_LIVE = "live";

    @Override
    protected HstLink getLink(
            final String path,
            final Node htmlNode,
            final HstRequestContext requestContext,
            final Mount mount
    ) {
        final HstLink link = super.getLink(path, htmlNode, requestContext, mount);

        if (link == null || !isPageNotFound(link)) {
            return link;
        }

        final String linkPath = decodePath(path);

        try {
            if (isValidBinariesPath(linkPath)) {
                log.debug("'{}' is a Binary Path", linkPath);
                return link;
            }

            final Node mirrorNode = htmlNode.getNode(linkPath);
            if (!mirrorNode.hasProperty(HippoNodeType.HIPPO_DOCBASE)) {
                log.debug("Node with path '{}' doesn't have '{}' property",
                        mirrorNode.getPath(), HippoNodeType.HIPPO_DOCBASE);
                return link;
            }

            final String referencedUUID = mirrorNode.getProperty(HippoNodeType.HIPPO_DOCBASE).getString();
            log.debug("UUID of the document referenced in the node '{}' = {}",
                    mirrorNode.getPath(), referencedUUID);

            final Node referencedNode = mirrorNode.getSession().getNodeByIdentifier(referencedUUID);
            log.debug("Path of the document referenced in the node '{}' = {}",
                    mirrorNode.getPath(), referencedNode.getPath());

            if (!referencedNode.isNodeType(HippoNodeType.NT_HANDLE)) {
                log.debug("'{}' isn't a Handle node (hippo:handle)", referencedNode.getPath());
                return link;
            }

            if (!referencedNode.hasNode(referencedNode.getName())) {
                log.debug("Unable to rewrite path '{}' for node '{}' to proper url because no (readable) document" +
                        " node below linked handle node: '{}'.",
                        linkPath, htmlNode.getPath(), referencedNode.getPrimaryNodeType().getName());
                return link;
            }

            if (!isGuidanceHandle(referencedNode)) {
                log.debug("'{}' isn't a Guidance ({}) Handle", referencedNode.getPath(), GUIDANCE_DOCUMENT_TYPE);
                return link;
            }

            log.debug("'{}' is a Guidance ({}) Handle", referencedNode.getPath(), GUIDANCE_DOCUMENT_TYPE);

            final Node miniHubNode =
                    getReferencedMiniHubNode(requestContext, requestContext.getSiteContentBasePath(), referencedUUID);

            if (miniHubNode == null) {
                log.debug("Guidance node with UUID '{}' and path '{}' hasn't been associated to any Mini-hub page(s)",
                        referencedUUID, referencedNode.getPath());
                return link;
            }

            log.debug("Guidance node with UUID '{}' and path '{}' has been associated to the Mini-hub page = {}",
                    referencedUUID, referencedNode.getPath(), miniHubNode.getPath());

            final HstLink miniHubGuidanceLink = createInternalLink(miniHubNode, requestContext, mount);
            // Mini-hub Guidance URL format: {mini-hub_URL}/{guidance_node_name}
            final String miniHubGuidanceURL = miniHubGuidanceLink.getPath() + "/" + referencedNode.getName();
            log.debug("URL generated for the Guidance node with UUID '{}' and path '{}' " +
                            "(based on the referenced Mini-hub URL '{}') = {}",
                    referencedUUID, referencedNode.getPath(), miniHubGuidanceLink.getPath(), miniHubGuidanceURL);

            miniHubGuidanceLink.setPath(miniHubGuidanceURL);
            return miniHubGuidanceLink;
        } catch (final Exception e) {
            log.error("Caught error '{}' while rewriting link for Mini-hub Guidance documents", e.getMessage(), e);
        }

        return link;
    }

    /**
     * Returns {@code true} if the given {@code link} path is "pagenotfound". Otherwise, returns {@code false}.
     *
     * @param link the {@link HstLink} instance.
     * @return {@code true} if the given {@code link} path is "pagenotfound". Otherwise, returns {@code false}.
     */
    private boolean isPageNotFound(final HstLink link) {
        return DEFAULT_PAGE_NOT_FOUND_PATH.equals(link.getPath());
    }

    /**
     * Returns {@code true} if child node of the given {@code handleNode} is a Guidance document ({@code hee:guidance}).
     * Otherwise, returns {@code false}.
     *
     * @param handleNode the Handle {@link Node} instance.
     * @return {@code true} if child node of the given {@code handleNode} is a Guidance document ({@code hee:guidance}).
     * @throws RepositoryException thrown when an error occurs while working with {@code handleNode}.
     */
    private boolean isGuidanceHandle(final Node handleNode) throws RepositoryException {
        final NodeIterator childNodeIterator = handleNode.getNodes();
        return childNodeIterator.hasNext() && childNodeIterator.nextNode().isNodeType(GUIDANCE_DOCUMENT_TYPE);
    }

    /**
     * Returns the first MiniHub ({@code hee:MiniHub}) document Handle node
     * to which the given Guidance document ({@code guidanceUUID}) has been associated. Otherwise, returns {@code null}.
     *
     * @param requestContext the {@link HstRequestContext} instance.
     * @param contentPath the (channel) content path under which the referenced MiniHub document
     *                    needs to be searched for.
     * @param guidanceUUID the UUID of the Guidance Handle node.
     * @return the first MiniHub ({@code hee:MiniHub}) document Handle node
     * to which the given Guidance document ({@code guidanceUUID}) has been associated. Otherwise, returns {@code null}.
     * @throws RepositoryException thrown when an error occurs while searching for referenced MiniHub in the repository.
     */
    private Node getReferencedMiniHubNode(
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
     * Returns {@code true} if the given {@code linkPath} is a valid binary path. Otherwise, returns {@code false}.
     *
     * <p>This method is essentially copied from {@link SimpleContentRewriter} as it is in private scope.</p>
     *
     * @param linkPath the link path which needs to be verified if it is a valid binary path or not.
     * @return {@code true} if the given {@code linkPath} is a valid binary path. Otherwise, returns {@code false}.
     */
    private boolean isValidBinariesPath(final String linkPath) {
        final String[] binaryPathSegments = linkPath.split("/");
        return binaryPathSegments.length == 3 && "{_document}".equals(binaryPathSegments[1]);
    }

}
