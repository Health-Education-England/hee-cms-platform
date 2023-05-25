<@hst.defineObjects />
<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>
<#include "../utils/date-util.ftl">
<#include "../macros/internal-link.ftl">

<#macro featuredContent block maxCards=2>
    <#if block.featuredContentBlock??>
        <#assign fcBlock=block.featuredContentBlock>
        <#assign featuredDocuments = featuredContentBlockService.getFeaturedContent(hstRequest, fcBlock, maxCards)>

        <#--  Featured content: START  -->
        <#if (featuredDocuments?? && featuredDocuments?size > 0)>
            <#--  Title: START  -->
            <div class="nhsuk-u-reading-width">
                <h2>${contentTitle(fcBlock.contentType, fcBlock.method)}</h2>
            </div>
            <#--  Title: END  -->

            <#--  Description: START  -->
            <#if fcBlock.description??>
                <p>${fcBlock.description!?replace('\n', '<br>')}</p>
            </#if>
            <#--  Description: END  -->


            <#--  Featured content items/cards: START  -->
            <div class="hee-featured-content">
                <#list featuredDocuments as featuredDoc>
                    <div class="hee-featured-content__item">
                        <div class="hee-listing-item">
                            <#--  Item title  -->
                            <h3><a href=${getInternalLinkURL(featuredDoc)}>${featuredDoc.title}</a></h3>

                            <#--  Item details: START  -->
                            <div class="hee-listing-item__details">
                                <#--  Publication type  -->
                                <#if featuredDoc.publicationType?has_content>
                                    <@itemDetailRow label="Type:">
                                        ${featuredDoc.publicationType}
                                    </@itemDetailRow>
                                </#if>

                                <#--  Publication date  -->
                                <#if featuredDoc.publicationDate??>
                                    <@itemDetailRow label="Publish date:">
                                        ${getDefaultFormattedDate(featuredDoc.publicationDate)}
                                    </@itemDetailRow>
                                </#if>
                            </div>
                            <#--  Item details: END  -->

                            <#--  Item summary  -->
                            <#if featuredDoc.summary?has_content>
                                <div class="hee-listing-item__summary">${featuredDoc.summary}</div>
                            </#if>
                        </div>
                    </div>
                </#list>
            </div>
            <#--  Featured content items/cards: END  -->
        </#if>
        <#--  Featured content: END  -->
    </#if>
</#macro>

<#--  Renders item detail row  -->
<#macro itemDetailRow label>
    <div class="hee-listing-item__details__row">
        <span class="hee-listing-item__details__label">${label}</span>
        <span><#nested></span>
    </div>
</#macro>

<#--  Constructs and returns title for the featured content  -->
<#function contentTitle contentType method>
    <#assign contentTypeToTitleMap = { "publication": "Publications" }>

    <#return "${((method = 'Latest'))?then('${method}', 'Related')} ${contentTypeToTitleMap[contentType]}">
</#function>