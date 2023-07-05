<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"] >
<#assign fmt=JspTaglibs ["http://java.sun.com/jsp/jstl/fmt"] >

<#assign datePattern = "d MMMM yyyy">
<#macro lastNextReviewedDate lastNextReviewedDate contentType='page'>
    <#if lastNextReviewedDate.lastReviewed?? || lastNextReviewedDate.nextReviewed??>
        <#if contentType='media'>
            <#--  Last & next reviewed dates for Media embed  -->
            <div class="hee-media__reviews">
                <#if lastNextReviewedDate.lastReviewed??>
                    <p>
                        <@renderReviewDate msgKey="${contentType}-last-reviewed" reviewDate=lastNextReviewedDate.lastReviewed/>
                    </p>
                </#if>
                <#if lastNextReviewedDate.nextReviewed??>
                    <p>
                        <@renderReviewDate msgKey="${contentType}-next-review" reviewDate=lastNextReviewedDate.nextReviewed/>
                    </p>
                </#if>
            </div>
        <#else>
            <#--  Last & next reviewed dates for pages  -->
            <div class="nhsuk-review-date">
                <p class="nhsuk-body-s">
                    <#if lastNextReviewedDate.lastReviewed??>
                        <@renderReviewDate msgKey="${contentType}-last-reviewed" reviewDate=lastNextReviewedDate.lastReviewed/>
                    </#if>
                    <#if lastNextReviewedDate.nextReviewed??>
                        <#if lastNextReviewedDate.lastReviewed??>
                            <br/>
                        </#if>
                        <@renderReviewDate msgKey="${contentType}-next-review" reviewDate=lastNextReviewedDate.nextReviewed/>
                    </#if>
                </p>
            </div>
        </#if>
    </#if>
</#macro>

<#--  Renders review date with label  -->
<#macro renderReviewDate msgKey reviewDate>
    <@fmt.message key="${msgKey}"/>: ${reviewDate.getTime()?date?string["${datePattern}"]}
</#macro>