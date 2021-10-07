<#assign datePattern = "d MMMM yyyy">
<#macro audio audio>
    <#if audio??>
        <#if audio.audioContentBlock.embedCode??>
            <section class="nhsuk-page-content__section-one">
                <h2>${ audio.audioContentBlock.title }</h2>
                <div class="nhsuk-media">
                    ${ audio.audioContentBlock.embedCode }
                    <div class="nhsuk-media__info">
                            <div class="nhsuk-media__transcript">
                                <a href="javascript:void(0);">
                                    <span class="nhsuk-media__show-text">Show transcript</span>
                                    <span class="nhsuk-media__hide-text">Hide transcript</span>
                                </a>
                                <div class="nhsuk-media__transcript-text">
                                    <p>They say oh my God I see the way you shine</p>
                                </div>
                            </div>
                        <div class="nhsuk-media__reviews">
                            <p>
                                <@fmt.message key="media-last-reviewed" />: ${ audio.audioContentBlock.lastReviewed.getTime()?date?string["${datePattern}"] }
                            </p>
                            <p>
                                <@fmt.message key="media-next-review" />: ${ audio.audioContentBlock.nextReview.getTime()?date?string["${datePattern}"] }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </#if>
    </#if>
</#macro>
