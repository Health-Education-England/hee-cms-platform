package uk.nhs.hee.web.validation.validator;

import uk.nhs.hee.web.constants.HEETaxonomyNodeNames;

import java.util.Arrays;

/**
 * Validates that a publication type has been supplied (it's not enforced through the interface
 * as it's a taxonomy field)
 */
public class MandatoryPublicationTypeValidator extends AbstractMandatoryValidator {
    public MandatoryPublicationTypeValidator() {
        super(Arrays.asList(HEETaxonomyNodeNames.HEE_GLOBAL_TAXONOMY_PUBLICATION_TYPES.getName()));
    }
}