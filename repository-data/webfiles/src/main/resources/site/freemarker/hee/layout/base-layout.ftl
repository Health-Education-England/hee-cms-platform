<!doctype html>
<#include "../../include/imports.ftl">
<@hst.defineObjects />
<#assign organizationName = "${hstRequestContext.resolvedMount.mount.channelInfo.organizationName}">
<#assign GTMContainerID = "${hstRequestContext.resolvedMount.mount.channelInfo.GTMContainerID}">
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

    <!-- Google Tag Manager -->
    <#if GTMContainerID?has_content>
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${GTMContainerID}');</script>
    </#if>
    <!-- End Google Tag Manager -->

    <@hst.headContributions categoryExcludes="htmlBodyEnd, scripts" xhtml=true/>
  </head>
  <body>
    <a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>

    <!-- Google Tag Manager (noscript) -->
    <#if GTMContainerID?has_content>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${GTMContainerID}"
                      height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    </#if>
    <!-- End Google Tag Manager (noscript) -->

    <@hst.include ref="header"/>

    <@hst.include ref="breadcrumb"/>

    <@hst.include ref="main"/>

    <@hst.include ref="footer"/>

    <!-- Scripts -->
    <script src="<@hst.link path='/static/js/nhsuk-4.1.0.min.js'/>" defer></script>
    <script src="<@hst.link path='/static/js/main.min.js'/>" defer></script>

    <@hst.headContributions categoryIncludes="htmlBodyEnd, scripts" xhtml=true/>
  </body>
</html>
