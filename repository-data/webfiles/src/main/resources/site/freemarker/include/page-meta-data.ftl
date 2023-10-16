<#ftl output_format="HTML">
<#include "../include/imports.ftl">
<@hst.defineObjects />

<#if document??>
    <#if document.contentType = 'hee:MiniHub' && currentGuidance??>
        <#--  For Mini-hub, generates meta title and description based on child Standard content page document's Title and Summary  -->
        <#assign pageTitle="${currentGuidance.title!}">
        <#assign pageSummary="${currentGuidance.summary!}">

        <#--  Gets the individual Page URL for the Minin-hub child Standard content page document in case if any  -->
        <@hst.link var="pageURL" hippobean=currentGuidance canonical=true fullyQualified=true />
        <@hst.link var="pageNotFoundURL" siteMapItemRefId="pagenotfound" canonical=true fullyQualified=true />

        <#if pageURL == pageNotFoundURL>
            <#--  Constructs Mini-hub URL for the child Standard content page document in case if no individual page URL is available for it  -->
            <@hst.link var="miniHubURL" hippobean=document canonical=true fullyQualified=true />
            <#assign pageURL="${miniHubURL}/${currentGuidance.name}">
        </#if>
    <#else>
        <#assign pageTitle="${hstRequestContext.resolvedSiteMapItem.pageTitle?has_content?then(hstRequestContext.resolvedSiteMapItem.pageTitle, document.title!)}">
        <#assign pageSummary="${document.summary!}">
        <@hst.link var="pageURL" hippobean=document canonical=true fullyQualified=true />
    </#if>
</#if>

<#assign metaTitle>${(pageTitle?has_content)?then(pageTitle+' | '+hstRequestContext.resolvedMount.mount.channelInfo.organisationName, '')}</#assign>

<#if metaTitle?has_content>
    <@hst.headContribution category="pageMetaData">
        <meta name="title" content="${metaTitle}" />
    </@hst.headContribution>
</#if>

<#if pageSummary?has_content>
    <@hst.headContribution category="pageMetaData">
        <meta name="description" content="${pageSummary}" />
    </@hst.headContribution>
</#if>

<#if metaTitle?has_content>
    <@hst.headContribution category="pageMetaData">
        <meta property="og:title" content="${metaTitle}" />
    </@hst.headContribution>
</#if>

<#if pageSummary?has_content>
    <@hst.headContribution category="pageMetaData">
        <meta property="og:description" content="${pageSummary}" />
    </@hst.headContribution>
</#if>

<#if pageURL?? && pageURL?has_content>
    <@hst.headContribution category="pageMetaData">
        <meta property="og:url" content="${pageURL!}" />
    </@hst.headContribution>
</#if>

<@hst.headContribution category="pageMetaData">
    <meta property="og:type" content="website" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:image" content="<@hst.link path='/static/assets/images/logos/hee-logo.png' fullyQualified=true/>" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:site_name" content="${hstRequestContext.resolvedMount.mount.channelInfo.organisationName} | ${hstRequestContext.resolvedMount.mount.channelInfo.organisationDescriptor}" />
</@hst.headContribution>