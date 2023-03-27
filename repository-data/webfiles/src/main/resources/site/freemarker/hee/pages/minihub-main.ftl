<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/guidance-content.ftl"/>
<#include "../macros/micro-hero.ftl">

<@hst.defineObjects />
<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#-- @ftlvariable name="hstRequestContext" type="org.hippoecm.hst.core.request.HstRequestContext" -->
<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.MiniHub" -->
<#-- @ftlvariable name="minihubName" type="java.lang.String" -->
<#-- @ftlvariable name="currentGuidance" type="uk.nhs.hee.web.beans.Guidance" -->
<#-- @ftlvariable name="previousGuidance" type="uk.nhs.hee.web.beans.Guidance" -->
<#-- @ftlvariable name="nextGuidance" type="uk.nhs.hee.web.beans.Guidance" -->
<#-- @ftlvariable name="accessFromRootHub" type="java.lang.Boolean" -->
<#-- @ftlvariable name="isFirstPage" type="java.lang.Boolean" -->

<#assign accessWithEndSlash=hstRequestContext.servletRequest.requestURI?ends_with("/")/>

<#if document??>
    <main class="page page--rightbar" id="maincontent" role="main">
        <#--  Main header: START  -->
        <div class="page__header${(document.microHero?has_content)?then(' has-microhero', '')}">
            <#--  Micro hero  -->
            <#if document.microHero?? && isFirstPage>
                <@microHero microHeroImage=document.microHero />
            </#if>

            <div class="nhsuk-width-container">
                <#--  Guidance title  -->
                <h1>${currentGuidance.title}</h1>

                <#--  Mini-hub title [as caption]  -->
                <span class="nhsuk-caption-xl">${document.title}</span>
            </div>
        </div>
        <#--  Main header: END  -->

        <#--  Main content: START  -->
        <div class="page__layout nhsuk-width-container">
            <#--  Main sections: START  -->
            <div class="page__main">
                <div class="page__content">
                    <#--  Content list section: START  -->
                    <nav class="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
                        <h2>Contents</h2>
                        <ol class="nhsuk-contents-list__list">
                            <#list document.guidancePages as guidance>
                                <#if guidance == currentGuidance>
                                    <li class="nhsuk-contents-list__item" aria-current="page">
                                        <span class="nhsuk-contents-list__current">${guidance.title}</span>
                                    </li>
                                <#else>
                                    <li class="nhsuk-contents-list__item">
                                        <a class="nhsuk-contents-list__link"
                                        href="${(accessFromRootHub && !accessWithEndSlash)?then(minihubName + '/' + guidance.name, guidance.name)}">${guidance.title}</a>
                                    </li>
                                </#if>
                            </#list>
                        </ol>
                    </nav>
                    <#--  Content list section: END  -->

                    <#--  Guidance content: START  -->
                    <#if currentGuidance??>
                        <#--  Summary  -->
                        <#if currentGuidance.summary?has_content>
                            <p class="nhsuk-lede-text"><@hst.html formattedText="${currentGuidance.summary!?replace('\n', '<br>')}"/></p>
                        </#if>

                        <#--  Main content blocks: START  -->
                        <#if currentGuidance.contentBlocks??>
                            <#list currentGuidance.contentBlocks as block>
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
                                    <#case "uk.nhs.hee.web.beans.TableReference">
                                        <@hee.table table=block/>
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
                                    <#default>
                                </#switch>
                            </#list>
                        </#if>
                        <#--  Main content blocks: END  -->

                        <#--  Related content: START  -->
                        <#if currentGuidance.relatedContent??>
                            <@hee.contentCards contentCards=currentGuidance.relatedContent/>
                        </#if>
                        <#--  Related content: END  -->

                        <#-- Last & next reviewed dates -->
                        <@hee.lastNextReviewedDate lastNextReviewedDate=currentGuidance.pageLastNextReview/>
                    </#if>
                    <#--  Guidance content: END  -->

                    <#--  Pagination: START  -->
                    <nav class="nhsuk-pagination nhsuk-u-margin-top-0" role="navigation" aria-label="Pagination">
                        <ul class="nhsuk-list nhsuk-pagination__list">
                            <#if previousGuidance??>
                                <li class="nhsuk-pagination-item--previous">
                                    <a class="nhsuk-pagination__link nhsuk-pagination__link--prev"
                                    href="${previousGuidance.name}">
                                        <span class="nhsuk-pagination__title"><@fmt.message key="previous"/></span>
                                        <span class="nhsuk-u-visually-hidden">:</span>
                                        <span class="nhsuk-pagination__page">${previousGuidance.title}</span>
                                        <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </#if>

                            <#if nextGuidance??>
                                <li class="nhsuk-pagination-item--next">
                                    <a class="nhsuk-pagination__link nhsuk-pagination__link--next"
                                    href="${(accessFromRootHub && !accessWithEndSlash)?then(minihubName + '/' + nextGuidance.name, nextGuidance.name)}">
                                        <span class="nhsuk-pagination__title"><@fmt.message key="next"/></span>
                                        <span class="nhsuk-u-visually-hidden">:</span>
                                        <span class="nhsuk-pagination__page">${nextGuidance.title}</span>
                                        <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </#if>
                        </ul>
                    </nav>
                    <#--  Pagination: END  -->
                </div>
            </div>
            <#--  Main sections: END  -->

            <#--  Sidebar sections: START  -->
            <#if currentGuidance.rightHandBlocks?? && currentGuidance.rightHandBlocks?size gt 0>
                <#--  Right hand content blocks: START  -->
                <aside class="page__rightbar">
                    <#list currentGuidance.rightHandBlocks as block>
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
                </aside>
                <#--  Right hand content blocks: END  -->
            </#if>
            <#--  Sidebar sections: END  -->
        </div>
        <#--  Main content: END  -->

        <#if document.relatedContent?? && (document.relatedContent.header?has_content || document.relatedContent.cardGroupSummary?has_content || document.relatedContent.cards?size gt 0)>
            <#--  Main featured content: START  -->
            <section class="page__feature">
                <#--  Related content  -->
                <div class="nhsuk-width-container">
                    <@hee.contentCards contentCards=document.relatedContent/>
                </div>
            </section>
            <#--  Main featured content: END  -->
        </#if>
    </main>
</#if>



