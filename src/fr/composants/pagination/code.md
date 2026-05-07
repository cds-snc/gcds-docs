---
title: Pagination
layout: 'layouts/component-documentation.njk'
translationKey: 'paginationCode'
tags: ['paginationFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité de pagination](#codage-et-accessibilite-de-pagination)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité de pagination

### Configurez la pagination simple

Utilisez la pagination simple lorsque le nombre de pages est peu important.

- Réglez l’attribut `display` sur `simple`.
- Définissez l’URL de la page précédente à l’aide de l’attribut `previous-href`.
- Définissez le libellé de la page précédente à l’aide de l’attribut `previous-label`.
- Définissez l’URL de la page suivante à l’aide de l’attribut `next-href`.
- Définissez le libellé de la page suivante à l’aide de l’attribut `next-label`.

### Configurez la pagination sous forme de liste

Utilisez la pagination sous forme de liste si votre contenu est étendu sur un plus grand nombre de pages.

- Réglez l’attribut `display` sur `list`.
- Définissez le nombre total de pages pour votre séquence à l’aide de l’attribut `total-pages` en utilisant un nombre.
- Définissez la page actuelle ou active à l’aide de l’attribut `current-page` en utilisant un nombre.
- Choisissez d’utiliser l’attribut `url` pour fournir au composant un groupe de liens de pages. Il peut s’agir d’un objet si vous travaillez dans un environnement JS ou d’une chaîne si vous utilisez HTML.

#### Appliquez l’objet de l’URL pour la pagination sous forme de liste.

Utilisez l’objet `url` pour générer les chaînes de requête et les fragments pour les liens de la pagination sous forme de liste.

```js
url = {
  queryStrings: {
    // Key value pairs
    key: value,
  },
  fragment: string, // Target id
};
```

Pour modifier la valeur en fonction du lien de page visualisé, ajoutez les modificateurs `::offset` ou `::match` à une clé dans l’objet queryStrings.

`::offset` entame le décompte depuis la valeur donnée en commençant par le lien de la deuxième page.

```js
url = {
  queryStrings: {
    'index::offset': 100,
  },
};
```

Utilisez `::match` pour le lien de page actuellement visualisée afin de multiplier ce dernier par la valeur fournie.

```js
url = {
  queryStrings: {
    'page::match': 1,
  },
};
```

{% raw %}
Utilisez `::offset` ou `::match` pour permettre l’injection d’un nombre dans une chaîne. Utilisez `{{#}}` pour que l’élément modificateur injecte le nombre modifié en fonction de la méthode de comptage dans la chaîne au moment de la visualisation.

```js
url = {
  queryStrings: {
    'index::offset': 'index_{{100}}',
    'page::match': 'page_{{1}}',
  },
};
```

{% endraw %}

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs essentiels](#section-essential)
- [Attributs facultatifs](#section-optional)

<!-- Required section -->

{% examplesContent "fr", "essential" %}
{% endexamplesContent %}

#### `label`

L'attribut `label` définit le texte qui identifie le repère de navigation de la pagination, lui donnant un nom clair et accessible.

{% examplesPreview %}
<gcds-pagination label="pagination sous forme de liste" total-pages="15" current-page="9" lang="fr">
</gcds-pagination>
{% endexamplesPreview %}

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `current-page`

L'attribut `current-page` définit la page actuelle pour une pagination en liste.

{% examplesPreview %}
<gcds-pagination label="pagination sous forme de liste" total-pages="15" current-page="9" lang="fr">
</gcds-pagination>
{% endexamplesPreview %}

#### `display`

L'attribut display définit le style d'affichage de la pagination. Les options sont :

- `list` (par défaut)
- `simple`

<!-- Force line break -->

{% examplesPreview %}
<gcds-pagination label="pagination sous forme de liste" display="list" total-pages="15" current-page="9">
</gcds-pagination>
{% endexamplesPreview %}

#### `next-href`

L'attribut `next-href` définit l'URL de la page suivante pour une pagination simple.

{% examplesPreview %}
<gcds-pagination label="pagination simple" display="simple" previous-href="#" next-href="#" previous-label="Titre de la page" next-label="3 de 3" lang="fr">
</gcds-pagination>
{% endexamplesPreview %}

#### `next-label`

L'attribut `next-label` définit le libellé de la page suivante pour une pagination simple.

{% examplesPreview %}
<gcds-pagination label="pagination simple" display="simple" previous-href="#" next-href="#" previous-label="Titre de la page" next-label="3 de 3" lang="fr">
</gcds-pagination>
{% endexamplesPreview %}

#### `previous-href`

L'attribut `previous-href` définit l'URL de la page précédente pour une pagination simple.

{% examplesPreview %}
<gcds-pagination label="pagination simple" display="simple" previous-href="#" next-href="#" previous-label="Titre de la page" next-label="3 de 3" lang="fr">
</gcds-pagination>
{% endexamplesPreview %}

#### `previous-label`

L'attribut `previous-label` définit le libellé de la page précédente pour une pagination simple.

{% examplesPreview %}
<gcds-pagination label="pagination simple" display="simple" previous-href="#" next-href="#" previous-label="Titre de la page" next-label="3 de 3" lang="fr">
</gcds-pagination>
{% endexamplesPreview %}

#### `total-pages`

L'attribut `total-pages` définit le nombre total de pages pour une pagination en liste.

{% examplesPreview %}
<gcds-pagination label="pagination sous forme de liste" total-pages="15" current-page="9" lang="fr">
</gcds-pagination>
{% endexamplesPreview %}

#### `url`

L'attribut `url` définit l'objet (en JavaScript) ou la chaîne (en HTML) qui génère les chaînes de requête et le fragment pour les liens de pagination en liste.

{% examplesPreview %}
<gcds-pagination label="pagination sous forme de liste" total-pages="15" current-page="9" url='{"queryStrings": { "querystring::offset": 10 }, "fragment": "main" }'>
</gcds-pagination>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-pagination."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-pagination--events-properties&lang=fr"
  width="1200"
  height="1500"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
