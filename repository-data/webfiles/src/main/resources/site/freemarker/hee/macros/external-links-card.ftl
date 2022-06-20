<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#macro externalLinksCard card>
    <#if card??>
        <div class="nhsuk-card">
            <div class="nhsuk-card__content">
                <h3 class="nhsuk-card__heading">${card.title}</h3>

                <ul class="nhsuk-related-links-card__list">
                    <#list card.externalLinks as link>
                        <#assign openInNewWindow=false/>
                        <#if link.openLinkUrlNewWindow?? && link.openLinkUrlNewWindow>
                            <#assign openInNewWindow=true/>
                        </#if>

                        <li>
                            <a class="nhsuk-related-links-card__link" href="${link.url}" ${openInNewWindow?then('target="_blank"', '')}>
                                ${link.text}${openInNewWindow?then(' (opens in new window)', '')}
                            </a>
                        </li>
                    </#list>
                </ul>
            </div>
        </div>
    </#if>
</#macro>
