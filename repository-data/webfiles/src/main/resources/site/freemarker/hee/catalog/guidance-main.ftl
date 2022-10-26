<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/guidance-content.ftl">
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->
<#if document??>
    <#if document.microHero??>
        <@microHero microHeroImage=document.microHero />
    </#if>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <@guidance guidanceDocument=document />
        </main>
    </div>
</#if>