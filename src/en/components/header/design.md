---
title: Header
layout: 'layouts/component-documentation.njk'
translationKey: 'headerDesign'
tags: ['headerEN', 'design']
date: 'git Last Modified'
---

## Header anatomy

Header elements are required for GC sites unless noted.

<ol class="anatomy-list">
  <li>The <strong>signature</strong> is a branding element that identifies a page as a Government of Canada space. On Canada.ca the signature links to the Canada.ca homepage.</li>
  <li>The <strong>skip-to-content</strong> link lets a person pass navigation to go directly to the main content. The link is hidden until a person navigates to it with a keyboard (focus visible).</li>
  <li>The <strong>language toggle</strong> is a link that lets a person switch between French and English content by linking to the other Official Language.</li>
  <li>The <strong>search</strong> lets a person enter keywords or phrases to find content. It can be set to a local or global search form. Optional, except on Canada.ca campaign and standard pages.</li>
  <li>The <strong>divider line</strong> visually separates the main header elements and the page content.</li>
  <li>The <strong>top navigation</strong> is a primary navigation component for access to priority pages. Optional and, when used, sits beneath the divider line of the same colour.</li>
  <li>The <strong>breadcrumbs</strong> lay a path from the current location to each higher level page within the site hierarchy. On Canada.ca the first link leads to the Canada.ca homepage.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-header-anatomy-recommended.svg" alt="The header image shows 7 elements. The header banner runs the width of the header and has a white background. 1. On the left, the signature has a Canada Flag with Government of Canada in English and French to its right. 2. Centred at the top of the header, the skip to content link is visible in focus state with a bright blue rectangle, double-lined in white, labelled Skip to main content. 3. The language toggle with the link text “Français” is right aligned. 4. Beneath the language toggle, the search bar has the prompt text “Search Canada.ca” within the search input and a small button to the right with a magnifying glass icon. 5. The light grey divider line runs the width of the header and is not visually discernible from the top navigation of the same colour beneath it. 6. The top navigation runs the width of the header in a light grey banner. On the left of the top nav, Home nav link is labelled in bold and on the right are 4 nav links. The first, left-most nav link has a chevron pointing down. 7. Last are the breadcrumbs at the bottom of the header on the left. Canada.ca is the first link and the second is labelled as link."/>

## Design and accessibility for the header

GC Design System components are designed to adapt to the size of the screen or frame where they’re being viewed. As an exception, the text size in the header and footer is fixed.

### Check header requirements

Here's what's required for the header on GC sites.

<ul class="check-list mb-300">
  <li><a href="{{ links.signature }}">Signature.</a></li>
  <li><a href="{{ links.langToggle }}">Language toggle.</a></li>
  <li>Skip-to-content <a href="{{ links.link }}">link.</a></li>
  <li>Always preserve the integrity of the Government of Canada signature. Never modify it in any way, stretch it, or change the colours or text.</li>
</ul>

<gcds-details details-title="What's required on a Canada.ca standard or campaign page" class="mb-300">
  <gcds-text>Always include the following components in the header of a standard or campaign page and maintain the default settings.</gcds-text>

  <ul class="check-list mb-300">
    <li>Signature that links to Canada.ca.</li>
    <li>Language toggle.</li>
    <li>Search.</li>
    <li>Breadcrumbs that link to Canada.ca from the first link.</li>
    <li>Skip-to-content link.</li>
    <li>Divider line.</li>
  </ul>

  <gcds-text><strong>Note</strong>: As an exception on legacy applications, the language toggle can be omitted if it results in a destructive action (a person loses their data when language is switched).</gcds-text>
</gcds-details>

<gcds-details details-title="What's optional to include on a Canada.ca standard or campaign page" class="mb-300">
  <gcds-text>Opt to include:</gcds-text>
  <ul class="list-disc mb-300">
    <li>An approved program or institution specific search form instead of the global search form.</li>
    <li>Sign in button.</li>
    <li>Top navigation.</li>
  </ul>
</gcds-details>

### Improve the accessibility of the header

- Set up a skip-to-content [link]({{ links.link }}) as a shortcut for people using an assistive technology and improve keyboard navigation. The link skips navigation elements to lead directly to the main page content.  
- Avoid putting other elements ahead of the skip-to-content link. It’s more discoverable if it’s the first or second item.

### Include optional elements in your header

- Consider using the [top navigation]({{ links.topNav }}) for services and websites that need a dedicated primary navigation.  
- Use the top navigation on Canada.ca pages when the service or product is self-contained and targets an internal audience, **like GC Design System**.
