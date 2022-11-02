package uk.nhs.hee.web.validation.validator;

import com.google.common.base.CharMatcher;
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

    // CharMatcher instance of common multiple phone number separators
    private static final CharMatcher MULTIPLE_PHONE_NUMBER_SEPARATOR_CHAR_MATCHER = CharMatcher.anyOf("/\\|,;:");

    // UK country code
    private static final String UK_COUNTRY_CODE = "+44";

    // Phone number extension keyword
    private static final String PHONE_NUMBER_EXTENSION_KEYWORD = "ext";

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

        // Validates the existence of UK country code (+44) prefix in the given phone number.
        if (!hasUKCountryCode(value)) {
            LOGGER.debug("The phone number '{}' doesn't have UK country code ({}) and " +
                    "please prefix it with one", value, UK_COUNTRY_CODE);
            return Optional.of(context.createViolation("no-uk-country-code-error"));
        }

        // Validates if the given phone number has multiple contact numbers in it.
        if (hasMultiplePhoneNumbers(value)) {
            LOGGER.debug("The phone number '{}' has common contact number separators " +
                            "(forward slash [/], backward slash [\\], comma [,] and pipe [|]) " +
                            "and is likely to contain multiple contact numbers. " +
                            "Please enter one contact number only",
                    value);
            return Optional.of(context.createViolation("multiple-contact-numbers-error"));
        }

        // Validates if the given phone number has extension included in it.
        if (hasExtension(value)) {
            LOGGER.debug("The phone number '{}' has '{}' keyword " +
                            "and is likely to contain extension in it. Please remove the extension if any.",
                    value, PHONE_NUMBER_EXTENSION_KEYWORD);
            return Optional.of(context.createViolation("phone-number-extension-input-suggestion"));
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

    /**
     * Returns {@code true} if the given {@code phoneNumber} contains common phone number separator characters.
     * Otherwise, returns {@code false}.
     *
     * <p>It currently checks for the following characters in the given {@code phoneNumber}
     * in order to check the existence of multiple phone numbers:</p>
     * <ul>
     *     <li>forward slash (/)</li>
     *     <li>backward slash (\)</li>
     *     <li>comma (,)</li>
     *     <li>pipe (|)</li>
     * </ul>
     *
     * @param phoneNumber the phone number.
     * @return {@code true} if the given {@code phoneNumber} contains common phone number separator characters.
     * Otherwise, returns {@code false}.
     */
    private boolean hasMultiplePhoneNumbers(final String phoneNumber) {
        return MULTIPLE_PHONE_NUMBER_SEPARATOR_CHAR_MATCHER.matchesAnyOf(phoneNumber);
    }

    /**
     * Returns {@code true} if the given {@code phoneNumber} has {@code ext} substring.
     * Otherwise, returns {@code false}.
     *
     * @param phoneNumber the phone number.
     * @return {@code true} if the given {@code phoneNumber} has {@code ext} substring.
     * Otherwise, returns {@code false}.
     */
    private boolean hasExtension(final String phoneNumber) {
        return phoneNumber.toLowerCase().contains(PHONE_NUMBER_EXTENSION_KEYWORD);
    }
}
