<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<@hst.defineObjects />
<@hst.setBundle basename="uk.nhs.hee.web.global"/>
<#assign gtmContainerId = "${hstRequestContext.resolvedMount.mount.channelInfo.GTMContainerID}">

<div class="nhsuk-cookie-banner">
    <#if showCookiesBanner>
        <@fmt.message var="cookieBannerText" key="cookie.banner.text"/>
        <@hst.link var="cookiesPageLink" siteMapItemRefId="cookies"/>

        <div class="nhsuk-width-container">
            <h2 data-anchorlinksignore="true" id="cookies0"><@fmt.message key="cookie.banner.title"/></h2>
            <#--  Replacing '##COOKIES_PAGE##' PlaceHolder dynamically with channel specific cookies page link  -->
            <@hst.html formattedText="${cookieBannerText?replace('##COOKIES_PAGE##', cookiesPageLink)}"/>
            <ul>
                <li><button class="nhsuk-button" id="nhsuk-cookie-banner__link_accept_analytics" tabindex="2"><@fmt.message key="cookie.button.accept"/></button></li>
                <li><button class="nhsuk-button" id="nhsuk-cookie-banner__link_decline_analytics" tabindex="3"><@fmt.message key="cookie.button.reject"/></button></li>
            </ul>
        </div>
    </#if>
</div>

<#if gtmContainerId?has_content>

    <#if allowAnalyticsCookies>
        <@hst.headContribution category="gtmScript">
            <script><![CDATA[(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','${gtmContainerId}');]]>
            </script>
        </@hst.headContribution>
    </#if>

    <@hst.headContribution category="gtmNoScript">
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=${gtmContainerId}" height="0" width="0" style="display:none;visibility:hidden">
            </iframe>
        </noscript>
    </@hst.headContribution>

</#if>