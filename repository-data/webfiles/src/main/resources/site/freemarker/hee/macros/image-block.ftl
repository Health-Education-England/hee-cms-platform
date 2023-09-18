<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro imageBlock imageBlock>
    <@hst.link var="imgLink" hippobean=imageBlock.image/>
    <figure class="nhsuk-image">
        <#--  Image  -->
        <img class="nhsuk-image__img" src="${imgLink}" alt="${imageBlock.image.description!}">

        <#--  Caption  -->
        <#assign imageCaption="${(imageBlock.caption?has_content)?then(imageBlock.caption, imageBlock.image.caption!)}">
        <#if imageCaption?has_content>
            <figcaption class="nhsuk-image__caption">
                ${imageCaption}
            </figcaption>
        </#if>
    </figure>
</#macro>