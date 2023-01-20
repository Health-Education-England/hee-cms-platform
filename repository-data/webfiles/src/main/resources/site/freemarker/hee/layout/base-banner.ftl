<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.banner" -->

<#if document??>
    <#if bannerType = 'phase'>
        <#--  Renders phase banner  -->
        <div class="hee-phasebanner${(document.phase != 'live')?then('', ' hee-phasebanner--notag')}">
            <div class="nhsuk-width-container">
                <div class="hee-phasebanner__wrapper">
                    <#if document.phase!='live'>
                        <span class="hee-phasebanner__tag">${document.phase}</span>
                    </#if>
                    <div class="hee-phasebanner__content">
                        <@hst.html hippohtml=document.bannerContent/>
                    </div>
                </div>
            </div>
        </div>
    <#else>
        <#--  Renders announcement/mourning/alert banners  -->
        <#assign bannerClass="">
        <#if bannerType = 'announcement'>
            <#assign bannerClass=" hee-banner--announcement">
        <#elseif bannerType = 'mourning'>
            <#assign bannerClass=" hee-banner--mourning">
        </#if>

        <div class="hee-banner${bannerClass}" role="complementary">
            <div class="nhsuk-width-container">
                <div class="hee-banner__message">
                    <@hst.html hippohtml=document.bannerContent/>
                </div>
            </div>
        </div>
    </#if>
</#if>