<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.banner" -->

<#if document??>
    <#if bannerType = 'phase'>
        <#--  Renders phase banner  -->
        <div class="nhsuk-hee-phasebanner${(document.phase != 'live')?then('', ' nhsuk-hee-phasebanner--notag')}">
            <div class="nhsuk-width-container">
                <p class="nhsuk-hee-phasebanner__content">
                    <#if document.phase!='live'>
                        <span class="nhsuk-hee-phasebanner__tag">${document.phase}</span>
                    </#if>
                    <@hst.html hippohtml=document.bannerContent var="bannerContentHTML"/>
                    ${bannerContentHTML?replace('<p>', '')?replace('</p>', '<br><br>')?keep_before_last('<br><br>')?replace('<a ', '<a class=\'nhsuk-link\' ')}
                </p>
            </div>
        </div>
    <#else>
        <#--  Renders announcement/mourning/alert banners  -->
        <#assign bannerClass="">
        <#if bannerType = 'announcement'>
            <#assign bannerClass=" hee-globalalert--dark-pink">
        <#elseif bannerType = 'mourning'>
            <#assign bannerClass=" hee-globalalert--black">
        </#if>

        <div class="hee-globalalert${bannerClass}" role="complementary">
            <div class="nhsuk-width-container">
                <div class="hee-globalalert__message">
                    <@hst.html hippohtml=document.bannerContent/>
                </div>
            </div>
        </div>
    </#if>
</#if>