package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.cms7.essentials.components.info.EssentialsDocumentComponentInfo;
import uk.nhs.hee.web.content.rewriter.impl.BannerContentRewriter;

/**
 * Component class for {@code banner} abstract base component
 * which essentially adds an instance of {@link BannerContentRewriter} to the model
 * (in order to rewrite banner ({@code hee:banner}) document copy).
 */
@ParametersInfo(type = EssentialsDocumentComponentInfo.class)
public class BannerComponent extends EssentialsDocumentComponent {
    public static final BannerContentRewriter bannerContentRewriter = new BannerContentRewriter();

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        request.setModel("bannerContentRewriter", bannerContentRewriter);
    }
}
