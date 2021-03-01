# Related nav

## Quick start examples

### Related nav with heading, sub heading and links

#### HTML markup

```html
<div class="nhsuk-related-nav">
  <h2 class="nhsuk-related-nav__heading">
    Mental health and wellbeing
  </h2>
  <nav role="navigation" class="nhsuk-related-nav__nav-section">
    <h3 class="nhsuk-related-nav__sub-heading">Help with stress, anxiety or depression</h3>
    <ul class="nhsuk-related-nav__list nhsuk-related-nav__list--sub">
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/understanding-stress/">
          Stress
        </a>
      </li>
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/understanding-panic/">
          Anxiety, fear and panic
        </a>
      </li>
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/low-mood-and-depression/">
          Low mood, sadness and depression
        </a>
      </li>
    </ul>
    <h3 class="nhsuk-related-nav__sub-heading">Help with other common feelings</h3>
    <ul class="nhsuk-related-nav__list nhsuk-related-nav__list--sub">
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/feeling-lonely/">
          Feeling lonely
        </a>
      </li>
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/coping-with-bereavement/">
          Grief after bereavement or loss
        </a>
      </li>
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/controlling-anger/">
          Anger
        </a>
      </li>
    </ul>
  </nav>
</div>
```

#### Nunjucks macro

```
{%- from 'related-nav/macro.njk' import relatedNav %}

{{ relatedNav({
    "heading": "Mental health and wellbeing",
    "subsections": [{
      "heading": "Help with stress, anxiety or depression",
      "links": [
        {
          "url" : "#",
          "label" : "Stress"
        },
        {
          "url" : "#",
          "label" : "Anxiety, fear and panic"
        },
        {
          "url"  : "#",
          "label" : "Low mood, sadness and depression"
        }
      ]
    },
    {
      "heading": "Help with other common feelings",
      "links": [
        {
          "url"  : "#",
          "label" : "Feeling lonely"
        },
        {
          "url" : "#",
          "label" : "Grief after bereavement or loss"
        },
        {
          "url" : "#",
          "label" : "Anger"
        }
      ]
    }]
  })
}}
```

---

### Related nav with heading and links

#### HTML markup

```html
<div class="nhsuk-related-nav">
  <h2 class="nhsuk-related-nav__heading">
    Mental health and wellbeing
  </h2>
  <nav role="navigation" class="nhsuk-related-nav__nav-section">
    <ul class="nhsuk-related-nav__list nhsuk-related-nav__list--sub">
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/understanding-stress/">
          Stress
        </a>
      </li>
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/understanding-panic/">
          Anxiety, fear and panic
        </a>
      </li>
      <li class="nhsuk-related-nav__item">
        <a class="nhsuk-related-nav__link" href="/conditions/stress-anxiety-depression/low-mood-and-depression/">
          Low mood, sadness and depression
        </a>
      </li>
    </ul>
  </nav>
</div>
```

#### Nunjucks macro

```
{%- from 'related-nav/macro.njk' import relatedNav %}

{{ relatedNav({
    "heading": "Mental health and wellbeing",
    "subsections": [{
      "links": [
        {
          "url" : "#",
          "label" : "Stress"
        },
        {
          "url" : "#",
          "label" : "Anxiety, fear and panic"
        },
        {
          "url"  : "#",
          "label" : "Low mood, sadness and depression"
        }
      ]
    }]
  })
}}
```

---

### Nunjucks arguments

The relatedNav macro takes the following arguments:

| Name                            | Type     | Required  | Description  |
| --------------------------------|----------|-----------|--------------|
| **heading**                     | string   | No        | Text heading of the related-nav component. |
| **subsections**                 | array    | No        | Array of related-nav sub sections for use in the related-nav component. |
| **subsections.heading**         | string   | No        | Text heading of sub section for use in the related-nav component. |
| **subsections.links**           | array    | Yes       | Array of navigation links for use in the related-nav sub sections. |
| **subsections.links[].url**     | string   | Yes       | The href of a navigation item in the related-nav subsection. |
| **subsections.links[].label**   | string   | Yes       | The label of a navigation item in the related-nav subsection. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
