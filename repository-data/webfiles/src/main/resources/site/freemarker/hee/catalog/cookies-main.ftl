<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/guidance-content.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->

<#if canonicalURL?has_content>
    <@hst.headContribution category="seo">
        <link rel="canonical" href='${canonicalURL}' />
    </@hst.headContribution>
</#if>

<@guidance guidanceDocument=document showCookiesButton=true />
