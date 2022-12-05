package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

public class WebsiteUrlValidator implements Validator<String> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(WebsiteUrlValidator.class);

    @Override
    public Optional<Violation> validate(final ValidationContext context, final String value) {
        LOGGER.debug("Website url = {}", value);

        if (StringUtils.isEmpty(value)) {
            return Optional.empty();
        }

        // Validates given website url starts with either http:// or https://
        if (value.length()>0 && !value.startsWith("http://") && !value.startsWith("https://")) {
            LOGGER.debug("Website url '{}' should start with either http:// or https:// ",value);
            return Optional.of(context.createViolation("invalid-url-input-suggestion"));
        }

        return Optional.empty();
    }
}
