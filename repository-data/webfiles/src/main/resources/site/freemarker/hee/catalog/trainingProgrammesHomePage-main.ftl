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
        <div class="page__header">
            <section class="nhsuk-hero${heroImgClass}"${backgroundImage}>
                <div class="nhsuk-hero__overlay">
                    <div class="nhsuk-width-container">
                        <div class="nhsuk-grid-row">
                            <div class="nhsuk-grid-column-two-thirds">
                                <div${heroType}>
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
        </div>

        <div class="nhsuk-width-container">
            <div class="page__layout">
                <div class="page__main">
                    <section class="nhsuk-section__content">
                        <#if document.caption??>
                            <p class="nhsuk-body-l"><@hst.html formattedText="${document.caption!?replace('\n', '<br>')}"/></p>
                        </#if>

                        <#if document.overview??>
                            <h2 id="overview0">Overview</h2>
                            <p class="nhsuk-lede-text"><@hst.html hippohtml=document.overview/></p>
                        </#if>
                    </section>
                </div>
                <h2 id="pathways1">Pathways</h2>
                <div class="nhsuk-grid-row">
                    <#if document.pathwaysBlocks??>
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
                </div>
                <div class="nhsuk-grid-row">
                    <#if document.trainingRoutesBlocks??>
                        <#list document.trainingRoutesBlocks as block>
                            <#switch block.getClass().getName()>
                                <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                    <@hst.html hippohtml=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.RichTextReference">
                                    <@hst.html hippohtml=block.richTextBlock.html/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.AnchorLinks">
                                    <@hee.anchorLinks anchor=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.BlockLinksReference">
                                    <@hee.blockLinks block=block/>
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                </div>
                <div class="nhsuk-grid-row">
                    <#if document.supportBlocks??>
                        <#list document.supportBlocks as block>
                            <#switch block.getClass().getName()>
                                <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                                    <@hst.html hippohtml=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.RichTextReference">
                                    <@hst.html hippohtml=block.richTextBlock.html/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.AnchorLinks">
                                    <@hee.anchorLinks anchor=block/>
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                </div>
                <div class="nhsuk-grid-row">
                    <#if document.regionsBlocks??>
                        <#list document.regionsBlocks as block>
                            <#switch block.getClass().getName()>
                                <#case "uk.nhs.hee.web.beans.NavMap">
                                    <@hee.navMap block=block navMapRegionMap=navMapRegionMap/>
                                    <#break>
                                <#default>
                            </#switch>
                        </#list>
                    </#if>
                </div>
            </div>
        </div>
    </main>
</#if>
