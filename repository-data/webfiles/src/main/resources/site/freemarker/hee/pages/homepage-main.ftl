<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.HomePage" -->
<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/hero-section.ftl">

<@heroSection heroSection=document.heroSection/>

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
                                    <#case "uk.nhs.hee.web.beans.StatementBlock">
                                        <@hee.statementBlock block=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.ActionLink">
                                        <@hee.actionLink actionLink=block/>
                                        <#break>
                                    <#case "uk.nhs.hee.web.beans.YellowAlertBlock">
                                        <@hee.yellowAlertBlock block=block/>
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
