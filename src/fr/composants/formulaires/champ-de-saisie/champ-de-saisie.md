---
title: Champ de saisie - Composants
layout: "layouts/documentation.njk"
date: "git Last Modified"
eleventyNavigation:
  key: inputsFR
  title: Champ de saisie
  locale: fr
  parent: formsFR
  order: 1
translationKey: "inputs"
onThisPage:
  0: Le champ de saisie de base
  1: Comment modifier le champ de saisie
  2: Cas réglés par le champ de saisie
  3: Composants apparentés
  4: Dimensions et emplacement des champs
  5: Rédiger une bonne étiquette
  6: Texte d’aide et messages d’erreur
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-input
lastModified: true
---

<header>

# Champ de saisie

`<gcds-input>`

Un champ de saisie est un espace, généralement dans un formulaire, où une personne saisit de brèves informations en réponse à une question ou à une instruction.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="Le champ de saisie de base">

## Le champ de saisie de base

On utilise les champs de saisie pour collecter des informations qui tiennent sur une ligne.

Un champ de saisie peut avoir divers états : de survol <span lang="en">(*hover*)</span>, ciblé <span lang="en">(*focus*)</span>, actif <span lang="en">(*active*)</span> et désactivé <span lang="en">(*disabled*)</span>. Ces états changent quand une personne interagit avec le champ.

### Champ de type <span lang="en">`text` </span>

<div class="comp-show">
  <gcds-input
    type="text"
    input-id="codepostal"
    label="Code postal"
    hint="limite de 6 caractères"
    size="6"
  ></gcds-input>
  <gcds-input
    type="text"
    input-id="prenom"
    label="Prénom"
    hint="limite de 50 caractères"
    size="50"
  ></gcds-input>
</div>

{% viewCode locale "view-text" "Champ de type text" %}
``` html
<gcds-input
  type="text"
  input-id="codepostal"
  label="Code postal"
  hint="Limite de 6 caractères"
  size="6"
></gcds-input>

<gcds-input
  type="text"
  input-id="prenom"
  label="Prénom"
  hint="Limite de 50 caractères"
  size="50"
></gcds-input>
```
{% endviewCode %}

À utiliser pour collecter des réponses textuelles courtes, tenant sur une ligne.

À utiliser par défaut s’il n’y a pas d’autre type de champ plus approprié pour une réponse d’une seule ligne.

À utiliser pour collecter le nom d’une personne (souvent le nom complet).

À utiliser au lieu du type number si le champ peut comprendre à la fois des valeurs numériques et non numériques.

### Champ de type <span lang="en">`email` </span>

<div class="comp-show">
  <gcds-input
    type="email"
    input-id="email"
    label="Adresse courriel"
    hint="Exemple: hello@email.com"
    size="50"
  ></gcds-input>
</div>

{% viewCode locale "view-email" "Champ de type email" %}
``` html
<gcds-input
  type="email"
  input-id="email"
  label="Adresse courriel"
  hint="Exemple: hello@email.com"
  size="50"
></gcds-input>
```
{% endviewCode %}

À utiliser pour collecter une adresse courriel.

### Champ de type <span lang="en">`password` </span>

<div class="comp-show">
  <gcds-input
    type="password"
    input-id="password"
    label="Password"
    size="50"
  ></gcds-input>
</div>

{% viewCode locale "view-password" "Champ de type password" %}
``` html
<gcds-input
  type="password"
  input-id="password"
  label="Password"
  size="50"
></gcds-input>
```
{% endviewCode %}

À utiliser pour collecter et vérifier un mot de passe.

### Champ de type <span lang="en">`number` </span>

<div class="comp-show">
  <gcds-input
    type="number"
    input-id="number"
    label="Numéro de téléphone"
    hint="limite de 10 caractères"
    size="10"
  ></gcds-input>
</div>

{% viewCode locale "view-number" "Champ de type number" %}
``` html
<gcds-input
  type="number"
  input-id="number"
  label="Numéro de téléphone"
  hint="limite de 10 caractères"
  size="10"
></gcds-input>
```
{% endviewCode %}

À utiliser pour refuser toute valeur qui n’est pas numérique.

Bon à savoir : si vous imposez une contrainte, par exemple un intervalle de chiffres, communiquez-le avec un texte d’aide.

### Champ de type <span lang="en">`search` </span>

<div class="comp-show">
  <gcds-input
    type="search"
    input-id="search"
    label="Champ de type search"
  ></gcds-input>
</div>

{% viewCode locale "view-search" "Champ de type search" %}
``` html
<gcds-input
  type="search"
  input-id="search"
  label="Champ de type search"
></gcds-input>
```
{% endviewCode %}

### Champ de type <span lang="en">`url` </span>

<div class="comp-show">
  <gcds-input
    type="url"
    input-id="url"
    label="Champ de type url"
    hint="Exemple: https://design.alpha.canada.ca/fr"
  ></gcds-input>
</div>

