package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
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
 * Validates if a {@code phase} has been chosen for {@code Phase banner}.
 */
public class BannerPhaseNameValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(BannerPhaseNameValidator.class);

    // Publication topics property
    private static final String PROPERTY_HEE_PHASE = "hee:phase";

    // Conventional name for Phase banner
    private static final String PHASE_BANNER_CONVENTIONAL_NAME = "phase-banner";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            final String phase = node.getProperty(PROPERTY_HEE_PHASE).getString();
            LOGGER.debug("Phase = {}", phase);

            if (PHASE_BANNER_CONVENTIONAL_NAME.equals(node.getName()) && StringUtils.isEmpty(phase)) {
                return Optional.of(context.createViolation());
            }
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading Phase ({}) property from the node '{}'",
                    e.getMessage(),
                    PROPERTY_HEE_PHASE,
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }
}
