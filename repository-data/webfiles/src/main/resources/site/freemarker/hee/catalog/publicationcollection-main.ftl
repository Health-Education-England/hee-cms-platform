<#ftl output_format="HTML">

<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "../../include/imports.ftl">
<#include "../macros/list-item.ftl">
<#include "../macros/select.ftl">
<#include "../macros/checkbox-group.ftl">
<#include "../macros/micro-hero.ftl">



<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.ListingPage" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#-- @ftlvariable name="item" type="[uk.nhs.hee.web.beans.Bulletin, uk.nhs.hee.web.beans.BlogPost]" -->
<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="selectedCategories" type="java.util.List" -->

    <main id="maincontent" role="main" class="nhsuk-main-wrapper" xmlns="http://www.w3.org/1999/html">
        <div class="nhsuk-width-container">

            <#if document??>
                <h1>${document.title}</h1>
                <p class="nhsuk-lede-text"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
            </#if>
            <div class="nhsuk-listing">
                <div class="nhsuk-grid-row">
                    <div class="nhsuk-grid-column-one-third">
                        <#-- Filters -->
                        <@hst.include ref="filters"/>
                        <#-- End Filters -->
                    </div>
                    <div class="nhsuk-listing__list nhsuk-grid-column-two-thirds">
                        <@hst.include ref="contentlist"/>
                    </div>
                </div>
            </div>
        </div>
    </main>
