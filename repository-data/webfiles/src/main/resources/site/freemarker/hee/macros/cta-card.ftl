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
        <#if ctaCard.ctaCardContentBlock.ctaLink.text?has_content && link?has_content>
            <div class="nhsuk-grid-column-one-third">
            <div class="nhsuk-card nhsuk-card--clickable">
                <div class="nhsuk-card__content">
                    <h2 class="nhsuk-card__heading">
                        ${ctaCard.ctaCardContentBlock.title}
                    </h2>
                    <p class="nhsuk-card__description"><@hst.html hippohtml=ctaCard.ctaCardContentBlock.ctaText/></p>
                    <a class="nhsuk-button" href="${link}" draggable="false">
                        ${ctaCard.ctaCardContentBlock.ctaLink.text}
                    </a>
                </div>
            </div>
            </div>
        </#if>
    </#if>
</#macro>