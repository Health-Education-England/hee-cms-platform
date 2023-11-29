<#include "../macros/taxonomy-info.ftl">

<#--  Renders blog and news info partial for taxonomies  -->
<#macro blogAndNewsPartialInfo professionTaxClass topicTaxClass tagTaxClass listingPageURL>
    <#--  Professions  -->
    <@taxonomyInfo
        taxClass=professionTaxClass
        collectionPageURL=listingPageURL/>

    <#--  Topics  -->
    <@taxonomyInfo
        taxClass=topicTaxClass
        collectionPageURL=listingPageURL/>

    <#--  Tags  -->
    <@taxonomyInfo
        taxClass=tagTaxClass
        collectionPageURL=listingPageURL/>
</#macro>