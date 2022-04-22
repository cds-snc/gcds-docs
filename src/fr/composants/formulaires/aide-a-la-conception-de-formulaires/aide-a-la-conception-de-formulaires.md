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
  0: Make forms less daunting
  1: Fournir une marche à suivre qui est claire
  2: Faciliter la compréhension du formulaire
  3: Give clear interaction feedback
---

<header>

# Aide à la conception de formulaires

Forms collect information for things like file creation and records maintenance. They’re used for applications, feedback, and transactions, like purchases. And sometimes, for formal requests, evaluations, or templates.

</header>

## Make forms less daunting

Your goal is to make forms less intimidating and frustrating. Help a person achieve their goal without working too hard for it or getting stuck.

- Select form elements carefully
- Group them thoughtfully
- Communicate the information you need with words they’ll understand

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
  textarea-id="name"
  hint="For example: Taryn Li"
></gcds-input>

{% viewCode locale "instructions" "Donner des instructions au bon moment" %}

``` html
<gcds-input
  label="Nom complet"
  textarea-id="name"
  hint="For example: Taryn Li"
></gcds-input>
```

{% endviewCode %}

### Bien choisir l’ordre des champs

Placez les champs de façon à ajouter graduellement les tâches complexes. Si vous demandez des informations sensibles, allez du plus facile au plus difficile pour mettre les gens à l’aise.

## Give clear interaction feedback

### Limiter le bruit et les distractions

Keep text, images, and distractions around the form field to a minimum. A short label, required text in the label, and hint text are all you need.

Align fields on the right. Keep input width and character number consistent.

### Offer feedback

Validate inputs in real-time. Make your field validations inline. (Display errors next to the field).

Place the label just above its corresponding form field so a person using screen magnification can find it without having to repeatedly scroll back and forth.

Match the form field name to the form label text. That way, people who use speech or voice commands can activate the right control.

Screen readers tend to only read form elements aloud such as “input”, “select”, “textarea”, “label” and “legend”. Include hint text with “aria-describedby”.

### Handling required fields

Place “required” at the end of the field label if information is required. Avoid red and additional symbols or punctuation, like the asterisk (*).

If left blank or incomplete, an error message will remind a person to fill a required field and give specific instructions about what they need to do.

Have a strong rationale for keeping an optional field on a form or remove it altogether.

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
