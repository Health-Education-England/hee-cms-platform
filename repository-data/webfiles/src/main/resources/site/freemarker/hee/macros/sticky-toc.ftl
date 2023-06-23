<#macro stickyTOC active="false">
    <#if active == "true">
        <div class="page__footer">
            <div class="hee-anchorlinks__sticky ${active}" aria-expanded="false" id="hee-anchorlinks-sticky">
                <div class="hee-anchorlinks__sticky__wrapper">
                    <button aria-haspopup="true" aria-label="Open table of contents" class="hee-anchorlinks__sticky__btn" tabindex="1">
                        <span>Table of Contents</span>
                    </button>
                    <div class="hee-anchorlinks__sticky__container">
                        <div class="hee-anchorlinks nhsuk-anchor-links" data-toc-js="true" data-headings>
                            <h2 data-anchorlinksignore="true">Table of Contents</h2>
                        </div>
                    </div>
                    <a aria-label="Back to top of page" class="hee-anchorlinks__sticky__top-link" href="" tabindex="2">Back to top</a>
                </div>

            </div>
        </div>
    </#if>
</#macro>