package uk.nhs.hee.web.validation.validator;


import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Content card (compound type) ({@code hee:contentCards}) validator when used as a content block.
 *
 * <p>validates if the editor has provided the navigation/content card documents ({@code hee:cards})
 * for content/navigation cards {@code hee:contentCards} content block.</p>
 */
public class AnchorLinkOrTOCValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(AnchorLinkOrTOCValidator.class);

    // Content blocks node type
    private static final String NODE_TYPE_HEE_CONTENT_BLOCKS = "hee:contentBlocks";

    // Table of content heading node type
    private static final String NODE_HEE_HEADINGS_TOC = "hee:headingsTOC";

    // Anchor Links node type
    private static final String NODE_HEE_ANCHOR_LINK = "hee:anchorLinks";


    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {

            if (!node.isNodeType(NODE_HEE_ANCHOR_LINK)) {
                return Optional.empty();
            }
            // If the content block is an anchor link and there are ToC headings blocks, show the validation error
            final NodeIterator contentBlocksIterator = node.getParent().getNodes(NODE_TYPE_HEE_CONTENT_BLOCKS);
            final List<Node> headingsTOC = new ArrayList<>();

            //create a list of ToC headings blocks
            contentBlocksIterator.forEachRemaining(object -> {
                Node item = (Node) object;
                try {
                    if(item.isNodeType(NODE_HEE_HEADINGS_TOC)){
                        headingsTOC.add(item);
                    }
                } catch (RepositoryException e) {
                    throw new RuntimeException(e);
                }
            });

            if (!headingsTOC.isEmpty()) {
                return Optional.of(context.createViolation());
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
