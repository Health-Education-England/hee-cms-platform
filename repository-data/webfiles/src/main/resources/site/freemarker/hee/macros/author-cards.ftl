<#include "../../include/imports.ftl">
<#include "person-author.ftl">

<#--  Renders Author cards  -->
<#macro authorCards authors>
    <#list authors as author>
        <div class="nhsuk-contact">
            <@personAuthor person=author.person bioSummary=author.bioSummary />
        </div>
    </#list>
</#macro>