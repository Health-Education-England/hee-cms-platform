<#assign hst=JspTaglibs["http://www.hippoecm.org/jsp/hst/core"]>
<#include "../utils/date-util.ftl">
<#include "../macros/internal-link.ftl">

<#macro featuredContent block listContent>

    <#if block.featuredContentBlock?has_content>
        <#if block.featuredContentBlock.contentType == 'publicationtypes'>
            <#assign contentType = "Publications">
        <#else>
            <#assign contentType = "${block.featuredContentBlock.contentType}">
        </#if>


        <#if block.featuredContentBlock.method == 'Latest'>
            <h2>${block.featuredContentBlock.method} ${contentType}</h2>
        <#else>
            <h2>Related ${contentType}</h2>
        </#if>

        <#if block.featuredContentBlock.description??>
            <p class="nhsuk-body-l"><@hst.html formattedText="${block.featuredContentBlock.description!?replace('\n', '<br>')}"/></p>
        </#if>

        <div class="hee-featured-content">
            <#list listContent as content>
                <div class="hee-featured-content__item">
                    <div class="hee-listing-item">
                        <h3><a href=${getInternalLinkURL(content)}>${content.title}</a></h3>
                        <div class="hee-listing-item__details">
                            <div class="hee-listing-item__details__row">
                                <span class="hee-listing-item__details__label">Publication type:</span>
                                <span>${content.publicationType}</span>
                            </div>
                            <div class="hee-listing-item__details__row">
                                <span class="hee-listing-item__details__label">Publish date:</span>
                                <span>${getDefaultFormattedDate(content.publicationDate)}</span>
                            </div>
                        </div>
                        <div class="hee-listing-item__summary"> ${content.summary} </div>
                    </div>
                </div>
            </#list>
        </div>
    </#if>
</#macro>