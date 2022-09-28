<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.AtozPage" -->
<#-- @ftlvariable name="atozmap" type="java.util.Map" -->

<#if document??>
    <div class="nhsuk-width-container">
        <main class="nhsuk-main-wrapper" id="maincontent" role="main">
            <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-full">
                    <h1>${document.title}</h1>
                    <#if document.summary??>
                        <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                    </#if>
                    <#if atozmap??>
                        <nav class="nhsuk-u-margin-bottom-4 nhsuk-u-margin-top-4" id="nhsuk-nav-a-z" role="navigation" aria-label="A to Z Navigation">
                            <ol class="nhsuk-list nhsuk-u-clear nhsuk-u-margin-0" role="list">
                                <#list atozmap?keys as letter>
                                    <li class="nhsuk-u-margin-bottom-0 nhsuk-u-float-left nhsuk-u-margin-right-1" style="float:left">
                                        <#if atozmap[letter]??>
                                            <a class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block" href="#${letter}">${letter}</a>
                                        <#else>
                                            <span class="nhsuk-u-font-size-22 nhsuk-u-padding-2 nhsuk-u-display-block nhsuk-u-secondary-text-color">${letter}</span>
                                        </#if>
                                    </li>
                                </#list>
                            </ol>
                        </nav>
                        <#list atozmap?keys as letter>
                            <#if atozmap[letter]??>
                                <div class="nhsuk-card nhsuk-card--feature">
                                    <div class="nhsuk-card__content nhsuk-card__content--feature">
                                        <h2 id="${letter}" class="nhsuk-card__heading nhsuk-card__heading--feature nhsuk-u-font-size-24">
                                            ${letter}
                                        </h2>
                                        <ul class='nhsuk-list nhsuk-list--border'>
                                            <#list atozmap[letter] as page>
                                                <li><a href="${page.value}">${page.key}</a></li>
                                            </#list>
                                        </ul>
                                    </div>
                                </div>
                            </#if>
                        </#list>
                    </#if>
                </div>
            </div>
        </main>
    </div>
</#if>
