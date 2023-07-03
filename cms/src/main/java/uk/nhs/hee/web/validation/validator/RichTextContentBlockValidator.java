package uk.nhs.hee.web.validation.validator;

import org.hippoecm.frontend.plugins.richtext.validation.RequiredRichTextValidator;
import org.hippoecm.repository.HippoStdNodeType;
import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.Optional;

/**
 * <p>An extension of out of the box {@link RequiredRichTextValidator} which performs required validation
 * for the html (compound type) ({@code hippostd:html}) when used as a content block.</p>
 *
 * <p>validates if the editor has provided some text
 * for the html (compound type) ({@code hippostd:html}) content block.</p>
 */
public class RichTextContentBlockValidator extends RequiredRichTextValidator {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(RichTextContentBlockValidator.class);

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            if (!node.isNodeType(HippoStdNodeType.NT_HTML)) {
                return Optional.empty();
            }

            return super.checkNode(context, node);
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
