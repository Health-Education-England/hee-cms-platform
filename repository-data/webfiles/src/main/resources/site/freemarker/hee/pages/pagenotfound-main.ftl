<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.NotFoundPage" -->

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
        <#if document.contentBlocks?? && document.contentBlocks?has_content>
            <div class="page__main nhsuk-width-container">
                <div class="page__content">
                    <#--  Main content blocks: START  -->
                    <#list document.contentBlocks as block>
                        <#switch block.getClass().getName()>
                            <#case "uk.nhs.hee.web.beans.ContentCards">
                                <@hee.contentCards contentCards=block />
                                <#break>
                            <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                <@hst.html hippohtml=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.RichTextReference">
                                <@hst.html hippohtml=block.richTextBlock.html/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.ActionLink">
                                <@hee.actionLink actionLink=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.BlockLinksReference">
                                <@hee.blockLinks block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.WarningCalloutReference">
                                <@hee.warningCallout block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.FeaturedContentReference">
                                <@hee.featuredContent block=block maxCards=3/>
                                <#break>
                            <#default>
                        </#switch>
                    </#list>
                    <#--  Main content blocks: END  -->
                </div>
            </div>
        </#if>
        <#--  Main content: END  -->
    </main>
</#if>
