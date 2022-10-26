package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

/**
 * Validates if the given phone number has been prefixed with UK country code {@code +44}
 * and returns a violation if not.
 */
public class PhoneNumberUKCountryCodeValidator implements Validator<String>  {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(PhoneNumberUKCountryCodeValidator.class);

    @Override
    public Optional<Violation> validate(final ValidationContext context, final String value) {
        LOGGER.debug("Phone number = {}", value);

        return StringUtils.isEmpty(value) || value.startsWith("+44")
                ? Optional.empty()
                : Optional.of(context.createViolation());
    }
}
