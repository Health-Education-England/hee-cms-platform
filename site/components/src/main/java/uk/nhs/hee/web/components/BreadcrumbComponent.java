package uk.nhs.hee.web.components;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.configuration.sitemap.HstSiteMap;
import org.hippoecm.hst.configuration.sitemap.HstSiteMapItem;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.ResolvedSiteMapItem;
import org.onehippo.cms7.essentials.components.CommonComponent;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.components.beans.BreadcrumbLink;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Component that adds Breadcrumb Links model to the request.
 */
public class BreadcrumbComponent extends CommonComponent {
    // Logger
    private static final Logger LOGGER = LoggerFactory.getLogger(BreadcrumbComponent.class);

    /**
     * {@inheritDoc}
     */
    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final ResolvedSiteMapItem resolvedSiteMapItem =
                request.getRequestContext().getResolvedSiteMapItem();

        if (resolvedSiteMapItem == null) {
            return;
        }

        final HstSiteMapItem siteMapItem = resolvedSiteMapItem.getHstSiteMapItem();

        // Do not build Breadcrumb Links for Home (@hst:refId=root).
        if (isHome(siteMapItem)) {
            LOGGER.debug("Breadcrumb Links will not be built as the current page is Home");
            return;
        }

        final List<BreadcrumbLink> breadcrumbLinks = buildBreadCrumbLinks(request, siteMapItem);

        LOGGER.debug("Breadcrumb Links = {}", breadcrumbLinks);
        request.setModel("breadcrumbLinks", breadcrumbLinks);
    }

    /**
     * Builds Breadcrumb List for the given {@code hstSiteMapItem}.
     *
     * @param request        the {@link HstRequest} instance.
     * @param hstSiteMapItem the {@link HstSiteMapItem} instance for which
     *                       the {@link List<BreadcrumbLink>} needs to be built
     *                       up to the root note.
     * @return the {@link List<BreadcrumbLink>} built for the given {@code hstSiteMapItem}.
     */
    private List<BreadcrumbLink> buildBreadCrumbLinks(
            final HstRequest request,
            final HstSiteMapItem hstSiteMapItem) {
        final List<BreadcrumbLink> breadcrumbLinks = new ArrayList<>();

        // Reassigning hstSiteMapItem here temporarily
        // in order to avoid changing original reference
        HstSiteMapItem siteMapItem = hstSiteMapItem;
        while (siteMapItem.getParentItem() != null) {
            siteMapItem = siteMapItem.getParentItem();
            if(!Boolean.parseBoolean(siteMapItem.getParameter("excludedForBreadcrumb"))) {
                addBreadCrumbLink(request, siteMapItem, breadcrumbLinks);
            }
        }

        addHomeBreadcrumbLink(request, breadcrumbLinks);
        Collections.reverse(breadcrumbLinks);

        return breadcrumbLinks;
    }

    /**
     * Adds Breadcrumb Link for {@code Home} to the given Breadcrumb List {@code breadcrumbLinks}.
     *
     * @param request         the {@link HstRequest} instance.
     * @param breadcrumbLinks the {@link List<BreadcrumbLink>} to which
     *                        the {@link BreadcrumbLink} for {@code Home} needs to be added.
     */
    private void addHomeBreadcrumbLink(
            final HstRequest request,
            final List<BreadcrumbLink> breadcrumbLinks) {
        final Mount mount = request.getRequestContext().getResolvedSiteMapItem()
                .getResolvedMount().getMount();
        if (mount.getHstSite() == null) {
            return;
        }

        final HstSiteMap siteMap = mount.getHstSite().getSiteMap();
        if (siteMap == null) {
            return;
        }

        final HstSiteMapItem homeHstSiteMapItem = siteMap.getSiteMapItemByRefId("root");

        addBreadCrumbLink(request, homeHstSiteMapItem, breadcrumbLinks);
    }

    /**
     * Builds Breadcrumb Link for the given {@code hstSiteMapItem}
     * and adds it to the given Breadcrumb Link List {@code breadcrumbLinks}.
     *
     * @param request         the {@link HstRequest} instance.
     * @param hstSiteMapItem  the {@link HstSiteMapItem} instance for which
     *                        the {@link BreadcrumbLink} needs to be built.
     * @param breadcrumbLinks the {@link List<BreadcrumbLink>} to which
     *                        the {@link BreadcrumbLink} built for
     *                        the given {@link HstSiteMapItem} needs to be added
     */
    private void addBreadCrumbLink(
            final HstRequest request,
            final HstSiteMapItem hstSiteMapItem,
            final List<BreadcrumbLink> breadcrumbLinks) {
        final HstLink hstLink = request.getRequestContext().getHstLinkCreator().create(
                hstSiteMapItem,
                request.getRequestContext().getResolvedSiteMapItem().getResolvedMount().getMount());

        if (hstLink == null) {
            // Ignores the ones for which link can't be constructed
            LOGGER.debug("URL/Link for the page with SiteMapItem={} cannot be constructed " +
                    "and will be skipped from Breadcrumb for now. Please verify", hstSiteMapItem);
            return;
        }

        breadcrumbLinks.add(new BreadcrumbLink(
                hstSiteMapItem.getPageTitle(),
                hstLink.toUrlForm(request.getRequestContext(), false)));
    }

    /**
     * Returns {@code true} if the given {@code hstSiteMapItem} belongs to {@code Home}
     * i.e. {@code @hst:refId=root}. Otherwise returns {@code false}.
     *
     * @param hstSiteMapItem the {@link HstSiteMapItem} instance which needs to be verified
     *                       if it belongs to {@code Home}.
     * @return {@code true} if the given {@code hstSiteMapItem} belongs to {@code Home}.
     * Otherwise returns {@code false}.
     */
    private boolean isHome(final HstSiteMapItem hstSiteMapItem) {
        return "root".equals(hstSiteMapItem.getRefId());
    }
}
