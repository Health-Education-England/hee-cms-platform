<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.LandingPage" -->
<#if document??>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <@hst.link var="heroImage" hippobean=document.heroImage />
            <#if heroImage??>
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
            <#else>
                <h1>
                    ${document.title}
                </h1>
                <p class="nhsuk-lede-text">${document.summary}</p>
            </#if>
            <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-full">
                    <@hee.contentCards contentCards=document.contentCards/>
                </div>
            </div>
        </main>
    </div>
</#if>
