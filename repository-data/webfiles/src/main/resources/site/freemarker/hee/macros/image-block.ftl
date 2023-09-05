<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro imageBlock imageBlock>
    <@hst.link var="imgLink" hippobean=imageBlock.image/>
    <figure class="nhsuk-image">
        <img class="nhsuk-image__img" src="${imgLink}" alt="${imageBlock.image.description!}">
        <#if imageBlock.caption?has_content>
            <figcaption class="nhsuk-image__caption">
                ${imageBlock.caption}
            </figcaption>
        <#elseif imageBlock.image.caption?has_content>
            <figcaption class="nhsuk-image__caption">
                ${imageBlock.image.caption}
            </figcaption>
        </#if>
    </figure>
</#macro>