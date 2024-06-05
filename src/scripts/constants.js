const getLang =  function (){
    const path = window.location.pathname;
    return path.includes('/en/') ? 'EN' : path.includes('/fr/') ? 'FR-CA' : null;
}

// These are here to set global vars for qualtrics to switch languages
// So far setting it doesn't work, this needs to be looked at further
const lang = getLang();
const currentLang = 'FR-CA';
console.log('currentLang, lang: ', currentLang, lang)