<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro ctaCard ctaCard>
    <#if ctaCard??>
        <#if ctaCard.ctaCardContentBlock.ctaLink.document??>
            <#assign link>
                <@hst.link hippobean=ctaCard.ctaCardContentBlock.ctaLink.document/>
            </#assign>
            <#assign openInNewWindow=false/>
        <#else>
            <#assign link = "${ctaCard.ctaCardContentBlock.ctaLink.url}">
            <#assign openInNewWindow=true/>
        </#if>
        <#if link?has_content>
            <div class="nhsuk-grid-column-one-third">
                <div class="nhsuk-card nhsuk-card--clickable">
                    <@hst.link var="cardImage" hippobean=ctaCard.ctaCardContentBlock.cardImage />
                    <#if cardImage??>
                        <img class="nhsuk-card__img" src="${cardImage}" alt="">
                    </#if>
                    <div class="nhsuk-card__content">
                        <h3 class="nhsuk-card__heading">
                            ${ctaCard.ctaCardContentBlock.title}
                        </h3>
                        <p class="nhsuk-card__description">${ctaCard.ctaCardContentBlock.description}</p>
                        <a class="nhsuk-button" href="${link}" draggable="false" ${openInNewWindow?then('target="_blank"', '')}>
                            ${ctaCard.ctaCardContentBlock.ctaLink.text}
                        </a>
                    </div>
                </div>
            </div>
        </#if>
    </#if>
</#macro>