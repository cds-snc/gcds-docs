---
title: Get started with HTML
layout: 'layouts/base.njk'
eleventyNavigation:
  key: htmlEN
  title: HTML
  locale: en
  order: 4
  hideMain: true
  description: View installation instructions for all other projects.
  thumbnail: /images/common/installation/banner-html.svg
  alt:
  state: published
permalink: /en/installation/html/
translationKey: 'html'
date: 'git Last Modified'
script: '/scripts/get-latest-cdn-version.js'
---

# Get started with HTML

Use GC Design System web components directly in HTML. These components are framework-agnostic and behave similarly to native HTML elements.

Use this option for:

<ul class="list-disc mb-300">
  <li>Static sites</li>
  <li>CMS platforms</li>
  <li>Node.js</li>
  <li>Java</li>
  <li>Svelte</li>
  <li>.NET</li>
</ul>

If you’re using React, Angular, or Vue frameworks, browse the <gcds-link href="{{ links.installation }}">installation page</gcds-link> for framework-specific options.

## Select the package you’re using

Based on your selection, follow the steps to install GC Design System components in your project.

<gcds-grid class="mb-300" tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
  <gcds-card
    card-title="With npm"
    href="#npm-installation-instructions"
    description="Select if you’re using npm (node package manager)."
    role="listitem"
  /></gcds-card>
  <gcds-card
    card-title="With CDN"
    href="#cdn-installation-instructions"
    description="Select if you’re not using npm. You’ll install the components through content delivery network (CDN) links."
    role="listitem"
  ></gcds-card>
</gcds-grid>

<hr class="my-600" />

<gcds-heading id="npm-installation-instructions" tag="h2">Npm installation instructions</gcds-heading>

### 1. Install the package

Navigate to your project’s root folder and run the following command:

```js
npm install @cdssnc/gcds-components
```

### 2. Include GC Design System in your project

Add the following `link` tags inside the `head` tag of your `HTML` files to load GC Design System:

```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"
></script>
```

{% startBuilding 'en', '3' %}{% endstartBuilding %}

<hr class="my-600" />

<gcds-heading id="cdn-installation-instructions" tag="h2">CDN installation instructions</gcds-heading>

### 1. Select how to receive updates

You have two options to receive updates from the CDN:

<ul class="list-lower-alpha mb-300">
  <li>Use pinned version for stability (recommended).</li>
  <li>Use <code>@latest</code> to get automatic updates.</li>
</ul>

#### a. Use pinned version (recommended)

It’s highly recommended to use this option to ensure stability and predictability in your project.

Add the following code to the `head` tag of your `HTML` files to load GC Design System. Make sure the current version is listed.

Current version: Version <code><span id='cdn-latest-version'></span></code>, released on <time id='cdn-latest-version-date'></time>.

```html
<!-- GC Design System -->
<link
  rel="stylesheet"
  href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.esm.js"
></script>
```

<gcds-text size="small">Note: <code>&lt;script type="module"&gt;</code> requires a server to load properly. If developing locally, use <code>&lt;script nomodule&gt;</code>.</gcds-text>

##### Going forward

The code will remain unchanged until you manually update the version in the CDN URLs. This is ideal for production environments.

Check for <gcds-link href="{{ links.releaseNotes }}" external>new GC Design System versions</gcds-link> regularly to update the latest pinned version.

#### b. Use <@latest> version

Use the `@latest` tag to pull the most recent version of GC Design System into your project. Put this tag in place of the version number.

While it removes the need to manually update versions, it adds the risk of introducing breaking changes to the codebase as new versions are automatically applied.

{% startBuilding 'en', '2' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
