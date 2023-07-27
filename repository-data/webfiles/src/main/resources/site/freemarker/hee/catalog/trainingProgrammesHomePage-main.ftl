<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.TrainingProgrammesHomepage" -->
<#if document??>
    <@hst.link var="heroImage" hippobean=document.heroImage />
    <#assign heroImgClass=''>
    <#assign backgroundImage=''>
    <#if heroImage??>
        <#assign backgroundImage=' style="background-image: url(\'${heroImage}\');"'>
        <#assign heroType=' class="nhsuk-hero-content"'>
        <#assign heroImgClass=' nhsuk-hero--image nhsuk-hero--image-description'>
    <#else>
        <#assign heroType=' class="nhsuk-hero__wrapper"'>
    </#if>
    <main id="maincontent" role="main" class="page page--rightbar page--specialty-homepage">
        <#--  Header section, includes hero image   -->
        <div class="page__header has-nhsukhero">
            <section class="nhsuk-hero${heroImgClass}"${backgroundImage}>
                <div class="nhsuk-hero__overlay">
                    <div class="nhsuk-width-container">
                        <div class="nhsuk-grid-row">
                            <div class="nhsuk-grid-column-two-thirds">
                                <div${heroType}>
                                    <h1 class="nhsuk-u-margin-bottom-3">${document.title}</h1>
                                    <#if document.subtitle?has_content>
                                        <p class="nhsuk-body-l nhsuk-u-margin-bottom-0">${document.subtitle}</p>
                                    </#if>
                                    <span class="nhsuk-hero__arrow" aria-hidden="true"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <#-- Main section  -->
        <div class="nhsuk-width-container">
            <div class="page__layout">
                <div class="page__main">
                    <section class="nhsuk-section__content">
                        <#if document.programmeDescription?has_content>
                            <p class="nhsuk-body-l"><@hst.html formattedText="${document.programmeDescription!?replace('\n', '<br>')}"/></p>
                        </#if>

                        <#if document.overview??>
                            <h2 class="toc_h2"  id="overview0">Overview</h2>
                            <p class="nhsuk-lede-text"><@hst.html hippohtml=document.overview/></p>
                        </#if>

                        <#--  Pathways content blocks  -->
                        <#if document.pathwaysBlocks?has_content>
                            <h2  class="toc_h2" id="pathways">Pathways</h2>
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

                        <#--  Training Route content blocks, at least 1 is mandatory  -->
                        <#if document.trainingRoutesBlocks?? >
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

                        <#--  Support content blocks  -->
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

                        <#--  Region content blocks  -->
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
                    </section>
                </div>

                <#--  Right hand content blocks: Table of content and content blocks   -->
                <aside class="page__rightbar">
                    <#--  Table of content  -->

                    <div class="hee-anchorlinks" data-toc-js="true">
                        <h2 data-anchorlinksignore="true">Table of Contents</h2>
                    </div>

                    <#--  Righthand content blocks -->
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
                </aside>
            </div>
        </div>

        <#--  Feature section will be a future work, not implemented yet  -->
        <section class="page__feature">
            <div class="nhsuk-width-container">
            </div>
        </section>
    </main>
</#if>
