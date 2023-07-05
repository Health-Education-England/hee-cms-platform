package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.BlogPost;
import uk.nhs.hee.web.components.info.BlogPostComponentInfo;
import uk.nhs.hee.web.repository.ValueListIdentifier;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.DocumentUtils;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.ValueListUtils;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ParametersInfo(type = BlogPostComponentInfo.class)
public class BlogPostComponent extends EssentialsDocumentComponent {
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final BlogPost blogPost = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (blogPost != null) {
            addCategoriesValueListMapToModel(request, blogPost);
            addValueListsForContentBlocks(request, blogPost);
            addBlogListingPageURLToModel(request);

            request.setAttribute("tableComponentService", new TableComponentService());
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
     * Creates a Map that has as the key the name of the blog category and as the value the URL path
     * to the Blog Overview page filtered by category.
     *
     * <p>
     * Example: given the categories = ["data_search"],
     * the response will be [{"Data Search", "/blogs?category=data_search" }]
     * </p>
     */
    private void addCategoriesValueListMapToModel(
            final HstRequest request,
            final BlogPost blogPost) {
        final List<String> blogCategories = Arrays.asList(blogPost.getCategories());

        if (blogCategories.isEmpty()) {
            return;
        }
        final Map<String, String> allBlogCategoriesValueListMap = ValueListUtils.getValueListMap(
                ValueListIdentifier.BLOG_CATEGORIES.getName(), DocumentUtils.getChannel(blogPost.getPath()));

        request.setModel(
                Model.CATEGORIES_VALUE_LIST_MAP.getKey(),
                blogCategories.stream()
                        .filter(category -> allBlogCategoriesValueListMap.get(category) != null)
                        .collect(Collectors.toMap(category -> category, allBlogCategoriesValueListMap::get)));
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
