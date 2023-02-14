package uk.nhs.hee.web.validation.validator;

import com.google.common.collect.ImmutableMap;
import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.cms.services.validation.validator.AbstractNodeValidator;
import org.onehippo.repository.util.JcrConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.utils.ChannelUtils;
import uk.nhs.hee.web.utils.DocumentUtils;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.Query;
import javax.jcr.query.QueryResult;
import java.util.Optional;

/**
 * <p>Validates if unique Web publications ({@code hee:webPublications}) have been added
 * to Publication landing page ({@code hee:publicationLandingPage}) documents.</p>
 *
 * <p>This essentially ensures that the same Publication page ({@code hee:report}) documents
 * aren't being associated to multiple Publication landing page ({@code hee:publicationLandingPage}) documents
 * as Web publications.</p>
 *
 * <p>It does this by verifying if there are no Publication landing page {@code hee:publicationLandingPage} documents
 * for the chosen Publication page {@code hee:report} document within the current channel</p>
 */
public class UniqueWebPublicationsValidator extends AbstractNodeValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(UniqueWebPublicationsValidator.class);

    // Publication landing page document node type
    private static final String NODE_TYPE_HEE_PUBLICATION_LANDING_PAGE = "hee:publicationLandingPage";

    // Web publication field node name
    private static final String NODE_NAME_HEE_WEB_PUBLICATIONS = "hee:webPublications";

    /**
     * Returns the Publication landing page document which references the given Publication page document
     * identified by {@code pubPageDocId} if any within the current channel identified {@code channelName}.
     * Otherwise, returns {@code null}.
     *
     * @param session     the {@link Session} instance.
     * @param channelName the current channel name (e.g. dental, etc).
     * @param pubPageDocId    the Publication page document Identifier/UUID whose referenced Publication landing document
     *                        needs to be returned.
     * @return the Publication landing page document which references the given Publication page document
     * identified by {@code pubPageDocId} if any within the current channel identified {@code channelName}.
     * Otherwise, returns {@code null}.
     * @throws RepositoryException thrown when an error occurs while querying the referenced Publication landing page
     * document for the given {@code personId}.
     */
    private static Node getRefPubLandingPageDocument(
            final Session session,
            final String channelName,
            final String pubPageDocId
    ) throws RepositoryException {
        final String pubLandingBySinglePageFinderQuery = String.format(
                "/jcr:root/content/documents%s//element(*, %s)[hippostd:state = 'draft']" +
                        "/element(%s, hippo:mirror)[@hippo:docbase='%s']/../..",
                "/" + channelName,
                NODE_TYPE_HEE_PUBLICATION_LANDING_PAGE,
                NODE_NAME_HEE_WEB_PUBLICATIONS,
                pubPageDocId);
        LOGGER.debug("Formatted Publication landing by single page query: {}", pubLandingBySinglePageFinderQuery);

        final Query query = session.getWorkspace().getQueryManager()
                .createQuery(pubLandingBySinglePageFinderQuery, Query.XPATH);
        final QueryResult results = query.execute();
        final NodeIterator pubLandingPageDocNodeIterator = results.getNodes();

        if (pubLandingPageDocNodeIterator.hasNext()) {
            return pubLandingPageDocNodeIterator.nextNode();
        }

        return null;
    }

    @Override
    protected String getCheckedNodeType() {
        return NODE_TYPE_HEE_PUBLICATION_LANDING_PAGE;
    }

    @Override
    protected Optional<Violation> checkNode(final ValidationContext context, final Node node) throws RepositoryException {
        final NodeIterator webPubNodeIterator = node.getNodes(NODE_NAME_HEE_WEB_PUBLICATIONS);

        while (webPubNodeIterator.hasNext()) {
            final Node webPubNode = webPubNodeIterator.nextNode();
            final String pubPageDocId = webPubNode.getProperty(HippoNodeType.HIPPO_DOCBASE).getString();

            LOGGER.debug("Publication page (hee:report) document Identifier/UUID = {}", pubPageDocId);

            if (StringUtils.isBlank(pubPageDocId) || pubPageDocId.equals(JcrConstants.ROOT_NODE_ID)) {
                continue;
            }

            // Looks up for the referenced Publication landing page document/node if any within the current channel
            final Node refPubLandingPageDocNode = getRefPubLandingPageDocument(
                    node.getSession(),
                    ChannelUtils.getChannelName(node.getPath()),
                    pubPageDocId
            );

            if (refPubLandingPageDocNode != null
                    && !refPubLandingPageDocNode.getPath().equals(node.getParent().getPath())) {
                final Violation violation = context.createViolation(ImmutableMap.of(
                        "PublicationPageDocumentDisplayName",
                        DocumentUtils.getDocumentDisplayName(node.getSession(), pubPageDocId)
                ));

                LOGGER.debug(violation.getMessage());
                return Optional.of(violation);
            }
        }

        return Optional.empty();
    }

}
