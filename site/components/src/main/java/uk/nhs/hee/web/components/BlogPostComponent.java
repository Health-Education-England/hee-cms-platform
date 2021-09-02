package uk.nhs.hee.web.components;

import org.hippoecm.hst.container.RequestContextProvider;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.forge.selection.hst.contentbean.ValueList;
import org.onehippo.forge.selection.hst.util.SelectionUtil;
import uk.nhs.hee.web.beans.BlogComment;
import uk.nhs.hee.web.beans.BlogPost;
import uk.nhs.hee.web.components.info.BlogPostComponentInfo;
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

    private static final String BLOG_CATEGORIES_VALUE_LIST_IDENTIFIER = "blogCategories";
    private static final int DEFAULT_NUMBER_OF_VISIBLE_COMMENTS = 3;

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final BlogPost blogPost = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (blogPost != null) {
            addCategoriesValueListMapToModel(request, blogPost);

            addBlogListingPageURLToModel(request);

            final List<BlogComment> comments = blogPost.getComments();
            request.setModel("totalComments", comments.size());

            if (comments.isEmpty()) {
                return;
            }

            Collections.reverse(comments);
            final boolean showAllComments = Boolean.parseBoolean(getPublicRequestParameter(request, "showAllComments"));
            if (!showAllComments) {
                request.setModel("visibleComments", comments.subList(0, Math.min(DEFAULT_NUMBER_OF_VISIBLE_COMMENTS, comments.size())));
            } else
                request.setModel("visibleComments", comments);
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
        final Map<String, String> allBlogCategoriesValueListMap = getBlogCategoriesKeyValueMap(blogPost.getPath());

        request.setModel(
                Model.CATEGORIES_VALUE_LIST_MAP.getKey(),
                blogCategories.stream().collect(
                        Collectors.toMap(
                                category -> category,
                                allBlogCategoriesValueListMap::get)));
    }

    /**
     * Creates a map from the channel specific {@value BLOG_CATEGORIES_VALUE_LIST_IDENTIFIER} BR value-list.
     * The map has as the key the blog category key and as the value the blog category label.
     *
     * @param documentPath the document path.
     * @return blogCategoryKeyValueMap
     */
    private Map<String, String> getBlogCategoriesKeyValueMap(final String documentPath) {
        final ValueList categoriesValueList =
                SelectionUtil.getValueListByIdentifier(
                        ValueListUtils.getChannelSpecificValueListIdentifier(
                                BLOG_CATEGORIES_VALUE_LIST_IDENTIFIER,
                                DocumentUtils.getChannel(documentPath)
                        ),
                        RequestContextProvider.get()
                );
        return SelectionUtil.valueListAsMap(categoriesValueList);
    }

}
