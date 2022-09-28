<#include "../include/imports.ftl">
<@hst.defineObjects />

<#if document?? && document.contentType = 'hee:MiniHub'>
    <#assign pageTitle="${currentGuidance.title!}">
    <#assign pageSummary="${currentGuidance.summary!}">

    <@hst.link var="pageURL" hippobean=currentGuidance canonical=true fullyQualified=true />
    <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound" canonical=true fullyQualified=true />

    <#if pageURL == pageNotFoundURL>
        <@hst.link var="miniHubURL" hippobean=document canonical=true fullyQualified=true />
        <#assign pageURL="${miniHubURL}/${currentGuidance.name}">
    </#if>
<#else>
    <#assign pageTitle="${hstRequestContext.resolvedSiteMapItem.pageTitle?has_content?then(hstRequestContext.resolvedSiteMapItem.pageTitle, document.title!)}">
    <#assign pageSummary="${document.summary!}">
    <@hst.link var="pageURL" hippobean=document canonical=true fullyQualified=true />
</#if>

<#assign metaTitle>${pageTitle} | ${hstRequestContext.resolvedMount.mount.channelInfo.organisationName}</#assign>
<#assign metaDescription="${pageSummary!?truncate(160)}">

<@hst.headContribution category="pageMetaData">
    <meta name="title" content="${metaTitle}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta name="description" content="${metaDescription}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:type" content="website" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:title" content="${metaTitle}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:description" content="${metaDescription}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:image" content="<@hst.link path='/static/assets/images/logos/hee-logo.png' fullyQualified=true/>" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:url" content="${pageURL}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:site_name" content="${hstRequestContext.resolvedMount.mount.channelInfo.organisationName} | ${hstRequestContext.resolvedMount.mount.channelInfo.organisationDescriptor}" />
</@hst.headContribution>