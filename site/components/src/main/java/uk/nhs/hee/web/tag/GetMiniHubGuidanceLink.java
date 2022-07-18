package uk.nhs.hee.web.tag;

import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.core.linking.HstLink;
import org.hippoecm.hst.core.request.HstRequestContext;
import org.hippoecm.hst.tag.HstLinkTag;
import org.hippoecm.hst.util.HstRequestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.utils.HstUtils;
import uk.nhs.hee.web.utils.MiniHubGuidanceLinkUtils;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.jsp.JspException;

import static org.hippoecm.hst.utils.TagUtils.writeOrSetVar;


/**
 * A custom HST link tag ({@code <hstCustom:getMiniHubGuidanceLink/>}) class [extended from the OOTB {@code <hst:link/>}
 * tag class ({@link HstLinkTag})] which essentially generates URL(s) for Mini-Hub Guidance document(s).
 * Note that the tag supports {@code hippobean} attribute only and so suggest to use OOTB core <hst:link/> tag
 * to generate links based on other attributes.
 *
 * Also, note that the class has been extended from OOTB {@code <hst:link/>} tag class ({@link HstLinkTag})
 * in order to reuse its attributes as well as to support other OOTB link attributes in the future if required.
 */
public class GetMiniHubGuidanceLink extends HstLinkTag {
    // Write details re. why the class was extended from HstLinkTag and supported attributes.
    private static final long serialVersionUID = 4235666776137782639L;
    private static final Logger log = LoggerFactory.getLogger(GetMiniHubGuidanceLink.class);

    /* (non-Javadoc)
     * @see javax.servlet.jsp.tagext.TagSupport#doEndTag()
     */
    @Override
    public int doEndTag() throws JspException {
        if (skipTag) {
            return EVAL_PAGE;
        }

        final HttpServletRequest servletRequest = (HttpServletRequest) pageContext.getRequest();
        final HstRequestContext reqContext = HstRequestUtils.getHstRequestContext(servletRequest);
        final Mount requestedMount = reqContext.getResolvedMount().getMount();
        final String pageNotFoundURL = HstUtils.getPageNotFoundURL(reqContext, requestedMount, fullyQualified);

        // Get [Guidance] content handle node
        final Node contentHandleNode = getContentHandleNode(reqContext);
        if (contentHandleNode == null) {
            writeOrSetVar(pageNotFoundURL, var, pageContext, scope);
            return EVAL_PAGE;
        }

        // Get mini-hub guidance link for 'identifiableContentBean' node instance (if any).
        final HstLink miniHubGuidanceLink =
                MiniHubGuidanceLinkUtils.getLink(contentHandleNode, canonical, reqContext, requestedMount);
        if (miniHubGuidanceLink == null) {
            writeOrSetVar(pageNotFoundURL, var, pageContext, scope);
            return EVAL_PAGE;
        }

        // Escapes XML entities in the URL in case if instructed
        String urlString = miniHubGuidanceLink.toUrlForm(reqContext, fullyQualified);
        if (Boolean.TRUE.equals(escapeXml)) {
            urlString = HstRequestUtils.escapeXml(urlString);
        }

        // Write/set mini-hub guidance link in the pageContext.
        writeOrSetVar(urlString, var, pageContext, scope);
        return EVAL_PAGE;
    }

    /**
     * Returns {@code hippoBean} handle node i.e. the identifiable content handle node.
     *
     * @param reqContext the {@link HstRequestContext} instance.
     * @return {@code hippoBean} handle node i.e. the identifiable content handle node.
     */
    private Node getContentHandleNode(final HstRequestContext reqContext) {
        if (identifiableContentBean == null) {
            return null;
        }

        try {
            // Get 'identifiableContentBean' node instance.
            final Node contentNode = reqContext.getSession().getNodeByIdentifier(identifiableContentBean.getIdentifier());
            if (contentNode == null) {
                return null;
            }

            // return 'identifiableContentBean' handle node instance.
            return contentNode.getParent();
        } catch (final RepositoryException e) {
            log.error("Caught error '{}' while getting node for the content with identifier '{}'",
                    e.getMessage(), identifiableContentBean.getIdentifier());
        }

        return null;
    }

}
