document.addEventListener('DOMContentLoaded', function () {
  const code = document.querySelectorAll('pre[class*="language"]');
  const url = window.location.href;
  let lang = 'en';

  if (url.includes('/fr/')) {
    lang = 'fr';
  }

  const buttonText = {
    en: {
      copy: 'Copy',
      copyTemplate: 'Copy template',
      copied: 'Copied',
    },
    fr: {
      copy: 'Copier',
      copyTemplate: 'Copier le modèle',
      copied: 'Copié',
    },
  };

  const buttonClasses = ['d-block', 'mt-150', 'code-copy-button'];

  code.forEach(pre => {
    const templateHighlight = pre.closest('.page-template-highlight');
    pre.setAttribute('tabindex', 0);
    const button = document.createElement('gcds-button');
    button.setAttribute('button-role', 'secondary');

    if (templateHighlight) {
      button.innerHTML = buttonText[lang].copyTemplate;
    } else {
      button.classList.add(...buttonClasses);
      button.setAttribute('size', 'small');
      button.innerHTML = buttonText[lang].copy;
    }

    button.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.querySelector('code').textContent);
      button.innerHTML = buttonText[lang].copied;
    });
    button.addEventListener('blur', () => {
      button.innerHTML = templateHighlight
        ? buttonText[lang].copyTemplate
        : buttonText[lang].copy;
    });

    templateHighlight ? templateHighlight.prepend(button) : pre.append(button);
  });
});
