<!doctype html>
<#include "../../include/imports.ftl">
<@hst.defineObjects />
<#assign organizationName = "${hstRequestContext.resolvedMount.mount.channelInfo.organizationName}">
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>${hstRequestContext.resolvedSiteMapItem.pageTitle?has_content?then(hstRequestContext.resolvedSiteMapItem.pageTitle, hstRequestContext.contentBean.title?has_content?then(hstRequestContext.contentBean.title, document.title?has_content?then(document.title, '')))} | ${organizationName}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Styles -->
    <link rel="stylesheet" href="<@hst.webfile path='/css/nhsuk-4.1.0.min.css'/>" type="text/css"/>
    <#if hstRequest.requestContext.channelManagerPreviewRequest>
      <link rel="stylesheet" href="<@hst.webfile  path="/css/cms-request.css"/>" type="text/css"/>
    </#if>

    <!-- Favicons -->
    <link rel="shortcut icon" href="<@hst.link path='/static/assets/favicons/favicon.ico'/>" type="image/x-icon">
    <link rel="apple-touch-icon" href="<@hst.link path='/static/assets/favicons/apple-touch-icon-180x180.png'/>">
    <link rel="mask-icon" href="<@hst.link path='/static/assets/favicons/favicon.svg'/>" color="#005eb8">
    <link rel="icon" sizes="192x192" href="<@hst.link path='/static/assets/favicons/favicon-192x192.png'/>">
    <meta name="msapplication-TileImage" content="<@hst.link path='/static/assets/favicons/mediumtile-144x144.png'/>">
    <meta name="msapplication-TileColor" content="#005eb8">
    <meta name="msapplication-square70x70logo" content="<@hst.link path='/static/assets/favicons/smalltile-70x70.png'/>">
    <meta name="msapplication-square150x150logo" content="<@hst.link path='/static/assets/favicons/mediumtile-150x150.png'/>">
    <meta name="msapplication-wide310x150logo" content="<@hst.link path='/static/assets/favicons/widetile-310x150.png'/>">
    <meta name="msapplication-square310x310logo" content="<@hst.link path='/static/assets/favicons/largetile-310x310.png'/>">

    <@hst.headContributions categoryExcludes="htmlBodyEnd, scripts" xhtml=true/>
  </head>
  <body>
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>

    <@hst.include ref="header"/>

    <@hst.include ref="breadcrumb"/>

    <@hst.include ref="main"/>

    <@hst.include ref="footer"/>

    <!-- Scripts -->
    <script src="<@hst.link path='/static/js/nhsuk-4.1.0.min.js'/>" defer></script>
    <@hst.headContributions categoryIncludes="htmlBodyEnd, scripts" xhtml=true/>
  </body>
</html>
