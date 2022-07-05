<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#macro appliesToBox box>
    <#if box??>
        <#assign item=box.appliesToBoxReference/>
        <div class="hee-appliesto">
            <p>Applies to:
                <span>
                    England${item.scotland?then(', Scotland','')}${item.wales?then(', Wales','')}${item.northernIreland?then(', Northern Ireland','')}.
                </span>
                <#if item.scotland == false || item.wales == false || item.northernIreland == false>
                    See guidance for
                    <#if item.scotland == false>
                        <a href="${item.urlScotland}">Scotland</a>
                    </#if>
                    <#if item.wales == false>
                        ${item.scotland?then('',',')}
                        <a href="${item.urlWales}">Wales</a>
                    </#if>
                    <#if item.northernIreland == false>
                        ${item.scotland?then(item.wales?then('', 'and'),'and')}
                        <a href="${item.urlNorthernIreland}">Northern Ireland</a>
                    </#if>
                </#if>
            </p>
        </div>
    </#if>
</#macro>
