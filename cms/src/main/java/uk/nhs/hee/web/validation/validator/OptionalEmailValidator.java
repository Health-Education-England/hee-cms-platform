package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.cms.services.validation.validator.RegExpValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import java.util.Optional;

/**
 * An extension of {@link RegExpValidator} which performs validation only when the email isn't empty.
 */
public class OptionalEmailValidator extends RegExpValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(OptionalEmailValidator.class);

    public OptionalEmailValidator(final Node config) {
        super(config);
    }

    @Override
    public Optional<Violation> validate(final ValidationContext context, final String value) {
        LOGGER.debug("Email = {}", value);

        if (StringUtils.isEmpty(value)) {
            return Optional.empty();
        }

        return super.validate(context, value);
    }
}
