package uk.nhs.hee.web.components;

import org.hippoecm.hst.container.RequestContextProvider;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.forge.selection.hst.contentbean.ValueList;
import org.onehippo.forge.selection.hst.util.SelectionUtil;
import uk.nhs.hee.web.beans.BlogPost;
import uk.nhs.hee.web.components.info.BlogPostComponentInfo;
import uk.nhs.hee.web.utils.ConfigReader;

import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@ParametersInfo(type = BlogPostComponentInfo.class)
public class BlogPostComponent extends EssentialsDocumentComponent {

    private static final String BLOG_CATEGORY_VALUE_LIST_IDENTIFIER = "blogCategories";
    private static final String BLOG_OVERVIEW_URL_PATH = "blog.overview";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        BlogPost blogPost = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (blogPost != null) {
            List<String> blogCategories = Arrays.asList(blogPost.getCategory());
            request.setAttribute("categoryToFilteredURLMap", mapCategoryToFilteredUrl(blogCategories));
        }
    }

    /**
     * Creates a Map that has as the key the name of the blog category and as the value the URL path to the Blog Overview page
     * filtered by category.
     * e.g given the categories = ["data_search"], the response will be [{"Data Search", "/blogs?category=data_search" }]
     *
     * @param categories list of categories
     * @return categoryToFilteredURL Map
     */
    private Map<String, String> mapCategoryToFilteredUrl(List<String> categories) {
        Map<String, String> blogCategoryValueListMap = getBlogCategoryKeyValueMap();
        String blogOverviewUrlPath = getBlogOverviewUrlPath();

        return categories.stream().collect(
                Collectors.toMap(
                        category -> blogCategoryValueListMap.get(category),
                        category -> createBlogOverviewUrlPathWithCategoryFilter(category, blogOverviewUrlPath))
        );
    }

    private String createBlogOverviewUrlPathWithCategoryFilter(String categoryKey, String blogOverviewUrlPath) {
        return String.format("%s?category=%s", blogOverviewUrlPath, categoryKey);
    }

    private String getBlogOverviewUrlPath() {
        return ConfigReader.getValue(BLOG_OVERVIEW_URL_PATH);
    }

    /**
     * Creates a map from the {@value BLOG_CATEGORY_VALUE_LIST_IDENTIFIER} BR value list.
     * The map has as the key the blog category key and as the value the blog category label.
     *
     * @return blogCategoryKeyValueMap
     */
    private Map<String, String> getBlogCategoryKeyValueMap() {
        final ValueList categoriesValueList =
                SelectionUtil.getValueListByIdentifier(BLOG_CATEGORY_VALUE_LIST_IDENTIFIER, RequestContextProvider.get());
        return SelectionUtil.valueListAsMap(categoriesValueList);
    }

}
