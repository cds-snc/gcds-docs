---
title: Zone de texte - Composants
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: textareaFR
  title: Zone de texte
  locale: fr
  parent: formsFR
  order: 2
translationKey: "textarea"
onThisPage:
  0: La zone de texte de base
  1: Comment modifier la zone de texte
  2: Cas réglés par la zone de texte
  3: Composants apparentés
  4: Dimensions et emplacement des zones de texte
  5: Rédiger une bonne étiquette
  6: Texte d’aide et messages d’erreur
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-textarea
---

<header>

# Zone de texte

`<gcds-textarea>`

Une zone de texte est un espace, généralement dans un formulaire, où une personne saisit des informations détaillées en réponse à une question ou à une instruction.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="La zone de texte de base">

## La zone de texte de base

On utilise la zone de texte pour collecter des informations qui tiennent sur plusieurs lignes.

Une zone de texte peut avoir divers états : de survol <span lang="en">(*hover*)</en>, ciblé <span lang="en">(*focus*)</en>, actif <span lang="en">(*active*)</en> et désactivé <span lang="en">(*disabled*)</en>. Ces états changent quand une personne interagit avec la zone.

### Zone de texte

<div class="comp-show">
  <gcds-textarea
    textarea-id="textarea"
    label="Text area"
    rows="6"
  ></gcds-textarea>
</div>

On utilise la zone de texte pour collecter des réponses détaillées tenant sur plusieurs lignes.

{% viewCode locale "view-textarea" "Zone de texte" %}

``` html
<gcds-textarea
  textarea-id="textarea"
  label="Zone de texte"
  rows="6"
></gcds-textarea>
```

{% endviewCode %}

</section>

<section aria-label="Comment modifier la zone de texte">

## Comment modifier la zone de texte

Il peut arriver que les options par défaut ne permettent pas de répondre aux besoins des personnes utilisant votre produit. Vous pouvez modifier le composant pour créer une zone de texte personnalisée, adaptée à un cas particulier.

### Appliquer les bases du système de design

Choisissez des unités de style pour la typographie parmi les [bases du système de design du GC]({{ "/fr/bases/" | url }}). Les unités de style pour la couleur et l’espacement seront bientôt disponibles!

</section>

<section aria-label="Cas réglés par la zone de texte">

## Cas réglés par la zone de texte

Utilisez une zone de texte pour collecter des informations comme :

- une réponse libre à une question à développement
- une description, par exemple pour décrire un problème
- un message textuel dans une page de contact

</section>

<section aria-label="Composants apparentés">

## Composants apparentés

**Champs de saisie texte** : à utiliser pour les réponses d’une ligne.

**Boutons radio ou listes déroulantes** : à utiliser quand vous offrez plusieurs options et qu’il faut en choisir une.

**Cases à cocher** : à utiliser quand vous offrez plusieurs options et qu’on peut en choisir plusieurs.

**Boutons** : à utiliser quand vous demandez un consentement ou une autorisation, ou que vous offrez un choix entre 2 options.

**Sélecteurs de date** : à utiliser quand vous voulez qu’une personne choisisse une date, par exemple pour un rendez-vous.

</section>

<section aria-label="Dimensions et emplacement des zones de texte">

## Dimensions et emplacement des zones de texte

### Dimensions de la zone de texte

Évitez de définir une largeur de moins de 50 % (1/2 largeur).

Définissez une hauteur qui est proportionnelle à la quantité de texte attendue. Vous pouvez définir la hauteur d’une zone de texte en utilisant l’attribut <span lang="en">`rows`</span>.

### Visibilité des zones de texte

Vérifiez que l’emplacement du champ assure un bon contraste entre la ligne ou le contour du champ et l’arrière-plan, ainsi qu’entre l’étiquette et l’arrière-plan.

Utilisez l’état de survol intégré ou un état de survol personnalisé qui assure un bon constraste.

Marquez les champs obligatoires d’une astéristique et du mot « obligatoire ».

Évitez de placer le texte d’aide ou les messages d’erreur après le champ, afin qu’ils soient lus.

</section>

<section aria-label="Rédiger une bonne étiquette">

## Rédiger une bonne étiquette

Regroupez les zones de texte apparentées en catégories pour que les personnes comprennent plus facilement ce qui est demandé.

Rédigez une étiquette courte qui précise l’information demandée. Évitez de poser une question, car celle-ci rallonge souvent l’étiquette. Ajoutez un texte de remplacement pour toute icône ou image.

Évitez de réutiliser une étiquette pour différentes zones de texte dans une même page. Une personne naviguant d’une zone à l’autre entendrait les mêmes étiquettes sans savoir ce qui les différencie.

Évitez d’utiliser des mots techniques comme « identifiant de compte ». Préférez des mots précis et à caractère personnel, comme « nom complet ».

Évitez les expressions qui pourraient être étrangères à des personnes dont le français n’est pas la langue première, et explicitez les termes difficiles à comprendre.

Ne demandez que les informations dont vous avez besoin.

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
