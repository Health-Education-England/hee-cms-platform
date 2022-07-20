<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#macro appliesToBox box>
    <#if box??>
        <#assign item=box.appliesToBoxReference/>
        <#assign countryIdNameMap = { "scotland": "Scotland", "wales": "Wales", "northernIreland": "Northern Ireland" }>
        <#assign appliesToList = []>
        <#assign nonAppliesToList = []>
        <#list countryIdNameMap?keys as countryId>
            <#if item[countryId]>
                <#assign appliesToList += [countryId]>
            <#else>
                <#assign nonAppliesToList += [countryId]>
            </#if>
        </#list>

        <div class="hee-appliesto">
            <p>
                Applies to:
                <span><#rt>
                    England${(appliesToList?size > 0)?then('', '.')}<#t>
                    <#list appliesToList as countryId><#t>
                        <#if countryId?counter != appliesToList?size><#t>
                            ${', '}${countryIdNameMap[countryId]}<#t>
                        <#else><#t>
                            ${' and '}${countryIdNameMap[countryId]}.<#t>
                        </#if><#t>
                    </#list><#t>
                <#lt></span>

                ${(nonAppliesToList?size > 0)?then('See guidance for ', '')}<#rt>
                <#list nonAppliesToList as countryId><#t>
                    <#assign urlField = "url${countryId?cap_first}"><#t>
                    <#if countryId?counter == 1><#t>
                        <a href="${item[urlField]}">${countryIdNameMap[countryId]}</a><#t>
                    <#elseif countryId?counter == nonAppliesToList?size><#t>
                        ${' and '}<a href="${item[urlField]}">${countryIdNameMap[countryId]}</a>.<#t>
                    <#else><#t>
                        ${', '}<a href="${item[urlField]}">${countryIdNameMap[countryId]}</a><#t>
                    </#if>
                <#lt></#list>
            </p>
        </div>
    </#if>
</#macro>
