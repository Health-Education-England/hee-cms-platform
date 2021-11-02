package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.ValidationContextException;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.cms.services.validation.validator.AbstractNodeValidator;
import org.onehippo.repository.util.JcrConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.Optional;

/**
 * Link Validator for {@code hee:link} and {@code hee:navMapLink} CompoundTypes.
 *
 * <p>validates if the editor has provided either Link document ({@code hee:document/@hippo:docbase})
 * * or URL ({@code hee:url}).</p>
 */
public class LinkValidator extends AbstractNodeValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(LinkValidator.class);

    /**
     * Validator config property name which provides the type of link node that needs to be validated.
     */
    private static final String CONFIG_PROPERTY_LINK_NODE_TYPE = "link.node.type";

    /**
     * Name of the node which holds reference to the linked document.
     */
    private static final String NODE_TYPE_HEE_LINK_DOCUMENT = "hee:document";

    /**
     * Property which holds (external) link URL
     */
    private static final String PROPERTY_HEE_LINK_URL = "hee:url";

    private final String linkNodeType;


    /**
     * {@link LinkValidator} constructor which initiates link NodeType {@code linkNodeType}
     * based on {@code link.node.type} validator config parameter.
     *
     * @param config the validator config {@link Node} instance.
     */
    public LinkValidator(final Node config) {
        try {
            linkNodeType = config.getProperty(CONFIG_PROPERTY_LINK_NODE_TYPE).getString();
        } catch (final RepositoryException e) {
            throw new ValidationContextException("Cannot read required property '"
                    + CONFIG_PROPERTY_LINK_NODE_TYPE + "'", e);
        }
    }

    @Override
    protected String getCheckedNodeType() {
        return linkNodeType;
    }

    @Override
    protected Optional<Violation> checkNode(final ValidationContext context, final Node node)
            throws RepositoryException {
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

        return Optional.empty();
    }
}
