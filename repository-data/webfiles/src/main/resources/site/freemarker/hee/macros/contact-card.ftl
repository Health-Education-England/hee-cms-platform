<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#macro contactCard card>
    <#if card??>
        <div class="nhsuk-contact nhsuk-contact__card">
            <div class="nhsuk-contact__content">
                <h3>${card.title}</h3>

                <#if card.display?seq_contains("name")>
                    <h4 class="nhsuk-contact__name" aria-label="Name">
                        ${card.contentItem.name}
                    </h4>
                </#if>

                <#if hst.isBeanType(card.contentItem, 'uk.nhs.hee.web.beans.Person')>
                    <#if card.display?seq_contains("departmentName") && card.contentItem.departmentName?has_content>
                        <p aria-label="Department">${card.contentItem.departmentName}</p>
                    </#if>
                    <#if card.display?seq_contains("jobTitle") && card.contentItem.jobTitle?has_content>
                        <p aria-label="Job Title">${card.contentItem.jobTitle}</p>
                    </#if>
                </#if>

                <hr class="nhsuk-section-break nhsuk-section-break--m nhsuk-section-break--visible">

                <div class="nhsuk-contact__secondary-info">
                    <#if card.display?seq_contains("phoneNumber") && card.contentItem.phoneNumber?has_content>
                        <p aria-label="Telephone">
                            <a href="tel:${card.contentItem.phoneNumber}" title="Opens call">${card.contentItem.phoneNumber}</a>
                        </p>
                    </#if>
                    <#if card.display?seq_contains("email") && card.contentItem.email?has_content>
                        <p aria-label="Email">
                            <a href="mailto:${card.contentItem.email}" title="Opens email">${card.contentItem.email}</a>
                        </p>
                    </#if>
                    <#if card.display?seq_contains("address") && card.contentItem.address?has_content>
                        <p aria-label="Address">${card.contentItem.address?replace('\n', '<br>')}</p>
                    </#if>
                </div>
            </div>
        </div>
    </#if>
</#macro>