{% viewCode locale "view-url" "Champ de type url" %}
``` html
<gcds-input
  type="url"
  input-id="url"
  label="Champ de type url"
  hint="Exemple: https://design.alpha.canada.ca/fr"
></gcds-input>
```
{% endviewCode %}

À utiliser pour collecter une URL, comme une adresse Web.

</section>

<section aria-label="Comment modifier le champ de saisie">

## Comment modifier le champ de saisie

Il peut arriver que les options par défaut ne permettent pas de répondre aux besoins des personnes utilisant votre produit. Vous pouvez modifier le composant pour créer un champ de saisie personnalisé, adapté à un cas particulier.

### Type du champ de saisie

Définissez le type de champ de saisie en fonction de la façon de valider les données entrées.

L’attribut <span lang="en">`input-type`</span> peut prendre les valeurs suivantes :

<div lang="en">

- `text`
- `email`
- `password`
- `number`
- `search`
- `url`

</div>

### Appliquer les bases du système de design

Choisissez des unités de style pour la typographie parmi les [bases du système de design du GC]({{ "/fr/bases/" | url }}). Les unités de style pour la couleur et l’espacement seront bientôt disponibles!

</section>

<section aria-label="Cas réglés par le champ de saisie">

## Cas réglés par le champ de saisie

Utilisez un champ de saisie pour collecter des informations comme :

- une réponse libre à une question brève
- le nom complet d’une personne, afin de l’utiliser dans des communications personnalisées ou un produit
- une date lorsque celle-ci est connue d’avance par la personne remplissant le formulaire
- une réponse composée de chiffres seulement
- une adresse courriel ou une URL

</section>

<section aria-label="Composants apparentés">

## Composants apparentés

**Boutons radio ou listes déroulantes** : à utiliser quand vous offrez plusieurs options et qu’il faut en choisir une.

**Cases à cocher** : à utiliser quand vous offrez plusieurs options et qu’on peut en choisir plusieurs.

**Boutons** : à utiliser quand vous demandez un consentement ou une autorisation, ou que vous offrez un choix entre 2 options.

**Sélecteurs de date** : à utiliser quand vous voulez qu’une personne choisisse une date, par exemple pour un rendez-vous.

</section>

<section aria-label="Dimensions et emplacement des champs">

##  Dimensions et emplacement des champs

### Largeur du champ

Utilisez des champs à largeur fixe si vous connaissez d’avance la longueur de la réponse. Les codes postaux ont par exemple 6 caractères, et les numéros de téléphone, 10 caractères. Le moyen le plus simple est d’utiliser l’attribut `size`, où `size=”50”` équivaut à une largeur de 50 caractères.

Si vous ne connaissez pas le nombre de caractères de la réponse, configurez le champ de sorte qu’il prenne presque toute la largeur du conteneur, par exemple 90 %.

Utilisez le maximum de 75 caractères pour les réponses à longueur variable.

### Visibilité des champs

Vérifiez que l’emplacement du champ assure un bon contraste entre la ligne ou le contour du champ et l’arrière-plan, ainsi qu’entre l’étiquette et l’arrière-plan.

Utilisez l’état de survol intégré ou un état de survol personnalisé qui assure un bon contraste.

Évitez de placer le texte d’aide ou les messages d’erreur après le champ, afin qu’ils soient lus.

</section>

<section aria-label="Rédiger une bonne étiquette">

## Rédiger une bonne étiquette

Regroupez les champs de saisie apparentés en catégories pour que les personnes comprennent plus facilement ce qui est demandé.

Rédigez une étiquette courte qui précise l’information demandée. Évitez de poser une question, car celle-ci rallonge souvent l’étiquette. Ajoutez un texte de remplacement pour toute icône ou image.

Évitez de réutiliser une étiquette pour différents champs dans une même page. Une personne naviguant d’un champ à l’autre entendrait les mêmes étiquettes sans savoir ce qui les différencie.

Évitez d’utiliser des mots techniques comme « identifiant de compte ». Préférez des mots précis et à caractère personnel, comme « nom complet ».

Évitez les expressions qui pourraient être étrangères à des personnes dont le français n’est pas la langue première, et explicitez les termes difficiles à comprendre.

Ne demandez que les informations dont vous avez besoin. Pour vous aider à savoir quelles questions poser, vous pouvez utiliser un protocole de questionnaire.

</section>

<section aria-label="Texte d’aide et messages d’erreur">

## Texte d’aide et messages d’erreur

### Comment utiliser le texte d’aide

Ajoutez un texte d’aide pour aider une personne à remplir un champ de façon attendue.

Rédigez le texte d’aide pour qu’il soit informatif, court et précis.

Assurez-vous que le texte d’aide ne disparaisse pas au moment d’écrire.

### Comment utiliser les messages d’erreur

Rédigez un message d’erreur pour tous les champs obligatoires dont la réponse est manquante ou invalide.

Expliquez à la personne la nature du problème et comment elle peut y remédier pour accomplir son objectif. Évitez toute forme de reproche.

Plutôt que de signaler les erreurs, envisagez si possible de confirmer les réponses valides.

</section>
