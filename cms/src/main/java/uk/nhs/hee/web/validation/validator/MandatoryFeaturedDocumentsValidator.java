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
import java.util.Optional;

/**
 * Validates if the featured documents have been selected for {@code Manual} method.
 */
public class MandatoryFeaturedDocumentsValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryFeaturedDocumentsValidator.class);

    // Method property
    private static final String PROPERTY_HEE_METHOD = "hee:method";
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

            // Count all non-null chosen/selected featured documents (in the case of 'Manual' method)
            int featuredDocCount = 0;
            while (featuredDocsNodeIterator.hasNext()) {
                final String featuredDocNodeDocBase =
                        featuredDocsNodeIterator.nextNode().getProperty(HippoNodeType.HIPPO_DOCBASE).getString();

                if (StringUtils.isBlank(featuredDocNodeDocBase)
                        || featuredDocNodeDocBase.equals(JcrConstants.ROOT_NODE_ID)) {
                    continue;
                }

                featuredDocCount++;
            }

            // Raise a violation if there are no non-null featured documents
            // i.e. if there are no valid featured documents.
            if (featuredDocCount == 0) {
                return Optional.of(context.createViolation());
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
}
