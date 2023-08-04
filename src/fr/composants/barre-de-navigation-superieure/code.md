---
title: Barre de navigation supérieure
layout: "layouts/component-documentation.njk"
translationKey: "topnavCode"
tags: ['topnavFR', 'code']
date: "git Last Modified"
---

## Créer une barre de navigation supérieure

Utilisez une barre de navigation supérieure pour aider une personne à se repérer sur votre page Web ou site Web.

## Codage et accessibilité de la barre de navigation supérieure

### Ajoutez la barre de navigation supérieure à chaque page

- Mettez en œuvre la barre de navigation supérieure, de sorte qu'elle soit présente sur toutes les pages.
- Choisissez d'ajouter un groupe de navigation avec un deuxième niveau de navigation en plaçant le `<gcds-nav-link>` dans un `<gcds-nav-group>`.

### Utilisez la barre de navigation supérieure avec d'autres composants.

- Si vous utilisez un composant <a href="{{ links.breadcrumbs }}">chemin de navigation</a>, uniformisez la hiérarchie dans les deux ensembles sur le site.  
- Si vous utilisez le  composant <a href="{{ links.header }}">en-tête</a>, ajoutez la barre de navigation supérieure directement dans l'en-tête en insérant un élément enfant à l'aide de l'attribut `slot="menu"` dans l'en-tête. Cela placera la barre de navigation supérieure dans l'en-tête, après la bascule de langue, la signature et la barre de recherche.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-top-nav."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-top-navigation--events-properties"
  width="1200"
  height="1650"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
