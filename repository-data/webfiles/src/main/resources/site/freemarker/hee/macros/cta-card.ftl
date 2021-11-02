<#import "./link.ftl" as hlink>

<#macro ctaCard ctaCard>
    <#if ctaCard??>
        <#assign href="${hlink.link(ctaCard.ctaCardContentBlock.ctaLink)}"/>

        <#if href?has_content>
            <div class="nhsuk-grid-column-one-third">
                <div class="nhsuk-card nhsuk-card--clickable">
                    <div class="nhsuk-card__content">
                        <h3 class="nhsuk-card__heading">
                            ${ctaCard.ctaCardContentBlock.title}
                        </h3>
                        <p class="nhsuk-card__description">${ctaCard.ctaCardContentBlock.description}</p>
                        <a class="nhsuk-button" href="${href}" draggable="false" ${hlink.linkTarget(ctaCard.ctaCardContentBlock.ctaLink)}>
                            ${ctaCard.ctaCardContentBlock.ctaLink.text}
                            <#if ctaCard.ctaCardContentBlock.ctaLink.external>
                                <span class="nhsuk-u-visually-hidden">Opens in a new window</span>
                            </#if>
                        </a>
                    </div>
                </div>
            </div>
        </#if>
    </#if>
</#macro>