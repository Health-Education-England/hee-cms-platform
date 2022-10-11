<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.BlogPost" -->

<div class="nhsuk-width-container">
    <#if document??>
        <#if document.microHero??>
            <@microHero microHeroImage=document.microHero />
        </#if>
    </#if>
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <@hst.include ref="blog"/>

        <#--  <div class="nhsuk-grid-row nhsuk-u-margin-top-4">
            <div class="nhsuk-grid-column-two-thirds">
                <@hst.include ref="comment"/>
            </div>
        </div>  -->
    </main>
</div>
