<#macro microHero microHeroImage>
    <@hst.link var="microHeroImageLink" hippobean=microHeroImage />
    <div class="hee-microhero" style="background-image: url('${microHeroImageLink}');"></div>
</#macro>