---
title: Top navigation
layout: "layouts/component-documentation.njk"
translationKey: "topnavDesign"
tags: ['topnavEN', 'design']
date: "git Last Modified"
---

## Top navigation anatomy – on desktop

<ol class="anatomy-list">
  <li>The <strong>home nav link</strong> identifies the site using text or a logo and it links to the home page. It uses a nav link that is added within the <code>home</code> slot.</li>
  <li>The <strong>nav link</strong> is a link to a popular page or section on the site. Nav links can be in the top level if they're standalone.</li>
  <li>The <strong>nav group</strong> can be collapsed and expanded and generally contains a list of 2-5 links.</li>
  <li>The <strong>nav group label</strong> describes the category of links in that group. It acts as a button to expand and collapse the group of links.</li>
  <li>The <strong>nav group chevron icon</strong> points up when the nav group is collapsed and down when it's expanded.</li>
  <li>The <strong>nav link with active indicator</strong> gives visual prominence to the current page.</li>
</ol>

<img class="b-sm b-default p-400" src="/images/en/components/anatomy/gcds-top-nav-anatomy.svg" alt="Top navigation anatomy showing page navigation with a dark blue box for the logo or home link followed by two greyed boxes, the last one having a dark blue line underneath to show the current page." />

## Design and accessibility for top navigation

### Set the site name

- The site name can be a shorter version of the full name.
- For logos, include descriptive text.

Note: On mobile, the site name does not link to the homepage.

### Choose meaningful nav link text

- Make link text clear and specific to help a person decide if they should leave the current page. Spell out where a person will go or what they'll find when they select a link.
- Keep link text short and distinctive so a person can scan the links and find what they're looking for.
- Limit the number of links in your top navigation. Too much information increases cognitive load and can be overwhelming to some readers.
- If using breadcrumbs, align the content hierarchy in both set of links, so both components reflect a similar path through the site.  

Tip: Read top navigation link text aloud in sequence to note similarities in how link text sounds when read by an assistive device.

### Add navigation groups to the top navigation

- Opt to include a second level with a navigation group, sometimes called stairs or dropdowns, to the top navigation.
- In the second level, limit the group to 7 links. Target 2-5 in each group.
