package uk.nhs.hee.web.validation.validator;

import java.util.Arrays;

/**
 * Validates if either publication professions ({@code hee:publicationProfessions})
 * or topics ({@code hee:publicationTopics}) have been provided in the document.
 */
public class MandatoryTrainingProgrammeProfessionsOrTopicsValidator extends MandatoryCombinationValidator {

    public MandatoryTrainingProgrammeProfessionsOrTopicsValidator() {
        super(Arrays.asList(new String[]{"hee:professions", "hee:topics"}));
    }
//    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryPublicationProfessionsOrTopicsValidator.class);
//
//    // Publication professions property
//    private static final String PROPERTY_HEE_PUBLICATION_PROFESSIONS = "hee:publicationProfessions";
//    // Publication topics property
//    private static final String PROPERTY_HEE_PUBLICATION_TOPICS = "hee:publicationTopics";
//
//    @Override
//    public Optional<Violation> validate(final ValidationContext context, final Node node) {
//        try {
//            if (node.getProperty(PROPERTY_HEE_PUBLICATION_PROFESSIONS).getValues().length == 0
//                    && node.getProperty(PROPERTY_HEE_PUBLICATION_TOPICS).getValues().length == 0) {
//                return Optional.of(context.createViolation());
//            }
//        } catch (final RepositoryException e) {
//            LOGGER.warn(
//                    "Caught '{}' error while reading publication professions({})/topics({}) from the node '{}'",
//                    e.getMessage(),
//                    PROPERTY_HEE_PUBLICATION_PROFESSIONS,
//                    PROPERTY_HEE_PUBLICATION_TOPICS,
//                    JcrUtils.getNodePathQuietly(node),
//                    e);
//        }
//
//        return Optional.empty();
//    }
}
