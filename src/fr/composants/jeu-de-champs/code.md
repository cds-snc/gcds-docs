---
title: Jeu de champs
layout: "layouts/component-documentation.njk"
translationKey: "fieldsetCode"
tags: ['fieldsetFR', 'code']
date: "git Last Modified"
---

## Créer un composant de jeu de champs

Utilisez un jeu de champs pour regrouper des éléments ou des composants de formulaire connexes et faites en sorte que ces groupes soient perceptibles. Utilisez également un jeu de champs pour les composants comportant plusieurs options, comme les boutons [radio]({{ links.radio }}) et les [cases à cocher]({{ links.checkbox }}).

## Codage et accessibilité des jeux de champs

{% include "partials/error-message.njk" %}

### Gardez le texte explicatif fixe et visible

Ajoutez du texte explicatif par défaut pour fournir du contexte supplémentaire afin d'aider les utilisateur·rice·s à saisir des valeurs complètes et éviter les erreurs. Le texte explicatif s'insère sous la légende du jeu de champs et au-dessus du groupe.

### Prendre en charge les messages d'erreur et le texte explicatif pour les boutons radio et les cases à cocher

- Les attributs `required` et `error-message` fonctionnent mieux avec un groupe de [cases à cocher]({{ links.checkbox }}) ou de [boutons radio]({{ links.radio }}).
- Conservez le texte explicatif, les validateurs et les messages d'erreur par défaut dans le jeu de champs pour les boutons radio et les cases à cocher.  
- Pour les boutons radio et les [cases à cocher]({{ links.input }}), insérez la question dans la légende afin d'aider les utilisateur·rice·s de lecteurs d'écran à comprendre que les entrées sont toutes liées.

### Validateurs

Le jeu de champs ne validera que les [cases à cocher]({{ links.checkbox }}) et les [boutons radio]({{ links.radio }}) enfants.

- Utilisez la propriété requise pour activer le validateur approprié. La validation s'effectuera par défaut pendant l'événement `onBlur`.
- Si vous devez modifier l'événement de validation, utilisez l'attribut `validate-on`. Une validation `blur` est possible lorsque l'élément n'est plus ciblé. Il est également possible de procéder à une validation manuelle avec la méthode validate.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-fieldset."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&singleStory=true&id=components-fieldset--default"
  width="1200"
  height="1540"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
></iframe>
