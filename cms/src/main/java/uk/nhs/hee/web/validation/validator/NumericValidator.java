package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

/**
 * Numeric validator.
 */
public class NumericValidator implements Validator<String> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(NumericValidator.class);

    /**
     * Returns an {@link Optional<Violation>} instance in case if the given {@code value} is not numeric.
     * Otherwise, returns an empty {@link Optional} instance.
     *
     * @param context the {@link ValidationContext} instance.
     * @param value   the value which needs to be validated against.
     * @return an {@link Optional<Violation>} instance in case if the given {@code value} is not numeric.
     * Otherwise, returns an empty {@link Optional} instance.
     */
    @Override
    public Optional<Violation> validate(final ValidationContext context, final String value) {
        LOGGER.debug("Value = {}", value);

        if (StringUtils.isEmpty(value)) {
            return Optional.empty();
        }

        // Validates if the given value is numeric
        if (!(value.matches("\\d+"))) {
            LOGGER.debug("The given value {} isn't numeric", value);
            return Optional.of(context.createViolation());
        }

        return Optional.empty();
    }
}
