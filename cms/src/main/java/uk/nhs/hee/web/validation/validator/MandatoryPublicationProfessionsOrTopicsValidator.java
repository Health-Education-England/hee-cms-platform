package uk.nhs.hee.web.validation.validator;

import uk.nhs.hee.web.constants.HEETaxonomyNodeNames;

import java.util.Arrays;

/**
 * Validates if either publication professions ({@code hee:publicationProfessions})
 * or topics ({@code hee:publicationTopics}) have been provided in the document.
 */
public class MandatoryPublicationProfessionsOrTopicsValidator extends AbstractMandatoryValidator {
    public MandatoryPublicationProfessionsOrTopicsValidator() {
        super(Arrays.asList(HEETaxonomyNodeNames.HEE_GLOBAL_TAXONOMY_PROFESSIONS.getName(), HEETaxonomyNodeNames.HEE_GLOBAL_TAXONOMY_HEALTHCARE_TOPICS.getName()));
    }
}