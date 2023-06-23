<#macro publicationPartialInfo publicationListingPageURL globalPublicationTypeMap globalProfessionsMap globalTopicsMap>
    <#--  Publication type  -->
    <#if globalPublicationTypeMap?has_content>
        <div class="hee-card--details__item">
            <span>Publication type:</span>
            <#if publicationListingPageURL?has_content>
                <a href=${publicationListingPageURL}?publicationType=${globalPublicationTypeMap?keys[0]}>${globalPublicationTypeMap?values[0]}</a>
            <#else>
                ${globalPublicationTypeMap?values[0]}
            </#if>
        </div>
    </#if>

    <#--  Publication professions  -->
    <#if globalProfessionsMap?has_content>
        <div class="hee-card--details__item">
            <span>Professions:</span>
            <#if publicationListingPageURL?has_content>
                <#list globalProfessionsMap as profession, value>
                    <a href=${publicationListingPageURL}?publicationProfession=${profession}>${value}</a><#sep>, </#sep>
                </#list>
            <#else>
                <#list globalProfessionsMap as profession>
                    ${profession}<#sep>, </#sep>
                </#list>
            </#if>
        </div>
    </#if>

    <#--  Publication topics  -->
    <#if globalTopicsMap?has_content>
        <div class="hee-card--details__item">
            <span>Topics:</span>
            <#if publicationListingPageURL?has_content>
                <#list globalTopicsMap as topic, value>
                    <a href=${publicationListingPageURL}?publicationTopic=${topic}>${value}</a><#sep>, </#sep>
                </#list>
            <#else>
                <#list globalTopicsMap as topic>
                    ${topic}<#sep>, </#sep>
                </#list>
            </#if>
        </div>
    </#if>

</#macro>
