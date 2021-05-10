package uk.nhs.hee.web.components;

import org.apache.commons.lang.StringUtils;
import org.hippoecm.hst.container.RequestContextProvider;
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
import uk.nhs.hee.web.utils.HstUtils;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ParametersInfo(type = BlogPostComponentInfo.class)
public class BlogPostComponent extends EssentialsDocumentComponent {

    private static final String BLOG_CATEGORIES_VALUE_LIST_IDENTIFIER = "blogCategories";
    private static final String BLOG_OVERVIEW_PAGE_SITEMAP_REF_ID = "blogs";
    private static final String BLOG_OVERVIEW_PAGE_DEFAULT_URL = "/blogs";
    private static final int DEFAULT_NUMBER_OF_VISIBLE_COMMENTS = 3;

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        BlogPost blogPost = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (blogPost == null) {
            // Looks up for blogPost document associated to the ResolvedSiteMapItem
            // in case if any and adds its bean in the request.
            // Essentially a fall back mechanism in case
            setContentBean(null, request, response);
        }

        blogPost = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (blogPost != null) {
            final List<String> blogCategories = Arrays.asList(blogPost.getCategories());
            request.setModel(
                    "categoriesToFilteredURLMap",
                    mapCategoriesToFilteredUrl(request.getRequestContext(), blogCategories));

            List<BlogComment> comments =  blogPost.getComments();
            Collections.reverse(comments);
            request.setModel("allComments", comments);
            boolean showAllComments = Boolean.parseBoolean(getPublicRequestParameter(request, "showAllComments"));
            if (!showAllComments) {
                request.setModel("visibleComments", comments.subList(0, Math.min(DEFAULT_NUMBER_OF_VISIBLE_COMMENTS, comments.size() - 1)));
            }
            else
                request.setModel("visibleComments", comments);
        }
    }

    /**
     * Creates a Map that has as the key the name of the blog category and as the value the URL path
     * to the Blog Overview page filtered by category.
     *
     * <p>
     * Example: given the categories = ["data_search"],
     * the response will be [{"Data Search", "/blogs?category=data_search" }]
     * </p>
     *
     * @param categories list of categories
     * @return categoriesToFilteredURL Map
     */
    private Map<String, String> mapCategoriesToFilteredUrl(
            final HstRequestContext requestContext,
            final List<String> categories) {
        final Map<String, String> blogCategoriesValueListMap = getBlogCategoriesKeyValueMap();

        // TODO: Decision needs to be made whether hard coded default value of blogs overview page '/blogs'
        // can be retained or perhaps display the categories as texts rather than links or not display categories
        // at all. Check with Eleanor/Olivia/Duncan/Matt
        final String blogOverviewUrlPath = StringUtils.defaultIfEmpty(
                HstUtils.getURLBySiteMapItemRefId(requestContext, BLOG_OVERVIEW_PAGE_SITEMAP_REF_ID, false),
                BLOG_OVERVIEW_PAGE_DEFAULT_URL);

        return categories.stream().collect(
                Collectors.toMap(
                        blogCategoriesValueListMap::get,
                        category -> createBlogOverviewUrlPathWithCategoryFilter(category, blogOverviewUrlPath))
        );
    }

    private String createBlogOverviewUrlPathWithCategoryFilter(
            final String categoryKey,
            final String blogOverviewUrlPath) {
        return String.format("%s?category=%s", blogOverviewUrlPath, categoryKey);
    }

    /**
     * Creates a map from the {@value BLOG_CATEGORIES_VALUE_LIST_IDENTIFIER} BR value list.
     * The map has as the key the blog category key and as the value the blog category label.
     *
     * @return blogCategoryKeyValueMap
     */
    private Map<String, String> getBlogCategoriesKeyValueMap() {
        final ValueList categoriesValueList =
                SelectionUtil.getValueListByIdentifier(
                        BLOG_CATEGORIES_VALUE_LIST_IDENTIFIER,
                        RequestContextProvider.get());
        return SelectionUtil.valueListAsMap(categoriesValueList);
    }

}
