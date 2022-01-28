<#include "../../include/imports.ftl">
<@hst.setBundle basename="uk.nhs.hee.web.contact,uk.nhs.hee.web.global"/>

<#macro personContact person isAuthor=false>
    <div class="nhsuk-contact__content">
        <#if person.image??>
            <@hst.link var="personImage" hippobean=person.image/>
            <div class="nhsuk-contact__img-container">
                <img class="nhsuk-contact__img" src="${personImage}" alt="${person.image.description!}">
            </div>
        </#if>

        <#if person.title?has_content>
            <#assign nameWithTitle> ${person.title} ${person.name} </#assign>
        <#else>
            <#assign nameWithTitle> ${person.name} </#assign>
        </#if>
        <h3 data-anchorlinksignore="true" class="nhsuk-contact__name" aria-label="Name">${nameWithTitle}</h3>

        <#if person.pronouns?has_content>
            <p class="nhsuk-contact__pronoun">${person.pronouns}</p>
        </#if>

        <#if person.jobTitle?has_content>
            <p aria-label="Job Title">${person.jobTitle}</p>
        </#if>

        <#if person.departmentName?has_content>
            <h4 data-anchorlinksignore="true" aria-label="Department">${person.departmentName}</h4>
        </#if>

        <#if person.organisation?has_content>
            <p aria-label="Organisation" >
                ${person.organisation}
            </p>
        </#if>

        <hr class="nhsuk-section-break nhsuk-section-break--m nhsuk-section-break--visible">

        <div class="nhsuk-contact__secondary-info">
            <#if person.phoneNumber?has_content>
                <p aria-label="Telephone">
                    <a href="tel:${person.phoneNumber}" title="Opens call">${person.phoneNumber}</a>
                </p>
            </#if>

            <#if person.email?has_content>
                <p aria-label="Email">
                    <a href="mailto:${person.email}" title="Opens email">${person.email}</a>
                </p>
            </#if>

            <#if person.website?has_content>
                <p aria-label="Website">
                    <a href="${person.website}">
                        ${person.website}
                    </a>
                </p>
            </#if>

            <#if person.address?has_content>
                <p aria-label="Address">${person.address?replace('\n', '<br>')}</p>
            </#if>

            <#if person.bio?has_content>
                <p class="nhsuk-u-secondary-text-color" aria-label="Description">${person.bio}</p>
            </#if>

            <#if isAuthor>
                <#if person.linkUrl?has_content>
                    <a href="${person.linkUrl}"> <@fmt.message key="authorPageURL.text"/> ${nameWithTitle}</a>
                </#if>
            </#if>
        </div>
    </div>
</#macro>