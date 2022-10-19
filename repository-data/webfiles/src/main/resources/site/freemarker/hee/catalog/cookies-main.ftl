<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/guidance-content.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->
<#if canonicalURL?has_content>
    <@hst.headContribution category="seo">
        <link rel="canonical" href='${canonicalURL}' />
    </@hst.headContribution>
</#if>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->
<div class="nhsuk-width-container">
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <@guidance guidanceDocument=document showCookiesButton=true />
    </main>
</div>
