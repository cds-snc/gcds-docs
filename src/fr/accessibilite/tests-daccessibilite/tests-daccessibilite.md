---
title: Tests d'accessibilité
translationKey: accessibilitytest
layout: 'layouts/base.njk'
eleventyNavigation:
  key: accessibilityTestingFR
  title: Tests d'accessibilité
  locale: fr
  parent: accessibilityFR
---

# Outils de tests d’accessibilité

## Tests modernes pour des composants modernes

Les outils et pratiques de test plus anciens peuvent ne pas fonctionner correctement avec les composants modernes. Voici comment vous assurer que votre produit numérique est accessible :

1. Utilisez nos composants Web modernes que [nous avons testés]({{ links.accessibility }}).
2. Suivez les conseils en matière d’accessibilité sur nos [pages de composants]({{ links.components }}).
3. Testez votre produit numérique dans votre contexte pour vous assurer qu’il est clair et qu’il fonctionne pour les personnes utilisant des technologies d’assistance.

## Outils de test

Si vous voulez faire vos propres tests, voici quelques outils et processus que vous pouvez utiliser pour obtenir une meilleure couverture pour votre site Web ou votre application. 

Ces outils ne sont pas fournis ni approuvés par le gouvernement du Canada. Référencez nos [Conditions d’utilisation]({{ links.termsOfUse }}) lorsque vous consultez des sites Web qui n’appartiennent pas au gouvernement du Canada.

### Tests automatisés

Utilisez des outils automatisés pour détecter les problèmes d’accessibilité courants. 

<gcds-details details-title="Outils gratuits">
  <p>**Code**
- <gcds-link external href="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd?pli=1"> Axe DevTools </gcds-link> 
- <gcds-link external href="https://developer.chrome.com/docs/lighthouse"> Google Lighthouse </gcds-link>
- <gcds-link external href="https://pa11y.org/"> Pa11y CLI </gcds-link>
- <gcds-link external href="https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html"> Firefox Accessibility Inspector</gcds-link>
- <gcds-link external href="https://www.npmjs.com/package/axe-core"> Axe-core </gcds-link>Deque via:
    - <gcds-link external href="https://playwright.dev/"> Playwright </gcds-link>
    - <gcds-link external href="https://pptr.dev/"> Puppeteer </gcds-link>
  
  **Figma**
- <gcds-link external href="https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker"> Stark contrast and accessibility checker </gcds-link></p>
</gcds-details>

<gcds-details details-title="Outils payants">
  <p>**Code**
- <gcds-link external href="https://www.deque.com/axe/devtools/"> Axe DevTools Pro</gcds-link>
- <gcds-link external href="https://www.siteimprove.com/"> Siteimprove </gcds-link>
- <gcds-link external href="https://www.levelaccess.com/"> Level Access </gcds-link></p>
</gcds-details>

### Arborescence d’accessibilité

Utilisez l’arborescence d’accessibilité pour le débogage des problèmes d’accessibilité Web. Elle affiche une version simplifiée des points d’arrêt DOM que les lecteurs d’écran et les technologies d’assistance utilisent pour interpréter le contenu. 

Voici comment accéder à l’aborescence d’accessibilité dans différents navigateurs :

<gcds-details details-title="Arborescence d’accessibilité Chrome">
  <p>
1. Ouvrez les **outils de développement** en appuyant sur ctrl+maj+i sur PC ou cmd+option+i sur Mac.
2. Sélectionnez l’onglet **éléments**.
3. Sélectionnez le panneau **Accessibilité**. 
    - Si vous ne le voyez pas, sélectionnez ** » ** puis **Accessibilité**. </p>
</gcds-details>

<gcds-details details-title="Arborescence d’accessibilité Firefox">
  <p>
1. Ouvrez les **outils de développement** en appuyant sur ctrl+maj+i sur PC ou cmd+option+i sur Mac.
2. Sélectionnez l’onglet **Inspecteur**.
3. Sélectionnez un élément dans la **structure HTML**.
4. Sélectionnez l’onglet **Accessibilité** dans la barre horizontale. 
    - Si vous ne voyez pas l’onglet Accessibilité, sélectionnez le menu à **trois points** (…) dans la barre des outils de développement, puis **Paramètres**. 
    - Sous la rubrique Outils de développement par défaut, activez l’onglet **Accessibilité**. </p>
</gcds-details>

<gcds-details details-title="Arborescence d’accessibilité Edge (Menus en anglais seulement)">
  <p>
1. Ouvrez les **outils de développement** en appuyant sur ctrl+maj+i sur PC ou cmd+option+i sur Mac.
2. Sélectionnez l’onglet **Elements**.
3. Sélectionnez le panneau **Accessibility**. </p>
</gcds-details>

<gcds-details details-title="Aborescence d’accessibilité Safari">
  <p>
1. Activez le menu **développeur**.
    - Dans la barre de menu MacOS, sélectionnez **Safari**, puis **Paramètres**, puis **Avancés**.
    - Cochez la case **Afficher** les fonctionnalités de développement Web.
2. Ouvrez **l’inspecteur Web** en appuyant sur option+cmd+i.
3. Sélectionnez l’onglet **Éléments**.
4. Sélectionnez un élément, puis accédez à la section **Noeud** dans le menu de droite et faites défiler jusqu’au bas pour trouver la section **Accessibilité**.</p>
</gcds-details>

### Évaluations et tests d’utilisabilité

Il est important d’effectuer des tests auprès de personnes handicapées pour s’assurer que votre produit numérique est accessible. Vous pouvez le faire en utilisant un service gouvernemental pour évaluer votre produit, en recrutant vous-même des personnes handicapées pour la recherche ou en utilisant des services payants qui le feront pour vous.

<gcds-details details-title="Services du gouvernement du Canada">
  <p>
- <gcds-link external href="https://a11y.canada.ca/fr/"> Boîte à outils de l’accessibilité numérique </gcds-link> </p>
</gcds-details>

<gcds-details details-title="Services payants">
  <p>
- <gcds-link external href="https://makeitfable.com/"> Fable </gcds-link> </p>
</gcds-details>

## Contactez-nous

Si vous avez des questions ou rencontrez des obstacles lors de tests d’accessibilité supplémentaires visant Système de design GC, [contactez-nous]({{ links.contact }}). 
