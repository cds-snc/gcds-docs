---
title: Commencer
translationKey: installation
layout: "layouts/base.njk"
eleventyNavigation:
    key: installationFR
    title: Commencer
    locale: fr
    order: 0
onThisPage:
  0: Installer le paquet avec npm
  1: Cadres d'application pris en charge
  2: Javascript
  3: React
  4: Vue 
---

# Commencer

## Installer le paquet avec npm

``` js
npm install gcds-components
```

## Cadres d'application pris en charge

La bibliothèque gcds-components fonctionne sous plusieurs cadres d'application.

### Javascript

Insérez le code qui suit à l'intérieur de la balise `<head>` de votre site.

``` html
<script type="module">
    import { defineCustomElements } from '/node_modules/gcds-components/loader/index.es2017.mjs';
    defineCustomElements();
</script>
<link rel="stylesheet" href="/node_modules/gcds-components/dist/gcds/gcds.css">
```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components sur votre site.

### React

Insérez le code qui suit dans le fichier `index.js` de votre application.

``` jsx
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

ReactDOM.render(...);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components dans votre application React.

### Vue

Insérez le code qui suit dans le fichier `main.js` de votre application.

``` js
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

applyPolyfills().then(() => {
  defineCustomElements();
});
```

Vous devriez maintenant pouvoir utiliser tous les composants de gcds-components dans votre application Vue.
