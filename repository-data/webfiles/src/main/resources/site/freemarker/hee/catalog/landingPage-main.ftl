<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/hero-section.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.LandingPage" -->
<#if document??>
    <#assign showHero=false>
    <#if document.heroImage??>
        <#assign showHero=true>
        <@heroSection document=document />
    </#if>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <#if showHero=false>
                <h1>
                    ${document.title}
                </h1>
                <#if document.summary??>
                    <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                </#if>
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
