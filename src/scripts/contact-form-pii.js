/**
 * Contact form PII redaction integration
 * This script handles the integration of PII redaction into the contact form submission process
 */

document.addEventListener('DOMContentLoaded', function() {
  // Find the contact form(s) on the page
  const contactForms = document.querySelectorAll('form.contact-us-form');
  
  contactForms.forEach(form => {
    // Add event listener for form submission
    form.addEventListener('submit', function(event) {
      // Get all form fields that might contain PII
      const textFields = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
      
      // Redact PII from each text field before submission
      textFields.forEach(field => {
        if (field.value && typeof window.redactPII === 'function') {
          const originalValue = field.value;
          const redactedValue = window.redactPII(originalValue);
          
          // Only update if redaction occurred
          if (redactedValue !== originalValue) {
            console.log('PII redaction applied to field:', field.name);
            field.value = redactedValue;
          }
        }
      });
      
      // Form will continue with normal submission
      // The redacted values will be sent to the server
    });
  });
});

// Export for testing purposes
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    // Export any functions that need to be tested
  };
}