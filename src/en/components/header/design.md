---
title: Header
layout: 'layouts/component-documentation.njk'
translationKey: 'headerDesign'
tags: ['headerEN', 'design']
date: 'git Last Modified'
---

## Header anatomy – recommended elements

<ol class="anatomy-list">
  <li>The <strong>skip-to-nav</strong> includes the skip-to-content button to let a person bypass a cluster of navigation links and jump to the main page content.</li>
  <li>The <strong>signature header</strong> spans the top of the site and contains the Government of Canada branded signature and the language toggle. It can also include a search form. It has a divider line along the bottom edge. When the site language is set with the <code>lang</code> attribute, the signature reflects the same Official Language as the page content.</li>
  <li>The <strong>language toggle</strong> component is a switch for French and English content. When the site language is set using the <code>lang</code> attribute, the toggle will be available in the other Official Language.</li>
</ol>

<img class="b-sm b-default mb-500 p-400" src="/images/en/components/anatomy/gcds-header-anatomy-recommended.svg" alt="Home link Taxonomy has three parts. The skip to content - indicated by a bright blue double white lined box with label of Skip to main content. GC header banner with a Canadian Flag with Government of Canada  and Government du Canada. Language toggle pointing at Français to use to toggle to French. Top bar pointing at Home link in a light grey banner with Site menu link outlined by a dark grey link to indicate the selected link with unselected Site menu link with no line underneath it."/>

## Optional header elements – with H1 title

<ol class="anatomy-list">
  <li>The <strong>skip-to-nav</strong> includes the skip-to-content button to let a person bypass a cluster of navigation links and jump to the main page content.</li>
  <li>The <strong>banner</strong>, when used, precedes the signature header. It's an optional element to communicate the status of the site or page, for sites that are experimental, those in research, pilots, or products in trial mode.</li>
  <li>The <strong>signature header</strong> spans the top of the site and contains the Government of Canada branded signature and the language toggle. It can also include a search form. It has a divider line along the bottom edge. When the site language is set with the `lang` attribute, the signature reflects the same Official Language as the page content.</li>
  <li>The <strong>language toggle</strong> component is a switch for French and English content. When the site language is set using the language attribute, the toggle will be available in the other Official Language.</li>
  <li>The <strong>menu</strong>, or site menu, holds the site navigation. The menu serves as a simplified site map and helps give visitors a sense of a site's purpose and priorities. For transactional products or sites, like those with forms, flows, processes, or storefronts, it's optional to use a simplified or custom site menu or even no menu.</li>
  <li>The <strong>breadcrumbs</strong> lay a path from each level of the site's hierarchy to the current page, stated in the page title. The breadcrumbs tell a person where they've been and let them retrace their steps or jump between levels.</li>
  <li>The <strong>H1 title</strong> is a separate element from the header component. It tells readers what the page or site is about and acts a signpost, giving them a sense of place.</li>
</ol>

The **search** element supports including a search form that is local or global.

<img class="b-sm b-default mb-500 p-400" src="/images/en/components/anatomy/gcds-header-anatomy-optional.svg" alt="Home link Taxonomy has five parts. The skip to content - indicated by a bright blue double white lined box with label of Skip to main content. The Phase banner - indicated by a navy blue lined box with label of stages of the site. The stage 'pilot' is in a white navy blue outlined box. GC header banner with a Canadian Flag with Government of Canada  and Government du Canada. Language toggle pointing at Français to use to toggle to French. Top bar pointing at Home link in a light grey banner with Site menu link outlined by a dark grey link to indicate the selected link with unselected Site menu link with no line underneath it."/>

## Design and accessibility for headers

### Assemble your product's header

- Include the signature header with the language toggle for Government of Canada sites and products.
- Always maintain the integrity of the Government of Canada signature. Absolutely avoid modifying it in any way. In particular avoid stretching or changing the colours or text.
- Add a skip-to-content button to aid navigation for people using assistive devices.
- Consider using the menu as a simple navigation for a transactional product, like an app, a form, or a storefront.
- Include the banner if your page or site is experimental. For example, if it's a pilot, you're using it for research purposes, or it's in trial mode.

### Improve the accessibility of the header

- Consider making the skip-to-content button visible so any person navigating the site can benefit from the shortcut.
- Write H1 heading content in sentence case.

### Write specific link text

- Make link text clear and specific to help a person decide if they should leave the current page. Spell out where a person will go or what they'll find when they select a link.
- Keep link text short and distinctive so a person can scan the links in the header and find what they're looking for. Avoid using "click here" or "read more" as link text.
- Limit the number of links in your header. Too much information and increases cognitive load and can be overwhelming to some readers.

### Give your page a title

- Give the page a title that tells readers what the page (or for the landing page the site) is about, what it is for, or what to do.
- Choose either to match the page name you'll display in the browser, to be similar but slightly longer, or to use a call to action – on pages for user tasks or actions.
- Write the H1 title in title case. All other header elements (other than proper names) are in sentence case,
