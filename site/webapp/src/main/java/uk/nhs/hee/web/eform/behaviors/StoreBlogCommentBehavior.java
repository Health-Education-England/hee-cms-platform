package uk.nhs.hee.web.eform.behaviors;

import com.google.common.base.Strings;
import com.onehippo.cms7.eforms.hst.api.OnValidationSuccessBehavior;
import com.onehippo.cms7.eforms.hst.beans.FormBean;
import com.onehippo.cms7.eforms.hst.model.Form;
import org.hippoecm.hst.component.support.forms.FormField;
import org.hippoecm.hst.component.support.forms.FormMap;
import org.hippoecm.hst.component.support.forms.FormUtils;
import org.hippoecm.hst.configuration.components.HstComponentConfiguration;
import org.hippoecm.hst.content.beans.standard.HippoBean;
import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.hippoecm.hst.core.request.ComponentConfiguration;
import org.hippoecm.repository.api.HippoWorkspace;
import org.hippoecm.repository.api.WorkflowManager;
import org.onehippo.repository.documentworkflow.DocumentWorkflow;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.BlogPost;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.lang.reflect.InvocationTargetException;
import java.util.Calendar;
import java.util.Map;

/**
 * Class that adds behaviour to perform actions post successful blog comment form validation.
 *
 * <p>This class essentially extracts the comment submitted by the site visitor and
 * adds it ({@code hee:blogComment}) to the corresponding blog post ({@code hee:blogPost}) document.</p>
 */
public class StoreBlogCommentBehavior implements OnValidationSuccessBehavior {
    private static final Logger LOGGER = LoggerFactory.getLogger(StoreBlogCommentBehavior.class);

    @Override
    public void onValidationSuccess(
            final HstRequest request,
            final HstResponse response,
            final ComponentConfiguration config,
            final FormBean bean,
            final Form form,
            final FormMap map) {
        try {
            final String documentPath = getBlogDocumentPath(request, config);
            if (!Strings.isNullOrEmpty(documentPath)) {
                final BlogPost blogPost = getBlogPost(request, documentPath);
                final Session session = FormUtils.getWritableSession();
                final WorkflowManager workflowManager = ((HippoWorkspace) session.getWorkspace()).getWorkflowManager();
                final DocumentWorkflow documentWorkflow =
                        (DocumentWorkflow) workflowManager.getWorkflow(
                                "default", session.getNode(blogPost.getNode().getPath()).getParent());

                final Node editingNode = documentWorkflow.obtainEditableInstance().getNode(session);
                addBlogCommentNode(editingNode, map);

                session.save();
                documentWorkflow.commitEditableInstance();
                if (Boolean.TRUE.equals(documentWorkflow.hints().get("publish"))) {
                    documentWorkflow.publish();
                }
            }
        } catch (final Exception e) {
            LOGGER.warn("Problem on handling blog comment posting: " + e.getMessage(), e);
        }
    }

    /**
     * Returns blog post document path for the current request.
     *
     * @param request the {@link HstRequest} instance.
     * @param config  the {@link ComponentConfiguration} instance.
     * @return the blog post document path for the current request.
     * @throws IllegalAccessException
     * @throws InvocationTargetException
     * @throws NoSuchMethodException
     */
    private String getBlogDocumentPath(final HstRequest request, final ComponentConfiguration config)
            throws IllegalAccessException, InvocationTargetException, NoSuchMethodException {
        // In the case of archived blog posts wherein hst:relativecontentpath is set
        // in the (non-workspace) sitemap
        String documentPath = request.getRequestContext().getResolvedSiteMapItem().getRelativeContentPath();

        if (documentPath == null) {
            // In the case of blog post pages created via channel i.e. for blog post pages
            // exists in the workspace
            final HstComponentConfiguration componentConfiguration =
                    (HstComponentConfiguration) config.getClass().getMethod("getComponentConfiguration").invoke(config);
            final HstComponentConfiguration blogConfiguration =
                    componentConfiguration.getParent().getParent().getChildByName("blog").getChildByName("blogpost");
            documentPath = blogConfiguration.getParameter("document");
        }
        return documentPath;
    }

    /**
     * Returns {@link BlogPost} instance for the given {@code documentPath}.
     *
     * @param request      the {@link HstRequest} instance.
     * @param documentPath the document path for the current request.
     * @return the {@link BlogPost} instance for the given {@code documentPath}.
     */
    private BlogPost getBlogPost(final HstRequest request, final String documentPath) {
        final HippoBean root = request.getRequestContext().getSiteContentBaseBean();
        return root.getBean(documentPath);
    }

    /**
     * Extracts blog comment fields from the form {@code map} and adds a {@code hee:comments} node
     * to the {@code editingNode}.
     *
     * @param editingNode the editing blog post node.
     * @param map         the blog comment form map
     * @throws RepositoryException thrown when an error occurs during adding blog comment node to the editing node instance.
     */
    private void addBlogCommentNode(final Node editingNode, final FormMap map) throws RepositoryException {
        final Node commentNode = editingNode.addNode("hee:comments", "hee:blogComment");
        final Map<String, FormField> formValues = map.getValue();
        commentNode.setProperty("hee:message", formValues.get("comment").getValue());
        commentNode.setProperty("hee:postedDate", Calendar.getInstance());
        final Node authorNode = commentNode.addNode("hee:author", "hee:blogCommentAuthor");
        authorNode.setProperty("hee:firstName", formValues.get("firstName").getValue());
        authorNode.setProperty("hee:lastName", formValues.get("lastName").getValue());
        authorNode.setProperty("hee:email", formValues.get("emailAddress").getValue());
    }

}
