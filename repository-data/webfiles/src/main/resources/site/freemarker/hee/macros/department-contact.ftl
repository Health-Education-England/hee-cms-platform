<#include "../../include/imports.ftl">

<#macro departmentContact department>
    <div class="nhsuk-contact__content">
        <h3 data-anchorlinksignore="true" class="nhsuk-contact__name" aria-label="Name">${department.name}</h3>
        <#if department.organisation?has_content>
            <p aria-label="Organisation" >
                ${department.organisation}
            </p>
        </#if>

        <hr class="nhsuk-section-break nhsuk-section-break--m nhsuk-section-break--visible">

        <div class="nhsuk-contact__secondary-info">
            <#if department.phoneNumber?has_content>
                <p aria-label="Telephone">
                    <a href="tel:${department.phoneNumber?replace(' ', '')}" title="Opens call">${department.phoneNumber}</a>
                    ${department.phoneExtension?has_content?then('(Ext: ' + department.phoneExtension + ')', '')}
                </p>
            </#if>

            <#if department.email?has_content>
                <p aria-label="Email">
                    <a href="mailto:${department.email}" title="Opens email">${department.email}</a>
                </p>
            </#if>

            <#if department.website?has_content>
                <p aria-label="Website">
                    <a href="${department.website}">
                        ${department.website}
                    </a>
                </p>
            </#if>

            <#if department.address?has_content>
                <p aria-label="Address">${department.address?replace('\n', '<br>')}</p>
            </#if>

            <#if department.description?has_content>
                <p class="nhsuk-u-secondary-text-color" aria-label="Description">${department.description}</p>
            </#if>
        </div>
    </div>
</#macro>