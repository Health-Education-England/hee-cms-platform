package uk.nhs.hee.web.beans;

import org.hippoecm.hst.content.beans.Node;
import org.onehippo.cms7.essentials.dashboard.annotations.HippoEssentialsGenerated;


/**
 * Extends from {@link Guidance} as {@code hee:report} DocumentType has essentially been duplicated
 * from {@code hee:guidance} DocumentType for now, but without {@code hee:addToAZ} field.
 *
 * This setup needs to be revisited and amended if required to accommodate
 * future updates to {@code hee:report} DocumentType.
 */
@HippoEssentialsGenerated(internalName = "hee:report", allowModifications = false)
@Node(jcrType = "hee:report")
public class Report extends Guidance {
}
