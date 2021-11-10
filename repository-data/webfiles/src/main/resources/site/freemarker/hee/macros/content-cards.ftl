<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#import "./link.ftl" as hlink>

<#macro contentCards contentCards>
    <#if contentCards.header?has_content>
        <div class="nhsuk-u-reading-width">
            <h2>${contentCards.header}</h2>
        </div>
    </#if>
    <#if contentCards.cardGroupSummary?has_content>
        <p>${contentCards.cardGroupSummary}</p>
    </#if>
    <ul class="nhsuk-grid-row nhsuk-card-group">
        <#list contentCards.cards as contentCard>
            <#if contentCard.header.document?? || contentCard.header.url?has_content>
                <#assign clickableCard=true/>
            <#else>
                <#assign clickableCard=false/>
            </#if>

            <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
                <div class="nhsuk-card ${clickableCard?then('nhsuk-card--clickable', 'nhsuk-card')}">
                    <@hst.link var="cardImage" hippobean=contentCard.cardImage />
                    <#if cardImage??>
                    <img class="nhsuk-card__img" src="${cardImage}" alt="">
                    </#if>
                    <div class="nhsuk-card__content">
                        <#if clickableCard>
                            <h3 class="nhsuk-card__heading nhsuk-heading-m">
                                <@hlink.link link=contentCard.header cssClassName="nhsuk-card__link">
                                    ${contentCard.header.text}
                                </@hlink.link>
                            </h3>
                        </#if>
                        <p class="nhsuk-card__description">${contentCard.description}</p>
                    </div>
                </div>
            </li>
        </#list>
    </ul>
</#macro>
