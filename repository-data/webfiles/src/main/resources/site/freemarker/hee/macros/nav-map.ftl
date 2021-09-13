<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

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
                        <#assign linkHREF>
                            <@hst.link hippobean=link.document/>
                        </#assign>
                        <#assign openInNewWindow=false/>
                    <#else>
                        <#assign linkHREF="${link.url}">
                        <#assign openInNewWindow=true/>
                    </#if>

                    <#if linkHREF?has_content>
                        <li>
                            <a id="${link.region?replace(educationPrefix, '')}" href="${linkHREF}" ${openInNewWindow?then('target="_blank"', '')}>
                                ${(link.text?has_content)?then(link.text, navMapRegionMap[link.region]?replace(educationLabelPrefix, ''))}
                                <#if openInNewWindow>
                                    <span class="nhsuk-u-visually-hidden">Opens in a new window</span>
                                </#if>
                            </a>
                        </li>
                    </#if>
                </#list>
            </ul>
        </figcaption>
        <object class="nhsuk-map__image" data="<@hst.link path='/static/assets/images/maps/${block.mapEducation}-regions.svg'/>" type="image/svg+xml" tabindex="-1"></object>
    </figure>
</#macro>