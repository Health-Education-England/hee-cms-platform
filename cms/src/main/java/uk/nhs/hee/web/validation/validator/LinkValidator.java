package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.cms.services.validation.validator.AbstractNodeValidator;
import org.onehippo.repository.util.JcrConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.Optional;

/**
 * Link Validator for {@code hee:navMapLink} CompoundType.
 *
 * <p>validates if the editor has provided either Link Document ({@code hee:document/@hippo:docbase})
 * * or URL ({@code hee:url}).</p>
 */
public class LinkValidator extends AbstractNodeValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(LinkValidator.class);

    private static final String NODE_TYPE_HEE_NAV_MAP_LINK = "hee:navMapLink";
    private static final String NODE_TYPE_HEE_LINK_DOCUMENT = "hee:document";

    private static final String PROPERTY_HEE_LINK_URL = "hee:url";

    @Override
    protected String getCheckedNodeType() {
        return NODE_TYPE_HEE_NAV_MAP_LINK;
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
