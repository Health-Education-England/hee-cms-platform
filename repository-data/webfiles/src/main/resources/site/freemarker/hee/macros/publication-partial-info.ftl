<#macro publicationPartialInfo publicationListingPageURL globalPublicationTypeMap globalProfessionsMap globalTopicsMap>
    <#--  Publication type  -->
    <#if globalPublicationTypeMap?? && globalPublicationTypeMap.taxonomyValues?has_content>
        <div class="hee-card--details__item">
            <span>Publication type:</span>
            <#if publicationListingPageURL?has_content>
                <a href=${publicationListingPageURL}?publicationType=${globalPublicationTypeMap.taxonomyValues[0].key}>${globalPublicationTypeMap.taxonomyValues[0].label}</a>
            <#else>
                ${globalPublicationTypeMap.taxonomyValues[0].label}
            </#if>
        </div>
    </#if>

    <#--  Publication professions  -->
    <#if globalProfessionsMap?? && globalProfessionsMap.taxonomyValues?has_content>
        <div class="hee-card--details__item">
            <span>Professions:</span>
            <#if publicationListingPageURL?has_content>
                <#list globalProfessionsMap.taxonomyValues as category>
                    <a href=${publicationListingPageURL}?publicationProfession=${category.key}>${category.label}</a><#sep>, </#sep>
                </#list>
            <#else>
                <#list globalProfessionsMap.taxonomyValues as category>
                    ${category.label}<#sep>, </#sep>
                </#list>
            </#if>
        </div>
    </#if>

    <#--  Publication topics  -->
    <#if globalTopicsMap?? && globalTopicsMap.taxonomyValues?has_content>
        <div class="hee-card--details__item">
            <span>Topics:</span>
            <#if publicationListingPageURL?has_content>
                <#list globalTopicsMap.taxonomyValues as category>
                    <a href=${publicationListingPageURL}?publicationTopic=${category.key}>${category.label}</a><#sep>, </#sep>
                </#list>
            <#else>
                <#list globalTopicsMap.taxonomyValues as category>
                    ${category.label}<#sep>, </#sep>
                </#list>
            </#if>
        </div>
    </#if>

</#macro>