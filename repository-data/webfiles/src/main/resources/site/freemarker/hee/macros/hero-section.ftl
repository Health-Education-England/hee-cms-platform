<#macro heroSection heroSection>
    <#if heroSection?? && (heroSection.header?has_content || heroSection.text?has_content)>
        <section class="nhsuk-hero">
            <div class="nhsuk-width-container nhsuk-hero--border">
                <div class="nhsuk-hero__wrapper">
                    <h1 class="nhsuk-u-margin-bottom-3">${heroSection.header}</h1>
                    <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">${heroSection.text}</p>
                </div>
            </div>
        </section>
    </#if>
</#macro>
