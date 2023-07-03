package uk.nhs.hee.web.validation.validator;

import org.hippoecm.repository.util.JcrUtils;
import org.onehippo.addon.frontend.gallerypicker.GalleryPickerNodeType;
import org.onehippo.addon.frontend.gallerypicker.validator.RequiredImageLinkValidator;
import org.onehippo.cms.services.validation.api.ValidationContext;
import org.onehippo.cms.services.validation.api.Violation;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import java.util.Optional;

/**
 * <p>An extension of out of the box {@link RequiredImageLinkValidator} which performs required validation
 * for the Image link (compound type) ({@code hippogallerypicker:imagelink}) when used in a content block.</p>
 *
 * <p>validates if the editor has selected/chosen an image.</p>
 */
public class ImageLinkContentBlockValidator extends RequiredImageLinkValidator {

    private static final Logger LOGGER = LoggerFactory.getLogger(ImageLinkContentBlockValidator.class);

    @Override
    public Optional<Violation> validate(final ValidationContext context, final Node node) {
        try {
            if (!node.isNodeType(GalleryPickerNodeType.NT_IMAGE_LINK)) {
                return Optional.empty();
            }

            return super.validate(context, node);
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
