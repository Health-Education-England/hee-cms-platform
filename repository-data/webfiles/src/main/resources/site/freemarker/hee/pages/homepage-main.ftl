<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<@hst.setBundle basename="uk.nhs.hee.web.global,uk.nhs.hee.web.contact"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.HomePage" -->

<#if document??>
    <main class="page page--fullwidth" id="maincontent" role="main">
        <#--  Main header: START  -->
        <div class="page__header has-microhero">
            <#--  Hero: START  -->
            <section class="nhsuk-hero nhsuk-hero--image nhsuk-hero--image-description" style="background-image: url('<@hst.link hippobean=document.heroImage />');">
                <div class="nhsuk-hero__overlay">
                    <div class="nhsuk-width-container">
                        <div class="nhsuk-grid-row">
                            <div class="nhsuk-grid-column-two-thirds">
                                <div class="nhsuk-hero-content">
                                    <#--  Title  -->
                                    <h1 class="nhsuk-u-margin-bottom-3">${document.title}</h1>
                                    <#if document.summary?has_content>
                                        <#--  Summary  -->
                                        <p class="nhsuk-body-l nhsuk-u-margin-bottom-0"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                                    </#if>
                                    <span class="nhsuk-hero__arrow" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <#--  Hero: END  -->
        </div>
        <#--  Main header: END  -->

        <#--  Main content: START  -->
        <div class="page__main nhsuk-width-container">
            <div class="page__content">
                <#--  Content blocks: START  -->
                <#if document.contentBlocks??>
                    <#list document.contentBlocks as block>
                        <#switch block.getClass().getName()>
                            <#case "org.hippoecm.hst.content.beans.standard.HippoFacetSelect">
                                <#if block.referencedBean?? && hst.isBeanType(block.referencedBean, 'uk.nhs.hee.web.beans.ImageSetWithCaption')>
                                    <@hee.imageWithCaption imageWithCaption=block.referencedBean/>
                                </#if>
                                <#break>
                            <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                <@hst.html hippohtml=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.RichTextReference">
                                <@hst.html hippohtml=block.richTextBlock.html/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.StatementBlock">
                                <@hee.statementBlock block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.ActionLink">
                                <@hee.actionLink actionLink=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.ContentCards">
                                <@hee.contentCards contentCards=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.AnchorLinks">
                                <@hee.anchorLinks anchor=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.NavMap">
                                <@hee.navMap block=block navMapRegionMap=navMapRegionMap/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.MediaEmbedReference">
                                <@hee.media media=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.Contact">
                                <@hee.contact block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.BlockLinksReference">
                                <@hee.blockLinks block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.TableReference">
                                <@hee.table table=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.ExpanderTableReference">
                                <@hee.expanderTable table=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.TabsReference">
                                <@hee.tabs tabs=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.DetailsReference">
                                <@hee.details block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.WarningCalloutReference">
                                <@hee.warningCallout block=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.StatementCardReference">
                                <@hee.statementCard block=block/>
                                <#break>
                            <#default>
                        </#switch>
                    </#list>
                </#if>
                <#--  Content blocks: END  -->
            </div>
        </div>
        <#--  Main content: END  -->
    </main>
</#if>