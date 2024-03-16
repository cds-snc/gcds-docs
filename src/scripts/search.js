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
    // console.log(result);
    let results = document.querySelector('#results');
    let resultElement = document.createElement('div');
    console.log('title is...', encodeURIComponent(result.meta.title);
    resultElement.innerHTML = `<gcds-link href="${result.url}">${encodeURIComponent(result.meta.title)}</gcds-link>`;
    resultElement.innerHTML += `<gcds-text size="caption" role="secondary" character-limit="false" margin-bottom="0">${result.excerpt}</gcds-text>`;
    results.appendChild(resultElement);
}

function clearResults() {
    let results = document.querySelector('#results');
    results.innerHTML = '';
}

import * as pagefind from "/pagefind/pagefind.js";
onElementAvailable('gcds-search', async () => {
  await pagefind.options({
    baseUrl: "/",
  });


  let searchComponent = document.querySelector('gcds-search');

  // search on submit event
  searchComponent.addEventListener('gcdsSubmit', async function (e) {
    clearResults();
    const searchTerm = searchComponent.querySelector('input').value
    const search = await pagefind.search(searchTerm);

    // length could also be from search.unfilteredResultCount
    for (const result of search.results) {
        let data = await result.data();
        console.log('data is', data);
        addResult(data);
    }
  })
});
