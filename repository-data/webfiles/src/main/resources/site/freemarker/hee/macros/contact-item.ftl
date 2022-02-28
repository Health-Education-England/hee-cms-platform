<#include "../../include/imports.ftl">
<#import "person-contact.ftl" as personContact>
<#import "department-contact.ftl" as departmentContact>

<#macro contactItem item personTitlesMap personPronounsMap>
    <div class="nhsuk-contact">
        <#if hst.isBeanType(item, 'uk.nhs.hee.web.beans.Person')>
            <@personContact.personContact
                person=item
                personTitlesMap=personTitlesMap
                personPronounsMap=personPronounsMap
                isAuthor=true
            />
        <#elseif hst.isBeanType(item, 'uk.nhs.hee.web.beans.Department')>
            <@departmentContact.departmentContact department=item/>
        </#if>
    </div>
</#macro>
