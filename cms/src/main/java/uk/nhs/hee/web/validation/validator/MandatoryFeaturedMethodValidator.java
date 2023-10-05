package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.*;

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
    //Tags taxonomy property
    private static final String PROPERTY_HEE_TAGS_TAXONOMY = "hee:globalTaxonomyTags";

    // Related method value
    private static final String METHOD_VALUE_RELATED = "Related";
    // Publication landing page content type value
    private static final String CONTENT_TYPE_VALUE_PUBLICATION_LANDING_PAGE = "hee:publicationLandingPage";
    private static final String CONTENT_TYPE_VALUE_BLOG_POST_PAGE = "hee:blogPost";
    private static final String CONTENT_TYPE_VALUE_NEWS_PAGE = "hee:news";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            if (!METHOD_VALUE_RELATED.equals(node.getProperty(PROPERTY_HEE_METHOD).getString())) {
                return Optional.empty();
            }

            if (CONTENT_TYPE_VALUE_PUBLICATION_LANDING_PAGE.equals(
                    node.getProperty(PROPERTY_HEE_FEATURED_CONTENT_TYPE).getString())) {
                if (!isAnyAvailable(node, Arrays.asList(PROPERTY_HEE_PUBLICATION_TYPE_TAXONOMY,
                        PROPERTY_HEE_PROFESSIONS_TAXONOMY, PROPERTY_HEE_TOPICS_TAXONOMY))) {
                    // For publication landing page content type
                    return Optional.of(context.createViolation("publication-landing-page"));
                }

                if (isAnyAvailable(node, Arrays.asList(PROPERTY_HEE_TAGS_TAXONOMY))) {
                    // For publication landing page content type

                    return Optional.of(context.createViolation("no-taxonomy", Map.of("taxonomy","Tags", "contentType", "Publication landing page")));
                }
            } else {
                // For content types other than publication landing page
                if (!isAnyAvailable(node,
                        Arrays.asList(PROPERTY_HEE_PROFESSIONS_TAXONOMY, PROPERTY_HEE_TOPICS_TAXONOMY))) {
                    return Optional.of(context.createViolation());
                }
                if (isAnyAvailable(node, Arrays.asList(PROPERTY_HEE_PUBLICATION_TYPE_TAXONOMY))) {
                    // For publication landing page content type
                    return Optional.of(context.createViolation("no-taxonomy", Map.of("taxonomy","Publication type", "contentType", "News or Blogs")));
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

    /**
     * Returns {@code true} if the value is available i.e. if the taxonomy has been chosen
     * for any of the given fields identified by {@code taxonomyFieldNameList}. Otherwise, returns {@code false}.
     *
     * @param node                  the featured content document {@link Node} instance being edited.
     * @param taxonomyFieldNameList the list of taxonomy-based fields whose value(s) availability needs to be verified.
     * @return {@code true} if the value is available i.e. if the taxonomy has been chosen
     * for any of the given fields identified by {@code taxonomyFieldNameList}. Otherwise, returns {@code false}.
     * @throws RepositoryException thrown when an error occurs while querying the given {@code node} properties.
     */
    public boolean isAnyAvailable(final Node node, final List<String> taxonomyFieldNameList) throws RepositoryException {
        for (final String taxonomyFieldName : taxonomyFieldNameList) {
            if (node.hasProperty(taxonomyFieldName) && node.getProperty(taxonomyFieldName).getValues().length > 0) {
                return true;
            }
        }

        return false;
    }
}
