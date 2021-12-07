<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.LandingPage" -->
<#if document??>
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
                                <p class="nhsuk-body-l nhsuk-u-margin-bottom-0"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
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
            <#if showHero=false>
                <h1>
                    ${document.title}
                </h1>
                <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
            </#if>
            <div class="nhsuk-grid-row">
                <#if document.contentBlocks??>
                    <#list document.contentBlocks as block>
                        <#switch block.getClass().getName()>
                            <#case "uk.nhs.hee.web.beans.ContentCards">
                                <div class="nhsuk-grid-column-full">
                                    <@hee.contentCards contentCards=block />
                                </div>
                                <#break>
                            <#default>
                        </#switch>
                    </#list>
                </#if>
            </div>
        </main>
    </div>
</#if>
