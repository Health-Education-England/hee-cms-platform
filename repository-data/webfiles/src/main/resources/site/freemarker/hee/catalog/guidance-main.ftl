<#include "../../include/imports.ftl">
<#include "../macros/guidance-content.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.Guidance" -->
<@hst.link var="heroImage" hippobean=document.heroImage />
<#assign showHero=false>
<#if heroImage??>
    <#assign showHero=true>
    <section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description" style="background-image: url('${heroImage}');">
        <div class="nhsuk-hero__overlay">
            <div class="nhsuk-width-container">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-two-thirds">
                        <div class="nhsuk-hero-content">
                            <h1 class="nhsuk-u-margin-bottom-3">${document.title}</h1>
                            <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">${document.summary}</p>
                            <span class="nhsuk-hero__arrow" aria-hidden="true"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</#if>
<div class="nhsuk-width-container">
    <main id="maincontent" role="main" class="nhsuk-main-wrapper">
        <@guidance guidanceDocument=document showHero=showHero/>
    </main>
</div>
