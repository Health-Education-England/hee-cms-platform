<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#import "person-contact.ftl" as personContact>
<#import "department-contact.ftl" as departmentContact>

<#macro contactCard card>
    <#if card??>
        <div class="nhsuk-contact nhsuk-contact__card">
            <#if hst.isBeanType(card.contentItem, 'uk.nhs.hee.web.beans.Person')>
                <@personContact.personContact person=card.contentItem/>
            <#elseif hst.isBeanType(card.contentItem, 'uk.nhs.hee.web.beans.Department')>
                <@departmentContact.departmentContact department=card.contentItem/>
            </#if>
        </div>
    </#if>
</#macro>
