# Related links card
An extension of [NHS digital service manual - Card](https://service-manual.nhs.uk/design-system/components/card) component in order to accommodate it to render a collection of links.

## Quick start examples

### Related links card with heading and links

#### HTML markup

```html
<div class="nhsuk-card">
  <div class="nhsuk-card__content">
    <h3 class="nhsuk-card__heading">Related Posts</h3>
    <ul class="nhsuk-related-links-card__list">
      <li>
        <a class="nhsuk-related-links-card__link" href="#">Expert searching</a>
      </li>
      <li>
        <a class="nhsuk-related-links-card__link" href="#">Search bank</a>
      </li>
      <li>
        <a class="nhsuk-related-links-card__link" href="#">Costing</a>
      </li>
      <li>
        <a class="nhsuk-related-links-card__link" href="#">Search training</a>
      </li>
    </ul>
  </div>
</div>
```

#### Nunjucks macro

```
{%- from 'related-links-card/macro.njk' import relatedLinksCard %}

{{ relatedLinksCard({
    "heading": "Related Posts",
    "links": [
      {
        "url"  : "#",
        "label" : "Expert searching"
      },
      {
        "url" : "#",
        "label" : "Search bank"
      },
      {
        "url" : "#",
        "label" : "Costing"
      },
      {
        "url"  : "#",
        "label" : "Search training"
      }
    ]
  })
}}
```

---

### Related links card with links ONLY

#### HTML markup

```html
<div class="nhsuk-card">
  <div class="nhsuk-card__content">
    <ul class="nhsuk-related-links-card__list">
      <li>
        <a class="nhsuk-related-links-card__link" href="#">Expert searching</a>
      </li>
      <li>
        <a class="nhsuk-related-links-card__link" href="#">Search bank</a>
      </li>
      <li>
        <a class="nhsuk-related-links-card__link" href="#">Costing</a>
      </li>
      <li>
        <a class="nhsuk-related-links-card__link" href="#">Search training</a>
      </li>
    </ul>
  </div>
</div>
```

#### Nunjucks macro

```
{%- from 'related-links-card/macro.njk' import relatedLinksCard %}

{{ relatedLinksCard({
    "links": [
      {
        "url"  : "#",
        "label" : "Expert searching"
      },
      {
        "url" : "#",
        "label" : "Search bank"
      },
      {
        "url" : "#",
        "label" : "Costing"
      },
      {
        "url"  : "#",
        "label" : "Search training"
      }
    ]
  })
}}
```

---

### Nunjucks arguments

The relatedNav macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **heading**         | string   | No        | Text heading of the related-links-card component. |
| **links**           | array    | Yes       | Array of navigation links for use in the related-links-card component. |
| **links[].url**     | string   | Yes       | The href of a navigation item in the related-links-card component. |
| **links[].label**   | string   | Yes       | The label of a navigation item in the related-links-card component. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
