document.addEventListener('DOMContentLoaded', function () {
  // Toggle code visibility
  document.querySelectorAll('.showcase-view-button').forEach(button => {
    button.addEventListener('click', toggleCodeVisibility);
  });

  function toggleCodeVisibility() {
    const code = this.closest('.code-showcase').querySelector('.showcase');
    const isHidden = code.getAttribute('aria-hidden') === 'true';

    code.setAttribute('aria-hidden', !isHidden);
    this.setAttribute('aria-expanded', String(isHidden));

    if (isHidden) {
      code.setAttribute('tabindex', '0');
    } else {
      code.setAttribute('tabindex', -1);
    }
  }

  // Copy code showcase
  document.querySelectorAll('.code-showcase').forEach(codeShowcase => {
    codeShowcase
      .querySelector('.showcase-copy-button')
      .addEventListener('click', copyCode);
  });

  function copyCode() {
    const codeElement =
      this.closest('.code-showcase').querySelector('.showcase');
    const lang = this.getAttribute('lang');

    navigator.clipboard
      .writeText(codeElement.value)
      .then(() => {
        this.innerText = lang === 'en' ? 'Copied' : 'Copié';
      })
      .catch(error => {
        console.error('Failed to copy text: ', error);
      });
  }
});
