---
title: Champ de saisie
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: inputsFR
  title: Champ de saisie
  locale: fr
  parent: formsFR
  order: 1
translationKey: "inputs"
onThisPage:
  0: Comment utiliser le champ de saisie
  1: Personnaliser un champ de saisie
  2: Quand utiliser un champ de saisie
  3: Composants apparentés
  4: Où placer les champs de saisie
  5: Rédiger une bonne étiquette de champ
  6: Texte d’aide et messages d'erreur
---

# Champ de saisie

Un champ de saisie est un espace, généralement dans un formulaire, où une personne saisit de brèves informations en réponse à une question ou à une instruction.

## Comment utiliser le champ de saisie

On utilise les champs de saisie pour collecter des informations qui tiennent sur une ligne.

Un champ de saisie peut avoir divers états : de survol <span lang="en">(hover)</span>, ciblé <span lang="en">(focus)</span>, actif <span lang="en">(active)</span> et désactivé <span lang="en">(disabled)</span>. Ces états changent quand une personne interagit avec le champ.

### Saisie de type texte

<gcds-input
  type="text"
  input-id="saisie-de-type-texte"
  label="Saisie de type texte"
/>

On utilise le type text pour collecter des réponses courtes tenant sur une ligne.

Employez-le par défaut s’il n’y a pas d’autre type de saisie possible pour une réponse d’une seule ligne.

Privilégiez-le pour la collecte du nom complet d’une personne.

Employez-le au lieu du type number si le champ peut comprendre à la fois des valeurs numériques et non numériques.

{% viewCode "fr" "text-input-show" %}

``` html
<gcds-input
  type="text"
  input-id="saisie-de-type-texte"
  label="Saisie de type texte"
/>
```

{% endviewCode %}

### Saisie de type nombre

<gcds-input
  type="number"
  input-id="saisie-de-type-texte"
  label="Saisie de type nombre"
/>

On utilise le type number pour refuser toute valeur qui n’est pas numérique. 

Bon à savoir : si vous imposez une contrainte, par exemple un intervalle de chiffres, communiquez-le avec un texte d’aide.

{% viewCode "fr" "number-input-show" %}

``` html
<gcds-input
  type="number"
  input-id="saisie-de-type-texte"
  label="Saisie de type nombre"
/>
```

{% endviewCode %}

### Saisie de type courriel

<gcds-input
  type="email"
  input-id="saisie-de-type-courriel"
  label="Saisie de type courriel"
/>

On utilise le type email pour collecter une adresse courriel.

{% viewCode "fr" "email-input-show" %}

``` html
<gcds-input
  type="email"
  input-id="saisie-de-type-courriel"
  label="Saisie de type courriel"
/>
```

{% endviewCode %}

### Saisie de type URL

<gcds-input
  type="url"
  input-id="saisie-de-type-texte"
  label="Saisie de type URL"
/>

On utilise le type url pour collecter une URL, comme une adresse Web.

{% viewCode "fr" "url-input-show" %}

``` html
<gcds-input
  type="url"
  input-id="saisie-de-type-texte"
  label="Saisie de type URL"
/>
```

{% endviewCode %}

## Personnaliser un champ de saisie

## Quand utiliser un champ de saisie

Utilisez un champ de saisie pour collecter des informations comme :

- une réponse libre à une question brève
- le nom complet d’une personne, afin de l’utiliser dans des communications personnalisées ou un produit
- une date lorsque celle-ci est connue d’avance par la personne remplissant le formulaire
- une réponse composée de chiffres seulement
- une adresse courriel ou une URL

## Composants apparentés

**Liens** : à utiliser quand une action est de moindre importance.

**Boutons radio ou listes déroulantes** : à utiliser quand vous offrez plusieurs options et qu’il faut en choisir une.

**Cases à cocher** : à utiliser quand vous offrez plusieurs options et qu’on peut en choisir plusieurs.

**Boutons** : à utiliser quand vous demandez un consentement ou une autorisation, ou que vous offrez un choix entre 2 options.

**Sélecteurs de date** : à utiliser quand vous voulez qu’une personne choisisse une date, par exemple pour un rendez-vous.

## Où placer les champs de saisie

Vérifiez que l’emplacement du champ assure un bon contraste entre la ligne ou le contour du champ et l’arrière-plan, ainsi qu’entre l’étiquette et l’arrière-plan.

Utilisez l’état de survol intégré ou un état de survol personnalisé qui assure un bon constraste.

Évitez de placer le texte d’aide ou les messages d’erreur après le champ, afin qu’ils soient lus.

## Rédiger une bonne étiquette de champ

Regroupez les champs de saisie apparentés en catégories pour que les personnes comprennent plus facilement ce qui est demandé.

Rédigez une étiquette courte qui précise l’information demandée. Évitez de poser une question, car celle-ci rallonge souvent l’étiquette. Ajoutez un texte de remplacement pour toute icône ou image.

Évitez de réutiliser une étiquette pour différents champs dans une même page. Une personne naviguant d’un champ à l’autre entendrait les mêmes étiquettes sans savoir ce qui les différencie.

Évitez d’utiliser des mots techniques comme « identifiant de compte ». Préférez des mots précis et à caractère personnel, comme « nom complet ».

Évitez les expressions qui pourraient être étrangères à des personnes dont le français n’est pas la langue première, et explicitez les termes difficiles à comprendre.

Ne demandez que les informations dont vous avez besoin. Pour vous aider à savoir quelles questions poser, vous pouvez utiliser un protocole de questionnaire.

## Texte d'aide et messages d'erreur

### Comment utiliser le texte d'aide

Ajoutez un texte d’aide pour aider une personne à remplir un champ de façon attendue.

Rédigez le texte d’aide pour qu’il soit informatif, court et précis.

Assurez-vous que le texte d’aide ne disparaisse pas au moment d’écrire.

### Comment utiliser les messages d'erreur

Rédigez un message d’erreur pour tous les champs obligatoires dont la réponse est manquante ou invalide.

Expliquez à la personne la nature du problème et comment elle peut y remédier. Évitez toute forme de reproche.

Plutôt que de signaler les erreurs, envisagez si possible de confirmer les réponses valides.
