<#macro headingsTOC block>
    <#if block??>
        <#if block.shortTitle?has_content>
            <#assign tocTitle="${block.shortTitle}"/>
        <#else>
            <#assign tocTitle="${block.headingTitle}"/>
        </#if>
        <#switch block.headingType>
            <#case "H2">
                <h2>${block.headingTitle}</h2>
                <h2 hidden="true">${tocTitle}</h2>
                <#break>
            <#case "H3">
                <h3>${block.headingTitle}</h3>
                <h3 hidden="true">${tocTitle}</h3>
                <#break>
            <#case "H4">
                <h4>${block.headingTitle}</h4>
                <h4 hidden="true">${tocTitle}</h4>
                <#break>
            <#case "H5">
                <h5>${block.headingTitle}</h5>
                <h5 hidden="true">${tocTitle}</h5>
                <#break>
            <#default>
        </#switch>
    </#if>
</#macro>