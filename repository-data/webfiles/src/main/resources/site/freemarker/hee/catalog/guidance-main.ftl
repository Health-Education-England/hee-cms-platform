<#include "../../include/imports.ftl">
<#include "../macros/guidance-content.ftl">
<#include "../macros/hero-section.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->
<@hst.link var="heroImage" hippobean=document.heroImage />
<#assign showHero=false>
<#if heroImage??>
    <#assign showHero=true>
    <@heroSection document=document heroImage=heroImage/>
</#if>
<div class="nhsuk-width-container">
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <@guidance guidanceDocument=document showHero=showHero/>
    </main>
</div>
