package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.BlogComment;
import uk.nhs.hee.web.beans.BlogPost;
import uk.nhs.hee.web.components.info.BlogPostComponentInfo;
import uk.nhs.hee.web.repository.ValueListIdentifier;
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

    private static final int DEFAULT_NUMBER_OF_VISIBLE_COMMENTS = 3;

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final BlogPost blogPost = getBlogPostBean(request);
        if (blogPost != null) {
            addCategoriesValueListMapToModel(request, blogPost);

            addBlogListingPageURLToModel(request);

            final List<BlogComment> comments = getModeratedComments(blogPost.getComments());
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

    private BlogPost getBlogPostBean(final HstRequest request) {
        BlogPost blogPost = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (blogPost == null) {
            blogPost = (BlogPost) request.getRequestContext().getContentBean();
        }

        return blogPost;
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
     * Returns moderated comments i.e. the comments whose {@code hee:moderated} property is {@code true}.
     *
     * @param comments the list of all blog comments.
     * @return the moderated comments.
     */
    private List<BlogComment> getModeratedComments(final List<BlogComment> comments) {
        return comments.stream()
                .filter(comment -> Boolean.TRUE.equals(comment.getModerated()))
                .collect(Collectors.toList());
    }

}
