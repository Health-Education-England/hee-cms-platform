package uk.nhs.hee.web.eforms.hst.behaviors;

import com.onehippo.cms7.eforms.hst.behaviors.MailFormDataBehavior;
import com.onehippo.cms7.eforms.hst.model.Form;
import com.onehippo.cms7.eforms.hst.util.FormVariableParser;
import com.onehippo.cms7.eforms.hst.util.mail.MailSender;
import com.onehippo.cms7.eforms.hst.util.mail.MailTemplate;
import org.apache.commons.lang3.StringUtils;
import org.hippoecm.hst.component.support.forms.FormMap;
import org.hippoecm.hst.configuration.components.HstComponentConfiguration;
import org.hippoecm.hst.configuration.hosting.Mount;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.content.beans.standard.HippoItem;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.request.ComponentConfiguration;
import org.hippoecm.hst.platform.model.HstModel;
import org.hippoecm.hst.platform.model.HstModelRegistry;
import org.hippoecm.hst.util.HstRequestUtils;
import org.onehippo.cms7.services.HippoServiceRegistry;
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

    // CMS context path
    public static final String CMS_CONTEXT_PATH = "/cms";

    // Alias for CMS mounts
    public static final String CMS_MOUNT_ALIAS = "cms-mount";

    // Logger
    private static final Logger log = LoggerFactory.getLogger(BlogPostCommentMailFormDataBehavior.class);

    /**
     * An override of
     * {@link MailFormDataBehavior#createMailTemplate(
     *org.hippoecm.hst.core.component.HstRequest,
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

            final String blogPostDocumentCMSURL = getDocumentURL(request, blogPost.getPath());
            log.debug("CMS URL of the blog post (hee:blogPost) document '{}' = {}",
                    blogPost.getPath(), blogPostDocumentCMSURL);

            plainText = updateBlogPostPlaceholders(blogPost, blogPostDocumentCMSURL, plainText, false);
            html = updateBlogPostPlaceholders(blogPost, blogPostDocumentCMSURL, html, true);
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
        BlogPost blogPost = (BlogPost) request.getRequestContext().getContentBean();

        if (blogPost == null) {
            final String blogPostDocumentRelativePath = getBlogPostDocumentRelativePath(config);
            log.debug("Blog post (hee:blogPost) document relative path = {}", blogPostDocumentRelativePath);

            if (StringUtils.isEmpty(blogPostDocumentRelativePath)) {
                return null;
            }

            final HippoBean root = request.getRequestContext().getSiteContentBaseBean();
            blogPost = root.getBean(blogPostDocumentRelativePath);
        }

        return blogPost;
    }

    /**
     * <p>Returns CMS document URL of the given {@code documentPath}</p>.
     *
     * <p>It constructs the CMS document URL using {@code [CMS_URL]/content/path/[JCR_DOCUMENT_PATH]} pattern.</p>
     *
     * <p>In case if the current request (site) host isn't a CMS/Platform host
     * (which is the case for production channel specific domains), then it would construct the CMS/Platform base URL
     * based on the current request's HostGroupName (e.g. prd-brcloud) and {@code cms_mount} alias.</p>
     *
     * @param request      the {@link HstRequest} instance.
     * @param documentPath the canonical (JCR) document path.
     * @return the CMS document URL of the given {@code documentPath}.
     */
    private String getDocumentURL(final HstRequest request, final String documentPath) {
        String cmsBaseURL = StringUtils.EMPTY;
        try {
            cmsBaseURL = HstRequestUtils.getCmsBaseURL(request);
        } catch (final Exception e) {
            // Fails silently as it bound to happen especially on production
            // wherein channels will have channel specific domains (e.g. dental.hee.nhs.uk for Dental, etc.)
            // which is different from the CMS domain (e.g. cms-prod.hee.bloomreach.cloud).
        }

        final String hostGroupName = request.getRequestContext().getVirtualHost().getHostGroupName();
        if (StringUtils.isEmpty(cmsBaseURL)) {
            log.debug("Failed to get CMS base URL based on the current request [{}]. " +
                            "Going to manually construct CMS base URL by querying the Platform Mount " +
                            "corresponding to the current request HostGroup = {} and Alias (hst:alias) = {}",
                    request.getRequestURL(), hostGroupName, CMS_MOUNT_ALIAS);

            cmsBaseURL = getCMSBaseURL(hostGroupName);
        }

        log.debug("CMS base URL = {}", cmsBaseURL);

        if (StringUtils.isEmpty(cmsBaseURL)) {
            log.warn("Can't construct CMS base URL for the HostGroup = {} and Alias (hst:alias) = {}. " +
                            "Perhaps Alias '{}' hasn't been added to the corresponding Platform Mount.",
                    hostGroupName, CMS_MOUNT_ALIAS, CMS_MOUNT_ALIAS);
            return cmsBaseURL;
        }

        return cmsBaseURL + "/content/path" + documentPath;
    }

    /**
     * Returns CMS/Platform base URL for the given {@code hostGroupName} and the mount alias {@code cms-mount}.
     *
     * @param hostGroupName the (virtual) HostGroupName whose CMS/Platform base URL needs to be returned.
     * @return the CMS/Platform base URL for the given  {@code hostGroupName} and the mount alias {@code cms-mount}.
     */
    private String getCMSBaseURL(final String hostGroupName) {
        String cmsBaseURL = StringUtils.EMPTY;

        final HstModelRegistry hstModelRegistry = HippoServiceRegistry.getService(HstModelRegistry.class);
        for (final HstModel hstModel : hstModelRegistry.getHstModels()) {
            try {
                final String contextPath = hstModel.getVirtualHosts().getContextPath();
                if (CMS_CONTEXT_PATH.equals(contextPath)) {
                    final Mount platformMount = hstModel.getVirtualHosts()
                            .getMountByGroupAliasAndType(hostGroupName, CMS_MOUNT_ALIAS, Mount.LIVE_NAME);

                    if (platformMount != null) {
                        cmsBaseURL = platformMount.getScheme() +
                                "://" +
                                platformMount.getVirtualHost().getHostName() +
                                (platformMount.isPortInUrl() ? ":" + platformMount.getPort() : StringUtils.EMPTY) +
                                "/cms";

                        log.debug("CMS base URL for the HostGroup '{}' and Alias (hst:alias) '{}' = {}",
                                hostGroupName, CMS_MOUNT_ALIAS, cmsBaseURL);
                        break;
                    }
                }
            } catch (final Exception e) {
                log.error("Caught error '{}' while constructing CMS base URL " +
                                "based on the current request HostGroup = {} and Alias (hst:alias) = {}",
                        e.getMessage(), hostGroupName, CMS_MOUNT_ALIAS, e);
            }
        }

        return cmsBaseURL;
    }


    /**
     * Replaces {@code ##BLOG_POST_DOCUMENT##} placeholders on the given {@code htmlOrPlainText}
     * with blog post ({@code hee:blogPost}) document CMS link to which the comment has been submitted to.
     *
     * @param blogPost               the {@link BlogPost} instance of the {@code hee:blogPost} document
     *                               to which the comment has been submitted to.
     * @param blogPostDocumentCMSURL the document CMS URL of the {@code hee:blogPost} document
     *                               to which the comment has been submitted to.
     * @param htmlOrPlainText        the HTML or the plain text in which {@code ##BLOG_POST_DOCUMENT##} placeholders
     *                               needs to be updated with blog post ({@code hee:blogPost}) document CMS link
     *                               to which the comment has been submitted to.
     * @param isHTML                 the boolean indicating whether the given {@code htmlOrPlainText} is an HTML or plaintext.
     * @return the updated {@code htmlOrPlainText} in which instances of {@code ##BLOG_POST_DOCUMENT##} placeholders
     * has been replaced with blog post ({@code hee:blogPost}) document CMS link
     * to which the comment has been submitted to.
     */
    private String updateBlogPostPlaceholders(
            final BlogPost blogPost,
            final String blogPostDocumentCMSURL,
            final String htmlOrPlainText,
            final boolean isHTML) {
        final String blogpostDocumentLink;
        if (isHTML) {
            blogpostDocumentLink = getBlogpostDocumentLinkForHTML(blogPost, blogPostDocumentCMSURL);
        } else {
            blogpostDocumentLink = getBlogpostDocumentLinkForPlainText(blogPost, blogPostDocumentCMSURL);
        }

        return htmlOrPlainText.replace(BLOG_POST_DOCUMENT_EMAIL_TEXT_PLACEHOLDER, blogpostDocumentLink);
    }

    /**
     * Returns blog post document link for plaintext in {@code {blog_post_document_name} ({blog_post_document_cms_url})}
     * format if {@code blog_post_document_cms_url} is available. Otherwise, returns {@code {blog_post_document_name}}.
     *
     * @param blogPost               the {@link BlogPost} instance of the {@code hee:blogPost} document
     *                               to which the comment has been submitted to.
     * @param blogPostDocumentCMSURL the blog post document {@code hee:blogPost} CMS URL.
     * @return the blog post document link for plaintext
     * in {@code {blog_post_document_name} ({blog_post_document_cms_url})} format if {@code blog_post_document_cms_url}
     * is available. Otherwise, returns {@code {blog_post_document_name}}.
     */
    private String getBlogpostDocumentLinkForPlainText(final BlogPost blogPost, final String blogPostDocumentCMSURL) {
        if (StringUtils.isEmpty(blogPostDocumentCMSURL)) {
            return "\"" + blogPost.getDisplayName() + "\"";
        }

        return blogPost.getDisplayName() + " (" + blogPostDocumentCMSURL + ")";
    }

    /**
     * Returns blog post document link for HTML in
     * {@code <a href="{blog_post_document_cms_url}">{blog_post_document_name}</a>} format
     * if {@code blog_post_document_cms_url} is available. Otherwise, returns {@code {blog_post_document_name}}.
     *
     * @param blogPost               the {@link BlogPost} instance of the {@code hee:blogPost} document
     *                               to which the comment has been submitted to.
     * @param blogPostDocumentCMSURL the blog post document {@code hee:blogPost} CMS URL.
     * @return the blog post document link for HTML in
     * {@code <a href="{blog_post_document_cms_url}">{blog_post_document_name}</a>} format
     * if {@code blog_post_document_cms_url} is available. Otherwise, returns {@code {blog_post_document_name}}.
     */
    private String getBlogpostDocumentLinkForHTML(final BlogPost blogPost, final String blogPostDocumentCMSURL) {
        if (StringUtils.isEmpty(blogPostDocumentCMSURL)) {
            return "\"" + blogPost.getDisplayName() + "\"";
        }

        return "<a href=\"" + blogPostDocumentCMSURL + "\">" + blogPost.getDisplayName() + "</a>";
    }
}
