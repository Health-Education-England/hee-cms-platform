<#include "../../include/imports.ftl">
<#include "person-author.ftl">

<#--  Renders Author cards  -->
<#macro authorCards authors hideAuthorContactDetails>
    ${(authors?size gt 1)?then('<div class="hee-card--author__container">', '')}
    <#list authors as author>
        <@personAuthor person=author.person bioSummary=author.bioSummary hideAuthorContactDetails=hideAuthorContactDetails />
    </#list>
    ${(authors?size gt 1)?then('</div>', '')}
</#macro>