---
title: Installation dans un projet React
layout: 'layouts/base.njk'
eleventyNavigation:
  key: reactFR
  title: React
  locale: fr
  parent: installationFR
  order: 1
  description: Consultez les instructions d’installation pour React ou les projets basés sur React.
  envExamples: P. ex., Next.js, Gatsby et Remix.
  thumbnail: /images/common/get-started/banner-react.svg
  alt:
  state: published
permalink: /fr/demarrer/developpement/react/
translationKey: 'react'
date: 'git Last Modified'
---

# Installation dans un projet React

Pour faciliter l’intégration des composants Web de Système de design GC dans les projets React, le paquet <gcds-link href="{{ links.npmGcdsComponentsReact }}" external>gcds-components-react</gcds-link> propose différentes enveloppes React.

Ces enveloppes facilitent le travail avec les composants Web dans l’écosystème React. Elles offrent des liaisons JSX pour les propriétés et les événements personnalisés, la saisie automatique et la sécurité de type.

Les composants Web héritent les propriétés et l’interopérabilité natives.

## Instructions d’installation dans React

### 1. Installer le paquet

Naviguez vers le dossier racine de votre projet et exécutez la commande suivante :

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-react
```

### 2. Importer Système de design GC

Pour importer les styles de Système de design GC, insérez le code suivant dans le fichier `index.js` de votre application :

```js
import '@cdssnc/gcds-components-react/gcds.css';
```

{% startBuilding 'fr', '3' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
