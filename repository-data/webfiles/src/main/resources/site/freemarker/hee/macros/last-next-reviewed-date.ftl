<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<#include '../utils/date-util.ftl'>

<#macro lastNextReviewedDate lastNextReviewedDate contentType='page'>
    <#if lastNextReviewedDate.lastReviewed?? || lastNextReviewedDate.nextReviewed??>

        <#if contentType='media'>
            <#assign wrapperDivClass='nhsuk-media__reviews'/>
        <#else>
            <#assign wrapperDivClass='nhsuk-review-date'/>
        </#if>

        <div class="${wrapperDivClass}">
            <p class="nhsuk-body-s">
                <#if lastNextReviewedDate.lastReviewed??>
                    <@fmt.message key="${contentType}-last-reviewed"/>: ${getDefaultFormattedDate(lastNextReviewedDate.lastReviewed)}
                </#if>
                <#if lastNextReviewedDate.nextReviewed??>
                    <#if lastNextReviewedDate.lastReviewed??>
                        <br/>
                    </#if>
                    <@fmt.message key="${contentType}-next-review"/>: ${getDefaultFormattedDate(lastNextReviewedDate.nextReviewed)}
                </#if>
            </p>
        </div>
    </#if>
</#macro>