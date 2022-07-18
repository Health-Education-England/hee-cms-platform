<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "../macros/internal-link.ftl">

<#-- @ftlvariable name="document" type="[
                                            uk.nhs.hee.web.beans.BlogPost,
                                            uk.nhs.hee.web.beans.Guidance,
                                            uk.nhs.hee.web.beans.HomePage,
                                            uk.nhs.hee.web.beans.LandingPage,
                                            uk.nhs.hee.web.beans.ListingPage,
                                            uk.nhs.hee.web.beans.News,
                                            uk.nhs.hee.web.beans.MiniHub
                                        ]" -->

<#if document?? && document.logoGroup?? && document.logoGroup.logos?size gt 0>
    <#--  Multi org logo: START  -->
    <div class="nhsuk-header__multi-logo">
        <#list document.logoGroup.logos as logo>
            <#--  Builds link  -->
            <#if logo.linkDocument??>
                <#assign href=getInternalLinkURL(logo.linkDocument)>
                <#assign openInNewWindow=false/>
            <#else>
                <#assign href="${logo.linkURL}">
                <#assign openInNewWindow=true/>
            </#if>

            <#--  Builds logo source and alt text  -->
            <#switch logo.logoType>
                <#case "hee">
                    <#assign logoFileName="hee-logo.png">
                    <#break>
                <#case "nimdta">
                    <#assign logoFileName="nimdta-logo.png">
                    <#break>
                <#case "nes">
                    <#assign logoFileName="nhs-scotland-logo.png">
                    <#break>
                <#case "heiw">
                    <#assign logoFileName="heiw-logo.png">
                    <#break>
            </#switch>

            <@hst.link path="/static/assets/images/logos/${logoFileName}" var="logoSrc"/>
            <#assign logoAltText="Logo for ${logoTypes[logo.logoType]}">

            <#--  Renders logo  -->
            <span>
                <#if href?has_content>
                    <a class="nhsuk-header__link" href="${href}" aria-label="${logo.linkTitle!}" ${openInNewWindow?then('target="_blank"', '')}>
                        <img src="${logoSrc}" alt="${logoAltText}">
                    </a>
                <#else>
                    <img src="${logoSrc}" alt="${logoAltText}">
                </#if>
            </span>
        </#list>
    </div>
    <#--  Multi org logo: END  -->
</#if>