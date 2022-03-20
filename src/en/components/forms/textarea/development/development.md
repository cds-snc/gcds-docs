---
title: Implementing a Textarea for Development
layout: "layouts/base.njk"
eleventyNavigation:
  key: textareaDev
  title: Implementing a Textarea for Development
  locale: en
  parent: textarea
translationKey: "textareaDev"
---

# Implementing a Textarea for Development

The various states and functionality of the gcds-textarea component

## Textarea properties


``` html
<gcds-textarea
  cols="number"
  disabled="true | false"
  error-message="string"
  hide-label="true | false"
  hint="string"
  id="string"
  label="string"
  lang="en | fr"
  required="true | false"
  rows="number"
  textarea-character-count="number"
  value="string"
/>
```

### ID property

<gcds-textarea
  id="textarea-test"
  label="Label"
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
/>
```

### Label property

<gcds-textarea
  id="textarea-test"
  label="Label"
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
/>
```

### Cols property (optional)

<gcds-textarea
  id="textarea-test"
  label="Label"
  cols="10"
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
  cols="10"
/>
```

### Disabled property (optional)

<gcds-textarea
  id="textarea-test"
  label="Label"
  disabled
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
  disabled
/>
```

### Error Message property (optional)

<gcds-textarea
  id="textarea-test"
  label="Label"
  error-message="Error message"
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
  error-message="Error message"
/>
```

### Hide Label property (optional)
<div style="display: flex">
  <gcds-textarea
    id="textarea-hide-label"
    label="Label"
    hide-label
  ></gcds-textarea>
  <gcds-button style="margin: 2px 0 2px 10px">Search</gcds-button>
</div>

``` html
<gcds-textarea
  id="textarea-hide-label"
  label="Label"
  hide-label
/>
```

### Hint property (optional)

<gcds-textarea
  id="textarea-test"
  label="Label"
  hint="Hint text"
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
  hint="Hint text"
/>
```

### Required property (optional)

<gcds-textarea
  id="textarea-test"
  label="Label"
  required
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
  required
/>
```

### Rows property (optional)

<gcds-textarea
  id="textarea-test"
  label="Label"
  rows="2"
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
  rows="2"
/>
```

### Textarea Character Count property (optional)

<gcds-textarea
  id="textarea-test"
  label="Label"
  textarea-character-count="100"
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
  textarea-character-count="100"
/>
```

### Textarea Value property (optional)

<gcds-textarea
  id="textarea-test"
  label="Label"
  value="Value Text"
/>

``` html
<gcds-textarea
  id="textarea-test"
  label="Label"
  value="Value Text"
/>
```
