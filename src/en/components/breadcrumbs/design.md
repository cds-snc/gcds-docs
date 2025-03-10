---
title: Breadcrumbs
layout: 'layouts/component-documentation.njk'
translationKey: 'breadcrumbsDesign'
tags: ['breadcrumbsEN', 'design']
date: 'git Last Modified'
---

## Breadcrumbs anatomy

<ol class="anatomy-list">
  <li>The <strong>first link</strong> in the breadcrumbs defaults to the Canada.ca home page. For other sites, the link can be changed.</li>
  <li>The <strong>chevron</strong> separates each link and points to a child link.</li>
  <li>The <strong>link</strong> navigates to a parent-level page.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-breadcrumbs-anatomy.svg" alt="Breadcrumbs anatomy showing two links in a row with an arrow icon between them." />

## Design and accessibility for breadcrumbs

### Include the right links in your breadcrumbs

- Include only parent page links and leave out the current page. It's stated in the page title, just beneath the breadcrumbs.
- Add up to 3 parent page links if using both the Canada.ca and home page links, for a maximum of 5 breadcrumbs links.
- Avoid duplication by linking each breadcrumb to a unique page.

### Structure breadcrumb levels based on site navigation

Breadcrumbs represent the location of the current page in relation to the site's navigation model.

- Order breadcrumb levels by their corresponding level in the site's hierarchy.
- Avoid using the breadcrumbs component to show progress through the user journey.
- Limit breadcrumbs to 5 levels. Displaying too many levels of breadcrumbs items can be overwhelming.

Tip: If using with other navigation components, like the <gcds-link href="{{ links.topNav }}">top navigation</gcds-link> and <gcds-link href="{{ links.sideNav }}">side navigation</gcds-link>, align both sets of links, so elements reflect a similar path through the site. This provides a consistent navigation experience and helps visitors understand their current location.

### Write specific parent page link text

- Make link text clear and specific to help a person decide if they should leave the current page. Spell out where a person will go or what they'll find when they select a link.
- Keep parent link text short (ideally under 20 characters) and distinctive so a person can scan the links in the breadcrumbs and find what they're looking for.
- Shorten parent page link text to improve readability and reduce space. Where possible, reflect the title of the page in the breadcrumb without including the full page name.

### Place breadcrumbs before the main element

Place breadcrumbs at the top of a page, before the main content. This way a skip-to-content link can work to let a person skip all navigation links, including breadcrumbs.
