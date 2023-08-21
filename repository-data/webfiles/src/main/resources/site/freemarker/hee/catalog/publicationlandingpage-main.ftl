<#ftl output_format="HTML">
<#include "../../include/imports.ftl">
<#include "../../include/page-meta-data.ftl">
<#import "../macros/components.ftl" as hee>
<#include "../macros/author-cards.ftl">
<#include "../macros/internal-link.ftl">
<#include '../utils/author-util.ftl'>
<#include '../utils/date-util.ftl'>
<#include "../utils/document-formats.ftl">

<#-- @ftlvariable name="document" type="uk.nhs.hee.web.beans.PublicationLandingPage" -->

<@hst.setBundle basename="uk.nhs.hee.web.global,uk.nhs.hee.web.blogpost"/>

<#--  Renders document detail block which renders title as well  -->
<#macro docDetailBlockForAssetLink assetLink>
    <@hst.link var="fileURL" hippobean=assetLink.assetData>
        <@hst.param name="forceDownload" value="true"/>
    </@hst.link>

    <div class="hee-publication-doc">
        <@docIcon fileType=assetLink.assetData.asset.filename?keep_after_last(".")?upper_case/>
        <div class="hee-publication-doc__details">
            <h3>
                <a href="${fileURL}" title="${assetLink.title}">
                    ${assetLink.title}
                </a>
            </h3>

            <@assetDetailBlockPartial
            publishedDate=assetLink.publicationDate
            fileType=assetLink.assetData.asset.filename?keep_after_last(".")
            fileLengthInKB=assetLink.assetData.asset.lengthKB />

        </div>
    </div>
</#macro>

<#--  Renders asset detail block partial i.e. renders asset published, updated, type and size  -->
<#macro assetDetailBlockPartial publishedDate fileType fileLengthInKB=0>
    <span>Published: ${getDefaultFormattedDate(publishedDate)}</span>
    <#if updatedDate?has_content><span>Updated: ${getDefaultFormattedDate(updatedDate)}</span></#if>
    <span>${fileType?upper_case}${(fileType = 'WEB')?then('',', ' + fileLengthInKB + 'kB')}</span>
</#macro>

<#--  Renders detail block partial used for web pubs -->
<#macro docDetailBlockPartial publishedDate updatedDate fileType fileLengthInKB=0>
    <span>Published: ${getDefaultFormattedDate(publishedDate)}</span>
    <#if updatedDate?has_content><span>Updated: ${getDefaultFormattedDate(updatedDate)}</span></#if>
    <span>${fileType?upper_case}${(fileType = 'WEB')?then('',', ' + fileLengthInKB + 'kB')}</span>
</#macro>

<#--  Renders document icon block  -->
<#macro docIcon fileType>
    <div class="hee-publication-doc__wrapper">
        <div class="hee-publication-doc__icon">
            <div class="hee-publication-doc__icon__page"></div>
            <div class="hee-publication-doc__icon__corner">
                <div class="hee-publication-doc__icon__corner__triangle"></div>
            </div>
        </div>
        <div class="hee-publication-doc__icon__title">${fileType}</div>
    </div>
</#macro>

