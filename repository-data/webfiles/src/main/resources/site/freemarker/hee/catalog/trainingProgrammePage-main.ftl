<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/micro-hero.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.TrainingProgrammePage" -->
<#if document??>
    <main class="page page--rightbar" id="maincontent" role="main" xmlns="http://www.w3.org/1999/html">
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
        <div class="page__layout nhsuk-width-container">
            <#--  Main sections: START  -->
            <div class="page__main">
                <div class="page__content">
                    <div class="hee-card hee-card--summary default">
                        <a aria-label="Toggle Programme summary" class="hee-card--summary__toggle" href="#">
                            <span class="nhsuk-u-visually-hidden">Toggle Programme summary</span>
                        </a>
                        <h3 class="hee-card--summary__heading">Programme summary</h3>
                        <ul class="hee-card--summary__list">
                            <li class="hee-card--summary__item">
                                <span class="hee-card--summary__item__label">Training programme</span>
                                <span class="hee-card--summary__item__value">${document.title}</span>
                            </li>
                            <li class="hee-card--summary__item">
                                <span class="hee-card--summary__item__label">Training type</span>
                                <span class="hee-card--summary__item__value">
                                    <a class="hee-card--summary__item__link" href="http://www.abc1234.com">${trainingType}</a>
                                </span>
                            </li>
                            <li class="hee-card--summary__item">
                                <span class="hee-card--summary__item__label">Professions</span>
                                <#if professionMap?has_content>
                                    <#list professionMap as professionKey, professionValue>
                                        <span class="hee-card--summary__item__value">
                                            <a class="hee-card--summary__item__link" href="http://www.abc1234.com">${professionValue}</a>
                                        </span>
                                    </#list>
                                </#if>
                            </li>
                            <#if clinicalDiscipline?has_content>
                            <li class="hee-card--summary__item">
                                <span class="hee-card--summary__item__label">Discipline</span>
                                <span class="hee-card--summary__item__value">
                                  <a class="hee-card--summary__item__link" href="http://www.abc1234.com">${clinicalDiscipline}</a>
                                </span>
                            </li>
                            </#if>

                            <#if recruitmentFormat?has_content>
                                <li class="hee-card--summary__item">
                                    <span class="hee-card--summary__item__label">Recruitment format</span>
                                    <span class="hee-card--summary__item__value">${recruitmentFormat}</span>
                                </li>
                            </#if>
                            <li class="hee-card--summary__item">
                                <span class="hee-card--summary__item__label">Duration</span>
                                <span class="hee-card--summary__item__value">${document.duration}&nbsp; months</span>
                            </li>
                            <#if document.competitionRatio?has_content>
                                <li class="hee-card--summary__item">
                                    <span class="hee-card--summary__item__label">Competition ratio</span>
                                    <span class="hee-card--summary__item__value">${document.competitionRatio}</span>
                                </li>
                            </#if>
                            <#if document.fillRate?has_content>
                                <li class="hee-card--summary__item">
                                    <span class="hee-card--summary__item__label">Fill rate</span>
                                    <span class="hee-card--summary__item__value">${document.fillRate}%</span>
                                </li>
                            </#if>
                            <#if document.opening?has_content>
                                <li class="hee-card--summary__item">
                                    <span class="hee-card--summary__item__label">Opening</span>
                                    <span class="hee-card--summary__item__value">${document.opening.time?datetime?string['EEE dd/MM/yyyy']}</span>
                                </li>
                            </#if>
                            <#if document.closing?has_content>
                                <li class="hee-card--summary__item">
                                    <span class="hee-card--summary__item__label">Closing</span>
                                    <span class="hee-card--summary__item__value">${document.closing.time?datetime?string['EEE dd/MM/yyyy']}</span>
                                </li>
                            </#if>
                        </ul>
                    </div>



                    <#--  Main content blocks: START  -->
                    <#if document.overviewBlocks??>
                        <h2  class="toc_h2" id="overview">Overview</h2>
                        <#list document.overviewBlocks as block>
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
                                <#case "uk.nhs.hee.web.beans.ActionLink">
                                    <@hee.actionLink actionLink=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.BlockLinksReference">
                                    <@hee.blockLinks block=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.MediaEmbedReference">
                                    <@hee.media media=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.ExpanderTableReference">
                                    <@hee.expanderTable table=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.TabsReference">
                                    <@hee.tabs tabs=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.InsetReference">
                                    <@hee.inset inset=block/>
                                    <#break>
                                <#case "uk.nhs.hee.web.beans.AppliesToBoxReference">
                                    <@hee.appliesToBox box=block/>
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
                </div>
            </div>

            <#--  Sidebar sections: START  -->
            <#--  Right hand content blocks: Table of content and content blocks   -->
            <aside class="page__rightbar">
                <#--  Table of content  -->
                <div class="hee-card hee-card--related-links theme__item-border">
                    <div class="hee-card--related-links__content">
                        <h3 class="hee-card--related-links__heading">Pages related to this programme</h3>
                        <ul class="hee-card--related-links__list">
                            <li>
                                <a class="hee-card--related-links__link" href="#">Overview</a>
                            </li>
                        </ul>
                    </div>
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
                            <#case "uk.nhs.hee.web.beans.ExternalLinksCardReference">
                                <@hee.externalLinksCard card=block.externalLinksCard/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.FileLinksCardReference">
                                <@hee.fileLinksCard card=block.fileLinksCard/>
                                <#break>
                            <#case "uk.nhs.hee.web.beans.InternalLinksCardReference">
                                <@hee.internalLinksCard card=block.internalLinksCard/>
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

        <#--  Feature section will be a future work, not implemented yet  -->
        <section class="page__feature">
            <div class="nhsuk-width-container">
            </div>
        </section>
    </main>
</#if>
