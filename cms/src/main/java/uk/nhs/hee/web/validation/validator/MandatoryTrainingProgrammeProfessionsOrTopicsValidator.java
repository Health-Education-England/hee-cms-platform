package uk.nhs.hee.web.validation.validator;

import java.util.Arrays;

/**
 * Validates if either professions ({@code hee:professions})
 * or topics ({@code hee:topics}) have been provided in the training page document.
 */
public class MandatoryTrainingProgrammeProfessionsOrTopicsValidator extends AbstractMandatoryCombinationValidator {

    public MandatoryTrainingProgrammeProfessionsOrTopicsValidator() {
        super(Arrays.asList(new String[]{"hee:professions", "hee:topics"}));
    }
}
