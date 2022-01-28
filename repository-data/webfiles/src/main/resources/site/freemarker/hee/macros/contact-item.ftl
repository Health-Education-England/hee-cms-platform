<#include "../../include/imports.ftl">
<#import "person-contact.ftl" as personContact>
<#import "department-contact.ftl" as departmentContact>

<#macro contactItem item>
    <div class="nhsuk-contact">
        <#if hst.isBeanType(item.contentItem, 'uk.nhs.hee.web.beans.Person')>
            <@personContact.personContact person=item.contentItem isAuthor=true />
        <#elseif hst.isBeanType(item.contentItem, 'uk.nhs.hee.web.beans.Department')>
            <@departmentContact.departmentContact department=item.contentItem/>
        </#if>
    </div>
</#macro>
