---
title: Recherche
layout: 'layouts/component-documentation.njk'
translationKey: 'searchCode'
tags: ['searchFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de recherche](#codage-et-accessibilite-de-recherche)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de recherche

### Placez le composant recherche dans l’en-tête

- Placez le composant recherche dans l'<gcds-link href="{{ links.header }}">en-tête</gcds-link> sous la bascule de langue et alignez-le sur la <gcds-link href="{{ links.signature }}">signature du gouvernement du Canada</gcds-link>.
- Assurez-vous que l'en-tête est réactif afin que le composant recherche apparaisse sous la signature et la bascule de langue sur les appareils mobiles.

### Configurer le composant recherche pour chercher du contenu sur Canada.ca

- Utilisez le composant recherche pour effectuer une recherche globale sur Canada.ca. Par défaut, le composant est configuré pour effectuer une recherche sur Canada.ca.
- Optez de limiter la recherche à un domaine spécifique à un organisme ou un programme.

### Optez pour la modification du point de terminaison de la recherche pour les applications ou sites transactionnels

- Optez pour la modification du point de terminaison de la recherche pour une application ou un site transactionnel lorsque le fait de quitter le site interromprait la tâche ou le flux de travail d'une personne.
- Utilisez la méthode de requête HTTP par défaut `GET` du composant, ou bien utilisez `POST` au besoin en définissant l'attribut `method`.
- Définissez l'attribut `action` sur un point de terminaison de votre choix et définissez l'attribut placeholder (message-guide) pour refléter l'étendue de la recherche. Le message-guide du champ de recherche remplira également le texte de l'étiquette.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `action`

L'attribut `action` définit l'endroit où le formulaire envoit ses données.

{% examplesPreview "100", "", "fr" %}
<gcds-search action="search.html"></gcds-search>
{% endexamplesPreview %}

#### `method`

L'attribut `method` définit comment le formulaire enverra les données du formulaire. Les options disponibles sont :

- `get`
- `post`

{% examplesPreview "100", "", "fr" %}
<gcds-search method="post"></gcds-search>
{% endexamplesPreview %}

#### `name`

L'attribut `name` définit le nom du champ de recherche lors de l'envoi des données du formulaire.

{% examplesPreview "100", "", "fr" %}
<gcds-search name="search"></gcds-search>
{% endexamplesPreview %}

#### `placeholder`

L'attribut `placeholder` définit le texte indicatif et le libellé du champ. Le deux prennent automatiquement la forme « Search [`placeholder`] ».

{% examplesPreview "100", "", "fr" %}
<gcds-search placeholder="Système de design GC"></gcds-search>
{% endexamplesPreview %}

#### `search-id`

L'attribut `search-id` définit le id du champ.

{% examplesPreview "100", "", "fr" %}
<gcds-search search-id="searchform"></gcds-search>
{% endexamplesPreview %}

#### `suggested`

La propriété `suggested` définit une liste de termes de recherche prédéfinis. La liste s'affichera sous forme de liste déroulante sur le champ lorsqu'il est mis en évidence.

{% examplesPreview "100", "", "fr" %}
<gcds-search suggested="['rouge', 'vert', 'bleu']"></gcds-search>
{% endexamplesPreview %}

#### `value`

L'attribut `value` définit la valeur du champ de recherche. Définir cette valeur préremplira le champ au chargement.

{% examplesPreview "100", "", "fr" %}
<gcds-search value="Système de design"></gcds-search>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-search."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-search--events-properties&lang=fr"
  width="1200"
  height="1150"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
