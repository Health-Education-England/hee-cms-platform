<#include "../../include/imports.ftl">
<#import "../macros/components.ftl" as hee>
<
<#-- @ftlvariable name="guidanceDocument" type="uk.nhs.hee.web.beans.Guidance" -->

<@hst.setBundle basename="uk.nhs.hee.web.global,uk.nhs.hee.web.contact"/>

<#macro guidance guidanceDocument showCookiesButton=false>
    <#if document??>
        <main class="page page--rightbar" id="maincontent" role="main">
            <#--  Main header: START  -->
            <div class="page__header${(document.microHero?has_content)?then(' has-microhero', '')}">
                <#--  Micro hero  -->
                <#if document.microHero??>
                    <@microHero microHeroImage=document.microHero />
                </#if>

                <div class="nhsuk-width-container">
                    <#--  Title  -->
                    <h1>${document.title}</h1>
                </div>
            </div>
            <#--  Main header: END  -->

            <#--  Main content: START  -->
            <div class="page__layout nhsuk-width-container">
                <#--  Main sections: START  -->
                <div class="page__main">
                    <div class="page__content">
                        <@guidanceDetail guidanceDocument=guidanceDocument/>

                        <#--  Cookie button [for cookies page]  -->
                        <#if showCookiesButton>
                            <#include "../../include/cookie-button.ftl">
                        </#if>

                        <#-- Last & next reviewed dates -->
                        <@hee.lastNextReviewedDate lastNextReviewedDate=guidanceDocument.pageLastNextReview/>
                    </div>
                </div>
                <#--  Main sections: END  -->

                <#--  Sidebar sections: START  -->
                <#if guidanceDocument.rightHandBlocks?? && guidanceDocument.rightHandBlocks?size gt 0>
                    <#--  Right hand content blocks: START  -->
                    <aside class="page__rightbar">
                        <#list guidanceDocument.rightHandBlocks as block>
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

            <#if guidanceDocument.relatedContent?? && (guidanceDocument.relatedContent.header?has_content || guidanceDocument.relatedContent.cardGroupSummary?has_content || guidanceDocument.relatedContent.cards?size gt 0)>
                <#--  Main featured content: START  -->
                <section class="page__feature">
                    <#--  Related content  -->
                    <div class="nhsuk-width-container">
                        <@hee.contentCards contentCards=guidanceDocument.relatedContent/>
                    </div>
                </section>
                <#--  Main featured content: END  -->
            </#if>
        </main>
    </#if>
</#macro>