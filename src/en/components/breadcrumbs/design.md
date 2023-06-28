---
title: Breadcrumbs
layout: "layouts/component-documentation.njk"
translationKey: "breadcrumbsDesign"
tags: ['breadcrumbsEN', 'design']
date: "git Last Modified"
---

## Breadcrumbs anatomy

The **Canada.ca link** navigates to the Canada.ca home page in the current language.

The **home page link** navigates back to the home page of the current webpage or site.

The **parent page link** navigates to the parent page of the current page. You can have up to three parent page links in addition to the homepage and the Canada.ca home.

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-breadcrumbs-anatomy.svg" alt="Breadcrumbs anatomy showing three links in a row with an arrow icon between them." />

### Breadcrumbs anatomy – with header and H1 title

The  <a href="{{ links.header }}"><strong>header</strong></a> is part of a trusted brand – for apps, forms, or other transactional digital services.

The **H1 title** is a separate element from the breadcrumbs component. It tells readers what the page or site is about and acts a signpost, giving them a sense of place.

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-breadcrumbs-anatomy-with-header.svg" alt="Breadcrumbs anatomy showing three links in a row with an arrow icon between them below the header component." />

## Design and accessibility for breadcrumbs

### Avoid too many breadcrumbs levels

Limit breadcrumbs to five levels. Displaying too many levels of breadcrumb items can be overwhelming for some people.

Tip: If using with other navigation components, like the <a href="{{ links.topNav }}">top navigation</a> and <a href="{{ links.sideNav }}">side navigation</a>, align them with the breadcrumb hierarchy, so elements reflect a person's path through the site. This provides a consistent navigation experience and helps users understand their current location.

### Include the right links in your breadcrumbs

- Add up to three parent page links after the Canada.ca home and home page links.
- Include only parent page links and leave out the current page. It's stated in the page title, just beneath the breadcrumbs.
- Avoid using the breadcrumbs component to show progress through user journey.

### Write specific parent page link text

- Make link text clear and specific to help a person decide if they should leave the current page. Spell out where a person will go or what they'll find when they select a link.
- Keep parent link text short (ideally under 20 characters) and distinctive so a person can scan the links in the breadcrumbs and find what they're looking for.

### Place breadcrumbs before the `<main>` element

Place breadcrumbs at the top of a page, before the `<main>` element. This way the 'Skip to main content' link can work to let the user skip all navigation links, including breadcrumbs.
