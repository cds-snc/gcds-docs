---
title: Date de modification
layout: 'layouts/component-documentation.njk'
translationKey: 'datemodifiedDesign'
tags: ['datemodifiedFR', 'design']
date: 'git Last Modified'
---

## Structure de la date de modification

<ol class="anatomy-list">
  <li>Le <strong>libellé</strong> décrit le type précisé dans la valeur et affiche soit « Date de modification » ou « Version » selon le type de composant.</li>
  <li>La <strong>valeur</strong> correspond soit à une date numérique au format AAAA-MM-JJ, soit à un numéro de version.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-date-modified-anatomy.svg" alt="Date de modification indiquant la date 2023-01-30 Chaque élément du composant est identifié à l’aide d’un chiffre." />

## Design et accessibilité de la date de modification

### Vérifier les exigences de la date de modification

La date de modification est requise sur les pages Canada.ca et les sites du GC.

<gcds-details details-title="Éléments requis sur Canada.ca et les sites du GC" class="mb-300">
  <gcds-text>Toujours inclure la date de modification et maintenir les paramètres par défaut.</gcds-text>
  <div>
    <ul class="list-disc">
      <li>Placez le composant date de modification du côté gauche, entre le contenu principal de la page et le pied de page.</li>
      <li>Placez le composant date de modification au même endroit d’une page Web à l’autre afin qu’il soit repérable.</li>
      <li>Si votre page inclut l’outil de rétroaction sur la page, placez le composant date de modification en dessous de celui-ci.</li>
    </ul>
  </div>
</gcds-details>

<gcds-details details-title="Éléments facultatifs sur une page Canada.ca" class="mb-300">
  <gcds-text margin-bottom="0">Pour les applications, utilisez un numéro de version plutôt qu’une date.</gcds-text>
</gcds-details>

### Veiller à l’uniformité du formatage

- Utilisez le format de date AAAA-MM-JJ sur toutes vos pages Web.
- Si vous utilisez le composant avec le type numéro de version, veillez à utiliser un format de numéro de version uniforme pour tous vos produits.

### Quand mettre à jour la date de modification

- Ne mettez à jour la date de modification que lorsque vous effectuez une modification importante du contenu.
- Évitez les mises à jour pour les corrections mineures, comme les fautes de frappe, ou les petites modifications du code.
