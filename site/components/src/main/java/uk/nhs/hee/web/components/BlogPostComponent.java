package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.BlogPost;
import uk.nhs.hee.web.components.info.BlogPostComponentInfo;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.List;
import java.util.Map;

@ParametersInfo(type = BlogPostComponentInfo.class)
public class BlogPostComponent extends EssentialsDocumentComponent {
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final BlogPost blogPost = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (blogPost != null) {
            addValueListsForContentBlocks(request, blogPost);
            addBlogListingPageURLToModel(request);

            request.setAttribute("tableComponentService", new TableComponentService());
            request.setModel("featuredContentBlockService", new FeaturedContentBlockService());
        }
    }

    /**
     * Adds Blog Listing Page URL to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addBlogListingPageURLToModel(final HstRequest request) {
        final HstRequestContext hstRequestContext = request.getRequestContext();
        final HippoBean blogListingPageBean =
                HstUtils.getListingPageBeanByType(hstRequestContext, ListingPageType.BLOG_LISTING.getType());

        if (blogListingPageBean == null) {
            return;
        }

        request.setModel(
                Model.BLOG_LISTING_PAGE_URL.getKey(),
                HstUtils.getURLByBean(hstRequestContext, blogListingPageBean, false));
    }

    /**
     * Gets all the valueLists required by the content blocks from the given blogPost page and
     * sets them on the model.
     */
    private void addValueListsForContentBlocks(
            final HstRequest request,
            final BlogPost blogPost) {
        final List<HippoBean> pageContentBlocks = blogPost.getContentBlocks();
        pageContentBlocks.addAll(blogPost.getRightHandBlocks());

        final Map<String, Map<String, String>> modelToValueListMap =
                ContentBlocksUtils.getValueListMaps(pageContentBlocks);
        modelToValueListMap.forEach(request::setModel);
    }
}
