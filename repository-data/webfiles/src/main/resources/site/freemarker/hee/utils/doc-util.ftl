<#--  Returns the 'aria-label' attribute value for the given document details
      in "Download ${docTitle} in ${docExtn?upper_case} format, ${docSize}"  -->
<#function getDocAriaLabel docTitle docExtn docSize>
    <#return "Download ${docTitle} in ${docExtn?upper_case} format, ${docSize}">
</#function>

<#--  Returns the given file/document extension in lower case  -->
<#function getDocExtn file>
    <#return "${file.filename?keep_after_last('.')?lower_case}">
</#function>

<#--  Returns the given file/document size
      (as per nhsuk-frontend service manual [https://service-manual.nhs.uk/content/links])  -->
<#function getDocSize file>
    <#if (file.lengthMB > 1)>
        <#return "${file.lengthMB?string('0.00')}MB">
    <#else>
        <#return "${file.lengthKB?string('0')}KB">
    </#if>
</#function>