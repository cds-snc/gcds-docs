document.addEventListener('DOMContentLoaded', function () {
  const code = document.querySelectorAll('pre[class*="language"]');
  const url = window.location.href;
  let lang = 'en';

  if (url.includes('/fr/')) {
    lang = 'fr';
  }

  const buttonText = {
    'en' : {
      copy: 'Copy',
      copied: 'Copied'
    },
    'fr' : {
      copy: 'Copie',
      copied: 'Copié'
    }
  }

  const buttonClasses = [
    'd-block',
    'mt-200',
    'code-copy-button'
  ]

  code.forEach((pre) => {
    const button = document.createElement('gcds-button');
    button.classList.add(...buttonClasses);
    button.setAttribute('button-role', 'secondary');
    button.setAttribute('size', 'small');

    button.innerHTML = buttonText[lang].copy;

    button.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.querySelector('code').textContent);
      button.innerHTML = buttonText[lang].copied;
    });
    button.addEventListener('blur', () => {
      button.innerHTML = buttonText[lang].copy;
    });
    pre.append(button);
  });
});