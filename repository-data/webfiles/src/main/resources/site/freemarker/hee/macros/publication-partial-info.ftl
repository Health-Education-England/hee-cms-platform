<#include "../macros/taxonomy-info.ftl">

<#--  Renders publication info partial for taxonomies  -->
<#macro publicationPartialInfo publicationTypeTaxClass professionTaxClass topicTaxClass publicationListingPageURL>
    <#--  Publication type  -->
    <@taxonomyInfo
        taxClass=publicationTypeTaxClass
        collectionPageURL=publicationListingPageURL/>

    <#--  Professions  -->
    <@taxonomyInfo
        taxClass=professionTaxClass
        collectionPageURL=publicationListingPageURL/>

    <#--  Topics  -->
    <@taxonomyInfo
        taxClass=topicTaxClass
        collectionPageURL=publicationListingPageURL/>
</#macro>