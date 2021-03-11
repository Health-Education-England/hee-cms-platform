<#include "../../include/imports.ftl">
<#include "../macros/bulletin-item.ftl">
<#include "../macros/select.ftl">

<@hst.setBundle basename="uk.nhs.hee.web.bulletin"/>
<#-- @ftlvariable name="categoriesMap" type="java.util.Map" -->
<#-- @ftlvariable name="item" type="uk.nhs.hee.web.beans.Bulletin" -->
<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->

<main id="maincontent" role="main" class="nhsuk-main-wrapper" xmlns="http://www.w3.org/1999/html">
    <div class="nhsuk-width-container">
        context is ${hstRequestContext.getSiteContentBasePath()}
        <div class="nhsuk-listing">
            <div class="nhsuk-grid-row">
                <div class="nhsuk-grid-column-one-third">
                    <#include "filter.ftl">
                </div>

                <div class="nhsuk-listing__list nhsuk-grid-column-two-thirds">
                    <div class="nhsuk-listing__summary o-flex@tablet">
                        <h2 class="nhsuk-listing__title nhsuk-heading-l o-flex__grow">
                            ${pageable.total} results
                        </h2>

                        <#--   Sort drop down -->
                        <@hst.renderURL var="pagelink" />
                        <form method="get" class="nhsuk-listing__sort o-flex o-flex--align-center" action="${pagelink}">
                            <div class="o-flex__grow">
                                <#list selectedCategories as category>
                                    <input type="hidden" name="category" value="${category}">
                                </#list>

                                <@fmt.message key="sort.label" var="sortLabel"/>
                                <@fmt.message key="sort.option.oldest" var="sortOptionOldest"/>
                                <@fmt.message key="sort.option.newest" var="sortOptionNewest"/>
                                <#assign selectOptions= {"asc": "${sortOptionOldest}", "desc":"${sortOptionNewest}"} />

                                <@select label="${sortLabel?html}" name="sortByDate" optionsMap=selectOptions selectedValue=selectedSortOrder/>
                            </div>
                        </form>
                        <#--    end sort dropdown -->
                    </div>

                    <#if pageable??>
                        <#list pageable.items as item>
                            <@bulletinItem
                            title="${item.title}"
                            category="${categoriesMap[item.category]}"
                            overview="${item.overview}"
                            websiteURL="${item.websiteUrl}"
                            websiteText="${item.websiteTitle}"
                            />
                        </#list>
                        <#include "../../include/pagination-nhs.ftl">
                    </#if>
                </div>
            </div>
        </div>
    </div>
</main>

<#--<@hst.headContribution category="htmlBodyEnd">-->
<#--<script>-->
<#--    [...document.getElementsByTagName('select')].forEach(-->
<#--        select => select.addEventListener('change', function () {-->
<#--                if (window.location.search.contains)-->
<#--                let queryDelimiter = window.location.search ? '&' : '?';-->
<#--                window.location = window.location.href + queryDelimiter + this.name + '=' + this.value;-->
<#--            }-->
<#--        )-->
<#--    )-->
<#--</script>-->
<#--</@hst.headContribution>-->

<#--<@hst.headContribution category="htmlBodyEnd">-->
<#--    <script>-->
<#--        function onclick() {-->
<#--            $.get( "${onClickLink}", function() {-->
<#--                window.location = "${link}";-->
<#--            });-->
<#--        }-->
<#--    </script>-->
<#--</@hst.headContribution>-->