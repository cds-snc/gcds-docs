---
title: Aide à la conception de formulaires - Composants
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: formsguidanceFR
  title: Aide à la conception de formulaires
  locale: fr
  parent: formsFR
  order: 0
translationKey: "formsguidance"
onThisPage:
  0: Rendre les formulaires moins intimidants
  1: Fournir une marche à suivre qui est claire
  2: Faciliter la compréhension du formulaire
  3: Donner une rétroaction claire sur l’interaction
---

<header>

# Aide à la conception de formulaires

Les formulaires servent à collecter des informations, notamment pour la création et la tenue de dossiers. On les utilise pour les candidatures, les commentaires et les transactions comme les achats. On les utilise aussi pour les demandes officielles, les évaluations ou en tant que modèles servant à générer d’autres documents.

</header>

<section aria-label="Rendre les formulaires moins intimidants">

## Rendre les formulaires moins intimidants

On cherche à rendre les formulaires moins intimidants et moins frustrants. Il faut aider les personnes à atteindre leur objectif sans leur demander trop d’efforts ni les bloquer.

- Choisissez soigneusement les éléments du formulaire.
- Regroupez-les judicieusement.
- Communiquez les informations dont vous avez besoin avec des mots qu'ils comprendront.

<form>
  <gcds-input
    label="Adresse courriel"
    input-type="email"
    input-id="email"
    size="45"
  ></gcds-input>
  <gcds-textarea
    label="Message"
    textarea-id="message"
  ></gcds-textarea>
</form>

{% viewCode locale "daunting" "Make forms less daunting" %}

``` html
<form>
  <gcds-input
    label="Adresse courriel"
    input-type="email"
    input-id="email"
    size="45"
  ></gcds-input>
  <gcds-textarea
    label="Message"
    textarea-id="message"
  ></gcds-textarea>
</form>
```

{% endviewCode %}

</section>

<section aria-label="Fournir une marche à suivre qui est claire">

## Fournir une marche à suivre qui est claire

### S’en tenir aux champs indispensables

Voici des questions à vous poser au moment de choisir les champs à inclure dans votre formulaire :

- Qui a besoin des données collectées?
- Les données sont-elles indispensables ou simplement un plus?
- Comment les données seront-elles utilisées?

Si le champ n’est pas obligatoire, supprimez-le. Il n’était probablement pas indispensable. S’il est important mais facultatif, ayez une bonne raison de le garder.

### Choisir des composants de formulaire adaptés

Choisissez des composants de formulaire adaptés à l’usage que vous allez faire de vos données. Privilégiez l’expérience utilisateur.

Demandez-vous quels sont les modèles mentaux des personnes remplissant votre formulaire. Ces personnes sont peut-être habituées de répondre aux questions d’une certaine manière. Essayez de leur faciliter la tâche.

Astuce : est-il plus facile de comprendre la question si on voit les réponses possibles? Si oui, une liste de choix sous forme de cases à cocher ou de boutons radio peut être une bonne idée.

### S’en tenir à une notion par page

Assemblez les composants de votre formulaire de manière logique, de façon à définir clairement la marche à suivre.

Regroupez les éléments semblables en catégories, et divisez le formulaire en étapes. Pensez à ce qui relie certains champs : l’un est-il dépendant d’un autre? ou aborde-t-il des informations apparentées à un autre?

Limitez-vous à une notion par page. Les formulaires d’une seule page se prêtent bien aux tâches uniques de type « Nous joindre ». Pour les longs formulaires, limitez-vous à une catégorie ou sous-tâche par page.

</section>

<section aria-label="Faciliter la compréhension du formulaire">

## Faciliter la compréhension du formulaire

### Miser sur une bonne étiquette

Le libellé de l’étiquette est le premier élément d’information dont se sert une personne pour savoir quoi écrire dans un champ. Tenez compte de la façon dont l’étiquette peut être vue, entendue et comprise, et des interactions possibles. 

Rédigez des étiquettes concises et brèves, où seul le premier mot porte la majuscule. Veillez à ce que chaque étiquette soit unique et ne soit pas réutilisée pour plus d’un champ.  

Astuce : réduisez le nombre de mots des étiquettes en utilisant des titres plutôt que des questions.

### Donner des instructions au bon moment

Utilisez le texte d’aide pour préciser le format requis ou signaler les éléments qui provoqueraient un message d’erreur s’ils étaient manquants. Insérez le texte d’aide entre l’étiquette et le champ, là où les instructions peuvent être lues au moment où elles sont utiles.

Évitez de fournir des instructions qui doivent être mémorisées. Ne les placez donc pas dans une page externe ou dans le haut du formulaire. Évitez aussi de préremplir les champs avec du texte d’aide qui disparaît une fois le curseur dans le champ.

Évitez de désactiver les éléments d’interface comme les champs de saisie, les zones de texte et les boutons. Si vous devez le faire, assurez-vous que ces éléments puissent accueillir la cible de saisie dès qu’ils sont réactivés, et faites-le savoir à l’utilisateur.

<gcds-input
  label="Nom complet"
  textarea-id="nom"
  hint="Exemple : Taryn Li"
></gcds-input>

{% viewCode locale "instructions" "Donner des instructions au bon moment" %}

``` html
<gcds-input
  label="Nom complet"
  textarea-id="nom"
  hint="Exemple : Taryn Li"
></gcds-input>
```

{% endviewCode %}

### Bien choisir l’ordre des champs

Placez les champs de façon à ajouter graduellement les tâches complexes. Si vous demandez des informations sensibles, allez du plus facile au plus difficile pour mettre les gens à l’aise.

</section>

<section aria-label="Donner une rétroaction claire sur l’interaction">

## Donner une rétroaction claire sur l’interaction

### Limiter le bruit et les distractions

Réduisez au minimum le texte, les images et les distractions autour du champ du formulaire. Un libellé d’étiquette court, la mention « obligatoire » et un texte d’aide sont tout ce qu’il vous faut.

Alignez les champs sur la droite. Veillez à ce que la largeur des champs et le nombre maximum de caractères soient constants.

### Donner de la rétroaction

Validez les champs de saisie en temps réel. Intégrez les formules de validation au contenu en question (affichez les erreurs à côté du champ).

Placez l’étiquette juste au-dessus du champ qu’elle désigne afin que les personnes utilisant un logiciel de grossissement de texte puissent la trouver sans avoir à faire défiler l’écran à plusieurs reprises.

Assurez-vous que l’étiquette textuelle du champ est la même que celle qui est codée. Cela permet aux personnes utilisant des commandes vocales de cibler le bon champ.

Souvent, les lecteurs d’écran ne lisent que le contenu des éléments de formulaire input, select, textarea et legend. Incorporez un texte d’aide en utilisant <span lang="en">aria-describedby</span>.

### Champs obligatoires

Indiquez « obligatoire » à la fin de l’étiquette du champ si l’information est exigée. Évitez d’utiliser la couleur rouge et les symboles ou signes de ponctuation supplémentaires comme l’astérisque (*).

Si un champ obligatoire reste vide ou est incomplet, un message d’erreur s’affichera pour rappeler à la personne qu’il doit être rempli. Le message fournira des instructions précises sur ce qu’il faut faire.

Si un champ est facultatif, ayez une bonne raison de le garder. Sinon, supprimez-le.

<gcds-input
  label="Étiquette"
  input-id="input-required"
  required
></gcds-input>

{% viewCode locale "required" "Handling required fields" %}

``` html
<gcds-input
  label="Étiquette"
  input-id="input-required"
  required
></gcds-input>
```

{% endviewCode %}

</section>
