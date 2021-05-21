<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#macro externalLinksCard card>
    <#if card??>
        <div class="nhsuk-grid-column-one-third">
            <div class="nhsuk-card">
                <div class="nhsuk-card__content">
                    <h3 class="nhsuk-card__heading">${card.title}</h3>

                    <ul class="nhsuk-related-links-card__list">
                        <#list card.externalLinks as link>
                            <li>
                                <a class="nhsuk-related-links-card__link" href="${link.url}" target="_blank">
                                    ${link.text} (opens in new window)
                                </a>
                            </li>
                        </#list>
                    </ul>
                </div>
            </div>
        </div>
    </#if>
</#macro>
