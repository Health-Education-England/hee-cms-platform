<#import "./link.ftl" as hlink>

<#macro contentCards contentCards>
    <#if contentCards.header?has_content>
        <div class="nhsuk-u-reading-width">
            <h2>${contentCards.header}</h2>
        </div>
    </#if>

    <ul class="nhsuk-grid-row nhsuk-card-group">
        <#list contentCards.cards as contentCard>
            <#assign href="${hlink.link(contentCard.header)}"/>

            <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
                <div class="nhsuk-card ${(href?has_content)?then('nhsuk-card--clickable', 'nhsuk-card')}">
                    <div class="nhsuk-card__content">
                        <#if href?has_content>
                            <h3 class="nhsuk-card__heading nhsuk-heading-m">
                                <a class="nhsuk-card__link" href="${href}" ${hlink.linkTarget(contentCard.header)}>
                                    ${contentCard.header.text}<@hlink.linkTextSuffix link=contentCard.header/>
                                </a>
                            </h3>
                        </#if>
                        <p class="nhsuk-card__description">${contentCard.description}</p>
                    </div>
                </div>
            </li>
        </#list>
    </ul>
</#macro>
