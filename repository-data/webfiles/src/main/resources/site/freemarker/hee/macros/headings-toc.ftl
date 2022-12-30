<#macro headingsTOC block>
    <#if block??>
        <#if block.shortTitle?has_content>
            <#assign tocTitle="${block.shortTitle}"/>
        <#else>
            <#assign tocTitle="${block.headingTitle}"/>
        </#if>
        <#switch block.headingType>
            <#case "H2">
                <h2 class="toc_h2" data-short-title="${tocTitle}">${block.headingTitle}</h2>
                <#break>
            <#case "H3">
                <h3 class="toc_h3" data-short-title="${tocTitle}">${block.headingTitle}</h3>
                <#break>
            <#default>
        </#switch>
    </#if>
</#macro>