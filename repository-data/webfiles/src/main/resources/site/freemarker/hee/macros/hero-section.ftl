<#macro heroSection document>
    <@hst.link var="heroImageLink" hippobean=document.heroImage />
    <section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description" style="background-image: url('${heroImageLink}');">
        <div class="nhsuk-hero__overlay">
            <div class="nhsuk-width-container">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-two-thirds">
                        <div class="nhsuk-hero-content">
                            <h1 class="nhsuk-u-margin-bottom-3">${document.title}</h1>
                            <#if document.summary??>
                                <p class="nhsuk-body-l nhsuk-u-margin-bottom-0"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                            </#if>
                            <span class="nhsuk-hero__arrow" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</#macro>