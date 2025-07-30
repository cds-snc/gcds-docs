---
title: Installation dans un projet Angular
layout: 'layouts/base.njk'
eleventyNavigation:
  key: angularFR
  title: Angular
  locale: fr
  parent: installationFR
  order: 2
  description: Consultez les instructions d’installation pour Angular ou les projets basés sur Angular.
  thumbnail: /images/common/get-started/banner-angular.svg
  alt:
  state: published
permalink: /fr/demarrer/developpement/angular/
translationKey: 'angular'
date: 'git Last Modified'
---

# Installation dans un projet Angular

Afin de faciliter l'intégration des composants Web de Système de design GC à vos projets Angular, le paquet <gcds-link href="{{ links.npmGcdsComponentsAngular }}" external>gcds-components-angular</gcds-link> propose des enveloppes Angular.

Ces enveloppes faciltent le travail avec les composants Web dans l'écosystème Angular en empêchant l'actualisation inutile du rendu grâce à une détection des changements découplée, et en permettant aux contrôles de formulaire de fonctionner avec `ngModel` et les formulaires réactifs.

Les composants Web héritent les propriétés et l'interopérabilité natives.

## Instructions d’installation dans Angular

Suivez ces étapes pour installer et utiliser les composants de Système de design GC dans votre projet Angular.

### 1. Installer le paquet

Naviguez vers le dossier racine de votre projet et exécutez la commande suivante :

```js
npm install @cdssnc/gcds-components @cdssnc/gcds-components-angular
```

### 2. Importer Système de design GC

Insérez le code suivant dans le fichier `app.module.ts` de votre application :

```js
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';

@NgModule({
  declarations: [
    ...
  ],
  imports: [
    ...,
    GcdsComponentsModule
  ],
  providers: [],
  bootstrap: [...]
})

export class AppModule { }
```

Pour importer les styles de Système de design GC, insérez le code suivant dans le fichier `styles.scss` de votre application :

```js
@import '../node_modules/@cdssnc/gcds-components/dist/gcds/gcds.css';
```

{% startBuilding 'fr', '3' %}{% endstartBuilding %}

{% include "partials/needhelp.njk" %}
