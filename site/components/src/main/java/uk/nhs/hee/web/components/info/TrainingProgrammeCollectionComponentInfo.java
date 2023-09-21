package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;

public interface TrainingProgrammeCollectionComponentInfo extends ListingPageComponentInfo {
    @Override
    @Parameter(name = "document", required = true, displayName = "Training collection document")
    @JcrPath(isRelative = true, pickerSelectableNodeTypes = {"hee:trainingProgrammeCollection"})
    String getDocument();
}
