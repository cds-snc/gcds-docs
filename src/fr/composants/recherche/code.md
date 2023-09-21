---
title: Recherche
layout: 'layouts/component-documentation.njk'
translationKey: 'searchCode'
tags: ['searchFR', 'code']
date: 'git Last Modified'
---

## Créer un composant recherche

Utilisez le composant recherche pour aider les gens à trouver des renseignements à l’aide de mots-clés.

- Placez le composant recherche dans l’<a href="{{ links.header }}">en-tête</a> sous la bascule de langue et alignez-le sur la <a href="{{ links.signature }}">signature du gouvernement du Canada</a>.
- Assurez-vous que l’en-tête est réactif afin que le composant recherche apparaisse sous la signature et la bascule de langue sur les appareils mobiles.

## Codage et accessibilité du composant recherche

### Configurer le composant recherche pour chercher du contenu sur Canada.ca

- Utilisez le composant recherche pour effectuer une recherche globale sur Canada.ca. Par défaut, le composant est configuré pour effectuer une recherche sur Canada.ca.
- Optez de limiter la recherche à un domaine spécifique à un organisme ou un programme.

### Optez pour la modification du point de terminaison de la recherche pour les applications ou sites transactionnels

- Optez pour la modification du point de terminaison de la recherche pour une application ou un site transactionnel lorsque le fait de quitter le site interromprait la tâche ou le flux de travail d’une personne.
- Utilisez la méthode de requête HTTP par défaut `GET` du composant, ou bien utilisez `POST` au besoin en définissant l’attribut `method`.
- Définissez l’attribut `action` sur un point de terminaison de votre choix et définissez l’attribut placeholder (message-guide) pour refléter l’étendue de la recherche. Le message-guide du champ de recherche remplira également le texte de l’étiquette.

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-search."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-search--events-properties"
  width="1200"
  height="1150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
