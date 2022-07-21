---
title: Installation
translationKey: installation
layout: "layouts/base.njk"
eleventyNavigation:
    key: installationEN
    title: Installation
    locale: en
    order: 0
onThisPage:
  0: Install from npm
  1: Supported frameworks
  2: JavaScript
  3: React
  4: Vue
---

# Installation

<section aria-label="Install from npm">

## Install from npm
Navigate to the root folder of your project and run:

``` js
npm install gcds-components
```
## Install with CDN
Place the following code in the `<head>` element of your site.<br/>
All [gcds-components]({{ "/en/components/" | url }}) should now be ready to use in your site.

``` html
<link rel="stylesheet" href="https://unpkg.com/gcds-components/dist/gcds/gcds.css">
<script type="module" src="https://unpkg.com/gcds-components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="https://unpkg.com/gcds-components/dist/gcds/gcds.js"></script>
```
<small>Note: &lt;script type="module"&gt; requires a server to load properly, if developing locally, please use &lt;script nomodule&gt;.</small>

</section>

<section aria-label="Supported frameworks">

## Supported frameworks

The [gcds-component library]({{ "/en/components/" | url }}) works in multiple frameworks.

### JavaScript

Place the following code in the `<head>` element of your site.<br/>
All [gcds-components]({{ "/en/components/" | url }}) should now be ready to use in your site.

``` html
<link rel="stylesheet" href="/node_modules/gcds-components/dist/gcds/gcds.css">
<script type="module" src="/components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="/components/dist/gcds/gcds.js"></script>
```


### React

Place the following code in the `index.js` file of your app.<br/>
All [gcds-components]({{ "/en/components/" | url }}) should now be ready to use in your React app.

``` jsx
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

ReactDOM.render(...);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

```

### Vue

Place the following code in the `main.js` file of your app.<br/>
All [gcds-components]({{ "/en/components/" | url }}) should now be ready to use in your Vue app.

``` js
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

applyPolyfills().then(() => {
  defineCustomElements();
});
```
</section>
