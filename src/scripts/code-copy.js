document.addEventListener('DOMContentLoaded', function () {
  const code = document.querySelectorAll('pre[class*="language"]');
  const url = window.location.href;
  let lang = 'en';

  if (url.includes('/fr/')) {
    lang = 'fr';
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

    if (lang = 'en') {
      button.innerHTML = 'Copy';
    } else {
      button.innerHTML = 'Copie';
    }

    button.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.querySelector('code').textContent);
      if (lang = 'en') {
        button.innerHTML = 'Copied';
      } else {
        button.innerHTML = 'Copié';
      }
    });
    button.addEventListener('blur', () => {
      if (lang = 'en') {
        button.innerHTML = 'Copy';
      } else {
        button.innerHTML = 'Copie';
      }
    });
    pre.append(button);
  });
});