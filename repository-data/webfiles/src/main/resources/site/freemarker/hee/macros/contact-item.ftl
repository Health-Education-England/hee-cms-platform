<#include "../../include/imports.ftl">
<@hst.setBundle basename="uk.nhs.hee.web.contact,uk.nhs.hee.web.global"/>

<#macro contactItem item block singleContact=false>
    <div class="nhsuk-contact">
        <div class="nhsuk-contact__content">
            <#if singleContact && block.title?has_content>
                <h2>${block.title}</h2>
            </#if>

            <#if hst.isBeanType(item.contentItem, 'uk.nhs.hee.web.beans.Person')>
                <#if block.display?seq_contains("image") && item.contentItem.image??>
                    <@hst.link var="personImage" hippobean=item.contentItem.image/>
                    <div class="nhsuk-contact__img-container">
                        <img class="nhsuk-contact__img" src="${personImage}" alt="${item.contentItem.image.description!}">
                    </div>
                </#if>

                <#if item.contentItem.title?has_content>
                    <#assign nameWithTitle> ${item.contentItem.title} ${item.contentItem.name} </#assign>
                <#else>
                    <#assign nameWithTitle> ${item.contentItem.name} </#assign>
                </#if>

                <#if block.display?seq_contains("name")>
                    <h3 data-anchorlinksignore="true" class="nhsuk-contact__name" aria-label="Name">${nameWithTitle}</h3>
                </#if>

                <#if item.contentItem.pronouns?has_content>
                    <p class="nhsuk-contact__pronoun">${item.contentItem.pronouns}</p>
                </#if>

                <#if block.display?seq_contains("jobTitle") && item.contentItem.jobTitle?has_content>
                    <p aria-label="Job Title">${item.contentItem.jobTitle}</p>
                </#if>

                <#if block.display?seq_contains("departmentName") && item.contentItem.departmentName?has_content>
                    <h4 data-anchorlinksignore="true" aria-label="Department">${item.contentItem.departmentName}</h4>
                </#if>

                <#if item.contentItem.organisation?has_content>
                    <p aria-label="Organisation" >
                        ${item.contentItem.organisation}
                    </p>
                </#if>
            <#else>
                <#if block.display?seq_contains("name")>
                    <h3 data-anchorlinksignore="true" class="nhsuk-contact__name" aria-label="Name">${item.contentItem.name}</h3>
                </#if>
<#--                TODO add organisation -->
            </#if>

            <hr class="nhsuk-section-break nhsuk-section-break--m nhsuk-section-break--visible">

            <div class="nhsuk-contact__secondary-info">
                <#if block.display?seq_contains("phoneNumber") && item.contentItem.phoneNumber?has_content>
                    <p aria-label="Telephone">
                        <a href="tel:${item.contentItem.phoneNumber}" title="Opens call">${item.contentItem.phoneNumber}</a>
                    </p>
                </#if>

                <#if block.display?seq_contains("email") && item.contentItem.email?has_content>
                    <p aria-label="Email">
                        <a href="mailto:${item.contentItem.email}" title="Opens email">${item.contentItem.email}</a>
                    </p>
                </#if>

                <#if block.display?seq_contains("address") && item.contentItem.address?has_content>
                    <p aria-label="Address">${item.contentItem.address?replace('\n', '<br>')}</p>
                </#if>

                <#if item.contentItem.description?has_content>
                    <p class="nhsuk-u-secondary-text-color" aria-label="Description">${item.contentItem.description}</p>
                </#if>

                <#if hst.isBeanType(item.contentItem, 'uk.nhs.hee.web.beans.Person')>
                    <#if item.contentItem.bio?has_content>
                        <p class="nhsuk-u-secondary-text-color" aria-label="Description">${item.contentItem.bio}</p>
                    </#if>
                    <#if item.contentItem.linkUrl?has_content>
                        <a href="${item.contentItem.linkUrl}"> <@fmt.message key="authorPageURL.text"/> ${nameWithTitle}</a>
                    </#if>
                </#if>
            </div>
        </div>
    </div>
</#macro>
