package uk.nhs.hee.web.validation.validator;



import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.repository.util.JcrConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.util.Optional;

/**
 * Validates if either publication professions ({@code hee:publicationProfessions})
 * or topics ({@code hee:publicationTopics}) have been provided in the document.
 */
public class MandatoryEventBookingLinkOrEmailValidator implements Validator<Node> {

    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryFeaturedMethodValidator.class);

    private static final String PROPERTY_HEE_BOOKING_LINK = "hee:bookingLink";

    private static final String PROPERTY_HEE_BOOKING_EMAIL = "hee:bookingEmail";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            if (StringUtils.isEmpty(node.getProperty(PROPERTY_HEE_BOOKING_EMAIL).getString())
                    && StringUtils.isEmpty(node.getProperty(PROPERTY_HEE_BOOKING_LINK).getString())){

                return Optional.of(context.createViolation());
            }

        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading properties of the node '{}'",
                    e.getMessage(),
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }

}