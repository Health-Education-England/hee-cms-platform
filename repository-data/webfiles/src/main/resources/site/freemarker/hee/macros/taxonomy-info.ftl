<#--  Renders single and multi-valued taxonomy info for the sidebar (e.g. professions, topics, publication type, etc)  -->
<#macro taxonomyInfo taxClass taxLabel taxParameter multiValued collectionPageURL>
    <#if taxClass?? && taxClass.taxonomyValues?has_content>
        <#if multiValued>
            <#--  Multi-valued  -->
            <div class="hee-card--details__item">
                <span>${taxLabel}:</span>
                <#if collectionPageURL?has_content>
                    <#list taxClass.taxonomyValues as category>
                        <a href=${collectionPageURL}?${taxParameter}=${category.key}>${category.label}</a><#sep>, </#sep>
                    </#list>
                <#else>
                    <#list taxClass.taxonomyValues as category>
                        ${category.label}<#sep>, </#sep>
                    </#list>
                </#if>
            </div>
        <#else>
            <#--  Single-valued  -->
            <div class="hee-card--details__item">
                <span>${taxLabel}:</span>
                <#if collectionPageURL?has_content>
                    <a href=${collectionPageURL}?${taxParameter}=${taxClass.taxonomyValues[0].key}>${taxClass.taxonomyValues[0].label}</a>
                <#else>
                    ${taxClass.taxonomyValues[0].label}
                </#if>
            </div>
        </#if>
    </#if>
</#macro>