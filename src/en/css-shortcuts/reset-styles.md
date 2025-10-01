---
title: Reset styles
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsResetStylesEN
  title: Reset styles
  locale: en
  parent: shortcutsDefaultsEN
  order: 1
translationKey: 'shortcutsResetStyles'
date: 'git Last Modified'
---

# Reset styles

CSS Shortcuts includes reset styles in its stylesheet. The resets remove inconsistent browser styles and apply default styles that match GC Design System. They display elements predictably and consistently across browsers.

By default, these styles follow Canada.ca standards and provide a consistent foundation for basic HTML elements. Some elements may still require additional styling depending on your needs.

## Overview

The following reset styles are set by default:

- Universal box-sizing and spacing
- Accessible link styles
- Built-in Canada.ca typography
- Unstyled lists
- Images scale to fit containers
- Unified form field styles
- Simplified table styles
- Accessible motion settings

## Examples

### Universal box-sizing and spacing

All elements are set to `box-sizing: border-box`. Padding and borders are included in the element’s total width and height. Margins and padding are reset to `0` for consistent spacing.

```html
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### Accessible link styles

Links are styled to match our [link component]({{ links.link }}) and follow Canada.ca standards. They receive a clear focus state with distinct changes in background colour, text colour, border radius, and box shadow to improve focus visibility and accessibility.

{% shortcutPreview %}

<a href="#">
  The default GCDS link styles are built into this link.
</a>
{% endshortcutPreview %}

### Built-in Canada.ca typography

Text and headings use our responsive [typography design tokens]({{ links.typography }}). They are styled to match our [components]({{ links.components }}) and <gcds-link href="{{ links.canadaStandardsTypography }}" external>Canada.ca standards</gcds-link>.

They use defined character limits to create balanced and consistent line lengths. This helps overall readability and accessibility.

{% shortcutPreview %}

<h3>The default H3 heading typography styles are built into this heading.</h3>
<p>The default text typography styles are built into this text.</p>
{% endshortcutPreview %}

### Unstyled lists

All list types (ordered and unordered) display without their default styles, like bullets, numbers, margins and padding.

{% shortcutPreview %}

<ul>
  <li>Default list item 1</li>
  <li>Default list item 2</li>
  <li>Default list item 3</li>
</ul>
{% endshortcutPreview %}

### Images scale to fit containers

Images are made responsive by default. They are set to a `max-width` of `100%`, preventing them from overflowing their container and maintaining their original aspect ratio.

{% shortcutPreview "" %}

<img src="/images/common/css-shortcuts/image-example.png" alt="A horizontal banner with purple flowers." />
{% endshortcutPreview %}

### Unified form field styles

All form elements (`input`, `select`, and `textarea`) inherit the body’s font family and font size for consistency.

Borders around fieldsets are removed to create a more uniform and clean form appearance.

{% shortcutPreview %}

<fieldset>
  <legend>Shipping Address</legend>
  <div>
    <label for="shipping_name">Name</label>
    <input type="text" name="shipping_name" id="shipping_name">
  </div>
  <div>
    <label for="shipping_street">Street</label>
    <input type="text" name="shipping_street" id="shipping_street">
  </div>
</fieldset>
{% endshortcutPreview %}

### Simplified table styles

Table styles remove default cell spacing. Table borders collapse into a single line for a more uniform layout.

{% shortcutPreview %}

<table>
  <thead>
    <tr>
      <th class="b-sm">Last name</th>
      <th class="b-sm">First name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="b-sm">Sayed</td>
      <td class="b-sm">Fiza</td>
    </tr>
    <tr>
      <td class="b-sm">Walker</td>
      <td class="b-sm">Morgan</td>
    </tr>
  </tbody>
</table>
{% endshortcutPreview %}

### Accessible motion settings

By default, support has been added for people who have enabled the "Reduce Motion" preference in their browser settings.

The `@media (prefers-reduced-motion: reduce)` query sets various properties like `animation-duration`, `transition-duration`, and `scroll-behavior` to minimal or default values, effectively disabling animations and transitions.

```html
@media (prefers-reduced-motion: reduce) {
  *,
  ::before,
  ::after {
    animation-delay: -1ms !important;
    animation-duration: 1ms !important;
    animation-iteration-count: 1 !important;
    background-attachment: initial !important;
    scroll-behavior: auto !important;
    transition-duration: 0s !important;
    transition-delay: 0s !important;
  }
}
```
