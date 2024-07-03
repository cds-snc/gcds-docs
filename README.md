[La version française suit.](#documentation-de-système-de-design-gc)
<br/>
<br/>

# GC Design System Docs

GC Design System Docs is a documentation website for GC Design System. You can find the full documentation on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).
<br/>
<br/>

## Tools

We are using [11ty](https://www.11ty.dev/docs/) to build our documentation website.
<br/>
<br/>

## Installation

- Clone the repo `git clone https://github.com/cds-snc/gcds-docs`.
- Run `npm install` to install all Node.js dependencies.
- Run `npm start` to start a hot-reloading local web server.
- The site will be accessible on http://localhost:8080/en or http://localhost:8080/fr. You have to append the `/en` and `/fr` as there is no page available at the base url
  <br/>

## Adding new pages

### Components

To add a new component page, run the command `npm run create-component-page`. A prompt for English name and French name of the component will appear, continue by entering the name of the component in both languages. This will generate the directories `/src/en/components/<english-name>/` and `/src/fr/composants/<french-name>/` with `base.md`, `use-case.md`, `design.md` and `code.md` files in them.

The component created by `create-component-page` will be placed in the coming soon section of the site by default. This can be updated by updating the `state` to `published` in `use-case.md` and `case-usage.md` files.

The author will also need to manually add `"componentName": "url"` to `src/en/en.json` and `src/fr/fr.json`. Coming soon components will link to the coming soon page.

### Frontmatter

Each page has [Frontmatter](https://www.scribendi.com/academy/articles/front_matter.en.html#:~:text=Front%20matter%20is%20the%20first,a%20preface%2C%20and%20much%20more.) placed at the top of the file to help format the placement, template and navigational elements of the page.

The frontmatter listed below will need to be updated when creating a component page.

#### base.md

- `github`: GitHub link to component on main branch
- `figma`: Figma link to component page

#### use-case.md / cas-dutilisation.md

- `eleventyNavigation`: Object to render navigation for component
  - `otherNames`: For overview page
  - `description`: For overview page
  - `thumbnail`: Thumbnail image path for overview page
  - `alt`: Image alt text for overview page
  - `state`: Defaults to `coming-soon`, will need to be switched to `published` if publishing component guidance
- `date`: Commented out by default, uncomment after first commit or when ready to publish

#### design.md / code.md

- `date`: Commented out by default, uncomment after first commit or when ready to publish

<br/>

## How to contribute

If you are interested in contributing to GC Design System Utility, please read our [contributing guidelines](https://github.com/cds-snc/gcds-docs/blob/main/CONTRIBUTING.md).
<br/>
<br/>

## License

Code released under the [MIT License](https://github.com/cds-snc/gcds-docs/blob/main/LICENSE).
<br/>
<br/>

# --------------------------------------------------------

<br/>

# Documentation de Système de design GC

Docs de Système de design GC est un site Web contenant de la documentation portant sur Système de design GC. Toute la documentation est accessible à [https://systeme-design.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/).

## Outils

Nous utilisons [11ty](https://www.11ty.dev/docs/) pour construire notre site Web de documentation.
<br/>
<br/>

## Installation

- Copiez le référentiel `git clone https://github.com/cds-snc/gcds-docs`.
- Exécutez ensuite `npm install` pour installer toutes les dépendances Node.js.
- Exécutez `npm start` pour démarrer un serveur Web avec rechargement à chaud.
- Le site sera accessible sur http://localhost:8080/fr or http://localhost:8080/en. Vous devrez ajouter `/fr` ou `/en` en suffixe car il n'y a pas de page disponible à l'URL de base.
    
  <br/>

## Ajouter de nouvelles pages

### Composants

Pour ajouter une nouvelle page de composant, exécutez la commande `npm run create-component-page`. Lorsque cela vous sera demandé, indiquez le nom du composant en anglais et en français. Cela générera les répertoires `/src/en/components/<nom anglais>/` et `/src/fr/composants/<nom français>/` comprenant les fichiers `base.md`, `use-case.md`, `design.md` et `code.md`.

Par défaut, le composant créé par `create-component-page` sera placé dans la section du site consacrée aux éléments à venir. Vous pouvez modifier cela en choisissant `published` pour `state` dans les fichiers `use-case.md` et `case-usage.md`.

L’auteur·rice devra également ajouter manuellement "componentName": "url" à `src/en/en.json` et à `src/fr/fr.json`. Les composants à venir offrent un lien vers la page des éléments à venir.

### Frontmatter

Chaque page contient des [liminaires](https://www.scribendi.com/academy/articles/front_matter.en.html#:~:text=Front%20matter%20is%20the%20first,a%20preface%2C%20and%20much%20more.) placés au haut du document afin d’aider à formater le positionnement, le modèle et les éléments de navigation de la page.

Le « frontmatter » répertorié ci-dessous devra être mis à jour lors de la création d'une page de composant.

#### base.md

- `github` : Lien GitHub pour le composant sur la branche principale
- `figma`: Lien Figma vers la page du composant

#### use-case.md / cas-dutilisation.md

- `eleventyNavigation` : Objet pour afficher la navigation pour le composant
  - `otherNames` : Pour la page de survol
  - `description`: Pour la page de survol
  - `thumbnail` : Chemin en image miniature pour la page de survol
  - `alt` : Texte de remplacement d’image pour la page de survol.
  - `state` : `coming-soon` par défaut. En cas de publication des lignes directrices sur le composant, il sera nécessaire de passer à `published`.
- `date` : Code mis en commentaire par défaut. Modifiez cela après la première validation ou lorsque vous êtes sur le point de publier.

#### design.md / code.md

- `date` : Code mis en commentaire par défaut. Modifiez cela après la première validation ou lorsque vous êtes sur le point de publier.

  <br/>
  <br/>

## Apportez votre contribution

Si vous souhaitez contribuer à la documentation de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-docs/blob/main/CONTRIBUTING.md).
<br/>

## Licence

Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-docs/blob/main/LICENSE).
