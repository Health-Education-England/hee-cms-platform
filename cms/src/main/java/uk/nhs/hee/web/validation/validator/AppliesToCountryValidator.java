package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.cms.services.validation.validator.AbstractNodeValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.Optional;

/**
 * Link Validator for {@code hee:appliesToCountry} CompoundType.
 *
 * <p>validates if the editor has provided {@code Link URL} ({@code hee:linkURL})
 * when {@code Applies to} ({@code hee:appliesTo}) for the corresponding country is not checked.</p>
 */
public class AppliesToCountryValidator extends AbstractNodeValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(AppliesToCountryValidator.class);

    private static final String NODE_TYPE_HEE_APPLIES_TO_COUNTRY = "hee:appliesToCountry";

    private static final String PROPERTY_HEE_APPLIES_TO = "hee:appliesTo";
    private static final String PROPERTY_HEE_LINK_URL = "hee:linkURL";

    @Override
    protected String getCheckedNodeType() {
        return NODE_TYPE_HEE_APPLIES_TO_COUNTRY;
    }

    @Override
    protected Optional<Violation> checkNode(final ValidationContext context, final Node node)
            throws RepositoryException {
        final boolean appliesTo = node.getProperty(PROPERTY_HEE_APPLIES_TO).getBoolean();
        LOGGER.debug("{} = {}", PROPERTY_HEE_APPLIES_TO, appliesTo);

        if (!appliesTo) {
            final String linkURL = node.getProperty(PROPERTY_HEE_LINK_URL).getString();
            LOGGER.debug("{} = {}", PROPERTY_HEE_LINK_URL, linkURL);

            if (StringUtils.isBlank(linkURL)) {
                return Optional.of(context.createViolation());
            }
        }

        return Optional.empty();
    }
}
