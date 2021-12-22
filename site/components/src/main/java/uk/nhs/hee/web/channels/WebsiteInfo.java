package uk.nhs.hee.web.channels;

import org.hippoecm.hst.configuration.channel.ChannelInfo;
import org.hippoecm.hst.core.parameters.FieldGroup;
import org.hippoecm.hst.core.parameters.FieldGroupList;
import org.hippoecm.hst.core.parameters.Parameter;

@FieldGroupList({
        @FieldGroup(titleKey = "Logo", value = {"organisationName", "organisationDescriptor"}),
        @FieldGroup(titleKey = "Analytics", value = {"gtmContainerId"})
})
public interface WebsiteInfo extends ChannelInfo {
    @Parameter(name = "organisationName", displayName = "Organisation name", defaultValue = "Health Education England")
    String getOrganisationName();

    @Parameter(name = "organisationDescriptor", displayName = "Organisation descriptor")
    String getOrganisationDescriptor();

    @Parameter(name = "gtmContainerId", displayName = "Google tag manager container id")
    String getGTMContainerID();
}
