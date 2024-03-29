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
 * Validates if unique Author {@code hee:author} documents are being created within CMS
 * i.e. one Author {@code hee:author} document per Person {@code hee:person}. It does this by verifying
 * if there are no Author {@code hee:author} documents for the chosen Person {@code hee:person} document
 * within the current channel.
 */
public class UniqueAuthorValidator extends AbstractNodeValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(UniqueAuthorValidator.class);

    // Author document/node type
    private static final String NODE_TYPE_HEE_AUTHOR = "hee:author";

    // Person document/node type
    private static final String NODE_HEE_PERSON = "hee:person";

    /**
     * Returns the Author document which references the given Person identified by {@code personId} if any
     * within the current channel identified {@code channelName}. Otherwise, returns {@code null}.
     *
     * @param session     the {@link Session} instance.
     * @param channelName the current channel name (e.g. dental, etc).
     * @param personId    the Person Identifier/UUID whose referenced Author document needs to be returned.
     * @return the Author document which references the given Person identified by {@code personId} if any
     * within the current channel identified {@code channelName}. Otherwise, returns {@code null}.
     * @throws RepositoryException thrown when an error occurs while querying the referenced Author document
     *                             for the given {@code personId}.
     */
    private static Node getReferencedAuthor(final Session session, final String channelName, final String personId)
            throws RepositoryException {
        final String authorByPersonFinderQuery = String.format(
                "/jcr:root/content/documents%s//element(*, hee:author)[hippostd:state = 'draft']" +
                        "/element(hee:person, hippo:mirror)[@hippo:docbase='%s']/../..",
                "/" + channelName, personId);
        LOGGER.debug("Formatted Author by Person Query: {}", authorByPersonFinderQuery);

        final Query query = session.getWorkspace().getQueryManager().createQuery(authorByPersonFinderQuery, Query.XPATH);
        final QueryResult results = query.execute();
        final NodeIterator authorNodeIterator = results.getNodes();

        if (authorNodeIterator.hasNext()) {
            return authorNodeIterator.nextNode();
        }

        return null;
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

        // Looks up for the referenced Author document/node if any within the current channel
        final Node referencedAuthorNode = getReferencedAuthor(
                personDocumentNode.getSession(),
                ChannelUtils.getChannelName(node.getPath()),
                personId
        );

        if (referencedAuthorNode != null && !referencedAuthorNode.getPath().equals(node.getParent().getPath())) {
            final Violation violation = context.createViolation(ImmutableMap.of(
                    "personDocumentDisplayName",
                    DocumentUtils.getDocumentDisplayName(node.getSession(), personId)
            ));

            LOGGER.debug(violation.getMessage());
            return Optional.of(violation);
        }

        return Optional.empty();
    }

}
