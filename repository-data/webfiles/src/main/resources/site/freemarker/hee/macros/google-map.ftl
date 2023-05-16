<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro googleMap block>
    <div class="hee-google-map">
        <#--  Google Map embed code  -->
        <div class="hee-google-map__wrapper">${block.googleMapContentBlock.embedCode}</div>

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