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
    <section class="nhsuk-hero${heroImgClass}"${backgroundImage}>
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
    </section>


    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <h1>
                ${document.title}
            </h1>
            <#if document.summary??>
                <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
            </#if>

            <#if document.overview??>
                <p class="nhsuk-lede-text"><@hst.html hippohtml=document.overview/></p>
            </#if>
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
                            <#case "uk.nhs.hee.web.beans.MediaEmbedReference">
                                <@hee.media media=block/>
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
        </main>
    </div>
</#if>
