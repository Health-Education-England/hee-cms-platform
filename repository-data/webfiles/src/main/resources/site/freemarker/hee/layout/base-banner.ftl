<#ftl output_format="HTML">
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.banner" -->

<#if document??>
    <#if document.tag?? && document.tag?has_content>
        <div class="nhsuk-hee-phasebanner">
            <div class="nhsuk-width-container">
                <p class="nhsuk-hee-phasebanner__content">
                    <span class="nhsuk-hee-phasebanner__tag">${document.tag}</span>
                     <@hst.html hippohtml=document.copy contentRewriter=bannerContentRewriter/>
                </p>
            </div>
        </div>
    <#else>
        <div class="nhsuk-hee-phasebanner nhsuk-hee-phasebanner--notag">
            <div class="nhsuk-width-container">
                <p class="nhsuk-hee-phasebanner__content">
                    <span class="nhsuk-hee-phasebanner__tag"></span>
                    <@hst.html hippohtml=document.copy contentRewriter=bannerContentRewriter/>
                </p>
            </div>
        </div>
    </#if>
</#if>