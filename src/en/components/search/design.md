---
title: Search
layout: 'layouts/component-documentation.njk'
translationKey: 'searchDesign'
tags: ['searchEN', 'design']
date: 'git Last Modified'
---

## Search anatomy

<ol class="anatomy-list">
  <li>The <strong>input field</strong> is a space to enter search keywords.</li>
  <li>The <strong>placeholder text</strong> is a prompt visible before a person types that identifies the area for the search.</li>
  <li>The <strong>button</strong> initiates the search and is represented by a magnifying glass icon.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-search-anatomy.svg" alt="Image showing the search component anatomy with numbers pointing to the individual parts of the search component." />

## Design and accessibility for search

### Place the search in a predictable location in the header

- Place the search component in the <gcds-link href="{{ links.header }}">header</gcds-link> below the language toggle and in line with the <gcds-link href="{{ links.signature }}">Government of Canada signature</gcds-link>.
- Ensure the header is responsive so that the search appears below both the signature and the language toggle on mobile devices.
