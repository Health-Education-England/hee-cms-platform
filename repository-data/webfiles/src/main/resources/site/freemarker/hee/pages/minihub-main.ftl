<#include "../../include/imports.ftl">
<#include "../macros/guidance-content.ftl"/>
<@hst.defineObjects />
<@hst.setBundle basename="uk.nhs.hee.web.global"/>

<#-- @ftlvariable name="hstRequestContext" type="org.hippoecm.hst.core.request.HstRequestContext" -->
<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.MiniHub" -->
<#-- @ftlvariable name="minihubName" type="java.lang.String" -->
<#-- @ftlvariable name="currentGuidance" type="uk.nhs.hee.web.beans.Guidance" -->
<#-- @ftlvariable name="previousGuidance" type="uk.nhs.hee.web.beans.Guidance" -->
<#-- @ftlvariable name="nextGuidance" type="uk.nhs.hee.web.beans.Guidance" -->
<#-- @ftlvariable name="accessFromRootHub" type="java.lang.Boolean" --
<#-- @ftlvariable name="miniHubSections" type="java.util.List" -->

<#assign accessWithEndSlash=hstRequestContext.servletRequest.requestURI?endsWith("/")/>
<#if document??>
    <div class="nhsuk-width-container">
        <main id="maincontent" role="main" class="nhsuk-main-wrapper">
            <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-two-thirds">
                    <h1>
                        <span role="text">${currentSection.document.title}
                            <span class="nhsuk-caption-xl nhsuk-caption--bottom">
                                ${document.title}
                            </span>
                        </span>
                    </h1>
                    <nav class="nhsuk-contents-list" role="navigation" aria-label="Pages in this guide">
                        <h2>Contents</h2>
                        <ol class="nhsuk-contents-list__list">
                            <#list miniHubSections as section>
                                <#if section == currentSection>
                                    <li class="nhsuk-contents-list__item" aria-current="page">
                                        <span class="nhsuk-contents-list__current">${section.document.title}</span>
                                    </li>
                                    <#if section?index gt 0>
                                        <#assign previousSection=miniHubSections[section?index - 1] />
                                    </#if>
                                    <#if section?index lt miniHubSections?size>
                                        <#assign nextSection=miniHubSections[section?index + 1] />
                                    </#if>
                                <#else>
                                    <li class="nhsuk-contents-list__item">
                                        <a class="nhsuk-contents-list__link"
                                           href="<@hst.link hippobean=section/>">${section.document.title}</a>
                                    </li>
                                </#if>
                            </#list>
                        </ol>
                    </nav>
                </div>
                <#if currentSection??>
                    <@guidance guidanceDocument=currentSection.document showTitle=false/>
                </#if>
                <div class="nhsuk-width-container">
                <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-two-thirds">
                    <nav class="nhsuk-pagination nhsuk-u-margin-top-0" role="navigation" aria-label="Pagination">
                        <ul class="nhsuk-list nhsuk-pagination__list">
                            <#if previousSection??>
                                <li class="nhsuk-pagination-item--previous">
                                    <a class="nhsuk-pagination__link nhsuk-pagination__link--prev"
                                       href="<@hst.link hippobean=previousSection/>">
                                        <span class="nhsuk-pagination__title"><@fmt.message key="previous"/></span>
                                        <span class="nhsuk-u-visually-hidden">:</span>
                                        <span class="nhsuk-pagination__page">${previousSection.document.title}</span>
                                        <svg class="nhsuk-icon nhsuk-icon__arrow-left" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </#if>
                            <#if nextSection??>
                                <li class="nhsuk-pagination-item--next">
                                    <a class="nhsuk-pagination__link nhsuk-pagination__link--next"
                                       href="<@hst.link hippobean=nextSection/>">
                                        <span class="nhsuk-pagination__title"><@fmt.message key="next"/></span>
                                        <span class="nhsuk-u-visually-hidden">:</span>
                                        <span class="nhsuk-pagination__page">${nextSection.document.title}</span>
                                        <svg class="nhsuk-icon nhsuk-icon__arrow-right" xmlns="http://www.w3.org/2000/svg"
                                             viewBox="0 0 24 24" aria-hidden="true">
                                            <path d="M19.6 11.66l-2.73-3A.51.51 0 0 0 16 9v2H5a1 1 0 0 0 0 2h11v2a.5.5 0 0 0 .32.46.39.39 0 0 0 .18 0 .52.52 0 0 0 .37-.16l2.73-3a.5.5 0 0 0 0-.64z"></path>
                                        </svg>
                                    </a>
                                </li>
                            </#if>
                        </ul>
                    </nav>
                </div>
                </div>
                </div>
                <#if document.relatedContent??>
                    <div class="nhsuk-width-container">
                        <@hee.contentCards contentCards=document.relatedContent relatedContent=true />
                    </div>
                </#if>
            </div>
        </main>
    </div>
</#if>



