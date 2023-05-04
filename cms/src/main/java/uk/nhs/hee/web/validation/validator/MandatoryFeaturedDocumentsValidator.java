package uk.nhs.hee.web.validation.validator;

import org.hippoecm.repository.util.JcrUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.collections4.IteratorUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import java.util.List;
import java.util.Optional;

/**
 * Validates if either publication professions ({@code hee:publicationProfessions})
 * or topics ({@code hee:publicationTopics}) have been provided in the document when Method value is Related.
 */
public class MandatoryFeaturedDocumentsValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryFeaturedDocumentsValidator.class);

    // Method property

    private static final String PROPERTY_HEE_METHOD = "hee:method";

    private static final String METHOD_VALUE = "Manual";

    private static final String PROPERTY_HEE_DOCUMENTS = "hee:featuredDocuments";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {


        try {

            final NodeIterator webDocNodeIterator = node.getNodes(PROPERTY_HEE_DOCUMENTS);

            @SuppressWarnings("unchecked") final List<Node> webDocNodeList = IteratorUtils.<Node>toList(webDocNodeIterator);

            if (METHOD_VALUE.equals(node.getProperty(PROPERTY_HEE_METHOD).getString()) && webDocNodeList.size()<1) {
                return Optional.of(context.createViolation());

            } else if (METHOD_VALUE.equals(node.getProperty(PROPERTY_HEE_METHOD).getString()) && webDocNodeList.size()>3) {
                return Optional.of(context.createViolation("maximum-three"));

            }
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading Featured Documents from the node '{}'",
                    e.getMessage(),
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }
}
