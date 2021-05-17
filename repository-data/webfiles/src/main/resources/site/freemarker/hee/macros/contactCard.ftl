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
                        <li>
                            <b>${contactCard.content.contentItem.name}</b>
                        </li>
                        <li>
                            ${contactCard.content.contentItem.departmentName}
                        </li>
                        <li>
                            ${contactCard.content.contentItem.jobTitle}
                        </li>
                    </ul>
                    <hr class="nhsuk-u-margin-bottom-1 nhsuk-u-margin-top-1"/>
                    <ul class="nhsuk-related-links-card__list">
                        <li>
                            <a class="nhsuk-related-links-card__link" href="tel:${contactCard.content.contentItem.phoneNumber}">${contactCard.content.contentItem.phoneNumber}</a>
                        </li>
                        <li>
                            <a class="nhsuk-related-links-card__link" href="mailto:${contactCard.content.contentItem.email}">${contactCard.content.contentItem.email}</a>
                        </li>
                        <li>
                            ${contactCard.content.contentItem.address}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
</#macro>
