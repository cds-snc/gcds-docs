[La version française suit.](#)
<br/>
<br/>

# GC Design System Docs

GC Design System Docs is a documentation website for GC Design System.
You can find the full documentation on [https://cds-design-snc.netlify.app/](https://cds-design-snc.netlify.app/).
<br/>
<br/>

## Documentation

You can find the full documentation for GC Design System Utility on [https://cds-design-snc.netlify.app/](https://cds-design-snc.netlify.app/).
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
<br/>

## Formatting

Each page has [Frontmatter](https://www.scribendi.com/academy/articles/front_matter.en.html#:~:text=Front%20matter%20is%20the%20first,a%20preface%2C%20and%20much%20more.) placed at the top of the file to help format the placment, template and navigational elements of the page.

Available frontmatter options:

- `title`: Name of the page (required).
- `layout`: Chosen template layout (required).
- `translationKey`: Unique key to link to French page.
- `eleventyNavigation`: Object to place page into main navigation. Don't include if the current page doesn't need to be in the main navigation.
    - `key`: Unique key for navigation
    - `parent`: Parent node's key. Leave blank to create a top level link.
    - `title`: Text for navigation link.
    - `locale`: Language key to dictate which language the navigation item is available in. Expects **en** or **fr**.
<br/>
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
<br/>
