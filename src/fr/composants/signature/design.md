---
title: Signature
layout: 'layouts/component-documentation.njk'
translationKey: 'signatureDesign'
tags: ['signatureFR', 'design']
date: 'git Last Modified'
---

## Structure de la signature

<ol class="anatomy-list">
  <li>La <strong>signature du gouvernement du Canada</strong> est l'identificateur de l'image de marque placée dans l'<gcds-link href="{{ links.header }}">en-tête</gcds-link> du site. La signature sert de lien général vers la page d'accueil du site.</li>
  <li>Le <strong>mot-symbole « Canada »</strong> est l'identificateur de l'image de marque placé dans le <gcds-link href="{{ links.footer }}">pied de page</gcds-link> du site. Il renforce l'image de marque en informant les visiteur·rice·s du site que le contenu qui leur est présenté provient du gouvernement du Canada.</li>
</ol>

<img class="b-sm b-default p-300" src="/images/fr/components/anatomy/gcds-signature-anatomy-fr.svg" alt="Signature avec les étiquettes « Signature du gouvernement du Canada » et « Mot-symbole Canada ». Chaque élément du composant est identifié à l’aide d’un chiffre.]" />

## Design et accessibilité de la signature

### Vérifier les exigences de la signature

La signature est requise dans l’en-tête et le mot-symbole est requis dans le pied de page sur les pages Canada.ca et les sites du GC.

### Éléments requis sur Canada.ca

Toujours inclure la signature dans l’en-tête et conserver les paramètres par défaut.

- Utilisez du texte noir, ne sélectionnez pas de texte blanc.
- Gardez la position de la signature dans le coin supérieur gauche de l’en-tête tant pour la version bureau que mobile.
- Lien vers la page d’accueil de Canada.ca.

Toujours inclure le mot-symbole dans la bande de sous-pied de page et maintenir les paramètres par défaut.

- Utilisez du texte noir, ne sélectionnez pas de texte blanc.
- Gardez la position dans le coin inférieur droit du pied de page.

**Remarque :** les paramètres par défaut pour la signature et le mot-symbole suivent <gcds-link href="https://www.canada.ca/fr/secretariat-conseil-tresor/services/communications-gouvernementales/norme-graphique.html" external>norme graphique du Programme fédéral de l’image de marque</gcds-link>.

### Établir l'ordre des langues dans la signature

- Affichez d'abord la signature en français sur les pages en français. De même, insérez d'abord la signature en anglais sur les pages en anglais.
- Conservez « Government of Canada » pour le texte de remplacement (alt-text) en anglais et « Gouvernement du Canada » pour le français.

**Remarque :** L’image contient un lien qui mène à la page d’accueil Canada.ca dans la même langue officielle que la page actuelle.

### Utilisez des couleurs non standard de manière accessible

- Choisissez d'utiliser des couleurs non standard lorsqu'un niveau de contraste plus élevé avec l'arrière-plan est nécessaire, comme pour le mode sombre;
- Optez pour l'utilisation de couleurs non standard lorsqu'un produit affiche une couleur unique, comme le noir et le blanc;
- Lorsque la couleur du drapeau est modifiée, assurez-vous de toujours utiliser cette même couleur pour le symbole du drapeau dans la signature et le mot-symbole;
- Utilisez toujours la même combinaison de couleurs dans la signature et le mot-symbole. Par exemple, si la signature est en noir et blanc, alors le mot-symbole doit également l'être;
- Lorsqu'une seule couleur est utilisée, vérifiez le rapport de contraste entre les éléments de la signature pour vous assurer que le ratio est à tout le moins conforme à la norme WCAG, niveau AA.

<figure class="mb-600">
  <img class="b-sm b-default p-300 mb-100" src="/images/fr/components/example/example-signature-side-by-side-fr.svg" alt="Une image représentant les deux versions de la signature. La signature se trouve à gauche et le mot-symbole est placé à droite." />
  <figcaption>Légende : Le style de couleur standard utilise un texte noir et un drapeau rouge sur fond blanc.</figcaption>
</figure>

<figure class="mb-600">
  <img class="b-sm b-default p-300 mb-100" src="/images/fr/components/example/example-signature-side-by-side-reversed-fr.svg" alt="Une image représentant les deux versions de la signature. La signature se trouve à gauche et le mot-symbole est placé à droite. Cette version utilise du texte blanc sur un fond noir." />
  <figcaption>Légende : Le style de couleur inversé utilise un texte blanc et un drapeau rouge sur fond noir.</figcaption>
</figure>

<figure class="mb-600">
  <img class="b-sm b-default p-300 mb-100" src="/images/fr/components/example/example-signature-bw-fr.svg" alt="Une image présentant deux combinaisons de signature et de mot-symbole. Dans un cas, la signature et le mot-symbole sont noirs sur fond blanc. Dans l'autre cas, la signature et le mot-symbole sont blancs sur fond noir." />
  <figcaption>Légende : Le style noir et blanc utilise un fond soit entièrement noir, soit entièrement blanc. Le style entièrement noir est le plus fréquemment employé.</figcaption>
</figure>

<figure class="mb-600">
  <img class="b-sm b-default p-300 mb-100" src="/images/fr/components/example/example-signature-single-colour-style-fr.svg" alt="Une image montrant la signature et le mot-symbole en violet foncé sur un fond violet pâle. Des barres et des cases simulent du texte et des images sur une page web fictive. Les cases de texte et d'images sont également violet foncé." />
  <figcaption>Légende : Le style de couleur unique utilise une couleur autre que le noir ou le blanc si cette couleur est la seule utilisée pour le produit.</figcaption>
</figure>
