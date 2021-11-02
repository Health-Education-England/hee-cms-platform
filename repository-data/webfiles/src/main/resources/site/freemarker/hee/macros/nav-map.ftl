<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#import "./link.ftl" as hlink>

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
                    <#assign href="${hlink.link(link)}"/>

                    <#if href?has_content>
                        <li>
                            <a id="${link.region?replace(educationPrefix, '')}" href="${href}" ${hlink.linkTarget(link)}>
                                ${(link.text?has_content)?then(link.text, navMapRegionMap[link.region]?replace(educationLabelPrefix, ''))}<@hlink.linkTextSuffix link=link/>
                            </a>
                        </li>
                    </#if>
                </#list>
            </ul>
        </figcaption>
        <object class="nhsuk-map__image" data="<@hst.link path='/static/assets/images/maps/${block.mapEducation}-regions.svg'/>" type="image/svg+xml" tabindex="-1"></object>
    </figure>
</#macro>