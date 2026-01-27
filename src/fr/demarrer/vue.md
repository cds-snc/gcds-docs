---
title: Installation dans un projet Vue
layout: 'layouts/base.njk'
eleventyNavigation:
  key: vueFR
  title: Vue
  locale: fr
  parent: installationFR
  order: 3
  description: Consultez les instructions d’installation pour Vue ou les projets basés sur Vue.
  envExamples: P. ex., Nuxt, VuePress et Quasar.
  thumbnail: /images/common/start-to-use/banner-vue.svg
  alt:
  state: published
permalink: /fr/demarrer/developpement/vue/
translationKey: 'vue'
date: 'git Last Modified'
---

# Installation dans un projet Vue

Pour faciliter l’intégration des composants Web de Système de design GC dans les projets Vue, le paquet <gcds-link href="{{ links.npmGcdsComponentsVue }}" external>gcds-components-vue</gcds-link> propose différentes enveloppes Vue.

Ces enveloppes facilitent le travail avec les composants Web dans l’écosystème Vue en permettant la vérification des types, l’intégration avec `Vue Router`, et la prise en charge de la fonction `v-model` avec les contrôles de formulaire.

Les composants Web héritent les propriétés et l’interopérabilité natives.

## Instructions d’installation dans Vue

Suivez ces étapes pour installer et utiliser les composants de Système de design GC dans votre projet Vue.

### 1. Installer le paquet

Naviguez vers le dossier racine de votre projet et exécutez la commande suivante :

```js
npm install @gcds-core/components-vue
```

### 2. Importer Système de design GC

Dans votre fichier `main.js`, importez le plugiciel des composants de Système de design GC et utilisez-le :

```js
import { GcdsComponents } from '@gcds-core/components-vue';

createApp(App).use(GcdsComponents).mount('#app');
```

### 3. Importer les styles de Système de design GC

Il y a 2 façons de le faire :

<ul class="list-lower-alpha mb-300">
  <li>Importer le style dans <code>main.js</code>.</li>
  <li>Importer des styles dans <code>App.vue</code>.</li>
</ul>

a. Importez les styles dans votre fichier `main.js`, à côté de votre `style.css`:

```js
import '@gcds-core/components-vue/gcds.css';
import './style.css';
```

b. Importez les styles dans fichier `App.vue` en utilisant la balise HTML `style` :

```html
<style src="@gcds-core/components-vue/gcds.css">
  /* global styles */
</style>
```

{% addCssShortcuts 'fr', '4' %}{% endaddCssShortcuts %}

Vous avez les mêmes options que ci-dessus :

<ul class="list-lower-alpha mb-300">
  <li>Importer les styles dans <code>main.js</code>.</li>
  <li>Importer les styles dans <code>App.vue</code>.</li>
</ul>

a. Importez les styles de Raccourcis CSS dans votre fichier `main.js`, à côté de votre fichier `style.css` :

```js
npm install @gcds-core/css-shortcuts
```

b. Importez les styles de Raccourcis CSS dans votre fichier `App.vue` en utilisant la balise HTML `style` :

```html
<style src="@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css">
  /* global styles */
</style>
```

{% startBuilding 'fr', '5' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
