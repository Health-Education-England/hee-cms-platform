<#--  Renders taxonomy info part (i.e. taxonomy collection links) of publication, blog, news, etc info sidebar sections  -->
<#macro taxonomyInfo taxClass collectionPageURL>
    <#if taxClass?? && taxClass.taxonomyName?has_content>
        <#switch taxClass.taxonomyName>
            <#case "GlobalPublicationTypes">
                <#--  Publication type  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel='Publication type'
                    taxParameter='publicationType'
                    multiValued=false
                    collectionPageURL=collectionPageURL/>
                <#break>
            <#case "GlobalProfessions">
                <#--  Professions  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel='Professions'
                    taxParameter='profession'
                    multiValued=true
                    collectionPageURL=collectionPageURL/>
                <#break>
            <#case "GlobalHealthcareTopics">
                <#--  Topics  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel='Topics'
                    taxParameter='topic'
                    multiValued=true
                    collectionPageURL=collectionPageURL/>
                <#break>
            <#case "GlobalNewsTypes">
                <#--  News type  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel='Type'
                    taxParameter='newsType'
                    multiValued=true
                    collectionPageURL=collectionPageURL/>
                <#break>
            <#case "GlobalTags">
                <#--  Tags  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel='Tags'
                    taxParameter='tag'
                    multiValued=true
                    collectionPageURL=collectionPageURL/>
                <#break>
            <#default>
        </#switch>
    </#if>
</#macro>

<#--  Renders single and multi-valued taxonomy info (e.g. professions, topics, publication type, etc) for publication, blog, news, etc info  -->
<#macro renderTaxonomyInfo taxClass taxLabel taxParameter multiValued collectionPageURL>
    <#if taxClass.taxonomyValues?has_content>
        <#if multiValued>
            <#--  Multi-valued  -->
            <#assign subTaxParameter="sub${taxParameter?capitalize}">

            <div class="hee-card--details__item">
                <span>${taxLabel}:</span>
                <#if collectionPageURL?has_content>
                    <#list taxClass.taxonomyValues as category>
                        <#assign keyPathElements=category.keyPath?split('/')>

                        <#--  Assumes two-level taxonomy hierarchy  -->
                        <a href=${collectionPageURL}?${taxParameter}=${(keyPathElements[0]='0')?then(category.key, keyPathElements[1])}${(keyPathElements[0]='1')?then('&' + subTaxParameter + '=' + category.key, '')}>${category.label}</a><#sep>, </#sep>
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