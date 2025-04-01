---
title: En-tête
layout: 'layouts/component-documentation.njk'
translationKey: 'headerCode'
tags: ['headerFR', 'code']
date: 'git Last Modified'
---

## Créer un en-tête

Utilisez ce point de repère d'en-tête pour transmettre de l'information sur un service du gouvernement du Canada ou l'un de ses produits numériques.

## Codage et accessibilité de l'en-tête

Les composants de Système de design du GC sont conçus pour s'adapter à la taille de l'écran ou du cadre où ils sont visualisés. À titre d'exception, la taille du texte dans l'en-tête et le pied de page est fixe.

### Préserver l'élément signature dans l'en-tête pour les sites Web du GC

- Conservez la [signature]({{ links.signature }}) pour tous les sites du GC.  
- Utilisez l'attribut `signature-variant` pour paramétrer la signature du gouvernement du Canada à `colour` ou `white`. Pour les arrière-plans blancs, conservez le paramètre `colour` par défaut pour la signature.
- Assurez toujours l'intégrité de la signature du gouvernement du Canada. Évitez de la modifier de quelque manière que ce soit, de l'étirer ou d'en modifier les couleurs ou le texte.
- Sur les pages Canada.ca, paramétrez l'attribut `signature-has-link` à `true` pour définir le lien de la signature à Canada.ca.

### Inclure la bascule de langue sur tous les sites du GC

- Ajoutez la bascule de langue en définissant l'attribut `lang-href`. L'attribut `lang-href` définit également l'élément « href » de la bascule de langue.
- Utilisez l'attribut `lang` pour définir la langue du site; le bouton à bascule proposera l'autre langue officielle.  

### Configurer un lien « passer au contenu » (`skip-to-content`) pour améliorer l'accessibilité 

- Configurez un [lien]({{ links.link }}) `skip-to-content` comme raccourci pour les personnes utilisant une technologie d'assistance et améliorer la navigation au clavier. 
- Définissez l'élément « href » du lien `skip-to-content` dans la navigation supérieure de l'en-tête à l'aide de l'attribut `skip-to-href`.
- Utilisez l'emplacement `skip-to-nav` pour remplacer la navigation supérieure par défaut par le lien `skip-to-content`.
- Passez un élément enfant avec l'attribut `slot="skip-to-nav"` pour placer l'élément en première position dans l'en-tête.

### Inclure le chemin d'accès et la recherche sur les sites Canada.ca

- Sur les pages de Canada.ca, conservez le paramètre par défaut de `hide-canada-link` à `false`.
- Ajoutez le composant [chemin de navigation]({{ links.breadcrumbs }}) en passant un élément enfant avec l'attribut `slot="breadcrumb"`. Cela placera le chemin de navigation dans l'en-tête sous les emplacements de la bascule de langue, la signature et la recherche. 
- Ajoutez un nouveau lien au chemin de navigation en utilisant le composant `gcds-breadcrumbs-item`. Le lien peut être ajouté à l'aide de la propriété `href`.
- Ajoutez l'élément recherche en ajoutant `<gcds-search slot="search"></gcds-search>` ou en passant un élément enfant avec l'attribut `slot="search"`. Cela placera l'élément sous la bascule de langue et à côté de la signature dans l'en-tête. 
- Paramétrez la recherche de sorte à effectuer une recherche locale ou globale. Par défaut, le composant est configuré pour la recherche dans Canada.ca.

### Configurer une barre de navigation supérieure

- Ajoutez une [barre de navigation supérieure]({{ links.topNav }}) en passant un élément enfant à l'aide de l'attribut `slot="menu"`. Cela placera l'élément dans l'en-tête, sous les emplacements du bouton de bascule de langue, de la signature et de la barre de recherche. 
- Vous avez le choix d'ajouter une bannière en faisant passer un élément enfant avec l'attribut `slot="banner"`. Cela placera l'élément en haut de l'en-tête sous l'élément `skip-to-nav`.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-header."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-header--events-properties&lang=fr"
  width="1200"
  height="1600"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
