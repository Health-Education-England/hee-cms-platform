package uk.nhs.hee.web.eforms.hst.behaviors;

import com.onehippo.cms7.eforms.hst.behaviors.MailFormDataBehavior;
import com.onehippo.cms7.eforms.hst.model.Form;
import com.onehippo.cms7.eforms.hst.util.FormVariableParser;
import com.onehippo.cms7.eforms.hst.util.mail.MailSender;
import com.onehippo.cms7.eforms.hst.util.mail.MailTemplate;
import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.component.support.forms.FormMap;
import org.hippoecm.hst.configuration.components.HstComponentConfiguration;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoItem;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.request.ComponentConfiguration;
import org.hippoecm.hst.util.HstRequestUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.BlogPost;

import javax.mail.Address;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

/**
 * An extension of {@link MailFormDataBehavior} for BlogPost Comment form
 * to replace {@code ##BLOG_POST_DOCUMENT##} placeholder with blog post ({@code hee:blogPost}) document CMS link
 * to which the comment has been submitted to.
 */
public class BlogPostCommentMailFormDataBehavior extends MailFormDataBehavior {

    // Blog post document email text placeholder
    public static final String BLOG_POST_DOCUMENT_EMAIL_TEXT_PLACEHOLDER = "##BLOG_POST_DOCUMENT##";
    // Logger
    private static final Logger log = LoggerFactory.getLogger(BlogPostCommentMailFormDataBehavior.class);

    /**
     * An override of
     * {@link MailFormDataBehavior#createMailTemplate(
     *      org.hippoecm.hst.core.component.HstRequest,
     *      org.hippoecm.hst.core.request.ComponentConfiguration,
     *      com.onehippo.cms7.eforms.hst.model.Form,
     *      org.hippoecm.hst.component.support.forms.FormMap,
     *      java.util.List,
     *      java.util.List,
     *      java.util.List,
     *      com.onehippo.cms7.eforms.hst.util.mail.MailSender,
     *      org.hippoecm.hst.content.beans.standard.HippoItem)}
     * which replaces {@code ##BLOG_POST_DOCUMENT##} placeholders on both plaintext and html
     * with blog post ({@code hee:blogPost}) document CMS link to which the comment has been submitted to.
     */
    @Override
    protected MailTemplate createMailTemplate(
            final HstRequest request,
            final ComponentConfiguration config,
            final Form form,
            final FormMap map,
            final List<Address> recipients,
            final List<Address> ccRecipients,
            final List<Address> bccRecipients,
            final MailSender sender,
            final HippoItem bean) {
        final String subject = FormVariableParser.parse(getSubject(request, config, bean, ""), map);
        final String mailText = bean.getSingleProperty(PROP_NAME_NOTIFICATIONTEXT);
        final String template = bean.getSingleProperty(PROP_NAME_NOTIFICATIONTEMPLATE);

        String plainText = getPlainText(request, config, form, map, mailText, true);
        String html = createHTMLContent(request, config, form, map, mailText, template);

        final BlogPost blogPost = getBlogPost(request, config);

        if (blogPost != null) {
            log.debug("Blog post (hee:blogPost) document absolute path = {}", blogPost.getPath());

            plainText = updateBlogPostPlaceholders(request, blogPost, plainText, false);
            html = updateBlogPostPlaceholders(request, blogPost, html, true);
        }

        return new MailTemplate(sender, recipients, ccRecipients, bccRecipients, subject, html, plainText);
    }

    /**
     * Duplicated from
     * {@link MailFormDataBehavior#createHTMLContent(
     *      org.hippoecm.hst.core.component.HstRequest,
     *      org.hippoecm.hst.core.request.ComponentConfiguration,
     *      com.onehippo.cms7.eforms.hst.model.Form,
     *      org.hippoecm.hst.component.support.forms.FormMap,
     *      java.lang.String,
     *      java.lang.String)}
     * as it is a private method.
     */
    private String createHTMLContent(final HstRequest request,
                                     final ComponentConfiguration config,
                                     final Form form,
                                     final FormMap map,
                                     final String mailText,
                                     final String template) {
        if (StringUtils.isEmpty(template)) {
            return getHtml(request, config, form, map, mailText, true);
        } else {
            return getHtml(request, config, form, map, mailText, true, template);
        }
    }

    /**
     * <p>Returns blog post document {@code hee:blogPost} relative path based
     * on the given blog comment component {@code config} instance.</p>
     *
     * <p>It does this by navigating to {@code blogpost} component from the given {@code config} instance
     * and returns the value of {@code document} parameter.</p>
     *
     * @param config the blog comment {@link ComponentConfiguration} instance.
     * @return the blog post document {@code hee:blogPost} relative path.
     */
    private String getBlogPostDocumentRelativePath(final ComponentConfiguration config) {
        try {
            final HstComponentConfiguration commentComponentConfig = (HstComponentConfiguration) config.getClass()
                    .getMethod("getComponentConfiguration").invoke(config);
            return commentComponentConfig.getParent().getParent().getChildByName("blog").getChildByName("blogpost")
                    .getParameter("document");
        } catch (final IllegalAccessException | InvocationTargetException | NoSuchMethodException e) {
            log.error("Caught error {} while getting blog post (hee:blogPost) document relative path " +
                    "from comment form component config.", e.getMessage(), e);
        }

        return StringUtils.EMPTY;
    }

