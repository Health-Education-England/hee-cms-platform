package uk.nhs.hee.web.validation.validator;

import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Optional;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

/**
 * Validates that a Guidance page added to the Application Information list is unique within that list
 */
public class UniqueGuidancePageValidator implements Validator<Node> {
    private static final Logger LOGGER = LoggerFactory.getLogger(UniqueGuidancePageValidator.class);

    private static final String PROPERTY_HEE_APPLICATION_INFORMATION = "hee:applicationInformation";

    @Override
    public Optional<Violation> validate(ValidationContext context, Node node) {
        try {
            if (ValidationHelper.hasDuplicateNodes(node, PROPERTY_HEE_APPLICATION_INFORMATION)) {
                return Optional.of(context.createViolation());
            }
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading Application Information ({}) from the node '{}'",
                    e.getMessage(),
                    PROPERTY_HEE_APPLICATION_INFORMATION,
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }
}