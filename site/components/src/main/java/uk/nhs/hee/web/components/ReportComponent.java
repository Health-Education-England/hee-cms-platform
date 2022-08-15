package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.parameters.ParametersInfo;
import uk.nhs.hee.web.components.info.ReportComponentInfo;

/**
 * Extends from {@link GuidanceComponent} as {@code hee:report} DocumentType has essentially been duplicated
 * from {@code hee:guidance} DocumentType for now, but without {@code hee:addToAZ} field.
 *
 * This setup needs to be revisited and amended if required to accommodate
 * future updates to {@code hee:report} DocumentType.
 */
@ParametersInfo(type = ReportComponentInfo.class)
public class ReportComponent extends GuidanceComponent {

}
