import * as pagefind from '/pagefind/pagefind.js';

const url = new URLSearchParams(window.location.search);

pagefind.options({
  baseUrl: '/',
});

const searchTerm = url.get('q');
let index = url.get('page');
let lang = 'en';
const pageSize = 10;

if (window.location.href.includes('/fr/')) {
  lang = 'fr';
}

if (!index) {
  index = 1;
}

if (searchTerm) {
  let results = {};
  // I realized we don't have a value property for gcds-search, want to add that
  // document.getElementById('searchbar').value = searchTerm;
  try {
    const search = await pagefind.search(searchTerm);
    results = search.results;
  } catch(error) {
    console.log('Error:', error);
  }

  const langObject = {
    en: {
      results: `${results.length} search results for "${searchTerm}"`,
      noresults: 'No results',
      noresultsbody: `
        <p class="mb-400">No pages were found that match your search terms.</p>

        <p class="mb-400">Suggestions:</p>

        <ul class="list-disc mb-400">
          <li>Make sure all search terms are spelled correctly</li>
          <li>Try different search terms</li>
          <li>Try more general search terms</li>
        </ul>
      `,
    },
      
    fr: {
      results: `${results.length} résultats de recherche pour « ${searchTerm} »`,
      noresults: 'Aucun résultat',
      noresultsbody: `
        <p class="mb-400">Aucun résultat ne correspond à vos critères de recherche.</p>

        <p class="mb-400">Suggestions:</p>

        <ul class="list-disc mb-400">
          <li>Assurez-vous que tous vos termes de recherches sont bien orthographiés</li>
          <li>Utilisez de différents termes de recherche</li>
          <li>Utilisez des termes de recherche plus généraux</li>
        </ul>
      `,
    }
  }

  // Results length
  if (results.length > 0) {
    // Results heading
    let resultsHeading = document.createElement('gcds-heading');
    resultsHeading.setAttribute('tag', 'h2');
    resultsHeading.innerHTML = langObject[lang].results;
    document.getElementById('results-count').append(resultsHeading);

    const totalPages = Math.ceil(results.length / pageSize);
    let pageResults = results.slice(pageSize * (index - 1), pageSize * index + 1);
    const resultSection = document.querySelector('#results');

    // length could also be from search.unfilteredResultCount
    for (const result of pageResults) {
      const data = await result.data();
      const res = formatResult(data);

      resultSection.appendChild(res);
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
  } else if (searchTerm && results.length === 0) {
    let resultsHeading = document.createElement('gcds-heading');
    resultsHeading.setAttribute('tag', 'h2');
    resultsHeading.innerHTML = langObject[lang].noresults;
    document.getElementById('results-count').append(resultsHeading);

    document.getElementById('results').innerHTML = langObject[lang].noresultsbody;
  }
}

function formatResult(result) {
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
  
  return resultElement;
}
