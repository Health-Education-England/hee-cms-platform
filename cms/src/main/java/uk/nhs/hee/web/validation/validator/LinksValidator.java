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
 * Validates if Publication type or topics or professions have been provided for Publication landing page content type.
 * For content types other than publication landing page, it validates if topics or professions have been provided.
 */
public class LinksValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(LinksValidator.class);

    // Method property
    private static final String NODE_TYPE_HEE_LINK_DOCUMENT = "hee:document";

    private static final String PROPERTY_HEE_LINK_URL = "hee:url";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            final String linkURL = node.getProperty(PROPERTY_HEE_LINK_URL).getString();
            LOGGER.debug("{} = {}", PROPERTY_HEE_LINK_URL, linkURL);

            if (StringUtils.isBlank(linkURL)) {
                final Node linkDocumentNode = node.getNode(NODE_TYPE_HEE_LINK_DOCUMENT);
                final String docBase = linkDocumentNode.getProperty(HippoNodeType.HIPPO_DOCBASE).getString();
                LOGGER.debug("{} = {}", HippoNodeType.HIPPO_DOCBASE, docBase);

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
