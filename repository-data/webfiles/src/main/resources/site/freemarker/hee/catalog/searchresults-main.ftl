<#ftl output_format="HTML">

<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group.ftl">
<#include "../macros/micro-hero.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.listing"/>

<#-- @ftlvariable name="searchText" type="java.lang.String" -->
<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="item" type="[uk.nhs.hee.web.beans.Guidance, uk.nhs.hee.web.beans.LandingPage,...]" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->

<#if document??>
    <main class="page page--search" id="maincontent" role="main">
        <#--  Main header: START  -->
        <div class="page__header${(document.microHero?has_content)?then(' has-microhero', '')}">
            <#--  Micro hero  -->
            <#if document.microHero??>
                <@microHero microHeroImage=document.microHero />
            </#if>

            <div class="nhsuk-width-container">
                <#--  Title  -->
                <h1>${document.title}</h1>

                <#--  Subtitle  -->
                <#if document.subtitle?has_content>
                    <span class="nhsuk-caption-xl">${document.subtitle}</span>
                </#if>

                <#--  Summary  -->
                <#if document.summary?has_content>
                    <p class="nhsuk-lede-text">
                        <@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/>
                    </p>
                </#if>

                <!-- Search box: START -->
                <form class="hee-search-form" method="get" action="">
                    <div class="hee-search-form__wrapper nhsuk-form-group">
                        <label class="nhsuk-label nhsuk-u-visually-hidden" for="search-field">Enter a search term</label>
                        <input class="hee-search-form__input nhsuk-input nhsuk-search__input--search-results" type="search" name="q" autocomplete="off" id="search-field" value="${searchText!''}">
                        <button class="hee-search-form__submit" type="submit">
                            <span class="nhsuk-u-visually-hidden">Submit</span>
                            <svg class="hee-search-form__icon nhsuk-icon" width="14" height="14" viewBox="-5 -5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" stroke="#F0F4F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M14.9531 14.95L19.0032 19.0001" stroke="#F0F4F5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </form>
                <!-- Search box: END -->
            </div>
        </div>
        <#--  Main header: END  -->

        <#--  Main sections: START  -->
        <div class="page__main nhsuk-width-container">
            <div class="hee-search-listing">
                <#--  Search result summary: START  -->
                <@fmt.message key="results.count.text" var="resultsCountText"/>
                <#--  Result count  -->
                <h2>${pageable.total} ${resultsCountText}</h2>
                <#--  Search result summary: END  -->

                <#if pageable??>
                    <#--  Search results: START  -->
                    <div class="hee-search-listing__items">
                        <@searchListItem items=pageable.items/>
                    </div>
                    <#--  Search results: END  -->

                    <#--  Pagination  -->
                    <#include "../../include/pagination-nhs.ftl">
                </#if>
            </div>
        </div>
        <#--  Main sections: END  -->
    </main>
</#if>
