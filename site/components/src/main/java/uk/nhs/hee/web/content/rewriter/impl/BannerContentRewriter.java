package uk.nhs.hee.web.content.rewriter.impl;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.content.rewriter.impl.SimpleContentRewriter;
import org.hippoecm.hst.core.request.HstRequestContext;

import javax.jcr.Node;

/**
 * A Content Rewriter for copy (RichText) field of Banner ({@code hee:banner}) document
 * extended from OOTB {@link SimpleContentRewriter} in order to rewrite the following:
 * <ul>
 *     <li>Add {@code class="nhsuk-link"} to all anchor tags</li>
 *     <li>Remove the paragraph tag around the copy (in case if any)</li>
 * </ul>
 */
public class BannerContentRewriter extends SimpleContentRewriter {

    public static final String ANCHOR_TAG_START = "<a ";
    public static final String NHSUK_LINK_CLASS = "class=\"nhsuk-link\"";
    public static final String SERVICE_BANNER_COPY_PATTERN = "<p>(.*?)</p>";

    @Override
    public String rewrite(
            final String html,
            final Node hippoHtmlNode,
            final HstRequestContext requestContext,
            final Mount targetMount) {
        String rewrittenHtml = super.rewrite(html, hippoHtmlNode, requestContext, targetMount);

        // Adds 'class="nhsuk-link"' to all anchor tags
        rewrittenHtml = rewrittenHtml.replace(ANCHOR_TAG_START, ANCHOR_TAG_START + NHSUK_LINK_CLASS + " ");

        // Removes the paragraph tag around the copy (in case if any)
        rewrittenHtml = rewrittenHtml.replaceAll(SERVICE_BANNER_COPY_PATTERN, "$1");

        return rewrittenHtml;
    }

}
