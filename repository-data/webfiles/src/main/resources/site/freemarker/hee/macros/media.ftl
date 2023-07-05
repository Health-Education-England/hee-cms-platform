<#include "last-next-reviewed-date.ftl">

<#macro media media>
    <#if media??>
        <#if media.mediaEmbedContentBlock.embedCode?has_content>
            <#assign embedSrc=getEmbedCodeAttrValue(media.mediaEmbedContentBlock.embedCode, 'src')>
            <#if embedSrc?has_content>
                <div class="nhsuk-media">
                    <#--  Title  -->
                    <h2>${media.mediaEmbedContentBlock.title}</h2>

                    <#--  Description  -->
                    <#if media.mediaEmbedContentBlock.description?has_content && media.mediaEmbedContentBlock.description?trim != ''>
                        <div class="nhsuk-media__description">
                            <p>${media.mediaEmbedContentBlock.description}</p>
                        </div>
                    </#if>

                    <#--  Find out media type i.e. youtube/vimeo/anchor  -->
                    <#if embedSrc?contains('youtube')>
                        <#assign embedMediaType='youtube'>
                    <#elseif embedSrc?contains('vimeo')>
                        <#assign embedMediaType='vimeo'>
                    <#else>
                        <#assign embedMediaType='anchor'>
                    </#if>

                    <#--  Player  -->
                    <#assign iframetitle=getEmbedCodeAttrValue(media.mediaEmbedContentBlock.embedCode, 'title')>
                    <div class="nhsuk-media__container ${embedMediaType}">
                        <#if embedMediaType='anchor'>
                            <iframe src="${embedSrc}" ${(iframetitle?has_content)?then('title="${iframetitle}"', '')} frameborder="0" scrolling="no"></iframe>
                        <#else>
                            <iframe src="${embedSrc}" ${(iframetitle?has_content)?then('title="${iframetitle}"', '')} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"></iframe>
                        </#if>
                    </div>

                    <#--  Media info: START  -->
                    <div class="nhsuk-media__info">
                        <#--  Transcript  -->
                        <#if media.mediaEmbedContentBlock.transcript.content?has_content && media.mediaEmbedContentBlock.transcript.content?trim != ''>
                            <div class="nhsuk-media__transcript">
                                <a href="javascript:void(0);">
                                    <span class="nhsuk-media__show-text">${media.mediaEmbedContentBlock.showTranscriptButtonText}</span>
                                    <span class="nhsuk-media__hide-text">${media.mediaEmbedContentBlock.hideTranscriptButtonText}</span>
                                </a>
                                <div class="nhsuk-media__transcript-text">
                                    <@hst.html hippohtml=media.mediaEmbedContentBlock.transcript />
                                </div>
                            </div>
                        </#if>

                        <#--  Last & next reviewed dates  -->
                        <@hee.lastNextReviewedDate lastNextReviewedDate=media.mediaEmbedContentBlock.mediaLastNextReview contentType='media'/>
                    </div>
                    <#--  Media info: END  -->
                </div>
            </#if>
        </#if>
    </#if>
</#macro>

<#--  Function that returns the requested attribute value if available.
      Otherwise, returns an empty string  -->
<#function getEmbedCodeAttrValue embedCode attribute>
    <#assign attrIndex=embedCode?index_of(attribute + '=')>
    <#if attrIndex != -1>
        <#assign attrStartIndex=attrIndex + attribute?length + 2>
        <#return embedCode?substring(attrStartIndex, embedCode?index_of('"', attrStartIndex + 1))>
    </#if>

    <#return "">
</#function>