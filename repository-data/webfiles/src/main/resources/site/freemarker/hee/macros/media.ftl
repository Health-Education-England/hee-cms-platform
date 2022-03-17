<#include "last-next-reviewed-date.ftl">

<#assign datePattern = "d MMMM yyyy">
<#macro media media>
    <#if media??>
        <#if media.mediaEmbedContentBlock.embedCode??>
            <section class="nhsuk-page-content__section-one">
                <div class="nhsuk-media">
                    <h2>${ media.mediaEmbedContentBlock.title }</h2>
                    <#if media.mediaEmbedContentBlock.description?has_content && media.mediaEmbedContentBlock.description?trim != ''>
                        <div class="nhsuk-media__description">
                            <p>${ media.mediaEmbedContentBlock.description }</p>
                        </div>
                    </#if>
                    ${ media.mediaEmbedContentBlock.embedCode }
                    <div class="nhsuk-media__info">
                        <#if media.mediaEmbedContentBlock.transcript.content?has_content && media.mediaEmbedContentBlock.transcript.content?trim != ''>
                            <div class="nhsuk-media__transcript">
                                <a href="javascript:void(0);">
                                    <span class="nhsuk-media__show-text">${ media.mediaEmbedContentBlock.showTranscriptButtonText }</span>
                                    <span class="nhsuk-media__hide-text">${ media.mediaEmbedContentBlock.hideTranscriptButtonText }</span>
                                </a>
                                <div class="nhsuk-media__transcript-text">
                                    <@hst.html hippohtml=media.mediaEmbedContentBlock.transcript />
                                </div>
                            </div>
                        </#if>

                        <@hee.lastNextReviewedDate lastNextReviewedDate=media.mediaEmbedContentBlock.mediaLastNextReview contentType='media'/>
                    </div>
                </div>
            </section>
        </#if>
    </#if>
</#macro>