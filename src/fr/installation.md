---
title: Installation
translationKey: installation
layout: "layouts/base.njk"
eleventyNavigation:
    key: installationFR
    title: Installation
    locale: fr
    order: 0
onThisPage:
  0: Installer le paquet avec npm
  1: Cadres d'application pris en charge
  2: JavaScript
  3: React
  4: Vue
---

# Installation

## Installer le paquet avec npm

Naviguez au dossier racine de votre projet, puis exécutez la commande:

``` js
npm install gcds-components
```

## Installer le paquet avec CDN
Insérez le code qui suit à l'intérieur de la balise `<head>` de votre site.<br/>
Vous devriez maintenant pouvoir utiliser tous les composants de [gcds-components]({{ "/fr/composants/" | url }}) sur votre site.

``` js
npm install gcds-components
```
<small>Remarque : Il faut un serveur pour que &lt;script type="module"&gt; se charge correctement. Si vous développez localement, utilisez plutôt &lt;script nomodule&gt;.</small>

## Cadres d'application pris en charge

La bibliothèque [gcds-components]({{ "/fr/composants/" | url }}) fonctionne sous plusieurs cadres d'application.

### JavaScript

Insérez le code qui suit à l'intérieur de la balise `<head>` de votre site.<br/>
Vous devriez maintenant pouvoir utiliser tous les composants de [gcds-components]({{ "/fr/composants/" | url }}) sur votre site.

``` html
<link rel="stylesheet" href="/node_modules/gcds-components/dist/gcds/gcds.css">
<script type="module" src="/components/dist/gcds/gcds.esm.js"></script>
<script nomodule src="/components/dist/gcds/gcds.js"></script>
```

### React

Insérez le code qui suit dans le fichier `index.js` de votre application.<br/>
Vous devriez maintenant pouvoir utiliser tous les composants de [gcds-components]({{ "/fr/composants/" | url }}) dans votre application React.

``` jsx
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

ReactDOM.render(...);

applyPolyfills().then(() => {
  defineCustomElements(window);
});

```

### Vue

Insérez le code qui suit dans le fichier `main.js` de votre application.<br/>
Vous devriez maintenant pouvoir utiliser tous les composants de [gcds-components]({{ "/fr/composants/" | url }}) dans votre application Vue.

``` js
import { applyPolyfills, defineCustomElements } from 'gcds-components/loader';
import 'gcds-components/dist/gcds/gcds.css';

applyPolyfills().then(() => {
  defineCustomElements();
});
```
