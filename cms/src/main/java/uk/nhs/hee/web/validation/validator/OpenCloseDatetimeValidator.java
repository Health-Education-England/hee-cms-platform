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
import java.util.ArrayList;
import java.util.Optional;
import java.util.Calendar;

/**
 * Validates if there is a Opening and Closing datetime and if Closing is after Opening
 */
public class OpenCloseDatetimeValidator implements Validator<Node> {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(OpenCloseDatetimeValidator.class);
    private static final String PROPERTY_HEE_TRAINING_OPENING = "hee:opening";
    private static final String PROPERTY_HEE_TRAINING_CLOSING = "hee:closing";

    //Default date (when no date is entered) in Miliseconds
    private static final Long DEFAULT_DATE = -62135726400000L;


    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {


            Calendar opening = node.getProperty(PROPERTY_HEE_TRAINING_OPENING).getDate();
            Calendar closing = node.getProperty(PROPERTY_HEE_TRAINING_CLOSING).getDate();
            Calendar predetermine = Calendar.getInstance();
            predetermine.setTimeInMillis(DEFAULT_DATE);

            //if opening or closing is empty, send error. Both needs to be emptied or filled
            if((opening.compareTo(predetermine)==0 && closing.compareTo(predetermine)!=0)||
               (opening.compareTo(predetermine)!=0 && closing.compareTo(predetermine)==0)){

                return Optional.of(context.createViolation());

            //If Opening date is after Closing send an error
            }else if(opening.after(closing)){

                return Optional.of(context.createViolation("close-after-open"));
            }

        } catch (final RepositoryException e) {
            LOGGER.warn(
                    "Caught '{}' error while reading Opening date({})/ Closing date({}) from the node '{}'",
                    e.getMessage(),
                    PROPERTY_HEE_TRAINING_OPENING,
                    PROPERTY_HEE_TRAINING_CLOSING,
                    JcrUtils.getNodePathQuietly(node),
                    e);
        }

        return Optional.empty();
    }


}
