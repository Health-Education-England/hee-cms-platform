<#-- @ftlvariable name="pageable" type="org.onehippo.cms7.essentials.components.paging.Pageable" -->
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "../include/imports.ftl">

<#-- Filters -->
<@hst.link var="searchLink" hippobean=facetNavigation/>
<form  class="nhsuk-filter" method="get" action="${searchLink}"/>
<input type="text" name="query" value="${query}" />
</form>
<#if subnavigation?has_content>
    <@hst.link var="removeAll" hippobean=facetNavigation.rootFacetNavigationBean/>
    <p>Clear all [<a href="${removeAll}" class="deleteFacet">X</a>]</p>
</#if>
<#list facetNavigation.folders as facet>
    <ul>
        <li class="title">
            ${facet.name} (${facet.count})
            <#if facet.folders?has_content>
                <ul class="facets">
                    <#list facet.folders as facetvalue>
                        <li>
                            <#if facetvalue.leaf>
                                ${facetvalue.name?replace('_', ' ')?capitalize} <b>(${facetvalue.count})</b>
                                <#if facetvalue.count &gt; 0>
                                    <@hst.facetnavigationlink var="remove" current=facetNavigation remove=facetvalue/>
                                    [<a href="${remove}" class="deleteFacet">X</a>]
                                </#if>
                            <#else>
                                <@hst.link  hippobean=facetvalue var="link"  />
                                <a href="${link}">${facetvalue.name?replace('_', ' ')?capitalize} <b>(${facetvalue.count})</b></a>
                            </#if>
                        </li>
                    </#list>
                </ul>
            </#if>
        </li>
    </ul>
</#list>
<#-- End Filters -->
