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
import org.hippoecm.repository.api.WorkflowException;
import org.hippoecm.repository.api.WorkflowManager;
import org.onehippo.repository.documentworkflow.DocumentWorkflow;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import uk.nhs.hee.web.beans.BlogPost;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.lang.reflect.InvocationTargetException;
import java.rmi.RemoteException;
import java.util.Calendar;
import java.util.Map;

public class StoreBlogCommentBehavior implements OnValidationSuccessBehavior {
    private static final Logger LOGGER = LoggerFactory.getLogger(StoreBlogCommentBehavior.class);

    @Override
    public void onValidationSuccess(HstRequest request, HstResponse response, ComponentConfiguration config, FormBean bean, Form form, FormMap map) {
        try {
            HstComponentConfiguration componentConfiguration = (HstComponentConfiguration) config.getClass().getMethod("getComponentConfiguration").invoke(config);
            HstComponentConfiguration blogConfiguration = componentConfiguration.getParent().getParent().getChildByName("blog").getChildByName("blogpost");
            String documentPath = blogConfiguration.getParameter("document");
            if (!Strings.isNullOrEmpty(documentPath)) {
                final HippoBean root = request.getRequestContext().getSiteContentBaseBean();
                Session session = FormUtils.getWritableSession();
                WorkflowManager workflowManager = ((HippoWorkspace) session.getWorkspace()).getWorkflowManager();
                BlogPost blogPost = root.getBean(documentPath);
                DocumentWorkflow documentWorkflow = (DocumentWorkflow) workflowManager.getWorkflow("default", session.getNode(blogPost.getNode().getPath()).getParent());

                Node editingNode = documentWorkflow.obtainEditableInstance().getNode(session);
                Node commentNode = editingNode.addNode("hee:comments", "hee:blogComment");
                Map<String, FormField> formValues = map.getValue();
                commentNode.setProperty("hee:message", formValues.get("comment").getValue());
                commentNode.setProperty("hee:postedDate", Calendar.getInstance());
                Node authorNode = commentNode.addNode("hee:author", "hee:blogCommentAuthor");
                authorNode.setProperty("hee:firstName", formValues.get("firstName").getValue());
                authorNode.setProperty("hee:lastName", formValues.get("lastName").getValue());
                authorNode.setProperty("hee:email", formValues.get("emailAddress").getValue());

                session.save();
                documentWorkflow.commitEditableInstance();
                if((Boolean)documentWorkflow.hints().get("publish")) {
                    documentWorkflow.publish();
                }
            }
        } catch (NoSuchMethodException | IllegalAccessException | InvocationTargetException | RepositoryException | WorkflowException | RemoteException e) {
            LOGGER.warn("Problem on handling blog comment posting: " + e.getMessage(), e);
        }
    }
}
