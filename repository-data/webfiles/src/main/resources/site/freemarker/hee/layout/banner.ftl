<#ftl output_format="HTML">
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.banner" -->

<#if document??>
    <div class="nhsuk-phase-banner">
        <div class="nhsuk-width-container">
            <p class="nhsuk-phase-banner__content">
                <strong class="nhsuk-tag nhsuk-phase-banner__content__tag">${document.tag}</strong>
                <span class="nhsuk-phase-banner__text">
                    <@hst.html hippohtml=document.copy contentRewriter=bannerContentRewriter/>
                </span>
            </p>
        </div>
    </div>
</#if>