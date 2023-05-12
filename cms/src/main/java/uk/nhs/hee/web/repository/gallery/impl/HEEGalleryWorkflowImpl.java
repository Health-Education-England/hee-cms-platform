package uk.nhs.hee.web.repository.gallery.impl;

import org.apache.commons.io.FilenameUtils;
import org.apache.commons.text.WordUtils;
import org.hippoecm.repository.api.Document;
import org.hippoecm.repository.api.WorkflowException;
import org.hippoecm.repository.gallery.HippoGalleryNodeType;
import org.hippoecm.repository.gallery.impl.GalleryWorkflowImpl;

import javax.jcr.Node;
import javax.jcr.RepositoryException;
import javax.jcr.Session;
import java.rmi.RemoteException;

public class HEEGalleryWorkflowImpl extends GalleryWorkflowImpl {
    private static final long serialVersionUID = 6818936916012842638L;
    private final Session rootSession;

    public HEEGalleryWorkflowImpl(final Session userSession, final Session rootSession, final Node subject)
            throws RemoteException {
        super(userSession, rootSession, subject);
        this.rootSession = rootSession;
    }

    @Override
    public Document createGalleryItem(final String nodeName, final String type, final String hippoGalleryImageSetFileName)
            throws RemoteException, RepositoryException, WorkflowException {
        final Document document = super.createGalleryItem(nodeName, type, hippoGalleryImageSetFileName);
        final Node thisNode = document.getNode(rootSession);
        thisNode.setProperty(
                HippoGalleryNodeType.IMAGE_SET_DESCRIPTION,
                tidyUpFilenameAsDescription(thisNode.getProperty(HippoGalleryNodeType.IMAGE_SET_FILE_NAME).getString())
        );
	    rootSession.save();
        return document;
    }

    /**
     * <p>Returns the tidied up {@code filename} as image description.</p>
     *
     * <p>It tidies up {@code filename} by removing the file extension and then replaces all characters other than
     * alphabets & numbers into spaces. Finally, capitalises the first character of the first word.</p>
     *
     * @param filename the name of the file which needs to tidied up to build image description.
     * @return the tidied up {@code filename} as image description.
     */
    private String tidyUpFilenameAsDescription(final String filename) {
        // Removes extension from the filename and replaces all characters other than alphabets & numbers into spaces.
        // Finally, capitalises the first character of the first word.
        return WordUtils.capitalize(
                FilenameUtils.removeExtension(filename).replaceAll("[^a-zA-Z0-9]+", " "),
                new char[]{}
        );
    }
}

