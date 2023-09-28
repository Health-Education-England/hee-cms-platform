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
import javax.jcr.RepositoryException;
import java.util.Optional;

/**
 * Link validator (which covers {@code hee:link}, {@code hee:navMapLink}, etc.)
 *
 * <p>validates if the editor has provided either link document ({@code hee:document/@hippo:docbase})
 * or URL ({@code hee:url}).</p>
 */
public class LinkValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(LinkValidator.class);

    // Link document node type
    private static final String NODE_TYPE_HEE_LINK_DOCUMENT = "hee:document";

    // Link URL property
    private static final String PROPERTY_HEE_LINK_URL = "hee:url";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            final String linkURL = node.getProperty(PROPERTY_HEE_LINK_URL).getString();
            LOGGER.debug("Link URL {} = {}", PROPERTY_HEE_LINK_URL, linkURL);

            if (StringUtils.isBlank(linkURL)) {
                final Node linkDocumentNode = node.getNode(NODE_TYPE_HEE_LINK_DOCUMENT);
                final String docBase = linkDocumentNode.getProperty(HippoNodeType.HIPPO_DOCBASE).getString();
                LOGGER.debug("Link document document base/id {} = {}", HippoNodeType.HIPPO_DOCBASE, docBase);

                if (StringUtils.isBlank(docBase) || docBase.equals(JcrConstants.ROOT_NODE_ID)) {
                    return Optional.of(context.createViolation());
                }
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
