function onElementAvailable(selector, callback) {
  const observer = new MutationObserver(mutations => {
    if (document.querySelector(selector)) {
      observer.disconnect();
      callback();
    }
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
}

function addResult(result) {
    let results = document.querySelector('#results');
    
    let resultElement = document.createElement('section');
    let heading = document.createElement('gcds-heading');
    heading.setAttribute('tag', 'h3');
    let link = document.createElement('gcds-link');
    link.setAttribute('href', result.url);
    link.innerText = result.meta.title;
    heading.append(link);
    resultElement.appendChild(heading);

    let gcdsText = document.createElement('gcds-text');
    gcdsText.setAttribute('size', 'caption');
    gcdsText.setAttribute('role', 'secondary');
    gcdsText.setAttribute('character-limit', 'false');
    gcdsText.setAttribute('margin-bottom', '0');
    gcdsText.innerHTML = result.excerpt;
    resultElement.appendChild(gcdsText);

    results.appendChild(resultElement);
}

// function clearResults() {
//     let results = document.querySelector('#results');
//     results.innerHTML = '';
// }

import * as pagefind from "/pagefind/pagefind.js";
const url = new URLSearchParams(window.location.search);

pagefind.options({
  baseUrl: "/",
});

const searchTerm = url.get('q');
if (searchTerm) {
  // I realized we don't have a value for search, may want to add that
  document.getElementById('searchbar').value = searchTerm;
  const search = await pagefind.search(searchTerm);

  // Results length
  let resultsHeading = document.createElement('gcds-heading');
  resultsHeading.setAttribute('tag', 'h2');
  resultsHeading.innerHTML = `${search.results.length} search results for "${searchTerm}"`;

  document.getElementById('results-count').append(resultsHeading);
  
  // length could also be from search.unfilteredResultCount
  for (const result of search.results) {
      let data = await result.data();
      addResult(data);
  }
}

// onElementAvailable('gcds-search', async () => {
//   await pagefind.options({
//     baseUrl: "/",
//   });

//   let searchComponent = document.querySelector('gcds-search');

//   // search on submit event
//   searchComponent.addEventListener('gcdsSubmit', async function (e) {
//     clearResults();
//     const searchTerm = searchComponent.querySelector('input').value
//     const search = await pagefind.search(searchTerm);

//     // length could also be from search.unfilteredResultCount
//     for (const result of search.results) {
//         let data = await result.data();
//         addResult(data);
//     }
//   })
// });
