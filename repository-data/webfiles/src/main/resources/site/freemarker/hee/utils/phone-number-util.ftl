<#--  Returns UK country code (+44) prefixed phone number  -->
<#function getUKCountryCodePrefixedPhoneNumber phoneNumber>
    <#assign phoneNumberWithoutSpaces=phoneNumber?replace(' ', '')>
    <#assign tidiedUpPhoneNumber=phoneNumber>

    <#if (phoneNumberWithoutSpaces?length > 10)>
        <#if phoneNumberWithoutSpaces?starts_with("0")>
            <#assign tidiedUpPhoneNumber="${tidiedUpPhoneNumber[1..]}">
        <#elseif phoneNumberWithoutSpaces?starts_with("44")>
            <#assign tidiedUpPhoneNumber="${tidiedUpPhoneNumber[2..]}">
        </#if>
    </#if>

    <#return "+44 ${tidiedUpPhoneNumber}">
</#function>