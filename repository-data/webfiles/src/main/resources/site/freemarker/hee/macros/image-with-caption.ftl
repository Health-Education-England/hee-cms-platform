<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro imageWithCaption imageWithCaption>
    <@hst.link var="imgLink" hippobean=imageWithCaption/>
    <figure class="nhsuk-image" style="width: 100%">
            <img class="nhsuk-image__img" src="${imgLink}" alt="${imageWithCaption.description!}">
            <#if imageWithCaption.caption?has_content>
                <figcaption class="nhsuk-image__caption">
                    ${imageWithCaption.caption}
                </figcaption>
            </#if>
    </figure>
</#macro>
