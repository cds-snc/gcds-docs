const getLang =  function (){
    const path = window.location.pathname;
    return path.includes('/en/') ? 'EN' : path.includes('/fr/') ? 'FR-CA' : null;
}

const lang = getLang();
const currentLang = 'FR-CA';
console.log('currentLang, lang: ', currentLang, lang)