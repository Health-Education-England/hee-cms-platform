package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.repository.util.JcrConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Validates if the featured documents have been selected for {@code Manual} method. Also, validates if the selected
 * documents are of the chosen {@code content type}.
 */
public class MandatoryFeaturedDocumentsValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryFeaturedDocumentsValidator.class);

    // Method property
    private static final String PROPERTY_HEE_METHOD = "hee:method";
    // Content type property
    private static final String PROPERTY_HEE_FEATURED_CONTENT_TYPE = "hee:featuredContentType";
    // Featured documents property
    private static final String NODE_HEE_FEATURED_DOCUMENTS = "hee:featuredDocuments";

    // Manual method value
    private static final String METHOD_VALUE_MANUAL = "Manual";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            final NodeIterator featuredDocsNodeIterator = node.getNodes(NODE_HEE_FEATURED_DOCUMENTS);

            if (!METHOD_VALUE_MANUAL.equals(node.getProperty(PROPERTY_HEE_METHOD).getString())) {
                // Raise a violation if the method is not 'Manual', but featured documents has been chosen/selected.
                if (featuredDocsNodeIterator.getSize() > 0) {
                    return Optional.of(context.createViolation("no-featured-documents-for-non-manual-method"));
                }

                return Optional.empty();
            }

            // Get all non-null chosen/selected featured documents (in the case of 'Manual' method)
            final List<String> featuredDocBases = getFeaturedDocBases(featuredDocsNodeIterator);

            // Raise a violation if there are no non-null/root featured documents
            // i.e. if there aren't any valid featured documents.
            if (featuredDocBases.isEmpty()) {
                return Optional.of(context.createViolation());
            }

            final String contentType = node.getProperty(PROPERTY_HEE_FEATURED_CONTENT_TYPE).getString();

            // Raise a violation when the selected featured document type is different from the chosen content type.
            for (final String docBase: featuredDocBases) {
                if (!contentType.equals(getDocumentType(node.getSession(), docBase))) {
                    return Optional.of(context.createViolation(
                            "content-type-and-featured-document-type-mismatch"
                    ));
                }
            }
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading Featured Documents from the node '{}'",
                    e.getMessage(),
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }

    /**
     * Returns non-null/root featured documents from the given {@code featuredDocsNodeIterator} {@link NodeIterator}.
     *
     * @param featuredDocsNodeIterator the {@link NodeIterator} instance from which non-null/root featured documents
     *                                 needs to be collected and returned
     * @return non-null/root featured documents from the given {@code featuredDocsNodeIterator} {@link NodeIterator}.
     * @throws RepositoryException thrown when an error occurs during repository read operation.
     */
    private List<String> getFeaturedDocBases(final NodeIterator featuredDocsNodeIterator)
            throws RepositoryException {
        final List<String> featuredDocBases = new ArrayList<>();

        while (featuredDocsNodeIterator.hasNext()) {
            // Collect only non-null/root featured documents
            final String featuredDocNodeDocBase =
                    featuredDocsNodeIterator.nextNode().getProperty(HippoNodeType.HIPPO_DOCBASE).getString();

            if (StringUtils.isBlank(featuredDocNodeDocBase)
                    || featuredDocNodeDocBase.equals(JcrConstants.ROOT_NODE_ID)) {
                continue;
            }

            featuredDocBases.add(featuredDocNodeDocBase);
        }

        return featuredDocBases;
    }

    /**
     * Returns document type (i.e. primary node type) of the given {@code docBase} (i.e. document UUID).
     *
     * @param session the {@link Session} instance.
     * @param docBase the UUID of the document whose document type (i.e. primary node type) needs to be returned.
     * @return the document type (i.e. primary node type) of the given {@code docBase} (i.e. document UUID).
     * @throws RepositoryException thrown when an error occurs during repository read operation.
     */
    private String getDocumentType(final Session session, final String docBase) throws RepositoryException {
        final Node handleNode = session.getNodeByIdentifier(docBase);

        if (handleNode.isNodeType(HippoNodeType.NT_HANDLE) && handleNode.hasNode(handleNode.getName())) {
            return handleNode.getNode(handleNode.getName()).getPrimaryNodeType().getName();
        }

        return StringUtils.EMPTY;
    }
}
