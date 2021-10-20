<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >
<@hst.setBundle basename="uk.nhs.hee.web.global" scope="request"/>

<#assign datePattern = "d MMMM yyyy">
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
                    <@fmt.message key="${contentType}-last-reviewed"/>: ${lastNextReviewedDate.lastReviewed.getTime()?date?string["${datePattern}"]}
                </#if>
                <#if lastNextReviewedDate.nextReviewed??>
                    <#if lastNextReviewedDate.lastReviewed??>
                        <br/>
                    </#if>
                    <@fmt.message key="${contentType}-next-review"/>: ${lastNextReviewedDate.nextReviewed.getTime()?date?string["${datePattern}"]}
                </#if>
            </p>
        </div>
    </#if>
</#macro>