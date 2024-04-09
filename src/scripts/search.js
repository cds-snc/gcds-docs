import * as pagefind from '/pagefind/pagefind.js';

const url = new URLSearchParams(window.location.search);

pagefind.options({
  baseUrl: '/',
});

const searchTerm = url.get('q');
let index = url.get('page');
let lang = 'en';

if (window.location.href.includes('/fr/')) {
  lang = 'fr';
}

if (!index) {
  index = 1;
}

if (searchTerm) {
  // I realized we don't have a value property for gcds-search, want to add that
  // document.getElementById('searchbar').value = searchTerm;
  const search = await pagefind.search(searchTerm);
  const results = search.results;

  // Results length
  if (results.length > 0) {
    // Results heading
    const langObject = {
      en: `${results.length} search results for "${searchTerm}"`,
      fr: `${results.length} résultats de recherche pour « ${searchTerm} »`,
    }
    let resultsHeading = document.createElement('gcds-heading');
    resultsHeading.setAttribute('tag', 'h2');
    resultsHeading.id = 'rh';
    resultsHeading.tabIndex = '-1';
    resultsHeading.innerHTML = langObject[lang];
    document.getElementById('results-count').append(resultsHeading);

    const totalPages = Math.ceil(results.length / 10);

    let pageResults = results.slice(10 * (index - 1), 10 * index + 1);

    // length could also be from search.unfilteredResultCount
    for (const result of pageResults) {
      let data = await result.data();
      addResult(data);
    }

    if (totalPages > 1) {
      const pagination = document.createElement('gcds-pagination');
      pagination.display = 'list';
      pagination.currentPage = index;
      pagination.totalPages = totalPages;
      pagination.url = {
        queryStrings: {
          'q': searchTerm,
          'page::match': '{{1}}',
        },
      };
      pagination.classList.add('mt-400');
      document.getElementById('pagination').appendChild(pagination);
    }
  }
}

function addResult(result) {
  let results = document.querySelector('#results');

  let resultElement = document.createElement('section');
  resultElement.classList.add('search-result');

  let heading = document.createElement('gcds-heading');
  heading.tag = 'h3';
  heading.marginBottom = '150';
  heading.marginTop = '300';

  let link = document.createElement('gcds-link');
  link.href = result.url;
  link.innerText = result.meta.title;
  heading.append(link);
  resultElement.appendChild(heading);

  let url = document.createElement('gcds-text');
  url.setAttribute(
    'style',
    '--gcds-text-role-primary: var(--gcds-color-green-700);',
  );
  url.marginBottom = '150';
  url.innerHTML = result.url;

  let excerpt = document.createElement('gcds-text');
  excerpt.marginBottom = '100';
  excerpt.innerHTML = result.excerpt;

  resultElement.appendChild(url);
  resultElement.appendChild(excerpt);
  results.appendChild(resultElement);
}
