<#--  Returns document format by extension  -->
<#function getDocumentFormat extension>
    <#switch extension?upper_case>
        <#case 'PDF'>
            <#assign documentFormat='Adobe Portable Document Format (PDF)'/>
            <#break>
        <#case 'DOC'>
            <#assign documentFormat='Microsoft Word'/>
            <#break>
        <#case 'DOCX'>
            <#assign documentFormat='Microsoft Word (OpenXML)'/>
            <#break>
        <#case 'PPT'>
            <#assign documentFormat='Microsoft PowerPoint'/>
            <#break>
        <#case 'PPTX'>
            <#assign documentFormat='Microsoft PowerPoint (OpenXML)'/>
            <#break>
        <#case 'XLS'>
            <#assign documentFormat='Microsoft Excel'/>
            <#break>
        <#case 'XLSX'>
            <#assign documentFormat='Microsoft Excel (OpenXML)'/>
            <#break>
        <#case 'ODS'>
            <#assign documentFormat='OpenDocument Spreadsheet'/>
            <#break>
        <#case 'ODT'>
            <#assign documentFormat='OpenDocument Text'/>
            <#break>
        <#default>
            <#assign documentFormat=extension?upper_case/>
            <#break>
    </#switch>

    <#return documentFormat>
</#function>