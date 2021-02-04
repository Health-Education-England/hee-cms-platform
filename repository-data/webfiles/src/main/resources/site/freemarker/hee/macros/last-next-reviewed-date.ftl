<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<@hst.setBundle basename="essentials.global"/>

<#assign datePattern = "d MMMM yyyy">
<#macro lastNextReviewedDate lastNextReviewedDate>
    <#if lastNextReviewedDate.lastReviewed?? || lastNextReviewedDate.nextReviewed??>
        <div class="nhsuk-review-date">
            <p class="nhsuk-body-s">
                <#if lastNextReviewedDate.lastReviewed??>
                    <@fmt.message key="page-last-reviewed"/>: ${lastNextReviewedDate.lastReviewed.getTime()?date?string["${datePattern}"]}
                </#if>
                <#if lastNextReviewedDate.nextReviewed??>
                    <#if lastNextReviewedDate.lastReviewed??>
                        <br/>
                    </#if>
                    <@fmt.message key="page-next-review"/>: ${lastNextReviewedDate.nextReviewed.getTime()?date?string["${datePattern}"]}
                </#if>
            </p>
        </div>
    </#if>
</#macro>