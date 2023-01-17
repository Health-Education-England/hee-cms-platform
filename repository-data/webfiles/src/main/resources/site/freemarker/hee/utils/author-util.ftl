<#--  Returns comma separated author names for the given 'authors'  -->
<#function getCommaSeparatedAuthorNames authors>
    <#assign commaSeparatedAuthorNames=''>

    <#if authors?has_content>
        <#assign commaSeparatedAuthorNames>${authors?map(author -> author.person.name!)?join(', ')}</#assign>
    </#if>

    <#return commaSeparatedAuthorNames>
</#function>