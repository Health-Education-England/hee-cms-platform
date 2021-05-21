<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#macro contact block>
    <#if block??>
        <div class="nhsuk-contact">
            <div class="nhsuk-contact__content">
                <#if block.title?has_content>
                    <h2>${block.title}</h2>
                </#if>

                <#list block.contentItems as item>
                    <#if hst.isBeanType(item.contentItem, 'uk.nhs.hee.web.beans.Person')>
                        <#if block.display?seq_contains("image") && item.contentItem.image??>
                            <@hst.link var="personImage" hippobean=item.contentItem.image/>
                            <div class="nhsuk-contact__img-container">
                                <img class="nhsuk-contact__img" src="${personImage}" alt="${item.contentItem.image.description}">
                            </div>
                        </#if>

                        <#if block.display?seq_contains("name")>
                            <h3 class="nhsuk-contact__name" aria-label="Name">${item.contentItem.name}</h3>
                        </#if>

                        <#if block.display?seq_contains("departmentName") && item.contentItem.departmentName?has_content>
                            <h4 aria-label="Department">${item.contentItem.departmentName}</h4>
                        </#if>

                        <#if block.display?seq_contains("jobTitle") && item.contentItem.jobTitle?has_content>
                            <p aria-label="Job Title">${item.contentItem.jobTitle}</p>
                        </#if>
                    <#else>
                        <#if block.display?seq_contains("name")>
                            <h3 class="nhsuk-contact__name" aria-label="Name">${item.contentItem.name}</h3>
                        </#if>
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

                        <#if item.copy?has_content>
                            <p class="nhsuk-u-secondary-text-color" aria-label="Details">${item.copy}</p>
                        </#if>
                    </div>
                </#list>
            </div>
        </div>
    </#if>
</#macro>
