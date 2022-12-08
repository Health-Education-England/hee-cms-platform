<#include "../../include/imports.ftl">
<#include "person-author.ftl">

<#--  Renders Author cards  -->
<#macro authorCards authors>
    <#list authors as author>
        <div class="nhsuk-contact">
            <@personAuthor person=author.person bio=author.bio />
        </div>
    </#list>
</#macro>