<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.AtozPage" -->
<#-- @ftlvariable name="atozmap" type="java.util.Map" -->

<#if document??>
    <main class="page page--fullwidth" id="maincontent" role="main">
        <#--  Main header: START  -->
        <div class="page__header ">
            <div class="nhsuk-width-container">
                <#--  Title  -->
                <h1>${document.title}</h1>

                <#--  Summary  -->
                <#if document.summary?has_content>
                    <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                </#if>
            </div>
        </div>
        <#--  Main header: END  -->

        <#--  Main content: START  -->
        <div class="page__main">
            <div class="nhsuk-width-container">
                <div class="page__content">
                    <#if atozmap??>
                        <#--  A-Z letters navigation: START  -->
                        <nav class="nhsuk-nav-a-z" id="nhsuk-nav-a-z" role="navigation" aria-label="A to Z Navigation">
                            <ol class="nhsuk-nav-a-z__list" role="list">
                                <#list atozmap?keys as letter>
                                    <li class="nhsuk-nav-a-z__item">
                                        <#if atozmap[letter]??>
                                            <a class="nhsuk-nav-a-z__link" href="#${letter}">${letter}</a>
                                        <#else>
                                            <span class="nhsuk-nav-a-z__link--disabled">${letter}</span>
                                        </#if>
                                    </li>
                                </#list>
                            </ol>
                        </nav>
                        <#--  A-Z letters navigation: END  -->

                        <#--  A-Z letter cards: START  -->
                        <#list atozmap?keys as letter>
                            <#if atozmap[letter]??>
                                <#--  A-Z letter card: START  -->
                                <div class="nhsuk-card nhsuk-card--feature">
                                    <div class="nhsuk-card__content nhsuk-card__content--feature">
                                        <#--  Letter head  -->
                                        <h2 id="${letter}" class="nhsuk-card__heading nhsuk-card__heading--feature nhsuk-u-font-size-24">
                                            ${letter}
                                        </h2>

                                        <#--  Pages belonging to the letter '${letter}'  -->
                                        <ul class="nhsuk-list nhsuk-list--border">
                                            <#list atozmap[letter] as page>
                                                <li><a href="${page.value}">${page.key}</a></li>
                                            </#list>
                                        </ul>
                                    </div>
                                </div>
                                <#--  A-Z letter card: START  -->
                            </#if>
                        </#list>
                        <#--  A-Z letter cards: END  -->
                    </#if>
                </div>
            </div>
        </div>
        <#--  Main content: END  -->
    </main>
</#if>
