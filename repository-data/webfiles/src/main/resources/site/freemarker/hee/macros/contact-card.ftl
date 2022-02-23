<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#import "person-contact.ftl" as personContact>
<#import "department-contact.ftl" as departmentContact>

<#macro contactCard contact>
    <#if contact??>
        <div class="nhsuk-contact nhsuk-contact__card">
            <#if hst.isBeanType(contact, 'uk.nhs.hee.web.beans.Person')>
                <@personContact.personContact person=contact/>
            <#elseif hst.isBeanType(contact, 'uk.nhs.hee.web.beans.Department')>
                <@departmentContact.departmentContact department=contact/>
            </#if>
        </div>
    </#if>
</#macro>
