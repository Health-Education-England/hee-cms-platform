package uk.nhs.hee.web.content.rewriter.impl;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.content.rewriter.impl.SimpleContentRewriter;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.repository.api.HippoNodeType;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.MiniHubGuidanceLinkUtils;

import javax.jcr.Node;

/**
 * A Content Rewriter for RichText fields extended from OOTB {@link SimpleContentRewriter}
 * to rewrite Mini-hub Guidance document links in case if they end up with 'pagenotfound'
 * by OOTB contentrewriter {@link SimpleContentRewriter}.
 */
public class MiniHubGuidanceLinkRewriter extends SimpleContentRewriter {
    private static final Logger log = LoggerFactory.getLogger(MiniHubGuidanceLinkRewriter.class);

    /* (non-Javadoc)
     * @see org.hippoecm.hst.content.rewriter.impl.SimpleContentRewriter
     * #getLink(path, hippoHtmlNode, requestContext, targetMount)
     */
    @Override
    protected HstLink getLink(
            final String path,
            final Node htmlNode,
            final HstRequestContext requestContext,
            final Mount mount
    ) {
        final Mount resolvedMount = mount != null ? mount : requestContext.getResolvedMount().getMount();

        final HstLink link = super.getLink(path, htmlNode, requestContext, mount);

        if (link == null || !HstUtils.isPageNotFound(link, isFullyQualifiedLinks(), requestContext, resolvedMount)) {
            return link;
        }

        final String linkPath = decodePath(path);

        try {
            // Checks if the given 'linkPath' is a binary one.
            if (isValidBinariesPath(linkPath)) {
                log.debug("'{}' is a Binary Path", linkPath);
                return link;
            }

            // Gets the mirror node ('hippo:mirror') of the given 'linkPath'
            final Node mirrorNode = htmlNode.getNode(linkPath);
            if (!mirrorNode.hasProperty(HippoNodeType.HIPPO_DOCBASE)) {
                log.debug("Node with path '{}' doesn't have '{}' property",
                        mirrorNode.getPath(), HippoNodeType.HIPPO_DOCBASE);
                return link;
            }

            // Gets the referenced document (UUID) i.e. the value of 'hippo:docbase' property from the mirror node.
            final String referencedUUID = mirrorNode.getProperty(HippoNodeType.HIPPO_DOCBASE).getString();
            log.debug("UUID of the document referenced in the node '{}' = {}",
                    mirrorNode.getPath(), referencedUUID);

            // Gets Node instance of the referenced document.
            final Node referencedNode = mirrorNode.getSession().getNodeByIdentifier(referencedUUID);
            log.debug("Path of the document referenced in the node '{}' = {}",
                    mirrorNode.getPath(), referencedNode.getPath());

            // Ensures that the referenced node is a handle node
            if (!referencedNode.isNodeType(HippoNodeType.NT_HANDLE)) {
                log.debug("'{}' isn't a Handle node (hippo:handle)", referencedNode.getPath());
                return link;
            }

            // And that it contains children document nodes (draft, unpublished & published).
            if (!referencedNode.hasNode(referencedNode.getName())) {
                log.debug("Unable to rewrite path '{}' for node '{}' to proper url because no (readable) document" +
                                " node below linked handle node: '{}'.",
                        linkPath, htmlNode.getPath(), referencedNode.getPrimaryNodeType().getName());
                return link;
            }

            // Gets Mini-Hub Guidance link for referenced (Guidance) document in case if any.
            final HstLink miniHubGuidanceLink =
                    MiniHubGuidanceLinkUtils.getLink(referencedNode, isCanonicalLinks(), requestContext, resolvedMount);

            if (miniHubGuidanceLink == null) {
                return link;
            }

            return miniHubGuidanceLink;
        } catch (final Exception e) {
            log.error("Caught error '{}' while rewriting link for Mini-hub Guidance documents", e.getMessage(), e);
        }

        return link;
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
