---
title: CSS Shortcuts
translationKey: shortcuts
layout: 'layouts/base.njk'
eleventyNavigation:
  key: shortcutsEN
  title: CSS Shortcuts
  locale: en
  order: 2
date: 'git Last Modified'
---

# CSS Shortcuts

Every digital product needs some custom styling. We did the work for you.

CSS Shortcuts is a CSS utility framework built to match GC Design System (GCDS) styles and Canada.ca standards. It provides predefined CSS utility classes that apply core design elements, like colours, spacing, and typography, to your HTML. The classes align with our [GCDS design tokens]({{ links.designTokens }}) for consistency and ease of use.

## How to use CSS Shortcuts

1. [Add the CSS stylesheet into your project]({{ links.getStartedDevelop }}). Different frameworks add it in different places.
2. Explore the different styling options in the menu.
3. Add the classes to their corresponding HTML to adjust the styling to meet your needs.

## Benefits

### Match styles

CSS Shortcuts lets you apply [predefined design tokens]({{ links.designTokens }}) directly to your HTML elements. These design tokens are used throughout GCDS, so your custom code will match our components.

### Faster development, less maintenance

Your code becomes simpler, clearer, and easier to maintain. We handle the updates, not you.

### No third-party dependency

CSS Shortcuts is built to meet the needs of the Government of Canada. Unlike other commonly used utility frameworks like Bootstrap or Tailwind, CSS Shortcuts is fully under our control.

### Accessibility built in

Add custom code to meet your specific needs, with the reassurance of knowing it’s been built to meet [GC accessibility standards]({{ links.accessibility }}).

## Browse CSS Shortcuts

### Defaults

<gcds-link href="{{ links.shortcutsResetStyles }}">Reset styles</gcds-link>

### Conditional styling

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <li>
    <gcds-link href="{{ links.shortcutsResponsiveLayout }}">Responsive layout</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsState }}">State</gcds-link>
  </li>
</gcds-grid>

### Layout

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <li>
    <gcds-link href="{{ links.shortcutsBoxSizing }}">Box sizing</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsContainerSizing }}">Container sizing</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsDisplay }}">Display</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsOverflow }}">Overflow</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsPosition }}">Position</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsVisibility }}">Visibility</gcds-link>
  </li>
</gcds-grid>

### Typography

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <li>
    <gcds-link href="{{ links.shortcutsFont }}">Font</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsFontFamily }}">Font family</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsFontSize }}">Font size</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsFontStyle }}">Font style</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsFontWeight }}">Font weight</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsLineHeight }}">Line height</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsLinkColour }}">Link colour</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsLinkSize }}">Link size</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsLinkDecoration }}">Link text decoration</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsListStyle }}">List style</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsTextAlign }}">Text align</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsTextColour }}">Text colour</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsTextOverflow }}">Text overflow</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsTextTransform }}">Text transform</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsWordBreak }}">Wordbreak</gcds-link>
  </li>
</gcds-grid>

### Spacing

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <li>
    <gcds-link href="{{ links.shortcutsMargin }}">Margin</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsPadding }}">Padding</gcds-link>
  </li>
</gcds-grid>

### Flexbox and grid

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <li>
    <gcds-link href="{{ links.shortcutsFlex }}">Flex</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsFlexDirection }}">Flex direction</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsFlexWrap }}">Flex wrap</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsFlexGrow }}">Flex grow</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsFlexShrink }}">Flex shrink</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsGridColumns }}">Grid columns</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsGridRows }}">Grid rows</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsGap }}">Gap</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsAlignContent }}">Align content</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsAlignItems }}">Align items</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsAlignSelf }}">Align self</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsJustifyContent }}">Justify content</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsJustifyItems }}">Justify items</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsJustifySelf }}">Justify self</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsPlaceContent }}">Place content</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsPlaceItems }}">Place items</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsPlaceSelf }}">Place self</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsOrder }}">Order</gcds-link>
  </li>
</gcds-grid>

### Background and border

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <li>
    <gcds-link href="{{ links.shortcutsBackgroundColour }}">Background colour</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsBorderColour }}">Border colour</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsBorderStyle }}">Border style</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsBorderWidth }}">Border width</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsBorderRadius }}">Border radius</gcds-link>
  </li>
</gcds-grid>

### Icon and image

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <li>
    <gcds-link href="{{ links.shortcutsIconNames }}">Icon names</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsIconSize }}">Icon size</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsImage }}">Image</gcds-link>
  </li>
</gcds-grid>

### Interactive

<gcds-grid tag="ul" columns-desktop="1fr 1fr 1fr" columns-tablet="1fr 1fr" columns="1fr">
  <li>
    <gcds-link href="{{ links.shortcutsCursor }}">Cursor</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsPointerEvents }}">Pointer events</gcds-link>
  </li>
  <li>
    <gcds-link href="{{ links.shortcutsTransition }}">Transition</gcds-link>
  </li>
</gcds-grid>

{% include "partials/helpus.njk" %}
