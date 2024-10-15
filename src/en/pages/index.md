---
title: Home
layout: 'layouts/home.njk'
permalink: /en/
translationKey: 'index'
redirect_from: /
date: 'git Last Modified'
---

<h2 class="py-450">Start using GC Design System</h2>

<article class="py-500 bg-primary text-light bg-full-width">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" gap="450">
    <li class="list-none md:mb-0 mb-500">
      <img class="mb-400" src="../../images/common/home/icon-design.svg" alt="" />
      <h3 class="mb-400">Design experiences</h3>
      <p class="mb-400">Visit our Figma library to explore design assets.</p>
      <a class="link-light" href="{{ links.figma }}" target="_blank">
        Start designing
        <gcds-icon name="external-link" label="Opens in a new tab." margin-left="50" />
      </a>
    </li>
    <li class="list-none">
      <img class="mb-400" src="../../images/common/home/icon-develop.svg" alt="" />
      <h3 class="mb-400">Develop products</h3>
      <p class="mb-400">Install the component package.</p>
      <a class="link-light" href="{{ links.installation }}">Start developing</a>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-400">A design system just for you</h2>
  <p class="mb-500">Take a look around. <gcds-link href="{{ links.contact }}">Tell us what you think</gcds-link>.</p>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="450">
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-components.svg" alt="" />
      <h3 class="mb-400">Components</h3>
      <p class="mb-400">User interface building blocks address different user objectives.</p>
      <p class="mb-400">Select reusable code for common components, paired with best practice advice, for the framework you're using.</p>
      <gcds-link href="{{ links.components }}">View components</gcds-link>
    </li>
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-template.svg" alt="" />
      <h3 class="mb-400">Page templates</h3>
      <p class="mb-400">Reusable page layouts combine components into common page types.</p>
      <p class="mb-400">Start your project with basic, pre-built pages that provide a consistent, recognizable Canada.ca experience.</p>
      <gcds-link href="{{ links.pageTemplates }}">Browse page templates</gcds-link>
    </li>
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-tokens.svg" alt="" />
      <h3 class="mb-400">Design tokens</h3>
      <p class="mb-400">Brand and design decisions built into code.</p>
      <p class="mb-400">Learn how encoded decisions shape the design of government services for a consistent visual experience.</p>
      <gcds-link href="{{ links.styles }}">View tokens</gcds-link>
    </li>
  </gcds-grid>
</article>

<article class="py-500 bg-light bg-full-width">
  <h2 class="mb-400">What's new</h2>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" gap="450">
    <li class="list-none bg-white p-450 b-radius-md">
      <h3 class="mb-400">
        <gcds-link href="{{ links.getInvolved }}">Get involved</gcds-link>
      </h3>
      <p>Check out what we're working on.</p>
    </li>
    <li class="list-none bg-white px-250 py-450 b-radius-md">
      <h3 class="mb-400">
        <gcds-link external href="{{ links.releaseNotes }}">Release notes</gcds-link>
      </h3>
      <p>Read about the latest additions.</p>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-400">Featured component</h2>
  <h3 class="mb-400">Top navigation</h3>
  <p class="mb-450">A top navigation is a horizontal list of page links. Use a top navigation to help a person find their way around your web page or site.</p>
  <img class="d-block mb-450" src="../../images/common/components/preview-top-nav.svg" alt="Top navigation shows site navigation with a dark blue box followed by two greyed boxes, the last having a dark blue line underneath to show selection." />
  <gcds-link href="{{ links.topNav }}">Read more about top navigation</gcds-link>
</article>
