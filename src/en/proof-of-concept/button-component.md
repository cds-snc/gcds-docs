---
title: End-to-end architecture proof of concept
layout: "layouts/base.njk"
eleventyNavigation:
  key: poc
  title: gc-ds-button
  order: 3
  locale: en
translationKey: "gc-ds-button"
---

# GCDS Button (WIP)

The various states and functionality of the gcds-button component

## Button properties

### Default

<gcds-button
>
This button has been passed no properties
</gcds-button>

``` html
<gcds-button
>
  This button has been passed no properties
</gcds-button>
```

### Type property

<gcds-button
  type="button"
>
  This button has type: button
</gcds-button>

<gcds-button
  type="submit"
>
  This button has type: submit
</gcds-button>

<gcds-button
  type="reset"
>
  This button has type: reset
</gcds-button>

<gcds-button
  type="link"
  href
>
  This button has type: link
</gcds-button>

``` html
<gcds-button
  type="button"
>
  This button has type: button
</gcds-button>

<gcds-button
  type="submit"
>
  This button has type: submit
</gcds-button>

<gcds-button
  type="reset"
>
  This button has type: reset
</gcds-button>

<gcds-button
  type="link"
  href
>
  This button has type: link
</gcds-button>
```

### Task property

<gcds-button
  task="primary"
>
  This button has task: primary
</gcds-button>

<gcds-button
  task="secondary"
>
  This button has task: secondary
</gcds-button>

<gcds-button
  task="danger"
>
  This button has task: danger
</gcds-button>

<gcds-button
  type="link"
  task="skip-to-content"
  href="#main"
  >
  Skip to main content
</gcds-button>

``` html
<gcds-button
  task="primary"
>
  This button has task: primary
</gcds-button>

<gcds-button
  task="secondary"
>
  This button has task: secondary
</gcds-button>

<gcds-button
  task="danger"
>
  This button has task: danger
</gcds-button>

<gcds-button
  type="link"
  task="skip-to-content"
  href="#main"
  >
  Skip to main content
</gcds-button>
```

## Demos

### Form with submit and reset buttons

<form onsubmit="alert('Form submitted');">
  <label for="name">Name</label>
  <input type="text" id="name" value="Not Ethan" />

<gcds-button
  type="submit"
  name="submit"
>
  Submit
</gcds-button>

<gcds-button
  type="reset"
  name="reset"
  task="danger"
>
  Reset form
</gcds-button>
</form>

``` html
<form onsubmit="alert('Form submitted');">
  <label for="name">Name</label>
  <input type="text" id="name" value="Not Ethan" />
  <gcds-button
    type="submit"
    name="submit"
  >
    Submit
  </gcds-button>
  <gcds-button
    type="reset"
    name="reset"
    task="danger"
  >
    Reset form
  </gcds-button>
</form>
```

### New tab primary link

<gcds-button
  type="link"
  href="/en"
  target="_blank"
  rel="nofollow"
>
  Return to english home page
</gcds-button>

``` html
<gcds-button
  type="link"
  href="/en"
  target="_blank"
  rel="nofollow"
>
  Return to english home page
</gcds-button>
```

### Skip to content link

<gcds-button
  type="link"
  task="skip-to-content"
  href="#main"
>
  Skip to main content
</gcds-button>

``` html
<gcds-button
  type="link"
  task="skip-to-content"
  href="#main"
>
  Skip to main content
</gcds-button>
```

### Style API (WIP)

<gcds-button
  task="primary"
  custom-border-weight="2px"
  custom-border-style="solid"
  custom-border-color="red"
>
  Button with red border
</gcds-button>

<gcds-button
  task="danger"
  custom-border-weight="5px"
  custom-border-style="solid"
  custom-border-color="blue"
>
  Button with blue border
</gcds-button>

``` html
<gcds-button
  task="primary"
  custom-border-weight="2px"
  custom-border-style="solid"
  custom-border-color="red"
>
  This button is in Vanilla JS
</gcds-button>

<gcds-button
  task="danger"
  custom-border-weight="5px"
  custom-border-style="solid"
  custom-border-color="blue"
>
  This button is in Vanilla JS
</gcds-button>
```

<style>
  pre {
    margin-bottom: 100px !important;
  }
</style>