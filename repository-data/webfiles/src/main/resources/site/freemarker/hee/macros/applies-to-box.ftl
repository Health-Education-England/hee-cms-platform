<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >

<#--  Retruns applies-to/guidance country name prefix (punctuation, etc)  -->
<#function getCountryPrefix loopCounter listSize>
    <#assign countryPrefix="">
    <#if loopCounter != 1>
        <#if loopCounter != listSize><#t>
            <#assign countryPrefix=", ">
        <#else><#t>
            <#assign countryPrefix=" and ">
        </#if>
    </#if>

    <#return countryPrefix>
</#function>

<#macro appliesToBox box>
    <#if box??>
        <#assign item=box.appliesToContentBlock/>
        <#assign countryList = [ "England", "Northern Ireland", "Scotland", "Wales" ]>
        <#assign appliesToList = []>
        <#assign nonAppliesToList = []>

        <#--  Creates a sequence/list of applies/non-applies country list  -->
        <#list countryList as country>
            <#if item['appliesTo${country?replace(" ", "")}'].appliesTo>
                <#assign appliesToList += [country]>
            <#else>
                <#assign nonAppliesToList += [country]>
            </#if>
        </#list>

        <div class="hee-appliesto">
            <p>
                <#--  Renders applies-to statement  -->
                <#if appliesToList?size gt 0>
                    Applies to:
                    <span><#rt>
                        <#list appliesToList as country><#t>
                            ${getCountryPrefix(country?counter, appliesToList?size)}${country}<#t>
                        </#list>.<#t>
                    </span><#lt>
                </#if>

                <#--  Renders non-applies-to/guidance statement  -->
                <#if nonAppliesToList?size gt 0>
                    See guidance for${' '}<#rt>
                    <#list nonAppliesToList as country><#t>
                        <#assign countryGuidanceLinkURL>${item['appliesTo${country?replace(" ", "")}'].linkURL}</#assign>
                        ${getCountryPrefix(country?counter, nonAppliesToList?size)}<a href="${countryGuidanceLinkURL}">${country}</a><#t>
                    </#list>.<#lt>
                </#if>
            </p>
        </div>
    </#if>
</#macro>
