document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.querySelector('form.contact-us-form');

  // If the contact form exists, remove PII from textareas before submission
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      const textareas = contactForm.querySelectorAll('gcds-textarea');

      textareas.forEach(textarea => {
        textarea.value = sanitizePii(textarea.value);
      });
    }, { capture: true });
  }
});