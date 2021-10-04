<#assign datePattern = "d MMMM yyyy">
<#macro video video>
    <#if video??>

        <#if video.videoContentBlock.videoId??>
            <section class="nhsuk-page-content__section-one">
                <h2>${ video.videoContentBlock.title }</h2>
                <div class="nhsuk-media">
                    <iframe class="youtube"
                            src="https://youtube.com/embed/${ video.videoContentBlock.videoId }"
                            title="Youtube Example"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
                            frameborder="0"></iframe>
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
                                Page last reviewed: ${ video.videoContentBlock.lastReviewed.getTime()?date?string["${datePattern}"] }
                            </p>
                            <p>
                                Next review due: ${ video.videoContentBlock.nextReview.getTime()?date?string["${datePattern}"] }
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </#if>
    </#if>
</#macro>
