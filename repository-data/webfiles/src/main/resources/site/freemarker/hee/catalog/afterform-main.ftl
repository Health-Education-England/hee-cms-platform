<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "../macros/back-link.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.AfterForm" -->
<#if document??>
    <@hst.html hippohtml=document.mainBody/>

    <@backLink link=document.backLink/>
</#if>
