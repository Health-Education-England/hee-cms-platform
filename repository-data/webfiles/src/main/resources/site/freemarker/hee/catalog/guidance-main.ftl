<#include "../../include/imports.ftl">
<#include "../macros/guidance-content.ftl">
<#include "../macros/hero-section.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->
<#assign showHero=false>
<#if document.heroImage??>
    <#assign showHero=true>
    <@heroSection document=document />
</#if>
<div class="nhsuk-width-container">
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <@guidance guidanceDocument=document showHero=showHero/>
    </main>
</div>
