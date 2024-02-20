<#--  A wrapper macro for <@renderTaxonomyInfo.../> responsible for preparing taxonomy data
      for the requested taxonomy type like publication type [GlobalPublicationTypes], profession [GlobalProfessions],
      topic [GlobalHealthcareTopics], etc that needs to be rendered  -->
<#macro taxonomyInfo taxClass collectionPageURL taxLabel='' renderFor=''>
    <#if taxClass?? && taxClass.taxonomyName?has_content>
        <#switch taxClass.taxonomyName>
            <#case "GlobalClinicalDiscipline">
                <#--  Clinical discipline  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel="${(taxLabel?has_content)?then(taxLabel, 'Clinical discipline')}"
                    taxParameter='clinicalDiscipline'
                    multiValued=false
                    collectionPageURL=collectionPageURL
                    renderFor=renderFor/>
                <#break>
            <#case "GlobalProfessions">
                <#--  Professions  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel="${(taxLabel?has_content)?then(taxLabel, 'Professions')}"
                    taxParameter='profession'
                    multiValued=true
                    collectionPageURL=collectionPageURL
                    renderFor=renderFor/>
                <#break>
            <#case "GlobalPublicationTypes">
                <#--  Publication type  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel="${(taxLabel?has_content)?then(taxLabel, 'Publication type')}"
                    taxParameter='publicationType'
                    multiValued=false
                    collectionPageURL=collectionPageURL
                    renderFor=renderFor/>
                <#break>
            <#case "GlobalNewsTypes">
                <#--  News type  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel='Type'
                    taxParameter='newsType'
                    multiValued=true
                    collectionPageURL=collectionPageURL
                    renderFor=renderFor/>
                <#break>
            <#case "GlobalTags">
                <#--  Tags  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel="${(taxLabel?has_content)?then(taxLabel, 'Tags')}"
                    taxParameter='tag'
                    multiValued=true
                    collectionPageURL=collectionPageURL
                    renderFor=renderFor/>
                <#break>
            <#case "GlobalHealthcareTopics">
                <#--  Topics  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel="${(taxLabel?has_content)?then(taxLabel, 'Topics')}"
                    taxParameter='topic'
                    multiValued=true
                    collectionPageURL=collectionPageURL
                    renderFor=renderFor/>
                <#break>
            <#case "GlobalTrainingTypes">
                <#--  Training types  -->
                <@renderTaxonomyInfo
                    taxClass=taxClass
                    taxLabel="${(taxLabel?has_content)?then(taxLabel, 'Training types')}"
                    taxParameter='trainingType'
                    multiValued=false
                    collectionPageURL=collectionPageURL
                    renderFor=renderFor/>
                <#break>
            <#default>
        </#switch>
    </#if>
</#macro>

<#--  Renders taxonomy info part (i.e. taxonomy collection links) of publication, blog, news, etc info sidebar sections
      as well as taxonomy links for the training programme collection results cards  -->
<#macro renderTaxonomyInfo taxClass taxLabel taxParameter multiValued collectionPageURL renderFor>
    <#if taxClass.taxonomyValues?has_content>
        <#if renderFor='training-programme-summary'>
            <#--  For training programme summary  -->
            <li class="hee-card--summary__item">
                <span class="hee-card--summary__item__label">${taxLabel}:</span>
                <span class="hee-card--summary__item__value">
                    <@renderTaxonomyInfoLink
                        taxClass=taxClass
                        taxParameter=taxParameter
                        multiValued=multiValued
                        collectionPageURL=collectionPageURL/>
                </span>
            </li>
        <#elseif renderFor='training-programme-collection'>
            <#--  For training programme collection results cards  -->
            <div class="hee-listing-item__details__row">
                <span class="hee-listing-item__details__label">${taxLabel}:</span>
                <span>
                    <@renderTaxonomyInfoLink
                        taxClass=taxClass
                        taxParameter=taxParameter
                        multiValued=multiValued
                        collectionPageURL=collectionPageURL/>
                </span>
            </div>
        <#else>
            <#--  For publication, blog, news, etc info sidebar sections  -->
            <div class="hee-card--details__item">
                <span>${taxLabel}:</span>
                <@renderTaxonomyInfoLink
                    taxClass=taxClass
                    taxParameter=taxParameter
                    multiValued=multiValued
                    collectionPageURL=collectionPageURL/>
            </div>
        </#if>
    </#if>
</#macro>

<#--  Renders single and multi-valued taxonomy (e.g. professions, topics, publication type, etc) info links  -->
<#macro renderTaxonomyInfoLink taxClass taxParameter multiValued collectionPageURL>
    <#if multiValued>
        <#--  Multi-valued  -->
        <#assign subTaxParameter="sub${taxParameter?capitalize}">

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
    <#else>
        <#--  Single-valued  -->
        <#if collectionPageURL?has_content>
            <a href=${collectionPageURL}?${taxParameter}=${taxClass.taxonomyValues[0].key}>${taxClass.taxonomyValues[0].label}</a>
        <#else>
            ${taxClass.taxonomyValues[0].label}
        </#if>
    </#if>
</#macro>