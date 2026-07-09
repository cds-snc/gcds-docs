---
title: Button
layout: 'layouts/component-documentation.njk'
translationKey: 'buttonCode'
tags: ['buttonEN', 'code']
date: 'git Last Modified'
---

## On this page

- [Coding and accessibility for buttons](#coding-and-accessibility-for-buttons)
- [Examples](#section-examples)
- [Code builder](#code-builder)

## Coding and accessibility for buttons

### Check for visual accessibility

Check the button border's visibility against the surface where you're placing it.

### Select the right size

Use the small button attribute for actions when space is limited.

Note: The height of small buttons is WCAG AA compliant, but not AAA compliant.

### Use disabled button sparingly

- Use the disabled button sparingly when something needs to be done before an action can be initiated.
- Where possible, use other interventions like an error message to block incomplete form submissions.

<!-- ----- Examples ----- -->

{% examplesContent "en", "examples" %}
{% endexamplesContent %}

### In this section

- [Optional attributes](#section-optional)
- [Slots](#section-slot)

<!-- Optional section -->

{% examplesContent "en", "optional" %}
{% endexamplesContent %}

#### `button-id`

Use `button-id` to set the `id` for a button.

{% examplesPreview %}
<gcds-button id="submit-ei-application">
  Submit
</gcds-button>
{% endexamplesPreview %}

#### `button-role`

Use `button-role` to set the main style for a button. Choose from:

- `primary` (default)
- `secondary`
- `danger`
- `start`

<!-- Force line break -->

{% examplesPreview "340" %}
<gcds-button button-role="start">Start</gcds-button>
<gcds-button>Submit</gcds-button>
<gcds-button button-role="secondary">Cancel</gcds-button>
<gcds-button button-role="danger">Delete</gcds-button>
{% endexamplesPreview %}

#### `disabled`

Set `disabled` to `true` to make the button non-interactive. By default, `disabled` is set to `false`.

{% examplesPreview %}
<gcds-button button-role="danger" disabled>
  Delete
</gcds-button>
{% endexamplesPreview %}

#### `name`

Use `name` to specify the name of the button when submitting form data. This attribute helps identify which button triggered a form submission, especially when multiple buttons exist in a form.

{% examplesPreview "180" %}

<form action="..." method="post">
  <gcds-button button-role="secondary" name="save-draft" type="submit">Save draft</gcds-button>
  <gcds-button button-role="secondary" name="submit-application" type="submit">Submit application</gcds-button>
</form>
{% endexamplesPreview %}

#### `size`

Use `size` to set the button size. Choose from:

- `regular` (default)
- `small`

<!-- Force line break -->

{% examplesPreview "180" %}
<gcds-button>Default size</gcds-button>
<gcds-button size="small">Small size</gcds-button>
{% endexamplesPreview %}

#### `type`

Use `type` to define the button's function. Choose from:

- `button` (default)
- `link`
- `reset`
- `submit`

<!-- Force line break -->

{% examplesPreview "340" %}
<gcds-button>Button</gcds-button>
<gcds-button type="link">Link</gcds-button>
<gcds-button type="reset">Reset</gcds-button>
<gcds-button type="submit">Submit</gcds-button>
{% endexamplesPreview %}

#### `value`

Use `value` to define the data sent to the server when the button submits a form. The button only sends this `value` if it has a `name` attribute and if it triggered the submission. If multiple submit buttons exist, only the clicked button sends its value.

{% examplesPreview "180" %}

<form action="..." method="post">
  <gcds-button button-role="secondary" type="submit" name="applicationAction" value="save">Save draft</gcds-button>
  <gcds-button button-role="secondary" type="submit" name="applicationAction" value="submit">Submit application</gcds-button>
</form>
{% endexamplesPreview %}

<!-- Optional for links section -->

#### `download`

Use `download` to make the button download the file referenced by the `href` attribute, rather than navigate to it.

**This attribute is only supported when the button `type` is set to `link`**.

{% examplesPreview %}
<gcds-button type="link" href="/files/application-receipt.pdf" download>
  Download receipt
</gcds-button>
{% endexamplesPreview %}

#### `href`

Use `href` to define the destination of the link.

**This attribute is only supported when the button `type` is set to `link`**.

{% examplesPreview %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html">
  View benefits information
</gcds-button>
{% endexamplesPreview %}

#### `rel`

Use `rel` to specify the relationship between the current document and the linked document. Use it for security and privacy purposes, especially when links open in a new tab or window.

**This attribute is only supported when the button `type` is set to `link`**.

{% examplesPreview %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">
  View benefits information
</gcds-button>
{% endexamplesPreview %}

#### `target`

Use `target` to specify where the linked resource opens: in the same browsing context, or in a new tab or window.

**This attribute is only supported when the button `type` is set to `link`**.

{% examplesPreview %}
<gcds-button type="link" href="https://www.canada.ca/en/services/benefits.html" target="_blank" rel="noopener noreferrer">
  View benefits information
</gcds-button>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "en", "slot" %}
{% endexamplesContent %}

#### `default`

Use the `default` slot to add the button or link label text.

{% examplesPreview %}
<gcds-button>Submit</gcds-button>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Overview of gcds-button properties and events."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-button--events-properties&lang=en"
  width="1200"
  height="1800"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
