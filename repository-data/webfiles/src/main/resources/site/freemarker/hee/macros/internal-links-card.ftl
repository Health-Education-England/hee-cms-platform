<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#include "internal-link.ftl">

<#macro internalLinksCard card>
    <#if card??>
        <div class="nhsuk-card">
            <div class="nhsuk-card__content">
                <h3 class="nhsuk-card__heading">${card.title}</h3>

                <ul class="nhsuk-related-links-card__list">
                    <#list card.internalLinks as link>
                        <li>
                            <a class="nhsuk-related-links-card__link" href="${getInternalLinkURL(link.document)}">
                                ${link.text}
                            </a>
                        </li>
                    </#list>
                </ul>
            </div>
        </div>
    </#if>
</#macro>
