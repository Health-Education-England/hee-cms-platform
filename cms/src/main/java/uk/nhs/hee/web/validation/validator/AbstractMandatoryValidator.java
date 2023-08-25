package uk.nhs.hee.web.validation.validator;

import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;
import java.util.Optional;

import javax.jcr.Node;
import javax.jcr.RepositoryException;

public abstract class AbstractMandatoryValidator implements Validator<Node> {
    private static final Logger LOGGER = LoggerFactory.getLogger(AbstractMandatoryValidator.class);

    private final List<String> combinationFields;

    public AbstractMandatoryValidator(List<String> fields) {
        combinationFields = fields;
    }

    @Override
    public Optional<Violation> validate(ValidationContext context, final Node node) {
        try {
            for (String fieldName : combinationFields) {
                if (node.hasProperty(fieldName) && node.getProperty(fieldName).getValues().length > 0){
                    return Optional.empty();
                }
            }
            return Optional.of(context.createViolation());
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading list for {} from the node '{}'",
                    e.getMessage(),
                    combinationFields,
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }
}