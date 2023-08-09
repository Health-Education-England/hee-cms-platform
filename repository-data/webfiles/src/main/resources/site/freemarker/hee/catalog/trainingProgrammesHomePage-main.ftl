<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.TrainingProgrammesHomepage" -->
<#if document??>
    <main class="page page--rightbar page--specialty-homepage" id="maincontent" role="main">
        <#--  Main header: START  -->
        <div class="page__header has-nhsukhero">
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
        <div class="page__layout nhsuk-width-container">
            <#--  Main sections: START  -->
            <div class="page__main">
                <div class="page__content">
                    <#--  Caption  -->
                    <#if document.caption??>
                        <p class="nhsuk-body-l"><@hst.html formattedText="${document.caption!?replace('\n', '<br>')}"/></p>
                    </#if>

                    <#--  Overview  -->
                    <#if document.overview??>
                        <h2 class="toc_h2" id="overview0">Overview</h2>
                        <p class="nhsuk-lede-text"><@hst.html hippohtml=document.overview/></p>
                    </#if>

                    <#--  Pathways content blocks: START  -->
                    <#if document.pathwaysBlocks??>
                        <h2 class="toc_h2" id="pathways">Pathways</h2>
                        <#list document.pathwaysBlocks as block>
                            <#switch block.getClass().getName()>
                                <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                    <@hst.html hippohtml=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.RichTextReference">
                                    <@hst.html hippohtml=block.richTextBlock.html/>
                                    <#break>
                                <#case "org.hippoecm.hst.content.beans.standard.HippoFacetSelect">
                                    <#if block.referencedBean?? && hst.isBeanType(block.referencedBean, 'uk.nhs.hee.web.beans.ImageSetWithCaption')>
                                        <@hee.imageWithCaption imageWithCaption=block.referencedBean/>
                                    </#if>
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                    <#--  Pathways content blocks: END  -->

                    <#--  Training routes content blocks: START  -->
                    <#if document.trainingRoutesBlocks??>
                        <h2 class="toc_h2">Training routes</h2>
                        <#list document.trainingRoutesBlocks as block>
                            <#switch block.getClass().getName()>
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
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                    <#--  Training routes content blocks: END  -->

                    <#--  Support content blocks: START  -->
                    <#if document.supportBlocks?has_content>
                        <h2 class="toc_h2" id="support">Support</h2>
                        <#list document.supportBlocks as block>
                            <#switch block.getClass().getName()>
                                <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                    <@hst.html hippohtml=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.RichTextReference">
                                    <@hst.html hippohtml=block.richTextBlock.html/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.ActionLink">
                                    <@hee.actionLink actionLink=block/>
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                    <#--  Support content blocks: END  -->

                    <#--  Region content blocks: START  -->
                    <#if document.regionsBlocks?has_content>
                        <h2  class="toc_h2" id="regions">Regions</h2>
                        <#list document.regionsBlocks as block>
                            <#switch block.getClass().getName()>
                                <#case "uk.nhs.hee.web.beans.NavMap">
                                    <@hee.navMap block=block navMapRegionMap=navMapRegionMap/>
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                    <#--  Region content blocks: END  -->
                </div>
            </div>
            <#--  Main sections: END  -->

            <#--  Sidebar sections: START  -->
            <aside class="page__rightbar">
                <#--  Table of content  -->
                <div class="nhsuk-anchor-links hee-anchorlinks" data-toc-js=true data-headings="">
                    <h2 data-anchorlinksignore="true">Table of Contents</h2>
                </div>

                <#--  Right hand content blocks: START  -->
                <#if document.rightHandBlocks??>
                    <#list document.rightHandBlocks as block>
                        <#switch block.getClass().getName()>
                            <#case "uk.nhs.hee.web.beans.QuickLinks">
                                <@hee.quickLinks quickLinks=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.ContactCardReference">
                                <@hee.contactCard contact=block.content/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.ContactCardWithDescriptionReference">
                                <@hee.contactCardWithDescription contactWithDescription=block.contactCardWithDescription/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.ExternalLinksCardReference">
                                <@hee.externalLinksCard card=block.externalLinksCard/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.FileLinksCardReference">
                                <@hee.fileLinksCard card=block.fileLinksCard/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.CtaCardReference">
                                <@hee.ctaCard ctaCard=block/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.InternalLinksCardReference">
                                <@hee.internalLinksCard card=block.internalLinksCard/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.RightHandImageReference">
                                <@hee.rightHandImage image=block/>
                                <#break>
                            <#default>
                        </#switch>
                    </#list>
                </#if>
                <#--  Right hand content blocks: END  -->
            </aside>
            <#--  Sidebar sections: END  -->
        </div>
        <#--  Main content: END  -->
    </main>
</#if>
