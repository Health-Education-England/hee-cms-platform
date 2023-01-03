package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.Optional;

/**
 * Validates if at least one contact has been provided in the given document node i.e. validates if either
 * {@code phone number} ({@code hee:phoneNumber}) or {@code email} ({@code hee:email}) has been provided.
 */
public class MandatoryContactValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryContactValidator.class);

    private static final String PROPERTY_HEE_PHONE_NUMBER = "hee:phoneNumber";
    private static final String PROPERTY_HEE_EMAIL = "hee:email";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            final String phoneNumber = node.getProperty(PROPERTY_HEE_PHONE_NUMBER).getString();
            final String email = node.getProperty(PROPERTY_HEE_EMAIL).getString();
            LOGGER.debug("Phone number ({}) = {}, Email ({}) = {}",
                    PROPERTY_HEE_PHONE_NUMBER, phoneNumber, PROPERTY_HEE_EMAIL, email);

            if (StringUtils.isBlank(phoneNumber) && StringUtils.isBlank(email)) {
                return Optional.of(context.createViolation());
            }
        } catch (final RepositoryException e) {
            LOGGER.warn("Caught '{}' error while reading phone number ({}) (or) email ({})",
                    e.getMessage(), PROPERTY_HEE_PHONE_NUMBER, PROPERTY_HEE_EMAIL, e);
        }

        return Optional.empty();
    }
}
