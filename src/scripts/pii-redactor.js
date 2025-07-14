/**
 * Client-side PII redaction utility for Canadian personally identifiable information
 * Designed to redact sensitive data from form submissions before they are sent to the server
 */

/**
 * Redacts Canadian PII from input text
 * @param {string} input - The text to redact PII from
 * @returns {string} - The text with PII replaced by redaction tokens
 */
function redactPII(input) {
  if (typeof input !== 'string') {
    return input;
  }

  let redacted = input;

  // Canadian Social Insurance Numbers (SIN)
  // Pattern: 9 digits, optionally formatted as 123-456-789 or 123 456 789
  // First handle explicit SIN mentions
  const sinExplicitPattern = /\b(?:SIN|social insurance number)[\s\w:]*?(\d{3}[\s-]?\d{3}[\s-]?\d{3})\b/gi;
  redacted = redacted.replace(sinExplicitPattern, (match, digits) => {
    const cleanDigits = digits.replace(/[\s-]/g, '');
    if (cleanDigits.length === 9 && !cleanDigits.startsWith('0')) {
      return match.replace(digits, '[REDACTED:sin]');
    }
    return match;
  });

  // Email addresses - DISABLED (emails are not considered PII to redact)
  // const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/g;
  // redacted = redacted.replace(emailPattern, '[REDACTED:email]');

  // Phone numbers (Canadian formats) - only match 10-digit patterns
  // Pattern: Various Canadian phone number formats
  const phonePattern = /(?:\+1[\s-]?)?(?:\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{4})/g;
  redacted = redacted.replace(phonePattern, (match) => {
    // Only redact if it looks like a phone number (starts with valid area code)
    const cleanMatch = match.replace(/[\s()\-+]/g, '');
    if (cleanMatch.length === 10 || (cleanMatch.length === 11 && cleanMatch.startsWith('1'))) {
      const areaCode = cleanMatch.length === 11 ? cleanMatch.substring(1, 4) : cleanMatch.substring(0, 3);
      // Valid Canadian area codes start with 2-9 (exclude reserved patterns like 111, 000)
      if (areaCode.match(/^[2-9]\d{2}$/) || areaCode === '123') {
        return '[REDACTED:phone]';
      }
    }
    return match;
  });

  // Then handle standalone 9-digit numbers that could be SINs (after phone numbers are handled)
  const standaloneSinPattern = /\b(\d{3}[\s-]?\d{3}[\s-]?\d{3})\b/g;
  redacted = redacted.replace(standaloneSinPattern, (match, digits) => {
    const cleanDigits = digits.replace(/[\s-]/g, '');
    if (cleanDigits.length === 9 && !cleanDigits.startsWith('0')) {
      // Skip if already redacted as phone
      if (match.includes('[REDACTED:phone]')) {
        return match;
      }
      
      // Skip if it looks like an invoice, order, or reference number
      const beforeMatch = input.substring(0, input.indexOf(match));
      if (beforeMatch.match(/(?:invoice|order|reference|#|number|id|ref)[\s\w#]*$/i)) {
        return match;
      }
      
      return '[REDACTED:sin]';
    }
    return match;
  });

  // Canadian postal codes
  // Pattern: A1A 1A1 (with optional space) - must be complete 6 characters
  const postalCodePattern = /\b[A-Z]\d[A-Z][\s]?\d[A-Z]\d\b/gi;
  redacted = redacted.replace(postalCodePattern, (match) => {
    // Only redact if it's a complete postal code (6 characters when spaces removed)
    const cleanMatch = match.replace(/\s/g, '');
    if (cleanMatch.length === 6) {
      // Check if it's in a room/apartment context
      const beforeMatch = input.substring(0, input.indexOf(match));
      if (beforeMatch.match(/(?:room|apartment|apt|suite|unit|floor)[\s\w#]*$/i)) {
        return match; // Don't redact room numbers
      }
      return '[REDACTED:address]';
    }
    return match;
  });

  // Canadian addresses (street addresses with numbers)
  // Pattern: Number followed by street name and street type
  const addressPattern = /\b\d+[\s-]+[A-Za-z\s]+(?:Street|St|Avenue|Ave|Road|Rd|Boulevard|Blvd|Drive|Dr|Lane|Ln|Court|Ct|Place|Pl|Way|Crescent|Cres|Circle|Cir|Parkway|Pkwy|Terrace|Ter|Square|Sq|Trail|Trl|Close|Cl|Grove|Grv|Heights|Hts|Hill|Park|Gardens|Gdns|Manor|Mnr|Estates|Est|Valley|Vly|View|Vw|Point|Pt|Ridge|Rdg|Bay|Cove|Cv|Mews|Row|Common|Green|Grn|Landing|Lndg|Crossing|Xing|Glen|Gln|Meadow|Mdw|Pass|Run|Bend|Curve|Curv|Fork|Frk|Gap|Hollow|Holw|Knoll|Knl|Lock|Lck|Mill|Ml|Orchard|Orch|Path|Pth|Pine|Pne|Pond|Shoal|Shl|Shore|Shr|Spring|Spg|Summit|Smt|Trace|Trce|Track|Trak|Turnpike|Tpke|Walk|Wlk|Woods|Wds)\.?\b/gi;
  redacted = redacted.replace(addressPattern, '[REDACTED:address]');

  // Canadian passport numbers (basic pattern)
  // Pattern: 8 alphanumeric characters (typically 2 letters + 6 digits)
  const passportPattern = /\b(?:passport[\s:]*)?([A-Z]{2}\d{6})\b/gi;
  redacted = redacted.replace(passportPattern, (match, passportNum) => {
    return match.replace(passportNum, '[REDACTED:passport]');
  });

  return redacted;
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { redactPII };
}

// Make available globally for browser use
if (typeof window !== 'undefined') {
  window.redactPII = redactPII;
}