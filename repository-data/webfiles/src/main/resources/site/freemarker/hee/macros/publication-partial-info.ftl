<#include "../macros/taxonomy-info.ftl">

<#macro publicationPartialInfo publicationListingPageURL publicationTypeTaxClass professionTaxClass topicTaxClass>
    <#--  Publication type  -->
    <@taxonomyInfo
        taxClass=publicationTypeTaxClass!
        taxLabel='Publication type'
        taxParameter='publicationType'
        multiValued=false
        collectionPageURL=publicationListingPageURL/>

    <#--  Publication professions  -->
    <@taxonomyInfo
        taxClass=professionTaxClass!
        taxLabel='Professions'
        taxParameter='publicationProfession'
        multiValued=true
        collectionPageURL=publicationListingPageURL/>

    <#--  Publication topics  -->
    <@taxonomyInfo
        taxClass=topicTaxClass!
        taxLabel='Topics'
        taxParameter='publicationTopic'
        multiValued=true
        collectionPageURL=publicationListingPageURL/>
</#macro>