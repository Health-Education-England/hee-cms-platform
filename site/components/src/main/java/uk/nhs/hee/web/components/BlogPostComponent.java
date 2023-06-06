package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.site.HstServices;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import org.onehippo.taxonomy.api.Taxonomy;
import org.onehippo.taxonomy.api.TaxonomyManager;
import uk.nhs.hee.web.beans.BlogComment;
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
import java.util.Locale;
import java.util.Map;
import java.util.stream.Collectors;

@ParametersInfo(type = BlogPostComponentInfo.class)
public class BlogPostComponent extends EssentialsDocumentComponent {

    private static final int DEFAULT_NUMBER_OF_VISIBLE_COMMENTS = 3;

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final BlogPost blogPost = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (blogPost != null) {
            final Locale locale = request.getLocale();

            addValueListsForContentBlocks(request, blogPost);
            addBlogListingPageURLToModel(request);

            //* This uses the normal taxonomy picker and is the first taxonomy field on the document ...
            addGlobalTaxonomyMapIntoModel(request, locale, blogPost);

            //* The old way for categories was to use a ValueList .. this one ..
            addCategoriesValueListMapToModel(request, blogPost);

            //* the new way to add categories is to use keys added from a taxonomy ... this one ...
            //* (which is the second taxonomy on the page)
            addCategoryClassificationMapIntoModel(request, locale, blogPost);

            //* and this also uses a separate taxonomy (the third on the page)
            addHubTargetMapIntoModel(request, locale, blogPost);

            // NWPS-1125: Commenting the following line in order to stop adding blog comments to the model
            // as it isn't required to be displayed on 'site/freemarker/hee/catalog/blogpost-main.ftl' template.
            // addBlogCommentsToModel(request, blogPost);

            request.setAttribute("tableComponentService", new TableComponentService());
        }
    }

    private void addGlobalTaxonomyMapIntoModel(HstRequest request, Locale locale, BlogPost blogPost) {
        final String[] selectedTerms = blogPost.getKeys();

        Map<String, String> keysAndCats = addTaxonomyKeysAndValues(locale, "global-topic-taxonomy", selectedTerms);
        if (keysAndCats != null) {
            request.setModel(Model.GLOBAL_TOPIC_KEYS_MAP.getKey(), keysAndCats);
        }
    }

    /**
     * This is for the classification taxonomy that is replacing there valuelist
     * @param request
     * @param locale
     * @param blogPost
     */
    private void addCategoryClassificationMapIntoModel(HstRequest request, Locale locale, BlogPost blogPost) {
        final String[] selectedTerms = blogPost.getCategoryClassification();

        Map<String, String> keysAndCats = addTaxonomyKeysAndValues(locale, "blog-category-classification", selectedTerms);
        if (keysAndCats != null) {
            request.setModel(Model.CATEGORIES_AND_KEYS_MAP.getKey(), keysAndCats);
        }
    }

    /**
     * This is for the hubTarget field - this is a nonesense field just used for the PoC to show how a third taxonomy can be added
     * @param request
     * @param blogPost
     */
    private void addHubTargetMapIntoModel(HstRequest request, Locale locale, BlogPost blogPost) {
        final String[] selectedTerms = blogPost.getHubTarget();

        Map<String, String> keysAndCats = addTaxonomyKeysAndValues(locale, "blog-hub-target", selectedTerms);
        if (keysAndCats != null) {
            request.setModel(Model.HUBTARGET_AND_KEYS_MAP.getKey(), keysAndCats);
        }
    }

    /**
     * Given a taxonomy, in a specific locale, and a set of keys, go off and find the values for those keys
     * and send back a Map that holds those key-value pairs
     * @param locale
     * @param taxonomyName
     * @param selectedKeys
     * @return
     */
    private Map<String, String> addTaxonomyKeysAndValues(Locale locale, String taxonomyName, String[] selectedKeys) {
        Map<String, String> keysAndCats = null;

        final TaxonomyManager taxonomyManager = HstServices.getComponentManager()
                                                            .getComponent(TaxonomyManager.class.getSimpleName(),
                                                                    "org.onehippo.taxonomy.contentbean");
        Taxonomy taxonomy = taxonomyManager.getTaxonomies().getTaxonomy(taxonomyName);

        if (selectedKeys != null ) {
            keysAndCats = Arrays.asList(selectedKeys)
                                                    .stream()
                                                    .collect(Collectors.toMap(key -> key,
                                                            key -> taxonomy.getCategoryByKey(key).getInfo(locale).getName()));
        }

        return keysAndCats;
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

    private void addBlogCommentsToModel(final HstRequest request, final BlogPost blogPost) {
        final List<BlogComment> comments = getModeratedComments(blogPost.getComments());
        request.setModel("totalComments", comments.size());

        if (comments.isEmpty()) {
            return;
        }

        Collections.reverse(comments);
        final boolean showAllComments = Boolean.parseBoolean(getPublicRequestParameter(request, "showAllComments"));
        if (!showAllComments) {
            request.setModel("visibleComments", comments.subList(0, Math.min(DEFAULT_NUMBER_OF_VISIBLE_COMMENTS, comments.size())));
        } else {
            request.setModel("visibleComments", comments);
        }
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
