# Signage

## Quick start examples

#### HTML markup

```html
<ul class="nhsuk-list-signage nhsuk-list-signage--two-columns">
  <li>
    <a href="#">
      <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        aria-hidden="true" focusable="false">
        <path
          d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z">
        </path>
      </svg>
      Learning Zone
    </a>
  </li>
  <li>
    <a href="#">
      <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        aria-hidden="true" focusable="false">
        <path
          d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z">
        </path>
      </svg>
      Equality, Diversity and Inclusion
    </a>
  </li>
  <li>
    <a href="#">
      <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        aria-hidden="true" focusable="false">
        <path
          d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z">
        </path>
      </svg>
      Talent Management Toolkit
    </a>
  </li>
  <li>
    <a href="#">
      <svg class="nhsuk-icon nhsuk-icon__chevron-right" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        aria-hidden="true" focusable="false">
        <path
          d="M15.5 12a1 1 0 0 1-.29.71l-5 5a1 1 0 0 1-1.42-1.42l4.3-4.29-4.3-4.29a1 1 0 0 1 1.42-1.42l5 5a1 1 0 0 1 .29.71z">
        </path>
      </svg>
      Case studies
    </a>
  </li>
</ul>
```

#### Nunjucks macro

```
{%- from 'signage/macro.njk' import signage %}

{{ signage({
  "links": [
    {
      "url"  : "#",
      "label" : "Learning Zone"
    },
    {
      'url' : '#',
      'label' : 'Equality, Diversity and Inclusion'
    },
    {
      'url'  : '#',
      'label' : 'Talent Management Toolkit'
    },
    {
      'url'  : '#',
      'label' : 'Case studies'
    }]
  })
}}
```

---

### Nunjucks arguments

The signage macro takes the following arguments:

| Name                | Type     | Required  | Description  |
| --------------------|----------|-----------|--------------|
| **links**           | array    | Yes       | Array of navigation links for use in the signage component. |
| **links[].url**     | string   | Yes       | The href of a navigation item in the signage component. |
| **links[].label**   | string   | Yes       | The label of a navigation item in the signage component. |

If you are using Nunjucks macros in production be aware that using `html` arguments, or ones ending with `html` can be a [security risk](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting). Read more about this in the [Nunjucks documentation](https://mozilla.github.io/nunjucks/api.html#user-defined-templates-warning).
