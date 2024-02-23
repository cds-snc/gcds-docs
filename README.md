# 11ty GC Design System

## Installation

- Clone the repo `git clone https://github.com/ethanWallace/11ty-gcds-template`.
- Run `npm install` to install all Node.js dependencies.
- Run `npm start` to start a hot-reloading local web server.
- The site will be accessible on http://localhost:8080/en or http://localhost:8080/fr. You have to append the `/en` and `/fr` as there is no page available at the base url
  <br/>

## Frontmatter

Each page has [Frontmatter](https://www.scribendi.com/academy/articles/front_matter.en.html#:~:text=Front%20matter%20is%20the%20first,a%20preface%2C%20and%20much%20more.) placed at the top of the file to help format the placment, template and navigational elements of the page.

Use the `translationKey` to link English and French pages. Pages using the same `translationKey` will automatically be linked and can toggled to using the language slection in the header.

<br/>

## How to contribute

If you are interested in contributing to GC Design System Utility, please read our [contributing guidelines](https://github.com/ethanWallace/11ty-gcds-template/blob/main/CONTRIBUTING.md).
<br/>
<br/>

## License

Code released under the [MIT License](https://github.com/ethanWallace/11ty-gcds-template/blob/main/LICENSE).
