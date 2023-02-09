---
title: Home
layout: "layouts/home.njk"
permalink: /en/
translationKey: "index"
redirect_from: /
---

<h2 class="py-450">Welcome to your design system</h2>

<article class="py-500 bg-dark bg-full-width">
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" gap="450">
    <li class="list-none md:mb-0 mb-500">
      <img class="mb-400" src="../../images/common/home/icon-design.svg" alt="" />
      <h3 class="mb-400">Design experiences</h3>
      <p class="mb-400">Visit our Figma library to explore design assets.</p>
      <a class="link-inherit" href="https://www.figma.com/file/mh2maMG2NBtk41k1O1UGHV/GC-Components-Main?node-id=4%3A1006&t=CVXODmuGNXkwGRmc-0" target="_blank">
        Start designing
        <gcds-icon name="external-link" label="Opens in a new tab." margin-left="200" />
      </a>
    </li>
    <li class="list-none">
      <img class="mb-400" src="../../images/common/home/icon-develop.svg" alt="" />
      <h3 class="mb-400">Develop products</h3>
      <p class="mb-400">Install the component package.</p>
      <a class="link-inherit" href="/en/installation/">Start developing</a>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-400">A design system just for you</h2>
  <p class="mb-500">Take a look around. <a class="link-default" href="/en/contact/">Tell us what you think</a>.</p>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="450">
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-components.svg" alt="" />
      <h3 class="mb-400">Components</h3>
      <p class="mb-400">User interface building blocks address different user objectives.</p>
      <p class="mb-400">Select reusable code for common components, paired with best practice advice, for the framework you're using.</p>
      <a class="link-default" href="/en/components/">View components</a>
    </li>
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-patterns.svg" alt="" />
      <h3 class="mb-400">Patterns</h3>
      <p class="mb-400">Guidance on combining components to solve a problem and improve your service.</p>
      <p class="mb-400">Start designing for government products and understand how words and interactions work together to create meaning.</p>
      <p>Coming soon</p>
    </li>
    <li class="list-none">
      <img class="mb-200" src="../../images/common/home/icon-tokens.svg" alt="" />
      <h3 class="mb-400">Design tokens</h3>
      <p class="mb-400">Brand and design decisions built into code.</p>
      <p class="mb-400">Learn how encoded decisions shape the design of government services for a consistent visual experience.</p>
      <a class="link-default" href="/en/foundations/">View tokens</a>
    </li>
  </gcds-grid>
</article>

<article class="py-500 bg-light bg-full-width">
  <h2 class="mb-400">What's new</h2>
  <gcds-grid tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr" gap="450">
    <li class="list-none bg-white px-250 py-450 radius-xs">
      <h3 class="mb-400"><a class="link-inherit" href="/en/release-notes/">Release notes</a></h3>
      <p>The latest additions.</p>
    </li>
    <li class="list-none bg-white px-250 py-450 radius-xs">
      <h3 class="mb-400"><a class="link-inherit" href="/en/coming-soon/">Coming soon</a></h3>
      <p>What we're working on.</p>
    </li>
  </gcds-grid>
</article>

<article class="py-450">
  <h2 class="mb-400">Featured component</h2>
  <h3 class="mb-400">Fieldset</h3>
  <p class="mb-450">The fieldset component is used to perceive a group of related form elements. It improves usability and understanding by grouping elements in a logical and accessible way.</p>
  <gcds-fieldset
    fieldset-id="fieldset"
    legend="Radio button group"
    hint="They are in a fieldset"
    class="mb-300"
  >
    <gcds-radio
      radio-id="form-radio"
      label="Radio 1 label"
      hint="This is a hint."
      name="radio"
    ></gcds-radio>
    <gcds-radio
      radio-id="form-radio1"
      label="Radio 2 label"
      hint="This is a hint."
      name="radio"
    ></gcds-radio>
  </gcds-fieldset>
  <a href="/en/components/fieldset" class="d-block link-default">Read more about fieldset</a>
</article>
