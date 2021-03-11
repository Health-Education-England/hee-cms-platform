# Homepage section

## Quick start example

#### HTML markup

```html
<section class="nhsuk-section">
  <div class="nhsuk-width-container">
    <div class="nhsuk-grid-row">
      <div class="nhsuk-grid-column-full nhsuk-section__content">
        <div class="nhsuk-u-reading-width">
          <h2>Our services</h2>
        </div>
        <ul class="nhsuk-grid-row nhsuk-card-group">
          <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
            <div class="nhsuk-card nhsuk-card--clickable">
              <div class="nhsuk-card__content">
                <h3 class="nhsuk-card__heading nhsuk-heading-m">
                  <a class="nhsuk-card__link" href="#">Evidence and resources</a>
                </h3>
                <p class="nhsuk-card__description">Bulletins, search bank, OpenAthens and ways to collaborate with other
                  libraries.</p>
              </div>
            </div>
          </li>
          <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
            <div class="nhsuk-card nhsuk-card--clickable">
              <div class="nhsuk-card__content">
                <h3 class="nhsuk-card__heading nhsuk-heading-m">
                  <a class="nhsuk-card__link" href="#">Knowledge Management</a>
                </h3>
                <p class="nhsuk-card__description">Finding the latest evidence through bulletins, literature searching,
                  using trusted sources like OpenAthens and collaboration.</p>
              </div>
            </div>
          </li>
          <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
            <div class="nhsuk-card nhsuk-card--clickable">
              <div class="nhsuk-card__content">
                <h3 class="nhsuk-card__heading nhsuk-heading-m">
                  <a class="nhsuk-card__link" href="#">Quality and Impact</a>
                </h3>
                <p class="nhsuk-card__description">Finding the latest evidence through bulletins, literature searching,
                  using trusted sources like OpenAthens and collaboration.</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>
```

#### Nunjucks macro

```
{%- from 'homepage-section/macro.njk' import homepageSection %}

{% call homepageSection() %}
  <div class="nhsuk-u-reading-width">
    <h2>Our services</h2>
  </div>
  <ul class="nhsuk-grid-row nhsuk-card-group">
    <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
      {{ card({
        "href": "#",
        "clickable": "true",
        "heading": "Evidence and resources",
        "headingLevel": "3",
        "headingClasses": "nhsuk-heading-m",
        "description": "Bulletins, search bank, OpenAthens and ways to collaborate with other libraries."
      }) }}
    </li>
    <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
      {{ card({
        "href": "#",
        "clickable": "true",
        "heading": "Knowledge Management",
        "headingLevel": "3",
        "headingClasses": "nhsuk-heading-m",
        "description": "Finding the latest evidence through bulletins, literature searching, using trusted sources like OpenAthens and collaboration."
      }) }}
    </li>
    <li class="nhsuk-grid-column-one-third nhsuk-card-group__item">
      {{ card({
        "href": "#",
        "clickable": "true",
        "heading": "Quality and Impact",
        "headingLevel": "3",
        "headingClasses": "nhsuk-heading-m",
        "description": "Finding the latest evidence through bulletins, literature searching, using trusted sources like OpenAthens and collaboration."
      }) }}
    </li>
  </ul>
{% endcall %}
```

---

### Nunjucks arguments

The homepageSection macro doesn't takes any arguments, but takes everything (text/HTML) within the tag and decorates it as a Homepage section.

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
