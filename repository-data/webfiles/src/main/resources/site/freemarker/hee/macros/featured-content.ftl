<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>
<#include "../utils/date-util.ftl">
<#include "../macros/internal-link.ftl">

<#macro featuredContent block listContent>
    <#if block.featuredContentBlock?has_content>
        <#assign fcBlock=block.featuredContentBlock>

        <#--  Title: START  -->
        <#assign contentType="${(fcBlock.contentType = 'publicationtypes')?then('Publications', fcBlock.contentType)}">
        <#assign featuredContentTitle="${((fcBlock.method = 'Latest'))?then('${fcBlock.method} ${contentType}', 'Related ${contentType}')}">

        <div class="nhsuk-u-reading-width">
            <h2 data-anchorlinksignore="true">${featuredContentTitle}</h2>
        </div>
        <#--  Title: END  -->

        <#--  Description: START  -->
        <#if fcBlock.description??>
            <p>${fcBlock.description!?replace('\n', '<br>')}</p>
        </#if>
        <#--  Description: END  -->


        <#--  Featured content items/cards: START  -->
        <div class="hee-featured-content">
            <#list listContent as content>
                <div class="hee-featured-content__item">
                    <div class="hee-listing-item">
                        <#--  Item title  -->
                        <h3><a href=${getInternalLinkURL(content)}>${content.title}</a></h3>

                        <#--  Item details: START  -->
                        <div class="hee-listing-item__details">
                            <#--  Publication type  -->
                            <#if content.publicationType??>
                                <@itemDetailRow label="Type:">
                                    ${content.publicationType}
                                </@itemDetailRow>
                            </#if>

                            <#--  Publication date  -->
                            <@itemDetailRow label="Publish date:">
                                ${getDefaultFormattedDate(content.publicationDate)}
                            </@itemDetailRow>
                        </div>
                        <#--  Item details: END  -->

                        <#--  Item summary  -->
                        <div class="hee-listing-item__summary">${content.summary}</div>
                    </div>
                </div>
            </#list>
        </div>
        <#--  Featured content items/cards: END  -->
    </#if>
</#macro>

<#--  Renders item detail row  -->
<#macro itemDetailRow label>
    <div class="hee-listing-item__details__row">
        <span class="hee-listing-item__details__label">${label}</span>
        <span><#nested></span>
    </div>
</#macro>
