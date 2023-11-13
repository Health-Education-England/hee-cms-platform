<!doctype html>
<#include "../../include/imports.ftl">
<@hst.defineObjects />
<#assign gtmContainerId = "${hstRequestContext.resolvedMount.mount.channelInfo.GTMContainerID}">
<html lang="en">
  <head>
    <meta charset="utf-8"/>
    <title>${hstRequestContext.resolvedSiteMapItem.pageTitle?has_content?then(hstRequestContext.resolvedSiteMapItem.pageTitle, document.title!)} | ${hstRequestContext.resolvedMount.mount.channelInfo.organisationDescriptor}</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Page meta data: START -->
    <@hst.headContributions categoryIncludes="pageMetaData" xhtml=true/>
    <!-- Page meta data: END -->

    <!-- Styles -->
    <link rel="stylesheet" href="<@hst.webfile path='/css/nhsuk-7.0.0.min.css'/>" type="text/css"/>
    <link rel="stylesheet" href="<@hst.webfile path='/css/hee.min.css'/>" type="text/css"/>
    <link rel="stylesheet" href="<@hst.webfile path='/css/nhse-global-menu.min.css'/>" type="text/css"/>
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

    <@hst.headContributions categoryExcludes="htmlBodyEnd, scripts, gtmNoScript, pageMetaData" xhtml=true/>
  </head>
  <body>

    <@hst.include ref="cookies-banner"/>

    <a class="nhsuk-skip-link" href="#maincontent">Skip to main content</a>
    <script>document.body.className = ((document.body.className) ? document.body.className + ' js-enabled' : 'js-enabled');</script>

    <@hst.headContributions categoryIncludes="gtmNoScript" xhtml=true/>

    <div id="nhse-global-menu" class="nhse-global-menu theme-blue">
       <div class="nhse-global-menu__wrapper">
          <div class="nhsuk-width-container nhse-global-menu__container" style="max-width: 960px;">
             <a aria-label="Visit NHS England website" class="nhse-global-menu__logo" href="http://hee.nhs.uk" title="NHS England">
                <div class="nhse-global-menu__logo__img"></div>
                <span class="nhse-global-menu__logo__name">England</span>
             </a>
          </div>
       </div>
    </div>

    <#--  Rendered below cookie consent, above header  -->
    <@hst.include ref="announcement-banner"/>

    <@hst.include ref="header"/>

    <#--  Rendered between hub navigation and breadcrumbs  -->
    <@hst.include ref="phase-banner"/>

    <@hst.include ref="breadcrumb"/>

    <#--  Rendered below breadcrumbs  -->
    <@hst.include ref="mourning-banner"/>

    <#--  Rendered below breadcrumbs, below mourning  -->
    <@hst.include ref="alert-banner"/>

    <@hst.include ref="main"/>

    <@hst.include ref="footer"/>

    <!-- Scripts -->
    <script src="<@hst.webfile path='/js/nhsuk-7.0.0.min.js'/>" defer></script>
    <script src="<@hst.webfile path='/js/hee.min.js'/>" defer></script>
    <@hst.headContributions categoryIncludes="htmlBodyEnd, scripts" xhtml=true/>
  </body>
</html>
