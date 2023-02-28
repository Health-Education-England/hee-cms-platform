<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#include "contact-card.ftl">

<#macro contactCardWithDescription contactWithDescription>
    <#if contactWithDescription??>
        <#if contactWithDescription.contactCardReference??>
            <#if contactWithDescription.contactCardReference.content??>
                <#assign description='${(contactWithDescription.description)!""}'/>
                <@contactCard contact=contactWithDescription.contactCardReference.content description=description/>
            </#if>
        </#if>
    </#if>
</#macro>
