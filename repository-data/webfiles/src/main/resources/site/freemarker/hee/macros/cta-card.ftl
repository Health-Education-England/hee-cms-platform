<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "internal-link.ftl">

<#macro ctaCard ctaCard>
    <#if ctaCard??>
        <#assign openInNewWindow=false/>
        <#assign link="">
        <#if ctaCard.ctaCardContentBlock??>
            <#if ctaCard.ctaCardContentBlock.ctaLink.document??>
                <#assign link=getInternalLinkURL(ctaCard.ctaCardContentBlock.ctaLink.document)>
            <#else>
                <#assign link = "${ctaCard.ctaCardContentBlock.ctaLink.url}">
                <#if ctaCard.ctaCardContentBlock.ctaLink.openLinkUrlNewWindow>
                    <#assign openInNewWindow=true/>
                </#if>
            </#if>
        </#if>
        <#if link?has_content>
            <div class="nhsuk-card nhsuk-card--clickable">
                <@hst.link var="cardImageLink" hippobean=ctaCard.ctaCardContentBlock.cardImage />
                <#if cardImageLink??>
                    <img class="nhsuk-card__img" src="${cardImageLink}" alt="${ctaCard.ctaCardContentBlock.cardImage.description!}">
                </#if>
                <div class="nhsuk-card__content">
                    <h3 class="nhsuk-card__heading">
                        ${ctaCard.ctaCardContentBlock.title}
                    </h3>
                    <p class="nhsuk-card__description">${ctaCard.ctaCardContentBlock.description}</p>
                    <a class="nhsuk-button" href="${link}" draggable="false" role="button" data-module="nhsuk-button" ${openInNewWindow?then('target="_blank"', '')}>
                        ${ctaCard.ctaCardContentBlock.ctaLink.text}
                    </a>
                </div>
            </div>
        </#if>
    </#if>
</#macro>