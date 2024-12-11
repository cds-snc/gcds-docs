---
title: Home
layout: 'layouts/home.njk'
permalink: /en/
translationKey: 'index'
redirect_from: /
date: 'git Last Modified'
---

<h2 class="py-450">Start using GC Design System</h2>

<article class="py-600 bg-primary text-light bg-full-width">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr">
    <li class="list-none md:mb-0 mb-600">
      <img class="mb-300" src="../../images/common/home/icon-design.svg" alt="" />
      <h3 class="mb-300">Design experiences</h3>
      <p class="mb-300">Visit our Figma library to explore design assets.</p>
      <a class="link-light" href="{{ links.figma }}" target="_blank">
        Start designing
        <gcds-icon name="external-link" label="Opens in a new tab." margin-left="25" />
      </a>
    </li>
    <li class="list-none">
      <img class="mb-300" src="../../images/common/home/icon-develop.svg" alt="" />
      <h3 class="mb-300">Develop products</h3>
      <p class="mb-300">Install the component package.</p>
      <a class="link-light" href="{{ links.installation }}">Start developing</a>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-300">A design system just for you</h2>
  <p class="mb-600">Take a look around. <gcds-link href="{{ links.contact }}">Tell us what you think</gcds-link>.</p>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-components.svg" alt="" />
      <h3 class="mb-300">Components</h3>
      <p class="mb-300">User interface building blocks address different user objectives.</p>
      <p class="mb-300">Select reusable code for common components, paired with best practice advice, for the framework you're using.</p>
      <gcds-link href="{{ links.components }}">View components</gcds-link>
    </li>
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-template.svg" alt="" />
      <h3 class="mb-300">Page templates</h3>
      <p class="mb-300">Reusable page layouts combine components into common page types.</p>
      <p class="mb-300">Start your project with basic, pre-built pages that provide a consistent, recognizable Canada.ca experience.</p>
      <p>Coming soon</p>
    </li>
    <li class="list-none">
      <img class="mb-150" src="../../images/common/home/icon-tokens.svg" alt="" />
      <h3 class="mb-300">Design tokens</h3>
      <p class="mb-300">Brand and design decisions built into code.</p>
      <p class="mb-300">Learn how encoded decisions shape the design of government services for a consistent visual experience.</p>
      <gcds-link href="{{ links.styles }}">View tokens</gcds-link>
    </li>
  </gcds-grid>
</article>

<article class="py-600 bg-light bg-full-width">
  <h2 class="mb-300">What's new</h2>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr">
    <li class="list-none bg-white p-450 b-radius-md">
      <h3 class="mb-300">
        <gcds-link href="{{ links.getInvolved }}">Get involved</gcds-link>
      </h3>
      <p>Check out what we're working on.</p>
    </li>
    <li class="list-none bg-white px-175 py-450 b-radius-md">
      <h3 class="mb-300">
        <gcds-link external href="{{ links.releaseNotes }}">Release notes</gcds-link>
      </h3>
      <p>Read about the latest additions.</p>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-300">Featured component</h2>

  <h3 class="mb-300">Card</h3>
  <p class="mb-450">A card is a box containing structured, actionable content on a single topic.</p>
  <img class="d-block mb-300" src="../../images/common/components/preview-card.svg" alt="The card component shows a box containing a rectangular image in the top half. Immediately below is a blue rectangular bar running across three quarters of the box representing the card title. Two longer grey bars are stacked just below the blue bar, representing the card description and context area/metadata sections." />
  <gcds-link href="{{ links.card }}">Read more about card</gcds-link>

  <h3 class="mt-600 mb-300">Date input</h3>
  <p class="mb-450">A date input is a space to enter a known date.</p>
  <img class="d-block mb-300" src="../../images/en/components/preview/preview-date-input.svg" alt="Thick grey lines at the top represent the legend and hint text. A white box with a thin grey border and a grey line and grey arrow inside of it represents the select input for the month. Beside this are two smaller white boxes with thin grey outlines representing the text inputs for the day and year." />
  <gcds-link href="{{ links.dateInput }}">Read more about date input</gcds-link>
</article>
