/**
 * Contact form PII redaction integration
 * This script handles the integration of PII redaction into the contact form submission process
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find the contact form(s) on the page
  const contactForms = document.querySelectorAll('form.contact-us-form');
  
  contactForms.forEach((form, index) => {
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      // Stop form from submitting
      event.preventDefault();
      
      // Check if redactPII function is available
      if (typeof window.redactPII !== 'function') {
        console.error('PII redaction function not available');
        return;
      }
      
      // Get all form fields that might contain PII (including GC Design System components)
      const standardFields = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
      const gcdsInputs = form.querySelectorAll('gcds-input');
      const gcdsTextareas = form.querySelectorAll('gcds-textarea');
      
      // Process standard HTML fields
      standardFields.forEach((field) => {
        if (field.value && field.value.trim() !== '' && field.name !== 'honeypot' && field.name !== 'bot-field') {
          const originalValue = field.value;
          const redactedValue = window.redactPII(originalValue);
          
          if (redactedValue !== originalValue) {
            field.value = redactedValue;
          }
        }
      });
      
      // Process GCDS input components
      gcdsInputs.forEach((component) => {
        const inputElement = component.shadowRoot?.querySelector('input') || component.querySelector('input');
        if (inputElement && inputElement.value && inputElement.value.trim() !== '') {
          const originalValue = inputElement.value;
          const redactedValue = window.redactPII(originalValue);
          
          if (redactedValue !== originalValue) {
            inputElement.value = redactedValue;
            // Also update the component's value property if it exists
            if (component.value !== undefined) {
              component.value = redactedValue;
            }
          }
        }
      });
      
      // Process GCDS textarea components
      gcdsTextareas.forEach((component) => {
        const textareaElement = component.shadowRoot?.querySelector('textarea') || component.querySelector('textarea');
        if (textareaElement && textareaElement.value && textareaElement.value.trim() !== '') {
          const originalValue = textareaElement.value;
          const redactedValue = window.redactPII(originalValue);
          
          if (redactedValue !== originalValue) {
            textareaElement.value = redactedValue;
            // Also update the component's value property if it exists
            if (component.value !== undefined) {
              component.value = redactedValue;
            }
          }
        }
      });
      // Finally submit the form after PII has been redacted
      form.submit()
    });
  });
});

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    // Export any functions that need to be tested
  };
}