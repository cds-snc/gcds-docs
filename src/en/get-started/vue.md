---
title: Install Vue
layout: 'layouts/base.njk'
eleventyNavigation:
  key: vueEN
  title: Vue
  locale: en
  parent: installationEN
  order: 3
  description: View installation instructions for Vue or Vue-based projects.
  envExamples: This includes Nuxt, VuePress, and Quasar.
  thumbnail: /images/common/get-started/banner-vue.svg
  alt:
  state: published
permalink: /en/get-started/develop/vue/
translationKey: 'vue'
date: 'git Last Modified'
---

# Install Vue

To make it easier to integrate GC Design System web components into Vue projects, the <gcds-link href="{{ links.npmGcdsComponentsVue }}" external>gcds-components-vue</gcds-link> package provides Vue wrappers.

These wrappers make it easier to work with web components in the Vue ecosystem by enabling type checking, integration with `Vue Router`, and support for `v-model` with form controls.

The web components inherit native properties and interoperability.

## Vue installation instructions

Follow these steps to install and use GC Design System components in your Vue project.

### 1. Install the package

Navigate to your project’s root folder and run the following command:

```js
npm install @cdssnc/gcds-components-vue
```

### 2. Import GC Design System

In your `main.js` file, import the GC Design System components plugin and use it:

```js
import { GcdsComponents } from '@cdssnc/gcds-components-vue';

createApp(App).use(GcdsComponents).mount('#app');
```

### 3. Import GC Design System styles

There are 2 ways to do this:

<ul class="list-lower-alpha mb-300">
  <li>Import styles to <code>main.js</code>.</li>
  <li>Import styles to <code>App.vue</code>.</li>
</ul>

a. Import the styles to your `main.js` file, alongside your `style.css`:

```js
import '@cdssnc/gcds-components-vue/gcds.css';
import './style.css';
```

b. Import the styles to your `App.vue` using the HTML `style` tag:

```html
<style src="@cdssnc/gcds-components-vue/gcds.css">
  /* global styles */
</style>
```

{% addCssShortcuts 'en', '4' %}{% endaddCssShortcuts %}

You have the same options as above:

<ul class="list-lower-alpha mb-300">
  <li>Import styles to <code>main.js</code>.</li>
  <li>Import styles to <code>App.vue</code>.</li>
</ul>

a. Import the CSS Shortcuts styles to your `main.js` file, alongside your `style.css`:

```js
import '@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css';
import './style.css';
```

b. Import the CSS Shortcuts styles to your `App.vue` using the HTML `style` tag:

```html
<style src="@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css">
  /* global styles */
</style>
```

{% startBuilding 'en', '5' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
