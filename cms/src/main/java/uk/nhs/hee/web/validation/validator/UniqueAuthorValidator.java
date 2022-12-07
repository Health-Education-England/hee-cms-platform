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

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import javax.jcr.query.Query;
import javax.jcr.query.QueryResult;
import java.util.Optional;

/**
 * Validates if unique Author {@code hee:author} documents are being created within CMS
 * i.e. one Author {@code hee:author} document Person {@code hee:person}. It does this by verifying
 * if there are no Author {@code hee:author} documents for the chosen Person {@code hee:person} document within CMS.
 */
public class UniqueAuthorValidator extends AbstractNodeValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(UniqueAuthorValidator.class);

    // Author document/node type
    private static final String NODE_TYPE_HEE_AUTHOR = "hee:author";

    // Person document/node type
    private static final String NODE_HEE_PERSON = "hee:person";

    /**
     * Returns the Author document which references the given Person identified by {@code personId} if any.
     * Otherwise, returns {@code null}.
     *
     * @param session  the {@link Session} instance.
     * @param personId the Person Identifier/UUID whose referenced Author document needs to be returned.
     * @return the Author document which references the given Person identified by {@code personId}.
     * @throws RepositoryException thrown when an error occurs while querying the referenced Author document
     *                             for the given {@code personId}.
     */
    private static Node getReferencedAuthor(final Session session, final String personId)
            throws RepositoryException {
        final String authorByPersonFinderQuery = String.format(
                "/jcr:root/content/documents//element(*, hee:author)[hippostd:state = 'draft']" +
                        "/element(hee:person, hippo:mirror)[@hippo:docbase='%s']/../..",
                personId);
        LOGGER.debug("Formatted Author by Person Query: {}", authorByPersonFinderQuery);

        final Query query = session.getWorkspace().getQueryManager().createQuery(authorByPersonFinderQuery, Query.XPATH);
        final QueryResult results = query.execute();
        final NodeIterator authorNodeIterator = results.getNodes();

        if (authorNodeIterator.hasNext()) {
            return authorNodeIterator.nextNode();
        }

        return null;
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
    private static String getDocumentDisplayName(final Session session, final String documentId)
            throws RepositoryException {
        return session.getNodeByIdentifier(documentId).getProperty(HippoNodeType.HIPPO_NAME).getString();
    }

    @Override
    protected String getCheckedNodeType() {
        return NODE_TYPE_HEE_AUTHOR;
    }

    @Override
    protected Optional<Violation> checkNode(final ValidationContext context, final Node node)
            throws RepositoryException {

        final Node personDocumentNode = node.getNode(NODE_HEE_PERSON);
        final String personId = personDocumentNode.getProperty(HippoNodeType.HIPPO_DOCBASE).getString();
        LOGGER.debug("Person Identifier/UUID = {}", personId);

        if (StringUtils.isBlank(personId) || personId.equals(JcrConstants.ROOT_NODE_ID)) {
            return Optional.empty();
        }

        // Looks up for the referenced Author document/node if any
        final Node referencedAuthorNode = getReferencedAuthor(personDocumentNode.getSession(), personId);

        if (referencedAuthorNode != null && !referencedAuthorNode.getPath().equals(node.getParent().getPath())) {
            final Violation violation = context.createViolation(ImmutableMap.of(
                    "authorDocumentPath", referencedAuthorNode.getPath(),
                    "personDocumentDisplayName", getDocumentDisplayName(node.getSession(), personId))
            );

            LOGGER.debug(violation.getMessage());
            return Optional.of(violation);
        }

        return Optional.empty();
    }
}
