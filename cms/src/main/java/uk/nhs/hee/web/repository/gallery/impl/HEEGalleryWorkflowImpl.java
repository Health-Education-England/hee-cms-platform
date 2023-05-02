package uk.nhs.hee.web.repository.gallery.impl;

import org.hippoecm.repository.api.Document;
import org.hippoecm.repository.api.WorkflowException;
import org.hippoecm.repository.gallery.impl.GalleryWorkflowImpl;

import java.rmi.RemoteException;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

public class HEEGalleryWorkflowImpl extends GalleryWorkflowImpl {
    private static final String PLEASE_ENTER_A_CAPTION = "Please enter a caption";
    private static final String HIPPOGALLERY_DESCRIPTION = "hippogallery:description";

    private Session myRootSession;

    public HEEGalleryWorkflowImpl(Session userSession, Session rootSession, Node subject) throws RemoteException {
        super(userSession, rootSession, subject);
        myRootSession = rootSession;
    }

    @Override
    public Document createGalleryItem(String nodeName, String type, String hippoGalleryImageSetFileName) throws RemoteException, RepositoryException, WorkflowException {
        Document document = super.createGalleryItem(nodeName, type, hippoGalleryImageSetFileName);
        Node thisNode = document.getNode(myRootSession);
        thisNode.setProperty(HIPPOGALLERY_DESCRIPTION, PLEASE_ENTER_A_CAPTION);
        return document;
    }
}

