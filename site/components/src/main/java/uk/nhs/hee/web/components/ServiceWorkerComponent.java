package uk.nhs.hee.web.components;

import org.hippoecm.hst.core.component.HstRequest;
import org.hippoecm.hst.core.component.HstResponse;
import org.onehippo.cms7.essentials.components.CommonComponent;

public class ServiceWorkerComponent extends CommonComponent {

    private static final String CHANNEL_PUSH_NOTIFICATION_SUBDOMAIN_CHANNEL_PART_PARAM_SUFFIX =
            "-pn-subdomain-channel-part";

    @Override
    public void doBeforeRender(final HstRequest request, final HstResponse response) {
        super.doBeforeRender(request, response);

        final String channelId = request.getRequestContext().getResolvedMount().getMount()
                .getHstSite().getChannel().getId();
        final String channelPNSubDomainChannelPart = getComponentLocalParameter(
                channelId + CHANNEL_PUSH_NOTIFICATION_SUBDOMAIN_CHANNEL_PART_PARAM_SUFFIX);

        request.setModel("channelPNSubDomainChannelPart", channelPNSubDomainChannelPart);
    }
}
