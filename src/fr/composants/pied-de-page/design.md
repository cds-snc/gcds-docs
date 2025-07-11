---
title: Pied de page
layout: 'layouts/component-documentation.njk'
translationKey: 'footerDesign'
tags: ['footerFR', 'design']
date: 'git Last Modified'
---

## Structure du pied de page

Les éléments de pied de page sont requis pour toute page à moins d’avis contraire.

## Éléments de pied de page facultatifs

<ol class="anatomy-list">
  <li>La <strong>bande contextuelle</strong> contient trois liens propres à votre site ou produit. Vous pouvez choisir quels liens y insérer. <em>Facultatif pour toutes les pages.</em></li>
  <li>La <strong>bande principale</strong> contient des liens vers des thèmes communs du gouvernement du Canada. Ces liens ne peuvent pas être modifiés. <em>Facultatif pour les pages non standard.</em></li>
  <li>
    La <strong>bande de liens du pied</strong> de page du GC contient le mot-symbole officiel du gouvernement du Canada et jusqu’à cinq liens. Certains liens sont facultatifs et d’autres peuvent être modifiés.
    <p class="mt-300 mb-0"><em>Facultatif pour les pages non standard :</em></p>
    <ul>
      <li>Répertoire des médias sociaux pour le GC.</li>
      <li>Répertoire des applications mobiles pour le GC.</li>
      <li>À propos de Canada.ca.</li>
    </ul>
    <p class="mt-300 mb-0"><em>Peut être modifié pour votre programme :</em></p>
    <ul>
      <li>Avis.</li>
      <li>Confidentialité.</li>
    </ul>
  </li>
  <li>Le <strong>mot-symbole Canada</strong> est l’identificateur mondial du gouvernement du Canada. Assurez toujours l’intégrité de la signature du gouvernement du Canada. Ne la modifiez jamais de quelque façon que ce soit — ne l’étirez pas et n’en changez pas les couleurs ni le texte.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-footer-anatomy.svg" alt="L'anatomie du composant pied de page identifiant les trois bandes horizontales qui forment le composant. La première est la bande contextuelle, une bande bleu avec un titre et trois liens. La deuxième la bande principale qui inclu les liens du gouvernement du Canada. La troisième est la band des liens du pied de page, une bande grise pâle avec à l'intérieur cinq liens séparés par des points et le logo du gouvernement du Canada." />

## Design et accessibilité du pied de page

Les composants de Système de design du GC sont conçus pour s’adapter à la taille de l’écran ou du cadre où ils sont visualisés. À titre d’exception, la taille du texte dans l’en-tête et le pied de page est fixe.

### Vérifier les exigences du pied de page

<gcds-details details-title="Éléments requis sur une page standard de Canada.ca " class="mb-300">
  <gcds-text>Intégrez toujours les composants suivants sur une page standard :</gcds-text>
  <div>
    <ul class="list-disc mb-300">
      <li>Bande principale.</li>
      <li>
        Bande de liens de pied de page du GC.
        <ul class="ms-300">
          <li>Lien Médias sociaux.</li>
          <li>Lien Applications mobiles.</li>
          <li>Lien À propos de Canada.ca.</li>
          <li>Lien Avis.</li>
          <li>Lien Confidentialité.</li>
          <li>Mot-symbol Canada.</li>
        </ul>
      </li>
    </ul>
  </div>
  <gcds-text>Assurez toujours l’intégrité de la signature du gouvernement du Canada. Ne la modifiez jamais de quelque façon que ce soit — ne l’étirez pas et n’en changez pas les couleurs ni le texte.</gcds-text>
  <gcds-text>Les composants suivants sont facultatifs sur une page standard :</gcds-text>
  <ul class="list-disc mb-300">
    <li>Bande contextuelle.</li>
  </ul>
</gcds-details>

<gcds-details details-title="Éléments facultatifs sur toute autre page Canada.ca" class="mb-300">
  <gcds-text>Les éléments suivants sont facultatifs sur les pages non standard.</gcds-text>
  <ul class="list-disc">
    <li>Bande contextuelle.</li>
    <li>Bande principale.</li>
    <li>Lien Médias sociaux dans la bande de liens du pied de page du GC.</li>
    <li>Lien Applications mobiles dans la bande de liens du pied de page du GC.</li>
    <li>Lien À propos de Canada.ca dans la bande de liens du pied de page du GC.</li>
  </ul>
</gcds-details>

### Ajouter des bandes facultatives

- Envisagez d’utiliser la bande contextuelle pour donner accès à des actions ou des renseignements propres à votre site.
- Bien qu’elle soit requise sur toutes les pages standard, envisagez également d’utiliser la bande principale pour toute autre page Canada.ca.

### Modifier les liens

- Dans la bande contextuelle, modifiez les trois liens pour votre site. Choisissez des liens que les gens s’attendent à trouver dans un pied de page, comme «&nbsp;Contactez-nous&nbsp;», «&nbsp;Carrières&nbsp;» ou «&nbsp;Actualités&nbsp;».
- Dans la bande de liens du pied de page du GC, modifiez les liens «&nbsp;Avis&nbsp;» et «&nbsp;Confidentialité&nbsp;» pour votre site.
- Faites en sorte que le texte du lien soit clair et précis pour aider les gens à décider s’ils doivent quitter la page actuelle. Indiquez la page cible où une personne sera redirigée ou ce qu’elle trouvera en cliquant sur le lien.
