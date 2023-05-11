<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.LandingPage" -->

<#if document??>
    <main class="page page--fullwidth" id="maincontent" role="main">
        <#--  Main header: START  -->
        <div class="page__header${(document.microHero?has_content)?then(' has-microhero', '')}">
            <#--  Micro hero  -->
            <#if document.microHero??>
                <@microHero microHeroImage=document.microHero />
            </#if>

            <div class="nhsuk-width-container">
                <#--  Title  -->
                <h1>${document.title}</h1>

                <#--  Summary  -->
                <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
            </div>
        </div>
        <#--  Main header: END  -->

        <#--  Main content: START  -->
        <div class="page__main nhsuk-width-container">
            <div class="page__content">
                <#--  Main content blocks: START  -->
                <#if document.contentBlocks??>
                    <#list document.contentBlocks as block>
                        <#switch block.getClass().getName()>
                            <#case "uk.nhs.hee.web.beans.ContentCards">
                                <@hee.contentCards contentCards=block />
                                <#break>
                            <#case "uk.nhs.hee.web.beans.QuoteReference">
                                <@hee.quote block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.NavMap">
                                <@hee.navMap block=block navMapRegionMap=navMapRegionMap/>
                                <#break>
                            <#default>
                        </#switch>
                    </#list>
                </#if>
                <#--  Main content blocks: END  -->
            </div>
        </div>
        <#--  Main content: END  -->
    </main>
</#if>
