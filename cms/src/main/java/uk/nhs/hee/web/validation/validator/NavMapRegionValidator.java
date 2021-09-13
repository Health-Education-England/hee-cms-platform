package uk.nhs.hee.web.validation.validator;

import org.apache.commons.lang3.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.cms.services.validation.validator.AbstractNodeValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import java.util.*;

/**
 * Region Links Validator for {@code hee:navMap} CompoundType.
 *
 * <p>Validates if the editor has provided all regional links ({@code hee:links})
 * for the chosen map education ({@code hee:mapEducation}).</p>
 */
public class NavMapRegionValidator extends AbstractNodeValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(NavMapRegionValidator.class);

    private static final String NODE_TYPE_HEE_NAV_MAP = "hee:navMap";

    private static final String PROPERTY_HEE_MAP_EDUCATION = "hee:mapEducation";
    private static final String PROPERTY_HEE_LINKS = "hee:links";
    private static final String PROPERTY_HEE_REGION = "hee:region";

    private static final String VIOLATION_MSG_SUB_KEY_DUPLICATE_REGIONS = "duplicate-regions";
    private static final String VIOLATION_MSG_SUB_KEY_HAS_OTHER_EDUCATION_REGIONS = "has-other-education-regions";

    private static final Map<String, Integer> MAP_EDUCATION_TO_REGION_COUNT_MAP =
            Collections.unmodifiableMap(new HashMap<String, Integer>() {
                private static final long serialVersionUID = 5806501208388279582L;

                {
                    put("dental", 7);
                    put("higher", 7);
                    put("medical", 11);
                }
            });

    @Override
    protected String getCheckedNodeType() {
        return NODE_TYPE_HEE_NAV_MAP;
    }

    @Override
    protected Optional<Violation> checkNode(final ValidationContext context, final Node node)
            throws RepositoryException {
        final String mapEducation = node.getProperty(PROPERTY_HEE_MAP_EDUCATION).getString();
        final Map<String, String> mapEducationMap =
                Collections.singletonMap("mapEducation", StringUtils.capitalize(mapEducation));
        LOGGER.debug("{} = {}", PROPERTY_HEE_MAP_EDUCATION, mapEducation);

        // Handles violation for Navigation Maps containing duplicate regional links
        final NodeIterator linkNodeIterator = node.getNodes(PROPERTY_HEE_LINKS);
        final Set<String> mapRegions = getMapRegions(linkNodeIterator);
        LOGGER.debug("{} = {}", PROPERTY_HEE_REGION, mapRegions);

        if (linkNodeIterator.getSize() != mapRegions.size()) {
            return Optional.of(context.createViolation(VIOLATION_MSG_SUB_KEY_DUPLICATE_REGIONS, mapEducationMap));
        }

        // Handles violation for Navigation Maps containing other education regional links
        final String mapRegionPrefix = mapEducation + "-";
        final boolean hasOtherMapEducationRegion = mapRegions.stream()
                .anyMatch(mapRegion -> !mapRegion.startsWith(mapRegionPrefix));

        if (hasOtherMapEducationRegion) {
            return Optional.of(context.createViolation(
                    VIOLATION_MSG_SUB_KEY_HAS_OTHER_EDUCATION_REGIONS, mapEducationMap));
        }

        // Handles violation for Navigation Maps not containing all of its regional links
        if (MAP_EDUCATION_TO_REGION_COUNT_MAP.get(mapEducation) != mapRegions.size()) {
            return Optional.of(context.createViolation(mapEducationMap));
        }

        return Optional.empty();
    }

    /**
     * Returns Navigation Map Regions contained in the given {@code linkNodeIterator}.
     *
     * @param linkNodeIterator the {@link NodeIterator} instance containing nodes of type {@code hee:links}.
     * @return the Navigation Map Regions contained in the given {@code linkNodeIterator}.
     * @throws RepositoryException thrown when an error occurs
     *                             while working with nodes of the given iterator {@code linkNodeIterator}.
     */
    @NotNull
    private Set<String> getMapRegions(final NodeIterator linkNodeIterator) throws RepositoryException {
        final Set<String> mapRegions = new HashSet<>();

        while (linkNodeIterator.hasNext()) {
            final Node linkNode = linkNodeIterator.nextNode();
            mapRegions.add(linkNode.getProperty(PROPERTY_HEE_REGION).getString());
        }
        return mapRegions;
    }
}
