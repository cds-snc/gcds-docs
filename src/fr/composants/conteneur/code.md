---
title: Conteneur
layout: 'layouts/component-documentation.njk'
translationKey: 'containerCode'
tags: ['containerFR', 'code']
date: 'git Last Modified'
---

## Sur cette page

- [Codage et accessibilité des conteneurs](#codage-et-accessibilite-des-conteneurs)
- [Exemples](#section-examples)
- [Générateur de code](#generateur-de-code)

## Codage et accessibilité des conteneurs

### Limiter la largeur du contenu

- Veillez à ce que vos lignes de texte ne dépassent pas 65 caractères pour obtenir une longueur de lecture acceptable.
- Limitez la largeur de la colonne pour éviter que les grands écrans n'affichent des lignes de texte trop longues et difficiles à lire.
- Évitez de dépasser la largeur maximale de 71,25 rem (1140 px).

### Ajouter une taille de conteneur

La propriété `size` définit la taille d'un conteneur. Six tailles sont disponibles :

| Taille | REM      | Pixels (px) |
| ------ | -------- | ----------- |
| `full` | 100%     | 100%        |
| `xl`   | 71.25rem | 1140px      |
| `lg`   | 62rem    | 992px       |
| `md`   | 48rem    | 768px       |
| `sm`   | 30rem    | 480px       |
| `xs`   | 20rem    | 320px       |

<br/>

La taille du conteneur par défaut est `full`, ce qui signifie que le conteneur occupera la largeur totale du conteneur parent.

### Aligner le contenu avec la mise en page

Utilisez `layout="page"` pour aligner visuellement le contenu de la page avec [l'en-tête]({{ links.header }}) et le [pied de page]({{ links.footer }}).

Lorsque `layout` est défini sur `page`, le conteneur :

- Utilise une largeur maximale de 71,25 rem (1140 px).
- Est centré automatiquement dans la fenêtre d'affichage.
- Passe à une largeur de 90 % sur les écrans plus petits.
- Adopte le même comportement de mise en page que l'en-tête et le pied de page.

L'utilisation de `layout="page"` garantit une largeur, un alignement et une expérience de lecture cohérents, quel que soit le point de rupture. Lorsque `layout` est défini sur `page`, il est inutile de définir une taille (`size`) ou un alignement (`alignment`) pour le conteneur, car la mise en page gère automatiquement la largeur et l'alignement.

### Positionner le conteneur

Utilisez l'attribut `alignment` pour contrôler le positionnement d'un conteneur dans son conteneur parent. Trois options sont disponibles :

- `start` : positionne le conteneur horizontalement au début de l'espace disponible.
- `center` : centre le conteneur horizontalement.
- `end` : positionne le conteneur horizontalement à la fin de l'espace disponible.

**Remarque :** Lorsque l'attribut `layout` est défini sur `page`, l'attribut `alignment` est ignoré; la mise en page gère automatiquement la largeur et le centrage.

<!-- ----- Examples ----- -->

{% examplesContent "fr", "examples" %}
{% endexamplesContent %}

### Dans cette section

- [Attributs facultatifs](#section-optional)
- [Emplacements (slots)](#section-slot)

<!-- Optional section -->

{% examplesContent "fr", "optional" %}
{% endexamplesContent %}

#### `alignment`

L'attribut `alignment` définit comment le conteneur est positionné dans son parent. Cette propriété est ignorée lorsque `layout` est défini à `page`, car la mise en `page` a une priorité plus élevée. Les options sont :

- `center`
- `end`
- `start`

<!-- Force line break -->

{% examplesPreview %}
<gcds-container alignment="center" size="sm" border padding="300">
  <p>Conteneur</p>
</gcds-container>
{% endexamplesPreview %}

#### `border`

L'attribut `border` contrôle si le conteneur a une bordure ou non.

{% examplesPreview %}
<gcds-container border padding="300">
  <p>Conteneur</p>
</gcds-container>
{% endexamplesPreview %}

#### `layout`

L'attribut `layout` définit comment le conteneur s'aligne avec la mise en page. Les options sont :

- `full`
- `page`

<!-- Force line break -->

{% examplesPreview %}
<gcds-container layout="full" border padding="300">
  <p>Conteneur</p>
</gcds-container>
{% endexamplesPreview %}

#### `margin`

L'attribut `margin` définit la marge du conteneur. Les marges gauche et droite ne sont pas appliquées si l'attribut alignment est défini, car il a une priorité plus élevée.

{% examplesPreview %}
<gcds-container margin="800" size="xs" border padding="300">
  <p>Conteneur</p>
</gcds-container>
{% endexamplesPreview %}

#### `padding`

L'attribut `padding` définit la marge intérieure du conteneur, soit l'espacement entre sa bordure et son contenu.

{% examplesPreview %}
<gcds-container padding="600" border>
  <p>Conteneur</p>
</gcds-container>
{% endexamplesPreview %}

#### `size`

L'attribut `size` définit la largeur du conteneur. Les options sont :

- `full` (default)
- `xl`
- `lg`
- `md`
- `sm`
- `xs`

<!-- Force line break -->

{% examplesPreview %}
<gcds-container size="sm" border padding="300">
  <p>Conteneur</p>
</gcds-container>
{% endexamplesPreview %}

#### `tag`

L'attribut `tag` définit l'élément HTML utilisé pour afficher le conteneur. Par défaut, il est défini à `div`.

{% examplesPreview %}
<gcds-container tag="section" border padding="300">
  <p>Conteneur</p>
</gcds-container>
{% endexamplesPreview %}

<!-- Slot section -->

{% examplesContent "fr", "slot" %}
{% endexamplesContent %}

#### `default`

L'emplacement par défaut sert à ajouter du contenu à l'intérieur du conteneur.

{% examplesPreview %}
<gcds-container border padding="300">
  <p>Conteneur</p>
</gcds-container>
{% endexamplesPreview %}

<!-- ----- Code builder ----- -->

{% include "partials/getcode.njk" %}

<iframe
  title="Survol des propriétés et des évènements relatifs à gcds-container."
  src="https://cds-snc.github.io/gcds-components/iframe.html?viewMode=docs&demo=true&singleStory=true&id=components-container--events-properties&lang=fr"
  width="1200"
  height="1500"
  style="display: block; margin: 0 auto;"
  frameBorder="0"
  allow="clipboard-write"
></iframe>
