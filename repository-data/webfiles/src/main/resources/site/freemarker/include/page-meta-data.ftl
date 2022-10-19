<#include "../include/imports.ftl">
<@hst.defineObjects />

<#if document??>
    <#if document.contentType = 'hee:MiniHub'>
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
<#--  Can't get hold of 'pagenotfound' sitemap
      'hst:refId' [${hstRequestContext.resolvedSiteMapItem.hstSiteMapItem.refId}] property here
       and so using 'hst:pages/pagenotfound' component config id to check that the current page
       being rendered is 'pagenotfound'  -->
<#elseif hstRequestContext.resolvedSiteMapItem.hstComponentConfiguration.id == 'hst:pages/pagenotfound'>
    <#--  Note: Resource bundle 'essentials.pagenotfound' has already been loaded on 'pagenotfound-main.ftl' template  -->
    <@fmt.message key="pagenotfound.title" var="pageNotFoundTitle"/>
    <#assign pageTitle="${hstRequestContext.resolvedSiteMapItem.pageTitle?has_content?then(hstRequestContext.resolvedSiteMapItem.pageTitle, pageNotFoundTitle!)}">
    <@fmt.message key="pagenotfound.text" var="pageNotFoundText"/>
    <#assign pageSummary="${pageNotFoundText!}">
    <@hst.link var="pageURL" siteMapItemRefId="pagenotfound" canonical=true fullyQualified=true />
</#if>

<#assign metaTitle>${pageTitle} | ${hstRequestContext.resolvedMount.mount.channelInfo.organisationName}</#assign>
<#assign metaDescription="${pageSummary}">

<@hst.headContribution category="pageMetaData">
    <meta name="title" content="${metaTitle}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta name="description" content="${metaDescription}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:title" content="${metaTitle}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:description" content="${metaDescription}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:url" content="${pageURL}" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:type" content="website" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:image" content="<@hst.link path='/static/assets/images/logos/hee-logo.png' fullyQualified=true/>" />
</@hst.headContribution>

<@hst.headContribution category="pageMetaData">
    <meta property="og:site_name" content="${hstRequestContext.resolvedMount.mount.channelInfo.organisationName} | ${hstRequestContext.resolvedMount.mount.channelInfo.organisationDescriptor}" />
</@hst.headContribution>