<#if document??>
    <main id="maincontent" role="main" class="page page--rightbar">
        <#--  Main header: START  -->
        <div class="page__header">
            <div class="nhsuk-width-container">
                <#--  Title  -->
                <h1>${document.title}</h1>
                <#--  Subtitle  -->
                <span class="nhsuk-caption-xl">${document.subtitle!}</span>
            </div>
        </div>
        <#--  Main header: END  -->

        <#--  Main content: START  -->
        <div class="page__layout nhsuk-width-container">
            <#--  Main sections: START  -->
            <div class="page__main">
                <div class="page__content">
                    <#--  Summary  -->
                    <#if document.summary?has_content>
                        <p class="nhsuk-body-l"><@hst.html formattedText="${document.summary!?replace('\n', '<br>')}"/></p>
                    </#if>

                    <#--  Documents section: START  -->
                    <h2>Documents</h2>

                    <#--  Publication pages [WEB versions]  -->
                    <#if document.webPublications?has_content>
                        <#list document.webPublications as publication>
                            <div class="hee-publication-doc">
                                <@docIcon fileType='WEB'/>
                                <div class="hee-publication-doc__details">
                                    <h3>
                                        <a href="${getInternalLinkURL(publication)}">${publication.title} - Web</a>
                                    </h3>
                                    <@docDetailBlockPartial
                                        publishedDate=publication.publicationDate
                                        updatedDate=publication.pageLastNextReview.lastReviewed!
                                        fileType='WEB' />
                                </div>
                            </div>
                        </#list>
                    </#if>

                    <#--  Document versions using assets -->
                    <#if document.assetVersionsContent?has_content>
                        <#list document.assetVersionsContent as asset>
                            <@docDetailBlockForAssetLink assetLink=asset />
                        </#list>
                    </#if>

                    <#--  Language versions using assets -->
                    <#if document.languageVersionsContent?has_content>
                        <h2>Languages</h2>
                        <#list document.languageVersionsContent as asset>
                            <@docDetailBlockForAssetLink assetLink=asset />
                        </#list>
                    </#if>
                    <#--  Documents section: END  -->

                    <#--  Other document formats: START  -->
                    <#if document.otherFormatsEmail?has_content>
                        <h2>Other formats</h2>
                        <div class="hee-publication-doc">
                            <p>If you need documents in a different format like accessible PDF,
                                large print, easy read, audio recording or braille please email
                            <a href="mailto:${document.otherFormatsEmail}">${document.otherFormatsEmail}</a>.</p>
                        </div>
                    </#if>
                    <#--  Other document formats: END  -->

                    <#--  Author cards  -->
                    <@authorCards authors=document.authors hideAuthorContactDetails=document.hideAuthorContactDetails!false/>

                </div>
            </div>
            <#--  Main sections: END  -->

            <#--  Sidebar sections: START  -->
            <aside class="page__rightbar">
                <#--  Publication Info section: START  -->
                <div class="hee-card hee-card--details">
                    <h3>Publication info</h3>

                    <#--  Published date  -->
                    <div class="hee-card--details__item">
                        <span>Published:</span> ${getDefaultFormattedDate(document.publicationDate)}
                    </div>

                    <#--  Updated date  -->
                    <div class="hee-card--details__item">
                        <span>Updated:</span> ${getDefaultFormattedDate(document.updatedDate)}
                    </div>

                    <#--  Publication type  -->
                    <div class="hee-card--details__item">
                        <span>Publication Type:</span>
                        <#if publicationListingPageURL?has_content>
                            <a href=${publicationListingPageURL}?publicationType=${document.publicationType}>${publicationTypeMap[document.publicationType]}</a>
                        <#else>
                            ${publicationTypeMap[document.publicationType]}
                        </#if>
                    </div>

                    <#--  Publication professions  -->
                    <#if document.publicationProfessions?has_content>
                        <div class="hee-card--details__item">
                            <span>Professions:</span>
                            <#if publicationListingPageURL?has_content>
                                <#list document.publicationProfessions as profession>
                                    <a href=${publicationListingPageURL}?publicationProfession=${profession}>${publicationProfessionMap[profession]}</a><#sep>, </#sep>
                                </#list>
                            <#else>
                                <#list document.publicationProfessions as profession>
                                    ${publicationProfessionMap[profession]}<#sep>, </#sep>
                                </#list>
                            </#if>
                        </div>
                        </#if>

                    <#--  Publication topics  -->
                    <#if document.publicationTopics?has_content>
                        <div class="hee-card--details__item">
                            <span>Topics:</span>
                            <#if publicationListingPageURL?has_content>
                                <#list document.publicationTopics as topic>
                                    <a href=${publicationListingPageURL}?publicationTopic=${topic}>${publicationTopicMap[topic]}</a><#sep>, </#sep>
                                </#list>
                            <#else>
                                <#list document.publicationTopics as topic>
                                    ${publicationTopicMap[topic]}<#sep>, </#sep>
                                </#list>
                            </#if>
                        </div>
                    </#if>

                    <#--  Read time  -->
                    <div class="hee-card--details__item">
                        <span>Estimated reading time:</span> ${document.readTime} mins
                    </div>
                </div>
                <#--  Publication Info section: START  -->
            </aside>
            <#--  Sidebar sections: END  -->
        </div>

        <#-- Related content -->
        <#if document.featuredContentBlock??>
            <section class="page__feature">
                <div class="nhsuk-width-container">
                    <@hee.featuredContent block=document/>
                </div>
            </section>
        </#if>
        <#-- Related content: END -->

        <#--  Main content: END  -->
    </main>
</#if>
