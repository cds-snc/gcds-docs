---
title: Typography - Foundations
layout: "layouts/documentation.njk"
translationKey: "typography"
eleventyNavigation:
  key: typographyEN
  title: Typography
  locale: en
  parent: foundationsEN
  order: 0
onThisPage:
  0: Typography design tokens
  1: Guidance on using typography
github: https://github.com/cds-snc/gcds-tokens
---

<header>

# Typography tokens

Typography is the presentation of text. It includes fonts, sizing, and spacing as applied to the style, arrangement, and appearance of letters, numbers, and symbols.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="Typography design tokens">

## Typography design tokens

Default fonts, and styled size settings make digital products responsive, predictable, and readable across devices and platforms.

Decisions about typography values (fonts, sizes, weights) are built into typography tokens in the GC Design System for a unified design.

### Font defaults

Font family tokens:
- `$gcds-font-families-heading`
- `$gcds-font-families-body`
- `$gcds-font-families-monospace`
- `$gcds-font-families-icons`

Font sizes are configured with rem units. All font sizes are relative to base size 20px.

| Display  | Font type  | Size (rem)  | Size (px)  | Weight  | Line height  |
|---|---|---|---|---|---|
| Heading 1  | Lato  | 2.5  | 40  | bold  | 128%  |
| Heading 2  | Lato  | 2.25  | 36  | bold  | 144%  |
| Heading 3  | Lato  | 2.0  | 32  | bold  | 162%  |
| Heading 4  | Lato  | 1.78  | 28  | bold  | 182%  |
| Heading 5  | Noto sans  | 1.58  | 25  | regular  | 102%  |
| Heading 6  | Noto sans  | 1.41  | 22  | regular  | 102%  |
| Text  | Noto sans  | 1.25  | 20  | regular  | 130%  |
| monospace  | Menlo  | 1.11  | 17  | regular  | 146%  |

</section>

<section aria-label="Guidance on using typography">

## Guidance on using typography

### Line length and height

Always use corresponding font size and and line height: match an H1 font size with an H1 line height.

In a line of text, keep text line length below 65 characters for a comfortable reading length. Page layouts may be wider than 65 characters.

### Typography for components

Some components use font sizes, colours, and spacings different from the default settings that can be  modified. Components are designed and tested to display typography for these contexts. Customized CSS styling is not required.

### Custom typography

The design system provides [components]({{ "/en/components/" | url }}), patterns, and styles that meet most design needs. In rare instances, you may need custom typography.

You can contribute to or modify the design system at the [design token repository in GitHub](https://github.com/cds-snc/gcds-tokens).

</section>
