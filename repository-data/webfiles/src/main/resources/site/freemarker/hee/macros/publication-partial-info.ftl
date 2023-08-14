<#macro publicationPartialInfo publicationListingPageURL publicationTypeTaxClass professionTaxClass topicTaxClass>
    <#--  Publication type  -->
    <#if publicationTypeTaxClass?? && publicationTypeTaxClass.taxonomyValues?has_content>
        <div class="hee-card--details__item">
            <span>Publication type:</span>
            <#if publicationListingPageURL?has_content>
                <a href=${publicationListingPageURL}?publicationType=${publicationTypeTaxClass.taxonomyValues[0].key}>${publicationTypeTaxClass.taxonomyValues[0].label}</a>
            <#else>
                ${publicationTypeTaxClass.taxonomyValues[0].label}
            </#if>
        </div>
    </#if>

    <#--  Publication professions  -->
    <#if professionTaxClass?? && professionTaxClass.taxonomyValues?has_content>
        <div class="hee-card--details__item">
            <span>Professions:</span>
            <#if publicationListingPageURL?has_content>
                <#list professionTaxClass.taxonomyValues as category>
                    <a href=${publicationListingPageURL}?publicationProfession=${category.key}>${category.label}</a><#sep>, </#sep>
                </#list>
            <#else>
                <#list professionTaxClass.taxonomyValues as category>
                    ${category.label}<#sep>, </#sep>
                </#list>
            </#if>
        </div>
    </#if>

    <#--  Publication topics  -->
    <#if topicTaxClass?? && topicTaxClass.taxonomyValues?has_content>
        <div class="hee-card--details__item">
            <span>Topics:</span>
            <#if publicationListingPageURL?has_content>
                <#list topicTaxClass.taxonomyValues as category>
                    <a href=${publicationListingPageURL}?publicationTopic=${category.key}>${category.label}</a><#sep>, </#sep>
                </#list>
            <#else>
                <#list topicTaxClass.taxonomyValues as category>
                    ${category.label}<#sep>, </#sep>
                </#list>
            </#if>
        </div>
    </#if>

</#macro>