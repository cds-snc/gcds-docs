---
title: Installation dans un projet HTML
layout: 'layouts/installation-html.njk'
eleventyNavigation:
  key: htmlFR
  title: HTML
  locale: fr
  parent: installationFR
  order: 4
  hideMain: true
  description: Consultez les instructions d’installation pour tout autre type de projet.
  thumbnail: /images/common/start-using/banner-html.svg
  alt:
  state: published
  showInCardlist: false
permalink: /fr/demarrer/developpement/html/
translationKey: 'html'
date: 'git Last Modified'
---

# Installation dans un projet HTML

Utilisez les composants Web de Système de design GC directement dans un projet HTML. Ces composants s’adaptent à tout cadriciel et ont un comportement similaire aux éléments HTML natifs.

Utilisez cette option pour les situations suivantes :

<ul class="list-disc mb-300">
  <li>Sites statiques</li>
  <li>Plateformes CMS</li>
  <li>Node.js</li>
  <li>Java</li>
  <li>Svelte</li>
  <li>.NET</li>
</ul>

Si vous utilisez les cadres React, Angular ou Vue, consultez la <gcds-link href="{{ links.getStartedDevelop }}">page d’installation</gcds-link> pour connaître les options propres à chaque cadre.

## Sélectionner le paquet utilisé

Sélectionnez parmi les options suivantes, puis suivez les étapes pour installer et utiliser les composants de Système de design GC dans votre projet.

<gcds-grid class="mb-300" tag="ul" columns="1fr" columns-tablet="1fr 1fr" columns-desktop="1fr 1fr 1fr">
  <gcds-card
    card-title="Avec npm"
    href="#installation-avec-npm"
    description="Sélectionnez cette option si vous utilisez npm (gestionnaire de paquets node)."
    role="listitem"
  /></gcds-card>
  <gcds-card
    card-title="Avec CDN"
    href="#installation-avec-cdn"
    description="Sélectionnez cette option si vous n’utilisez pas npm. Vous installerez les composants à l’aide de liens de réseau de distribution de contenu (CDN)."
    role="listitem"
  ></gcds-card>
</gcds-grid>

<hr class="my-600" />

<gcds-heading id="installation-avec-npm" tag="h2">Instructions d’installation avec npm</gcds-heading>

### 1. Installer le paquet

Naviguez vers le dossier racine de votre projet et exécutez la commande suivante :

```js
npm install @cdssnc/gcds-components
```

### 2. Inclure Système de design GC dans votre projet

Ajoutez les balises `link` suivantes à l’intérieur de la balise `head` de vos fichiers `HTML` pour charger Système de design GC :

```html
<!-- Système de design GC -->
<link
  rel="stylesheet"
  href="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="/node_modules/@cdssnc/gcds-components/dist/gcds/gcds.esm.js"
></script>
```

{% addCssShortcuts 'fr', '3' %}{% endaddCssShortcuts %}

Ajoutez la balise `link` suivante à l’intérieur de la balise `head` de vos fichiers HTML :

```html
<!-- Raccourcis CSS de Système de design GC  -->
<link
  rel="stylesheet"
  href="/node_modules/@gcds-core/css-shortcuts/dist/gcds-css-shortcuts.min.css"
/>
```

{% startBuilding 'fr', '4' %}{% endstartBuilding %}

<hr class="my-600" />

<gcds-heading id="installation-avec-cdn" tag="h2">Instructions d’installation avec CDN</gcds-heading>

### 1. Sélectionner comment recevoir des mises à jour

Vous avez deux options pour recevoir des mises à jour du CDN :

<ul class="list-lower-alpha mb-300">
  <li>Utiliser la version épinglée pour la stabilité (recommandé).</li>
  <li>Utiliser <code>@latest</code> pour obtenir des mises à jour automatiques.</li>
</ul>

#### a. Utiliser la version épinglée (recommandé)

Il est fortement recommandé d’utiliser cette option pour garantir la stabilité et la prévisibilité de votre projet.

Ajoutez le code suivant à la balise `head` de vos fichiers `HTML` pour charger Système de design GC. Assurez-vous d’indiquer la version actuelle.

Version actuelle : Version <code><span id='cdn-latest-version'></span></code>, publiée le <time id='cdn-latest-version-date'></time>.

```html
<!-- Système de design GC -->
<link
  rel="stylesheet"
  href="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.css"
/>
<script
  type="module"
  src="https://cdn.design-system.alpha.canada.ca/@cdssnc/gcds-components@||version||/dist/gcds/gcds.esm.js"
></script>
```

<gcds-text size="small">Remarque : <code>&lt;script type="module"&gt;</code> doit être chargé depuis un serveur. Pour le développement local, utilisez <code>&lt;script nomodule&gt;</code>.</gcds-text>

##### Étapes suivantes

Le code restera inchangé jusqu’à ce que vous mettiez à jour manuellement la version dans les URL CDN, ce qui est idéal pour les environnements de production.

Vérifiez régulièrement s’il y a des <gcds-link href="{{ links.releaseNotes }}" external>nouvelles versions de Système de design GC</gcds-link> afin de mettre à jour la dernière version épinglée.

#### b. Utiliser la version `@latest` (la dernière version)

Utilisez la balise `@latest` pour insérer la plus récente version de Système de design GC dans votre projet. Remplacez le numéro de version par cette balise.

Bien que cette approche vous évite la mise à jour manuelle des versions, elle court le risque d’introduire des modifications qui entraînent une rupture de compatibilité avec le code base à mesure que les nouvelles versions sont automatiquement appliquées.

### 2. Ajouter la feuille de style des Raccourcis CSS

Nous recommandons d’utiliser les [raccourcis CSS de Système de design GC]({{ links.shortcuts }}) pour appliquer des classes utilitaires CSS prédéfinies. Ces classes sont conformes à nos composants et aident à construire plus rapidement tout en assurant l’uniformité.

L’utilisation des Raccourcis CSS dans votre projet n’est pas obligatoire. Ils peuvent être ajoutés à côté de votre CSS existant.

Vous avez les mêmes options que ci-dessus :

<ul class="list-lower-alpha mb-300">
  <li>Utiliser la version épinglée pour la stabilité (recommandé)</li>
  <li>Utiliser <code>@latest</code> pour obtenir des mises à jour automatiques.</li>
</ul>

#### a. Utiliser la version épinglée (recommandé)

Ajoutez la balise `link` suivante à l’intérieur de la balise `head` de vos fichiers HTML. Assurez-vous d’indiquer la version actuelle.

```html
<!-- Raccourcis CSS de Système de design GC -->
<link
  rel="stylesheet"
  href="https://cdn.design-system.alpha.canada.ca/@gcds-core/css-shortcuts@<version-number>/dist/gcds-css-shortcuts.min.css"
/>
```

#### b. Utiliser la version `@latest` (la dernière version)

Utilisez la balise `@latest` pour insérer la plus récente version de Raccourcis CSS dans votre projet. Remplacez le numéro de version par cette balise.

{% startBuilding 'fr', '3' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
