package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

/**
 * Phone number validator. Refer
 * {@link PhoneNumberValidator#validate(org.onehippo.cms.services.validation.api.ValidationContext, java.lang.String)}
 * for the validations being performed.
 */
public class PhoneNumberValidator implements Validator<String> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(PhoneNumberValidator.class);

    // UK country code
    private static final String UK_COUNTRY_CODE = "+44";


    /**
     * Returns an {@link Optional<Violation>} instance in case of validation violation.
     * Otherwise, returns an empty {@link Optional} instance.
     *
     * @param context the {@link ValidationContext} instance.
     * @param value   the phone number.
     * @return an {@link Optional<Violation>} instance in case of validation violation.
     * Otherwise, returns an empty {@link Optional} instance.
     */
    @Override
    public Optional<Violation> validate(final ValidationContext context, final String value) {
        LOGGER.debug("Phone number = {}", value);

        if (StringUtils.isEmpty(value)) {
            return Optional.empty();
        }

        // Validates if the given phone number hasn't been prefixed with UK country code (+44).
        if (hasUKCountryCode(value)) {
            LOGGER.debug("The phone number '{}' has been prefixed with UK country code ({}). " +
                    "Please remove it.", value, UK_COUNTRY_CODE);
            return Optional.of(context.createViolation("uk-country-code-error"));
        }

        final String phoneNumberWithoutSpaces = StringUtils.deleteWhitespace(value);
        // Validates if the given phone number has only numeric/space characters
        // and contains at least 10 digits (excluding trunk[0]/country code[44] prefixes).
        if (!StringUtils.isNumericSpace(value) ||
                phoneNumberWithoutSpaces.length() < 10 ||
                (phoneNumberWithoutSpaces.startsWith("0") && phoneNumberWithoutSpaces.length() != 11) ||
                (phoneNumberWithoutSpaces.startsWith("44") && phoneNumberWithoutSpaces.length() != 12)) {
            LOGGER.debug("The phone number '{}' contains either non numeric/space characters " +
                    "or less than 10 digits (excluding trunk[0]/country code[44] prefixes). " +
                    "Please enter a valid phone number", value);
            return Optional.of(context.createViolation("invalid-phone-number"));
        }

        return Optional.empty();
    }

    /**
     * Returns {@code true} if the given {@code phoneNumber} contains UK country code {@code +44}.
     * Otherwise, returns {@code false}.
     *
     * @param phoneNumber the phone number.
     * @return {@code true} if the given {@code phoneNumber} contains UK country code {@code +44}.
     * Otherwise, returns {@code false}.
     */
    private boolean hasUKCountryCode(final String phoneNumber) {
        return phoneNumber.startsWith(UK_COUNTRY_CODE);
    }
}
