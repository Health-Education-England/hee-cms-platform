package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.FieldGroup;
import org.hippoecm.hst.core.parameters.FieldGroupList;
import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsListComponentInfo;

public interface BulletinComponentInfo extends EssentialsListComponentInfo {
    @Parameter(
            name = "documentTypes",
            defaultValue = "hee:bulletin"
    )
    String getDocumentTypes();
}