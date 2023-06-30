package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.ValidationContextException;
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
 * Content card (compound type) ({@code hee:contentCards}) validator when used as a content block.
 *
 * <p>validates if the editor has provided the header ({@code hee:header}) as well as the navigation/content card
 * documents ({@code hee:cards}) for content/navigation cards {@code hee:contentCards} content block.</p>
 */
public class ContentCardContentBlockValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(ContentCardContentBlockValidator.class);

    // Header property
    private static final String PROPERTY_HEE_HEADER = "hee:header";

    // Content cards node type
    private static final String NODE_TYPE_HEE_CARDS = "hee:cards";

    // Content cards compound node type
    private static final String NODE_HEE_CONTENT_CARDS = "hee:contentCards";


    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            if (!node.isNodeType(NODE_HEE_CONTENT_CARDS)) {
                return Optional.empty();
            }

            // Validation for the header
            final String header = node.getProperty(PROPERTY_HEE_HEADER).getString();
            LOGGER.debug("Content card header ({}) = {}", PROPERTY_HEE_HEADER, header);

            if (StringUtils.isBlank(header)) {
                return Optional.of(context.createViolation("empty-header"));
            }

            // Validation for the cards
            final NodeIterator contentCardIterator = node.getNodes(NODE_TYPE_HEE_CARDS);
            if (contentCardIterator.getSize() == 0) {
                return Optional.of(context.createViolation("empty-cards"));
            }

            int cardCounter = 0;
            while (contentCardIterator.hasNext()) {
                final String contentCardNodeDocBase =
                        contentCardIterator.nextNode().getProperty(HippoNodeType.HIPPO_DOCBASE).getString();
                LOGGER.debug("Content card ({}) #{} = {}",
                        HippoNodeType.HIPPO_DOCBASE, contentCardIterator.getPosition(), contentCardNodeDocBase);

                if (StringUtils.isBlank(contentCardNodeDocBase)
                        || contentCardNodeDocBase.equals(JcrConstants.ROOT_NODE_ID)) {
                    if (cardCounter == 0) {
                        return Optional.of(context.createViolation("empty-cards"));
                    } else {
                        return Optional.of(context.createViolation("select-card-or-remove-unused-card-selector"));
                    }
                }

                cardCounter++;
            }
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading properties of the node '{}'",
                    e.getMessage(),
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }
}
