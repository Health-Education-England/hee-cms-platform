<#ftl output_format="JavaScript">
<#if channelPNSubDomainChannelPart?has_content>
  <#compress>
    ${'importScripts("https://${channelPNSubDomainChannelPart}-push.pushengage.com/service-worker.js?ver=2.3.0");'}
  </#compress>
</#if>