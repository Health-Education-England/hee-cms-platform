package uk.nhs.hee.web.validation.validator;

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
 * Validates if either publication professions ({@code hee:publicationProfessions})
 * or topics ({@code hee:publicationTopics}) have been provided in the document.
 */
public class MandatoryPublicationProfessionsOrTopicsValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryPublicationProfessionsOrTopicsValidator.class);

    // Publication professions property
    private static final String PROPERTY_HEE_PUBLICATION_PROFESSIONS = "hee:publicationProfessions";
    // Publication topics property
    private static final String PROPERTY_HEE_PUBLICATION_TOPICS = "hee:publicationTopics";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            if (node.getProperty(PROPERTY_HEE_PUBLICATION_PROFESSIONS).getValues().length == 0
                    && node.getProperty(PROPERTY_HEE_PUBLICATION_TOPICS).getValues().length == 0) {
                return Optional.of(context.createViolation());
            }
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading publication professions({})/topics({}) from the node '{}'",
                    e.getMessage(),
                    PROPERTY_HEE_PUBLICATION_PROFESSIONS,
                    PROPERTY_HEE_PUBLICATION_TOPICS,
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }
}
