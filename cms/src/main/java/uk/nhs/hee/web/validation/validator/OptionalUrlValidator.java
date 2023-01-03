package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.cms.services.validation.validator.UrlValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

/**
 * An extension of {@link UrlValidator} which performs validation only when the URL isn't empty.
 */
public class OptionalUrlValidator extends UrlValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(OptionalUrlValidator.class);

    @Override
    public Optional<Violation> validate(final ValidationContext context, final String value) {
        LOGGER.debug("URL = {}", value);

        if (StringUtils.isEmpty(value)) {
            return Optional.empty();
        }

        return super.validate(context, value);
    }
}
