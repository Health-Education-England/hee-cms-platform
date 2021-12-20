<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

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
            <#if logo.linkDocument??>
                <#assign href>
                    <@hst.link hippobean=logo.linkDocument/>
                </#assign>
                <#assign openInNewWindow=false/>
            <#else>
                <#assign href="${logo.linkURL}">
                <#assign openInNewWindow=true/>
            </#if>

            <#if href?has_content>
                <a class="nhsuk-header__link" href="${href}" aria-label="${logo.linkTitle!}" ${openInNewWindow?then('target="_blank"', '')}>
                    <img src="<@hst.link hippobean=logo.image/>" alt="${logo.image.description!}">
                </a>
            <#else>
                <img src="<@hst.link hippobean=logo.image/>" alt="${logo.image.description!}">
            </#if>
        </#list>
    </div>
    <#--  Multi org logo: END  -->
</#if>