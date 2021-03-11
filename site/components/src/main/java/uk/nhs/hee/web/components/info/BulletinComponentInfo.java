package uk.nhs.hee.web.components.info;

import org.hippoecm.hst.core.parameters.FieldGroup;
import org.hippoecm.hst.core.parameters.FieldGroupList;
import org.hippoecm.hst.core.parameters.JcrPath;
import org.hippoecm.hst.core.parameters.Parameter;
import org.onehippo.cms7.essentials.components.info.EssentialsPageable;

@FieldGroupList({
        @FieldGroup(value = {"pageSize"}, titleKey = "pagination.group"),
        @FieldGroup(value = {"path", "documentTypes"}, titleKey = "list.group")

})
public interface BulletinComponentInfo extends EssentialsPageable {

    @Parameter(
            name = "documentTypes",
            defaultValue = "hee:bulletin"
    )
    String getDocumentTypes();

    @Parameter(name = "path")
    @JcrPath(
            isRelative = true,
            pickerSelectableNodeTypes = {"hippostd:folder"}
    )
    String getPath();

    @Parameter(name = "pageSize", required = true, defaultValue = "10")
    int getPageSize();
}