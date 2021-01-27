package uk.nhs.hee.web.channels;

import org.hippoecm.hst.configuration.channel.ChannelInfo;
import org.hippoecm.hst.core.parameters.FieldGroup;
import org.hippoecm.hst.core.parameters.FieldGroupList;
import org.hippoecm.hst.core.parameters.Parameter;

@FieldGroupList({
        @FieldGroup(
                titleKey = "fields.channel",
                value = {"organizationName"}
        )
})
public interface WebsiteInfo extends ChannelInfo {
    @Parameter(name = "organizationName", defaultValue = "Default Organization Name")
    String getOrganizationName();
}
