package uk.nhs.hee.web.validation.validator;

import java.util.Arrays;

/**
 * Validates if either publication professions ({@code hee:publicationProfessions})
 * or topics ({@code hee:publicationTopics}) have been provided in the document.
 */
public class MandatoryPublicationTypeValidator extends AbstractMandatoryCombinationValidator {
    public MandatoryPublicationTypeValidator() {
        super(Arrays.asList("hee:publicationTypeClassifiable"));
    }
}
