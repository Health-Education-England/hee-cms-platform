<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#include "internal-link.ftl">

<#macro navMap block navMapRegionMap>
    <h2>${block.title}</h2>

    <#assign educationPrefix="${block.mapEducation}-"/>
    <#assign educationLabelPrefix="[${block.mapEducation?upper_case}] "/>

    <figure class="nhsuk-map">
        <figcaption class="nhsuk-map__caption">
            <#if block.description.content?has_content>
                <div class="nhsuk-map__description">
                    <@hst.html hippohtml=block.description/>
                </div>
            </#if>

            <ul id="regionList">
                <#list block.links as link>
                    <#if link.document??>
                        <#assign linkHREF=getInternalLinkURL(link.document)>                        
                    <#else>
                        <#assign linkHREF="${link.url}">
                    </#if>

                    <#if linkHREF?has_content>
                        <li>
                            <a id="${link.region?replace(educationPrefix, '')}" href="${linkHREF}">
                                ${(link.text?has_content)?then(link.text, navMapRegionMap[link.region]?replace(educationLabelPrefix, ''))}
                            </a>
                        </li>
                    </#if>
                </#list>
            </ul>
        </figcaption>
        <object class="nhsuk-map__image" data="<@hst.webfile path='/images/maps/${block.mapEducation}-regions.svg'/>" type="image/svg+xml" tabindex="-1"></object>
    </figure>
</#macro>