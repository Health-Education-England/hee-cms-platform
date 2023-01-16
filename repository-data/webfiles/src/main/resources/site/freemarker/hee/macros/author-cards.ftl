<#include "../../include/imports.ftl">
<#include "person-author.ftl">

<#--  Renders Author cards  -->
<#macro authorCards authors>
    ${(authors?size gt 1)?then('<div class="hee-card--author__container">', '')}
    <#list authors as author>
        <@personAuthor person=author.person bioSummary=author.bioSummary />
    </#list>
    ${(authors?size gt 1)?then('</div>', '')}
</#macro>