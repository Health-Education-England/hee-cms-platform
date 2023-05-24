<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro googleMap block>
    <div class="hee-google-map">
        <#--  Google map embed code  -->
        <#assign embedCode = block.googleMapContentBlock.embedCode>
        <#assign startDoubleQuote= embedCode?index_of('"')>
        <#assign endDoubleQuote= embedCode?index_of('"',startDoubleQuote+1)>

        <div class="hee-google-map__wrapper">
            <iframe src=${embedCode[startDoubleQuote..endDoubleQuote]} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

        <#if (block.googleMapContentBlock.title?has_content || block.googleMapContentBlock.caption?has_content)>
            <figcaption class="hee-google-map__caption">
                <#--  Title  -->
                <#if block.googleMapContentBlock.title?has_content>
                    <h3>${block.googleMapContentBlock.title}</h3>
                </#if>

                <#--  Caption  -->
                <#if block.googleMapContentBlock.caption?has_content>${block.googleMapContentBlock.caption}</#if>
            </figcaption>
        </#if>
    </div>
</#macro>