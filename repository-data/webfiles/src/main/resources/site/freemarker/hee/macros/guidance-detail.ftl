<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>

<#macro guidanceDetail guidanceDocument>
    <#--  Summary  -->
    <#if guidanceDocument.summary?has_content>
        <p class="nhsuk-lede-text"><@hst.html formattedText="${guidanceDocument.summary!?replace('\n', '<br>')}"/></p>
    </#if>

    <#--  Main content blocks: START  -->
    <#if guidanceDocument.contentBlocks??>
        <#list guidanceDocument.contentBlocks as block>
            <#switch block.getClass().getName()>
                <#case "uk.nhs.hee.web.beans.ImageBlock">
                    <@hee.imageBlock imageBlock=block/>
                    <#break>
                <#case "org.hippoecm.hst.content.beans.standard.HippoHtml">
                    <@hst.html hippohtml=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.ImageBlock">
                    <@hee.imageBlock imageBlock=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.RichTextReference">
                    <@hst.html hippohtml=block.richTextBlock.html/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.ActionLink">
                    <@hee.actionLink actionLink=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.Contact">
                    <@hee.contact block=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.BlockLinksReference">
                    <@hee.blockLinks block=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.AnchorLinks">
                    <@hee.anchorLinks anchor=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.MediaEmbedReference">
                    <@hee.media media=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.QuoteReference">
                    <@hee.quote block=block/>
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
                <#case "uk.nhs.hee.web.beans.ContentCards">
                    <@hee.contentCards contentCards=block size="half"/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.InsetReference">
                    <@hee.inset inset=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.ButtonReference">
                    <@hee.button button=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.AppliesToBoxReference">
                    <@hee.appliesToBox box=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.NavMap">
                    <@hee.navMap block=block navMapRegionMap=navMapRegionMap/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.DetailsReference">
                    <@hee.details block=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.ExpanderGroupReference">
                    <@hee.expander expander=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.WarningCalloutReference">
                    <@hee.warningCallout block=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.StatementCardReference">
                    <@hee.statementCard block=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.NewsletterSubscribeFormReference">
                    <@hee.newsletterSubscribeForm block=block/>
                    <#break>
                <#case "uk.nhs.hee.web.beans.GoogleMapReference">
                    <@hee.googleMap block=block/>
                    <#break>
                <#default>
            </#switch>
        </#list>
    </#if>
    <#--  Main content blocks: END  -->
</#macro>