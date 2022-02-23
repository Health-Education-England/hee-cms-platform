<#include "../../include/imports.ftl">
<@hst.setBundle basename="uk.nhs.hee.web.contact,uk.nhs.hee.web.global"/>

<#macro personContact person isAuthor=false>
    <div class="nhsuk-contact__content">

        <#-- Get Person Initials -->
        <#assign nameArray = person.name?split(" ")>
        <#if nameArray?size gt 1 >
            <#assign initials = nameArray[0][0] + nameArray[nameArray?size-1][0] >
        <#else>
            <#assign initials = nameArray[0][0]>
        </#if>
        <#-- End Get Person Initials -->

        <div class="nhsuk-contact__img-container">
            ${initials}
            <#if person.image??>
                <@hst.link var="personImage" hippobean=person.image/>
                <img class="nhsuk-contact__img" src="${personImage}" alt="${person.image.description!}">
            </#if>
        </div>

        <#if person.title?has_content>
            <#assign nameWithTitle> ${person.title} ${person.name} </#assign>
        <#else>
            <#assign nameWithTitle> ${person.name} </#assign>
        </#if>
        <h2 data-anchorlinksignore="true" class="nhsuk-contact__name" aria-label="Name">${nameWithTitle}</h2>

        <#if person.pronouns?has_content>
            <p class="nhsuk-contact__pronoun">${person.pronouns}</p>
        </#if>

        <#if person.jobTitle?has_content>
            <h3 class="nhsuk-contact__job-title" aria-label="Job Title">${person.jobTitle}</h3>
        </#if>

        <#if person.departmentName?has_content>
            <h5 data-anchorlinksignore="true" aria-label="Department">${person.departmentName}</h5>
        </#if>

        <#if person.organisation?has_content>
            <p aria-label="Organisation">
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
                    <p>
                        <a href="${person.linkUrl}"> <@fmt.message key="authorPageURL.text"/> ${nameWithTitle}</a>
                    </p>
                </#if>
            </#if>
        </div>
    </div>
</#macro>