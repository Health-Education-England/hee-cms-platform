package uk.nhs.hee.web.components;

import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.parameters.ParametersInfo;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.onehippo.cms7.essentials.components.EssentialsDocumentComponent;
import uk.nhs.hee.web.beans.News;
import uk.nhs.hee.web.components.info.NewsComponentInfo;
import uk.nhs.hee.web.services.FeaturedContentBlockService;
import uk.nhs.hee.web.services.TableComponentService;
import uk.nhs.hee.web.utils.ContentBlocksUtils;
import uk.nhs.hee.web.utils.HstUtils;

import java.util.List;
import java.util.Map;

@ParametersInfo(type = NewsComponentInfo.class)
public class NewsComponent extends EssentialsDocumentComponent {

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final News news = request.getModel(REQUEST_ATTR_DOCUMENT);
        if (news != null) {
            addNewsListingPageURLToModel(request);

            // the page content blocks needs valueLists to be set on the model
            List<HippoBean> pageContentBlocks = news.getContentBlocks();
            pageContentBlocks.addAll(news.getRightHandBlocks());

            Map<String, Map<String, String>> modelToValueListMap =
                    ContentBlocksUtils.getValueListMaps(pageContentBlocks);
            modelToValueListMap.forEach(request::setModel);

            request.setAttribute("tableComponentService", new TableComponentService());
            request.setModel("featuredContentBlockService", new FeaturedContentBlockService());
        }
    }

    /**
     * Adds News Listing Page URL to model.
     *
     * @param request the {@link HstRequest} instance.
     */
    private void addNewsListingPageURLToModel(final HstRequest request) {
        final HstRequestContext hstRequestContext = request.getRequestContext();
        final HippoBean newsListingPageBean =
                HstUtils.getListingPageBeanByType(hstRequestContext, ListingPageType.NEWS_LISTING.getType());

        if (newsListingPageBean == null) {
            return;
        }

        request.setModel(
                Model.NEWS_LISTING_PAGE_URL.getKey(),
                HstUtils.getURLByBean(hstRequestContext, newsListingPageBean, false));
    }
}
