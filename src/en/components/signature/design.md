---
title: Signature
layout: 'layouts/component-documentation.njk'
translationKey: 'signatureDesign'
tags: ['signatureEN', 'design']
date: 'git Last Modified'
---

## Signature anatomy

<ol class="anatomy-list">
  <li>The <strong>Government of Canada Signature</strong> is a brand identifier found in the site's <gcds-link href="{{ links.header }}">header</gcds-link>. The signature is used as a global link to the site's homepage.</li>
  <li>The <strong>Canada Wordmark</strong> is a brand identifier found in the site's <gcds-link href="{{ links.footer }}">footer</gcds-link>. It reinforces the brand by communicating to a site visitor that they're reading content from the Government of Canada.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-signature-anatomy-en.svg" alt="Signature with labels “Government of Canada Signature” and  “Canada Wordmark”. Each individual element of the component has a number pointing to it." />

## Design and accessibility for the signature

### Check signature requirements

The signature is required in the header and the wordmark is required in the footer on Canada.ca pages and GC sites.

<gcds-details details-title="What's required on Canada.ca" class="mb-300">
  <gcds-text>Always include the signature in the header and maintain default settings.</gcds-text>
  <div>
    <ul class="list-disc mb-300">
      <li>Use black text, do not select white text.</li>
      <li>Keep placement in the top-left corner of the header on both desktop and mobile.</li>
      <li>Link to the Canada.ca homepage.</li>
    </ul>
  </div>
  <gcds-text>Always include the wordmark in the sub-footer band and maintain default settings.</gcds-text>
  <div>
    <ul class="list-disc mb-300">
      <li>Use black text, do not select white text.</li>
      <li>Keep placement in the bottom-right corner of the footer.</li>
    </ul>
  </div>
  <gcds-text margin-bottom="0"><strong>Note:</strong> Default settings for the Signature and Wordmark follow the <gcds-link href="https://www.canada.ca/en/treasury-board-secretariat/services/government-communications/design-standard.html" external>Design Standard for the Federal Identity Program</gcds-link>.</gcds-text>
</gcds-details>

### Set the language order in the signature

- Display the French-first signature on French pages and the English-first on English pages.
- Maintain “Government of Canada” for the English descriptive (alt) text and “Gouvernement du Canada” for the French.

**Note:** The image is linked to the Canada.ca homepage in the same Official Language as the current page.

### Apply non-standard colours accessibly

- Opt to apply non-standard colours when a higher level of contrast with the background is needed, like for dark mode.
- Opt to apply non-standard colours when a single colour is used in a product, like in black and white.
- When making changes to the flag colour, always match the colour of the flag symbol in the signature and in the wordmark.
- Always apply the same colour combination in the signature and wordmark. For example, if one is black and white, the other needs to be as well.
- For single colour, check the contrast ratio between the signature elements for, at minimum, WCAG AA compliance.

<figure class="mb-600">
  <img class="b-sm b-default p-300 mb-100" src="/images/en/components/example/example-signature-side-by-side-en.svg" alt="An image presenting both variations of the signature component. The signature type is on the left and the wordmark type is on the right." />
  <figcaption>Caption: The standard colour style uses black text and a red flag applied to a white backdrop.</figcaption>
</figure>

<figure class="mb-600">
  <img class="b-sm b-default p-300 mb-100" src="/images/en/components/example/example-signature-side-by-side-reversed-en.svg" alt="An image presenting both variations of the signature component. The signature type is on the left and the wordmark type is on the right. This variation has white text on a black back drop" />
  <figcaption>Caption: The reversed colour style uses white text and a red flag applied to a black backdrop.</figcaption>
</figure>

<figure class="mb-600">
  <img class="b-sm b-default p-300 mb-100" src="/images/en/components/example/example-signature-bw-en.svg" alt="An image presenting two signature and wordmark pairings. One where the signature and wordmark are all black on a white backdrop and the second where the signature and wordmark are all white on a black backdrop." />
  <figcaption>Caption: The black and white style uses all black or all white. All black is the more common use.</figcaption>
</figure>

<figure class="mb-600">
  <img class="b-sm b-default p-300 mb-100" src="/images/en/components/example/example-signature-single-colour-style-en.svg" alt="An image showing the the signature and wordmark in dark purple on a light purple backdrop. There are bars and boxes simulating text and pictures, you are to assume this is a mock webpage. The text and pictures boxes are also dark purple." />
  <figcaption>Caption: Single colour style uses another colour if that colour is the only colour used in the product.</figcaption>
</figure>
