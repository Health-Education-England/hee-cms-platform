package uk.nhs.hee.web.validation.validator;

import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.Optional;

/**
 * Validates if {@code Publication type} ({@code hee:publicationType}) has been provided
 * if the chosen {@code Content type} {@code hee:contentType} is
 * {@code Publication landing page} ({@code publicationtypes})
 * and that the chosen {@code Method} ({@code hee:method}) is {@code Related}.
 */
public class MandatoryPublicationTypeValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryPublicationTypeValidator.class);

    // Content Type property
    private static final String PROPERTY_HEE_CONTENT_TYPE = "hee:contentType";

    // Publication Type property
    private static final String PROPERTY_HEE_PUBLICATION_TYPE = "hee:publicationType";

    // Method property
    private static final String PROPERTY_HEE_METHOD = "hee:method";

    private static final String CONTENT_TYPE_VALUE = "publicationtypes";

    private static final String METHOD_VALUE = "Related";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            if (CONTENT_TYPE_VALUE.equals(node.getProperty(PROPERTY_HEE_CONTENT_TYPE).getString())
                    && METHOD_VALUE.equals(node.getProperty(PROPERTY_HEE_METHOD).getString())
                    && node.getProperty(PROPERTY_HEE_PUBLICATION_TYPE).getString().isEmpty()) {
                return Optional.of(context.createViolation());
            }
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading publications({}) from the node '{}'",
                    e.getMessage(),
                    PROPERTY_HEE_PUBLICATION_TYPE,
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }
}
