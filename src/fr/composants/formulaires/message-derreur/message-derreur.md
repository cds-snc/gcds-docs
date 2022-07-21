---
title: Message d’erreur - Composants
layout: "layouts/documentation.njk"
eleventyNavigation:
  key: errormessageFR
  title: Message d’erreur
  locale: fr
  parent: formsFR
  order: 3
translationKey: "errormessage"
onThisPage:
  0: Le message d’erreur de base
  1: Cas réglés par un message d’erreur
  2: Composants apparentés
  3: Limiter les messages d’erreur
  4: Rédiger un bon message d’erreur
  5: Assurer la visibilité de l’erreur
github: https://github.com/cds-snc/gcds-components/tree/main/src/components/gcds-error-message
---

<header>

# Message d'erreur

`<gcds-error-message>`

Un message d’erreur est un message qui informe une personne d’un problème et qui l’aide à y remédier.

{% docLinks locale stage figma github %}
{% enddocLinks %}

</header>

<section aria-label="Le message d’erreur de base">

## Le message d’erreur de base

On utilise le message d’erreur pour informer une personne qu’elle doit intervenir quelque part avant de retourner à sa tâche.

Planifiez-en un pour les [champs de saisie]({{ "/fr/composants/formulaires/champ-de-saisie/" | url }}) ou les [zones de texte]({{ "/fr/composants/formulaires/zone-de-texte/" | url }}) marquées comme obligatoires.

Évitez d’utiliser les messages d’erreur quand vous le pouvez, et privilégiez la rétroaction positive.

### Message d’erreur intercalé

<ul>
  <li>On utilise le message d’erreur intercalé, près du champ de saisie invalide, pour mettre en évidence l’action requise. Cela permet de corriger le problème tout en consultant le message d’erreur.</li>
</ul>

<div class="comp-show">
  <gcds-input
    label="Champ de saisie"
    input-type="text"
    input-id="input"
    error-message="Message d’erreur"
    size="45"
  ></gcds-input>

  <gcds-textarea
    label="Zone de texte"
    textarea-id="textarea"
    error-message="Message d’erreur"
  ></gcds-textarea>
</div>

{% viewCode locale "view-inline" "Message d’erreur intercalé" %}
``` html
<gcds-input
  label="Champ de saisie"
  input-type="text"
  input-id="input"
  error-message="Message d’erreur"
  size="45"
></gcds-input>

<gcds-textarea
  label="Zone de texte"
  textarea-id="textarea"
  error-message="Message d’erreur"
></gcds-textarea>
```
{% endviewCode %}
</section>

<section aria-label="Cas réglés par un message d’erreur">

## Cas réglés par un message d’erreur

On utilise le message d’erreur pour communiquer à une personne la nature du problème, la raison pour laquelle c’est arrivé et la façon d’y remédier.

Utilisez le message d’erreur pour :

- signaler qu’un champ obligatoire est incomplet ou vide,
- fournir des instructions de mise en forme, par exemple s’il manque un symbole @ dans une adresse courriel,
- fournir des informations supplémentaires qui aident à remplir un champ.

</section>

<section aria-label="Composants apparentés">

## Composants apparentés

<ul>
  <li><strong>Formes de validation</strong>: à utiliser pour marquer la validité d’un champ et faire savoir que la réponse sera acceptée.</li>
  <li><strong>Alertes</strong>: à utiliser pour communiquer tout problème qu’une personne ne peut pas corriger par elle-même.</li>
</ul>
</section>

<section aria-label="Limiter les messages d’erreur">

## Limiter les messages d’erreur

### Utiliser les messages d’erreur seulement s’il le faut

Cherchez à éliminer les messages d’erreur autant que possible. Ils peuvent être stressants pour les personnes utilisant votre produit.

Utilisez des formes de validation pour distinguer les entrées valides des erreurs. Elles peuvent être sécurisantes après avoir reçu une erreur.

### Prévenir les erreurs

Évitez de marquer un champ comme obligatoire s’il n’est pas essentiel, et indiquez clairement quels champs sont obligatoires pour qu’ils ne puissent pas être ignorés.

Aidez les personnes à fournir les bonnes informations et à éviter les erreurs grâce à des étiquettes claires et intuitives. Les étiquettes trop longues risquent de ne pas être lues au complet.

Utilisez le texte d’aide pour indiquez aux personnes le format requis ou tout autre critère pour remplir un champ.

</section>

<section aria-label="Rédiger un bon message d'erreur">

## Rédiger un bon message d'erreur

### Principes de base

Quand une personne reçoit un message d’erreur, elle doit pouvoir :
1. savoir où se trouve l’erreur
2. savoir quoi faire pour corriger l’erreur
3. faire les changements requis
4. envoyer ou faire valider à nouveau le formulaire sans avoir à le remplir une deuxième fois

Évitez d’écrire en majuscules ou de mettre des majuscules initiales à chaque mot. N’utilisez pas de point d’exclamation, ni le mot « erreur ».

Dites précisément à la personne ce qu’elle doit faire pour corriger l’erreur, afin qu’elle puisse rapidement renvoyer son formulaire.

### Donner des indications brèves et précises

Soyez concis. Si votre message dépasse 1 ou 2 lignes, il risque d’être trop complexe.

Donnez une seule raison pour expliquer l’erreur. Concentrez-vous sur la solution, pas sur la cause.

Soyez clair. Faites les liens nécessaires pour la personne qui utilise votre produit, afin qu’elle ne soit pas forcée de réfléchir à la façon de corriger son erreur.

Astuce : demandez-vous si le message pourrait être interprété autrement.

### Rester humain

Ne rejetez jamais la faute sur la personne qui remplit le formulaire. Dites-lui ce qu’il faut faire pour corriger la situation et revenir à sa tâche. Il faut éviter de recréer la même erreur, ce qui causerait de la frustration.

Parlez comme le font les personnes utilisant votre produit. Évitez le jargon et les paroles négatives.

Astuce : pour donner un ton humain et convivial à vos messages d’erreur, imaginez que vous expliquez le problème à une personne devant vous. Le message d’erreur se dit-il bien dans une conversation?

</section>

<section aria-label="Assurer la visibilité de l’erreur">

## Assurer la visibilité de l’erreur

Si une erreur est déclenchée par l’envoi d’un formulaire, faites en sorte que l’étiquette et le contour du champ passent à une couleur « danger ».

Placez le message d’erreur intercalé juste avant le [champ de saisie]({{ "/fr/composants/formulaires/champ-de-saisie/" | url }}) (juste à gauche ou au-dessus) pour que les personnes le remarquent. La bannière du message d’erreur doit prendre toute la largeur du champ ou de la [zone de texte]({{ "/fr/composants/formulaires/zone-de-texte/" | url }}).

Utilisez les résumés d’erreurs en combinaison avec les messages d’erreur intercalés pour faire connaître toutes les interventions nécessaires. Cela évite aussi aux personnes de se demander quelle erreur de la liste correspond à quel champ plus loin dans la page.

</section>
