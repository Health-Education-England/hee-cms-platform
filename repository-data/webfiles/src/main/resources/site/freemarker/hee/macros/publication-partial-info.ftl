<#macro publicationPartialInfo publicationListingPageURL rootPublicationTypeMap rootProfessionMap rootTopicMap>
    <#--  Publication type  -->
    <#if rootPublicationTypeMap?has_content>
        <div class="hee-card--details__item">
            <span>Publication type:</span>
            <#if publicationListingPageURL?has_content>
                <a href=${publicationListingPageURL}?publicationType=${rootPublicationTypeMap?keys[0]}>${rootPublicationTypeMap?values[0]}</a>
            <#else>
                ${publicationTypeTaxClass.taxonomyValues[0].label}
            </#if>
        </div>
    </#if>

    <#--  Publication professions  -->
    <#if rootProfessionMap?has_content>
        <div class="hee-card--details__item">
            <span>Professions:</span>
            <#if publicationListingPageURL?has_content>
                <#list rootProfessionMap as key, value>
                    <a href=${publicationListingPageURL}?publicationProfession=${key}>${value}</a><#sep>, </#sep>
                </#list>
            <#else>
                <#list rootProfessionMap?values as value>
                    ${value}<#sep>, </#sep>
                </#list>
            </#if>
        </div>
    </#if>

    <#--  Publication topics  -->
    <#if rootTopicMap?has_content>
        <div class="hee-card--details__item">
            <span>Topics:</span>
            <#if publicationListingPageURL?has_content>
                <#list rootTopicMap as key, value>
                    <a href=${publicationListingPageURL}?publicationTopic=${key}>${value}</a><#sep>, </#sep>
                </#list>
            <#else>
                <#list rootTopicMap?values as value>
                    ${value}<#sep>, </#sep>
                </#list>
            </#if>
        </div>
    </#if>

</#macro>