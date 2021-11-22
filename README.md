# Alpha Design System Documentation Site

Experimental design system documentation website built with [11ty](https://www.11ty.dev/docs/) and [NetlifyCMS](https://docs.netlify.com/).

## Local installation

- git clone https://github.com/ethanWallace/alpha-ds-documentation
- cd alpha-ds-documentation
- npm install
- npm start

## Formatting

Each page has [Frontmatter](https://www.scribendi.com/academy/articles/front_matter.en.html#:~:text=Front%20matter%20is%20the%20first,a%20preface%2C%20and%20much%20more.) placed at the top of the file to help format the placment, template and navigational elements of the page.

Available frontmatter options:

- `title`: Name of the page. This is a required field.
- `layout`: Chosen template layout. This is a required field.
- `translationKey`: Unique key to link to French page.
- `eleventyNavigation`: Object to place page into main navigation. Don't include if the current page doesn't need to be in the main navigation.
    - `key`: Unique key for navigation
    - `parent`: Parent node's key. Leave blank to create a top level link.
    - `title`: Text for navigation link.
    - `locale`: Language key to dictate which language the navigation item is available in. Expects **en** or **fr**.
    - `samePage`: Object to render same page links for page in main navigation. 
        -`0`: samePage key. Increment by 1 for each additional link.
            -`title`: Text for navigation link.
            -`url`: Anchor id on page.
