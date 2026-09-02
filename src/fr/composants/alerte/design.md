---
title: Alerte
layout: 'layouts/component-documentation.njk'
translationKey: 'alertDesign'
tags: ['alertFR', 'design']
date: 'git Last Modified'
nocrawl: true
---

## Structure de l’alerte

<ol class="anatomy-list">
  <li>L’<strong>icône</strong> (facultative) indique le rôle de l’alerte.</li>
  <li>Le <strong>titre</strong> communique brièvement le message principal de l’alerte. </li>
  <li>Le <strong>message</strong> fournit des précisions et, s’il y a lieu, les prochaines étapes.</li>
  <li>Le <strong>bouton de fermeture</strong> (facultatif) permet de fermer l’alerte.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/en/components/anatomy/gcds-alert-anatomy.svg" alt="La structure de l’alerte comporte 4 éléments : une icône, un titre, un message et un bouton de fermeture." />

## Design et accessibilité des alertes

### Choisissez l’alerte appropriée

- Référez-vous aux cas d’utilisation pour savoir quand utiliser chacun des rôles de l’alerte.
- Utilisez les alertes d’avertissement et de danger seulement lorsque le message est important et urgent. Elles utilisent `role="alert"`. Un lecteur d’écran interrompt alors sa lecture pour annoncer immédiatement l’alerte, ce qui peut être intrusif.
- Utilisez les alertes d’information et de succès lorsque le message est utile, mais pas urgent. Elles utilisent `role="status"`. Un lecteur d’écran annonce alors l’alerte dès qu’il en a l’occasion, sans interrompre sa lecture en cours.

### Placez l’alerte à l’endroit approprié

- Lorsqu’une alerte est déclenchée par une personne, intégrez-la dans le corps de la page, près de l’endroit où l’action a eu lieu. Par exemple, placez-la immédiatement après un bouton susceptible de déclencher de nouveaux renseignements importants.
- Lorsqu’une alerte est déclenchée au rechargement de la page ou par un événement serveur, et que vous ne savez pas où se trouve la personne sur la page, placez l’alerte au haut de la page.
- Évitez d’utiliser une alerte dans un composant de formulaire, comme un champ de saisie ou une case à cocher.

### Rédigez des titres et des messages concis et clairs

- Placez l’information la plus importante dans le titre afin que la nature de l’alerte soit immédiatement claire.
- Limitez le message à deux phrases ou moins.
- Rédigez un message qui complète le titre. Évitez de répéter ou de reformuler le titre.
- Décrivez les répercussions pour la personne et indiquez une prochaine étape claire, lorsqu’il y en a une.
- Ajoutez un lien ou un autre moyen de résoudre le problème lorsque c’est pertinent.

### Envisagez d’ajouter un bouton de fermeture

- Ajoutez un bouton de fermeture lorsque les personnes peuvent poursuivre leur tâche sans donner suite à l’alerte. Cela convient souvent aux alertes « information » et « succès ».
- Laissez de côté le bouton de fermeture lorsque les personnes doivent d’abord résoudre un problème avant de pouvoir poursuivre leur tâche. Cela convient souvent aux alertes « danger ».
- Envisagez de laisser de côté le bouton de fermeture si le message contient déjà un autre bouton, afin de simplifier la présentation.

### Évitez les alertes inutiles

- Utilisez une alerte uniquement lorsque l’information est suffisamment importante pour nécessiter une attention particulière. Évitez de répéter des informations déjà présentes dans la page.
- Évitez d’afficher plus d’une alerte à la fois. Si plusieurs alertes portent sur le même sujet, regroupez-les. Sinon, affichez uniquement l’alerte la plus prioritaire.
