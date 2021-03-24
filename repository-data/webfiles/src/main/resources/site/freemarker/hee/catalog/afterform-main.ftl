<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "../macros/back-link.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.AfterForm" -->
<@hst.headContribution category="seo">
    <meta name="robots" content="noindex"/>
</@hst.headContribution>
<#if document??>
    <@hst.html hippohtml=document.mainBody/>

    <@backLink link=document.backLink/>
</#if>