    /**
     * Returns {@link BlogPost} instance of the {@code hee:blogPost} document
     * to which the given blog comment component {@code config} instance is associated to.
     *
     * @param request the {@link HstRequest} instance.
     * @param config the blog comment {@link ComponentConfiguration} instance.
     * @return the {@link BlogPost} instance of the {@code hee:blogPost} document
     * to which the given blog comment component {@code config} instance is associated to.
     */
    private BlogPost getBlogPost(final HstRequest request, final ComponentConfiguration config) {
        final String blogPostDocumentRelativePath = getBlogPostDocumentRelativePath(config);
        log.debug("Blog post (hee:blogPost) document relative path = {}", blogPostDocumentRelativePath);

        if (StringUtils.isEmpty(blogPostDocumentRelativePath)) {
            return null;
        }

        final HippoBean root = request.getRequestContext().getSiteContentBaseBean();
        return root.getBean(blogPostDocumentRelativePath);
    }

    /**
     * <p>Returns CMS document URL of the given {@code documentPath}</p>.
     *
     * <p>It constructs the CMS document URL using {@code [CMS_URL]/content/path/[JCR_DOCUMENT_PATH]} pattern.</p>
     *
     * @param request the {@link HstRequest} instance.
     * @param documentPath the canonical (JCR) document path.
     * @return the CMS document URL of the given {@code documentPath}.
     */
    private String getDocumentURL(final HstRequest request, final String documentPath) {
        return HstRequestUtils.getCmsBaseURL(request) + "/content/path" + documentPath;
    }

    /**
     * Replaces {@code ##BLOG_POST_DOCUMENT##} placeholders on the given {@code htmlOrPlainText}
     * with blog post ({@code hee:blogPost}) document CMS link to which the comment has been submitted to.
     *
     * @param request the {@link HstRequest} instance.
     * @param blogPost the {@link BlogPost} instance of the {@code hee:blogPost} document
     *                 to which the comment has been submitted to.
     * @param htmlOrPlainText the HTML or the plain text in which {@code ##BLOG_POST_DOCUMENT##} placeholders
     *                        needs to be updated with blog post ({@code hee:blogPost}) document CMS link
     *                        to which the comment has been submitted to.
     * @param isHTML the boolean indicating whether the given {@code htmlOrPlainText} is an HTML or plaintext.
     * @return the updated {@code htmlOrPlainText} in which instances of {@code ##BLOG_POST_DOCUMENT##} placeholders
     * has been replaced with blog post ({@code hee:blogPost}) document CMS link
     * to which the comment has been submitted to.
     */
    private String updateBlogPostPlaceholders(
            final HstRequest request,
            final BlogPost blogPost,
            final String htmlOrPlainText,
            final boolean isHTML) {
        final String blogPostDocumentCMSURL = getDocumentURL(request, blogPost.getPath());

        final String blogpostDocumentLink;
        if (isHTML) {
            blogpostDocumentLink = getBlogpostDocumentLinkForHTML(blogPost, blogPostDocumentCMSURL);
        } else {
            blogpostDocumentLink = getBlogpostDocumentLinkForPlainText(blogPost, blogPostDocumentCMSURL);
        }

        return htmlOrPlainText.replace(BLOG_POST_DOCUMENT_EMAIL_TEXT_PLACEHOLDER, blogpostDocumentLink);
    }

    /**
     * Returns blog post document link for plaintext in {@code {blog_post_title} ({blog_post_document_cms_url})}
     * format.
     *
     * @param blogPost the {@link BlogPost} instance of the {@code hee:blogPost} document
     *                 to which the comment has been submitted to.
     * @param blogPostDocumentCMSURL the blog post document {@code hee:blogPost} CMS URL.
     * @return the blog post document link for plaintext in {@code {blog_post_title} ({blog_post_document_cms_url})}
     * format.
     */
    private String getBlogpostDocumentLinkForPlainText(final BlogPost blogPost, final String blogPostDocumentCMSURL) {
        return blogPost.getTitle() + " (" + blogPostDocumentCMSURL + ")";
    }

    /**
     * Returns blog post document link for HTML in {@code {blog_post_title} ({blog_post_document_cms_url})}
     * format.
     *
     * @param blogPost the {@link BlogPost} instance of the {@code hee:blogPost} document
     *                 to which the comment has been submitted to.
     * @param blogPostDocumentCMSURL the blog post document {@code hee:blogPost} CMS URL.
     * @return the blog post document link for HTML in {@code {blog_post_title} ({blog_post_document_cms_url})}
     * format.
     */
    private String getBlogpostDocumentLinkForHTML(final BlogPost blogPost, final String blogPostDocumentCMSURL) {
        return "<a href=\"" + blogPostDocumentCMSURL + "\">" + blogPost.getTitle() + "</a>";
    }
}
