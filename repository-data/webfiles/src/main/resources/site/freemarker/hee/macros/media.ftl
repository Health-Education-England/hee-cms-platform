<#assign datePattern = "d MMMM yyyy">
<#macro media media>
    <#if media??>
        <#if media.mediaEmbedContentBlock.embedCode??>
            <section class="nhsuk-page-content__section-one">
                <h2>${ media.mediaEmbedContentBlock.title }</h2>
                <div class="nhsuk-media">
                    ${ media.mediaEmbedContentBlock.embedCode }
                    <div class="nhsuk-media__info">
                        <div class="nhsuk-media__transcript">
                            <a href="javascript:void(0);">
                                <span class="nhsuk-media__show-text">Show transcript</span>
                                <span class="nhsuk-media__hide-text">Hide transcript</span>
                            </a>
                            <div class="nhsuk-media__transcript-text">
                                <@hst.html hippohtml=media.mediaEmbedContentBlock.transcript/>
                            </div>
                        </div>
                        <div class="nhsuk-media__reviews">
                            <#if media.mediaEmbedContentBlock.lastReviewed??>
                                <p>
                                    <@fmt.message key="media-last-reviewed" />: ${ media.mediaEmbedContentBlock.lastReviewed.getTime()?date?string["${datePattern}"] }
                                </p>
                            </#if>
                            <#if media.mediaEmbedContentBlock.nextReview??>
                                <p>
                                    <@fmt.message key="media-next-review" />: ${ media.mediaEmbedContentBlock.nextReview.getTime()?date?string["${datePattern}"] }
                                </p>
                            </#if>
                        </div>
                    </div>
                </div>
            </section>
        </#if>
    </#if>
</#macro>