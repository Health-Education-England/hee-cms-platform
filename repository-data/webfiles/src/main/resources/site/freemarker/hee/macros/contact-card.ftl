<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#macro contactCard contactCard>
    <#if contactCard??>
        <div class="nhsuk-grid-column-one-third">
            <div class="nhsuk-card">
                <div class="nhsuk-card__content">
                    <ul class="nhsuk-related-links-card__list nhsuk-u-margin-bottom-0">
                        <li>
                            <h3 class="nhsuk-card__heading">${contactCard.content.title}</h3>
                        </li>
                        <#if contactCard.content.display?seq_contains("name")>
                            <li>
                                <b>${contactCard.content.contentItem.name}</b>
                            </li>
                        </#if>
                        <#if hst.isBeanType(contactCard.content.contentItem, 'uk.nhs.hee.web.beans.Person')>
                            <#if contactCard.content.display?seq_contains("departmentName") && contactCard.content.contentItem.departmentName?has_content>
                                <li>
                                    ${contactCard.content.contentItem.departmentName}
                                </li>
                            </#if>
                            <#if contactCard.content.display?seq_contains("jobTitle") && contactCard.content.contentItem.jobTitle?has_content>
                                <li>
                                    ${contactCard.content.contentItem.jobTitle}
                                </li>
                            </#if>
                        </#if>
                    </ul>
                    <hr class="nhsuk-u-margin-bottom-1 nhsuk-u-margin-top-1"/>
                    <ul class="nhsuk-related-links-card__list">
                        <#if contactCard.content.display?seq_contains("phoneNumber") && contactCard.content.contentItem.phoneNumber?has_content>
                            <li>
                                <a class="nhsuk-related-links-card__link"
                                   href="tel:${contactCard.content.contentItem.phoneNumber}">${contactCard.content.contentItem.phoneNumber}</a>
                            </li>
                        </#if>
                        <#if contactCard.content.display?seq_contains("email") && contactCard.content.contentItem.email?has_content>
                            <li>
                                <a class="nhsuk-related-links-card__link"
                                   href="mailto:${contactCard.content.contentItem.email}">${contactCard.content.contentItem.email}</a>
                            </li>
                        </#if>
                        <#if contactCard.content.display?seq_contains("address") && contactCard.content.contentItem.address?has_content>
                            <li>
                                ${contactCard.content.contentItem.address}
                            </li>
                        </#if>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
</#macro>
