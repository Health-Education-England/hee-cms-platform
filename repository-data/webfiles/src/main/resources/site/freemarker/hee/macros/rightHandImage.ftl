<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro rightHandImage image>
    <@hst.link var="imgLink" hippobean=image.rightHandImageReference.imageLink/>
    <figure class="nhsuk-image--card" style="width: 100%">
        <img class="nhsuk-image__img" src="${imgLink}" alt="${image.rightHandImageReference.alternateText}">
        <#if image.rightHandImageReference.caption?has_content>
            <figcaption class="nhsuk-image__caption">
                ${image.rightHandImageReference.caption}
            </figcaption>
        </#if>
    </figure>
</#macro>
