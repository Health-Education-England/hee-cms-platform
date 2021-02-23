package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.hippoecm.hst.content.beans.standard.HippoGalleryImageSet;

@Node(jcrType = "hee:imagesetWithCaption")
public class ImageSetWithCaption extends HippoGalleryImageSet {
    public String getCaption() {
        return this.getValueProvider().getString("hee:caption");
    }
}
