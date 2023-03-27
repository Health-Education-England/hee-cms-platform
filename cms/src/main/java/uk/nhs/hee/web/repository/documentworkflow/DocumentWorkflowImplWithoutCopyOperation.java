package uk.nhs.hee.web.repository.documentworkflow;

import org.hippoecm.repository.api.WorkflowException;
import org.onehippo.repository.documentworkflow.DocumentWorkflowImpl;

import java.io.Serializable;
import java.rmi.RemoteException;
import java.util.HashMap;
import java.util.Map;

/**
 * An extension of OOTB default {@link DocumentWorkflowImpl} which essentially removes {@code copy} operation
 * in order not to allow content editors to copy documents of certain types (e.g. Author {@code hee:author}, etc.).
 */
public class DocumentWorkflowImplWithoutCopyOperation extends DocumentWorkflowImpl {
    private static final long serialVersionUID = -2096611300462592784L;


    /**
     * All implementations of a work-flow must provide a single, no-argument constructor.
     *
     * @throws RemoteException mandatory exception that must be thrown by all Remote objects
     */
    public DocumentWorkflowImplWithoutCopyOperation() throws RemoteException {
        // To handle 'java.rmi.RemoteException' matching
        // 'org.onehippo.repository.documentworkflow.DocumentWorkflowImpl.DocumentWorkflowImpl' super class constructor.
    }

    /**
     * {@inheritDoc}
     */
    @Override
    public Map<String, Serializable> hints(final String branchId) throws WorkflowException {
        final HashMap<String, Serializable> clonedHints = new HashMap<>(getHints(branchId));

        // Removes 'copy' operation from hints
        clonedHints.remove("copy");
        return clonedHints;
    }

    /**
     * Returns {@link Map<String, Serializable>} hints for the given {@code branchId}
     * from the super class ({@link DocumentWorkflowImpl}).
     *
     * @param branchId the document handle branch id for which hints needs to be returned from the superclass.
     * @return the {@link Map<String, Serializable>} hints for the given {@code branchId}
     * from the super class ({@link DocumentWorkflowImpl}).
     * @throws WorkflowException thrown when a workflow implementation disallows
     *                           the workflow step to be taken for some reason.
     */
    private Map<String, Serializable> getHints(final String branchId) throws WorkflowException {
        return super.hints(branchId);
    }
}
