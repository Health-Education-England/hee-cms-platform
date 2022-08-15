package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;

public interface ReportComponentInfo extends GuidanceComponentInfo {
    @Override
    @Parameter(name = "document", required = true, displayName = "Report Document")
    @JcrPath(isRelative = true, pickerSelectableNodeTypes = {"hee:report"})
    String getDocument();
}
