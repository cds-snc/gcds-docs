[La version française suit.](#documentation-de-système-de-design-gc)
<br/>
<br/>

# GC Design System Docs

GC Design System Docs is a documentation website for GC Design System. You can find the full documentation on [https://design-system.alpha.canada.ca/](https://design-system.alpha.canada.ca/).
<br/>
<br/>

## Tools

We are using [11ty](https://www.11ty.dev/docs/) and [Netlify](https://docs.netlify.com/) to build our documentation website.
<br/>
<br/>

## Installation

- Clone the repo `git clone https://github.com/cds-snc/gcds-docs`.
- Run `npm install` to install all Node.js dependencies.
- Run `npm start` to start a hot-reloading local web server.
<br/>

## Adding new pages

### Components

To add a new component page, run the command `npm run create-component-page`. A prompt for English name and French name of the component will appear, continue by entering the name of the component in both languages. This will generate the directories `/src/en/components/<english-name>/` and `/src/fr/composants/<french-name>/` with `base.md`, `use-case.md`, `design.md` and `code.md` files in them.

The component created by `create-component-page` will be placed in the coming soon section of the site by default. This can be updated by updating the `state` to `published` in `use-case.md` and `case-usage.md` files.

The author will also need to manually add `"componentName": "url"` to `src/en/en.json` and `src/fr/fr.json`. Coming soon components will link to the coming soon page.

#### Component pages frontmatter

Each page has [Frontmatter](https://www.scribendi.com/academy/articles/front_matter.en.html#:~:text=Front%20matter%20is%20the%20first,a%20preface%2C%20and%20much%20more.) placed at the top of the file to help format the placment, template and navigational elements of the page.

The frontmatter listed below will need to be updated when creating a component page.

##### base.md

- `github`: GitHub link to component on main branch
- `figma`: Figma link to component page

#### use-case.md / case-dusage.md

- `eleventyNavigation`: Object to render navigation for component
  - `otherNames`: For overview page
  - `description`: For overview page
  - `thumbnail`: Thumbnail image path for overview page
  - `alt`: Image alt text for overview page
  - `state`: Defaults to `coming-soon`, will need to be switched to `published` if publishing component guidance
- `date`: Commented out by default, uncomment after first commit or when ready to publish

### design.md / code.md

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

Docs de Système de design GC est un site Web contenant de la documentation portant sur Système de design GC. Toute la documentation est accessible à [https://design-system.alpha.canada.ca/](https://systeme-design.alpha.canada.ca/fr/).

## Outils

Nous utilisons [11ty](https://www.11ty.dev/docs/) et [Netlify](https://docs.netlify.com/) pour construire notre site Web de documentation.
<br/>
<br/>

## Installation

- Copiez le référentiel `git clone https://github.com/cds-snc/gcds-docs`.
- Exécutez ensuite `npm install` pour installer toutes les dépendances Node.js.
- Exécutez `npm start` pour démarrer un serveur Web avec rechargement à chaud.
<br/>

## Mise en forme

Chaque page contient des [liminaires](https://www.scribendi.com/academy/articles/front_matter.en.html#:~:text=Front%20matter%20is%20the%20first,a%20preface%2C%20and%20much%20more.) placés au haut du document afin d’aider à formater le positionnement, le modèle et les éléments de navigation de la page.

Options de liminaires disponibles :

- `title` : Nom de la page (obligatoire).
- `layout` : Configuration du modèle choisi (obligatoire).
- `translationKey` : Clé unique pour lier la page à sa version française.
- `eleventyNavigation` : Élément utilisé pour placer la page dans la navigation principale. Ne pas l’inclure si la page actuelle n’a pas besoin d’être incluse dans la navigation principale.
    - `key` : Clé unique pour la navigation.
    - `parent` : Clé du nœud parent. Ne rien écrire pour créer un lien de premier niveau.
    - `title` : Texte pour le lien de navigation.
    - `locale` : Clé de langue pour déterminer la langue dans laquelle l’élément de navigation est disponible. Langues disponibles : EN ou FR.
<br/>
<br/>

## Apportez votre contribution

Si vous souhaitez contribuer à la documentation de Système de design GC, veuillez lire nos [lignes directrices sur la contribution](https://github.com/cds-snc/gcds-docs/blob/main/CONTRIBUTING.md).
<br/>

## Licence
Code publié en vertu de la [licence MIT](https://github.com/cds-snc/gcds-docs/blob/main/LICENSE).
