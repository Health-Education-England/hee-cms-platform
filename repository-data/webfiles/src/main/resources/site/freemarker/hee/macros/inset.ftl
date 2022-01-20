<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>
<#macro inset inset>       
    <div class="nhsuk-inset-text">
     <span class="nhsuk-u-visually-hidden">Information: </span>
        <p>
            ${inset.insetTextBlock.html.getContent()}
        </p>
    </div>    
</#macro>