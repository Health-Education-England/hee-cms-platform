package uk.nhs.hee.web.validation.validator;

import org.hippoecm.repository.util.JcrUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.commons.collections4.IteratorUtils;
import org.apache.commons.collections.CollectionUtils;
import org.hippoecm.repository.api.HippoNodeType;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Validator;
import org.onehippo.cms.services.validation.api.Violation;
import org.onehippo.cms.services.validation.validator.AbstractNodeValidator;
import org.onehippo.repository.util.JcrConstants;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.NodeIterator;
import javax.jcr.RepositoryException;
import java.util.List;
import java.util.Optional;

/**
 * Validates if there is a Trainning Journey Summary
 * at least one link of Prerequisite or Optional Routes is available
 */
public class MandatoryTrainingJourneyValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(MandatoryTrainingJourneyValidator.class);
    private static final String PROPERTY_HEE_TRAINING_JOURNEY_SUMMARY = "hee:trainingJourneySummary";
    // Publication professions property
    private static final String PROPERTY_HEE_TRAINING_JOURNEY_PREREQUISITE = "hee:trainingJourneyPrerequisites";
    // Publication topics property
    private static final String PROPERTY_HEE_TRAINING_JOURNEY_OPTIONS = "hee:trainingJourneyOptions";

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            //Get the list of nodes from prerequisites and optional routes
            final List<Node> prerequisiteNodes = IteratorUtils.<Node>toList(node.getNodes(PROPERTY_HEE_TRAINING_JOURNEY_PREREQUISITE));
            final List<Node> optionRoutesNodes = IteratorUtils.<Node>toList(node.getNodes(PROPERTY_HEE_TRAINING_JOURNEY_OPTIONS));

            //if Sumary is not empty, some prerequisite or optional routes link is needed
            //also check if the first node has a valid link to a document. 
            if (!StringUtils.isEmpty(node.getProperty(PROPERTY_HEE_TRAINING_JOURNEY_SUMMARY).getString())
                    && (optionRoutesNodes.size()==0?true:optionRoutesNodes.get(0).getProperty(HippoNodeType.HIPPO_DOCBASE).getString().equals(JcrConstants.ROOT_NODE_ID))
                    && (prerequisiteNodes.size()==0?true:prerequisiteNodes.get(0).getProperty(HippoNodeType.HIPPO_DOCBASE).getString().equals(JcrConstants.ROOT_NODE_ID))
                    ){

                return Optional.of(context.createViolation());
            }
        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading Training Journey Summary({})/ Prerequisites({})/ Optional Routes({}) from the node '{}'",
                    e.getMessage(),
                    PROPERTY_HEE_TRAINING_JOURNEY_SUMMARY,
                    PROPERTY_HEE_TRAINING_JOURNEY_PREREQUISITE,
                    PROPERTY_HEE_TRAINING_JOURNEY_OPTIONS,
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }
}
