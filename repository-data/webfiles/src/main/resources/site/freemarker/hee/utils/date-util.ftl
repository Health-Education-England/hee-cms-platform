<#--  Returns the given date formatted in 'd MMMM yyyy' format  -->
<#function getDefaultFormattedDate date>
    <#return date.getTime()?date?string["d MMMM yyyy"]>
</#function>