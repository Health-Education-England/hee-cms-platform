package uk.nhs.hee.web.repository.gallery.impl;

import org.hippoecm.repository.api.Document;
import org.hippoecm.repository.api.WorkflowException;
import org.hippoecm.repository.gallery.HippoGalleryNodeType;
import org.hippoecm.repository.gallery.impl.GalleryWorkflowImpl;

import java.rmi.RemoteException;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;

public class HEEGalleryWorkflowImpl extends GalleryWorkflowImpl {

    private Session rootSession;

    public HEEGalleryWorkflowImpl(Session userSession, Session rootSession, Node subject) throws RemoteException {
        super(userSession, rootSession, subject);
        this.rootSession = rootSession;
    }

    @Override
    public Document createGalleryItem(String nodeName, String type, String hippoGalleryImageSetFileName) throws RemoteException, RepositoryException, WorkflowException {
        Document document = super.createGalleryItem(nodeName, type, hippoGalleryImageSetFileName);
        Node thisNode = document.getNode(rootSession);
        thisNode.setProperty(HippoGalleryNodeType.IMAGE_SET_DESCRIPTION, thisNode.getProperty(HippoGalleryNodeType.IMAGE_SET_FILE_NAME).getString());
	    rootSession.save();
        return document;
    }
}

