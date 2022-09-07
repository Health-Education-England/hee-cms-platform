<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.HomePage" -->
<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>
<@hst.setBundle basename="uk.nhs.hee.web.global,uk.nhs.hee.web.contact"/>

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
        <div class="nhsuk-grid-row">
            <div class="nhsuk-grid-column-full">
                <section class="nhsuk-page-content__section-one">
                    <div class="nhsuk-page-content">
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
                                        <@hee.contact block=block personTitlesMap=personTitlesMap personPronounsMap=personPronounsMap/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.BlockLinksReference">
                                        <@hee.blockLinks block=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.TableReference">
                                        <@hee.table table=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.TabsReference">
                                        <@hee.tabs tabs=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.DetailsReference">
                                        <@hee.details block=block/>
                                        <#break>
                                    <#default>
                                </#switch>
                            </#list>
                        </#if>
                    </div>
                </section>
            </div>
        </div>
    </main>
</div>
