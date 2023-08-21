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
 * Validates if Publication type or healthcare topic or profession taxonomies have been provided
 * for Publication landing page content type. For content types other than publication landing page,
 * it validates if healthcare topic or profession taxonomies have been provided.
 */
public class MandatoryFeaturedMethodValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryFeaturedMethodValidator.class);

    // Method property
    private static final String PROPERTY_HEE_METHOD = "hee:method";
    // Content type property
    private static final String PROPERTY_HEE_FEATURED_CONTENT_TYPE = "hee:featuredContentType";
    // Publication type taxonomy property
    private static final String PROPERTY_HEE_PUBLICATION_TYPE_TAXONOMY = "hee:globalTaxonomyPublicationType";
    // Profession taxonomy property
    private static final String PROPERTY_HEE_PROFESSIONS_TAXONOMY = "hee:globalTaxonomyProfessions";
    // Healthcare topic taxonomy property
    private static final String PROPERTY_HEE_TOPICS_TAXONOMY = "hee:globalTaxonomyHealthcareTopics";

    // Related method value
    private static final String METHOD_VALUE_RELATED = "Related";
    // Publication landing page content type value
    private static final String CONTENT_TYPE_VALUE_PUBLICATION_LANDING_PAGE = "hee:publicationLandingPage";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            if (!METHOD_VALUE_RELATED.equals(node.getProperty(PROPERTY_HEE_METHOD).getString())) {
                return Optional.empty();
            }

            if (CONTENT_TYPE_VALUE_PUBLICATION_LANDING_PAGE.equals(node.getProperty(PROPERTY_HEE_FEATURED_CONTENT_TYPE).getString())) {
                // For publication landing page content type
                if (node.getProperty(PROPERTY_HEE_PUBLICATION_TYPE_TAXONOMY).getValues().length == 0
                        && node.getProperty(PROPERTY_HEE_PROFESSIONS_TAXONOMY).getValues().length == 0
                        && node.getProperty(PROPERTY_HEE_TOPICS_TAXONOMY).getValues().length == 0) {
                    return Optional.of(context.createViolation("publication-landing-page"));
                }
            } else {
                // For content types other than publication landing page
                if (node.getProperty(PROPERTY_HEE_PROFESSIONS_TAXONOMY).getValues().length == 0
                        && node.getProperty(PROPERTY_HEE_TOPICS_TAXONOMY).getValues().length == 0) {
                    return Optional.of(context.createViolation());
                }
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
