<#include "../../include/imports.ftl">
<#include "../macros/report-content.ftl">
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Report" -->
<#if document??>
    <#if document.microHero??>
        <@microHero microHeroImage=document.microHero />
    </#if>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <@report reportDocument=document />
        </main>
    </div>
</#if>