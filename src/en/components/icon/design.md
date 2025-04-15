---
title: Icon
layout: 'layouts/component-documentation.njk'
translationKey: 'iconDesign'
tags: ['iconEN', 'design']
date: 'git Last Modified'
nocrawl: true
---

## Icon anatomy

<ol class="anatomy-list">
  <li><strong>Icon</strong> is a symbol that visually represents an object, action, or idea.</li>
  <li><strong>Accompanying text</strong> is a word or phrase that gives additional context.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-icon-anatomy.svg" alt="An info icon next to the words “Accompanying text”. The text and icon are the same colour and size." />

## Design and accessibility for icon

### Use icon intentionally

- Use an icon to assist people with site functionality. 
- Use sparingly since too many icons create unnecessary distractions and reduce their effectiveness.

### Use icon with text

- Pair an icon with accompanying text to reduce ambiguity. 
- A universally understood icon can stand alone, like a search icon. 
- Place an icon before text unless indicating secondary information, like dropdown arrows.

### Write a meaningful description

- Use unique and specific accompanying text to prevent repetition for screen readers.
- Use alt-text when there’s no accompanying text.

### Match icon and text size

- Match icon size to accompanying text, like using a small icon with small text.
- Align the icon so it’s the same height as the accompanying text.
- Use our sizing scale to ensure the icon size matches the text size.

<gcds-grid class="bg-light px-300 md:px-500 py-500 md:py-800 b-radius-lg" columns="1fr 1fr" columns-tablet="repeat(4, 1fr)" columns-desktop="repeat(8, 1fr)" gap="300" gap-tablet="450">
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>Text small</strong></gcds-text>
    <gcds-icon size="text-small" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>Text</strong></gcds-text>
    <gcds-icon size="text" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H6</strong></gcds-text>
    <gcds-icon size="h6" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H5</strong></gcds-text>
    <gcds-icon size="h5" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H4</strong></gcds-text>
    <gcds-icon size="h4" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H3</strong></gcds-text>
    <gcds-icon size="h3" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H2</strong></gcds-text>
    <gcds-icon size="h2" name="info-circle"></gcds-icon>
  </div>
  <div class="text-center">
    <gcds-text size="small" text-role="secondary"><strong>H1</strong></gcds-text>
    <gcds-icon size="h1" name="info-circle"></gcds-icon>
  </div>
</gcds-grid>

###  Choose an accessible colour

- Use a solid colour that matches your accompanying text.
- Check that the colour meets or exceeds WCAG 2.1 AA.