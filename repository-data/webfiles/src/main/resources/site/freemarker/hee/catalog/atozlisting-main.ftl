<#ftl output_format="HTML">

<#include "../../include/imports.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/hero-section.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.listing"/>

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedCategories" type="java.util.List" -->

<#if document??>
    <#assign showHero=false>
    <#if document.heroImage??>
        <#assign showHero=true>
        <@heroSection document=document />
    </#if>
    <main id="maincontent" role="main" class="nhsuk-main-wrapper" xmlns="http://www.w3.org/1999/html">
        <div class="nhsuk-width-container">
            <#if showHero=false>
                <h1>${document.title}</h1>
            <#if searchText??>
                <h2>${searchText}</h2>123
                </#if>
                <#if document.summary??>
                    <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                </#if>
            </#if>
            <div class="nhsuk-listing">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-listing__list nhsuk-grid-column-two-thirds">
                            <#-- Results number -->
                            <@fmt.message key="results.count.text" var="resultsCountText"/>
                            <h2 class="nhsuk-listing__title nhsuk-heading-l o-flex__grow">
                                ${pageable.total} ${resultsCountText}
                            </h2>
                            <#-- End Results number -->

                        <#if pageable??>
                            <ul class="nhsuk-list nhsuk-list--border">
                                <@searchListItem items=pageable.items miniHubGuidancePathToURLMap=miniHubGuidancePathToURLMap/>
                            </ul>
                            <#include "../../include/pagination-nhs.ftl">
                        </#if>
                    </div>
                </div>
            </div>
        </div>
    </main>
</#if>
