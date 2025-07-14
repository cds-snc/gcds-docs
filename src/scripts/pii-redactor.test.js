/**
 * Unit tests for PII redaction utility
 * These tests verify that the redactPII function correctly identifies and redacts
 * Canadian personally identifiable information while avoiding false positives
 */

// Import the redactPII function
const fs = require('fs');
const path = require('path');
const redactorCode = fs.readFileSync(path.join(__dirname, 'pii-redactor.js'), 'utf8');
eval(redactorCode);

/**
 * Simple test assertion function
 */
function assert(condition, message) {
  if (!condition) {
    throw new Error(`Test failed: ${message}`);
  }
}

/**
 * Test runner function
 */
function runTest(testName, testFn) {
  try {
    testFn();
    console.log(`✓ ${testName}`);
  } catch (error) {
    console.error(`✗ ${testName}: ${error.message}`);
    process.exit(1);
  }
}

// Test suite
console.log('Running PII Redactor Tests...\n');

// Test 1: Basic functionality
runTest('Basic input handling', () => {
  assert(redactPII('') === '', 'Empty string should return empty string');
  assert(redactPII('Hello world') === 'Hello world', 'Non-PII text should remain unchanged');
  assert(redactPII(null) === null, 'Null input should return null');
  assert(redactPII(undefined) === undefined, 'Undefined input should return undefined');
  assert(redactPII(123) === 123, 'Non-string input should return as-is');
});

// Test 2: SIN redaction
runTest('SIN redaction', () => {
  // Valid SIN formats
  assert(redactPII('My SIN is 123-456-789') === 'My SIN is [REDACTED:sin]', 'SIN with dashes should be redacted');
  assert(redactPII('SIN: 123 456 789') === 'SIN: [REDACTED:sin]', 'SIN with spaces should be redacted');
  assert(redactPII('SIN:123456789') === 'SIN:[REDACTED:sin]', 'SIN without separators should be redacted');
  assert(redactPII('social insurance number 987654321') === 'social insurance number [REDACTED:sin]', 'SIN without prefix should be redacted');
  
  // Should not redact phone numbers or invalid SINs
  assert(redactPII('Call me at 123-456-7890') === 'Call me at [REDACTED:phone]', 'Phone numbers should not be redacted as SINs');
  assert(redactPII('My number is 012-345-678') === 'My number is 012-345-678', 'SIN starting with 0 should not be redacted');
  assert(redactPII('Invoice #123456789') === 'Invoice #123456789', 'Invoice numbers should not be redacted as SINs');
});

// Test 3: Email redaction
runTest('Email redaction', () => {
  assert(redactPII('Contact me at jane@example.com') === 'Contact me at [REDACTED:email]', 'Basic email should be redacted');
  assert(redactPII('user.name+tag@domain.co.uk') === '[REDACTED:email]', 'Complex email should be redacted');
  assert(redactPII('multiple@emails.com and test@domain.org') === '[REDACTED:email] and [REDACTED:email]', 'Multiple emails should be redacted');
  assert(redactPII('Not an email: user@') === 'Not an email: user@', 'Invalid email should not be redacted');
  assert(redactPII('Also not: @domain.com') === 'Also not: @domain.com', 'Invalid email should not be redacted');
});

// Test 4: Phone number redaction
runTest('Phone number redaction', () => {
  // Valid Canadian phone formats
  assert(redactPII('Call me at 416-123-4567') === 'Call me at [REDACTED:phone]', 'Phone with dashes should be redacted');
  assert(redactPII('Phone: (416) 123-4567') === 'Phone: [REDACTED:phone]', 'Phone with parentheses should be redacted');
  assert(redactPII('Contact: +1-416-123-4567') === 'Contact: [REDACTED:phone]', 'Phone with country code should be redacted');
  assert(redactPII('My number is 4161234567') === 'My number is [REDACTED:phone]', 'Phone without separators should be redacted');
  
  // Invalid area codes should not be redacted
  assert(redactPII('Not a phone: 111-123-4567') === 'Not a phone: 111-123-4567', 'Invalid area code should not be redacted');
  assert(redactPII('Also not: 011-123-4567') === 'Also not: 011-123-4567', 'Invalid area code should not be redacted');
});

// Test 5: Postal code redaction
runTest('Postal code redaction', () => {
  assert(redactPII('Toronto, ON M5V 2T6') === 'Toronto, ON [REDACTED:address]', 'Postal code with space should be redacted');
  assert(redactPII('Address: M5V2T6') === 'Address: [REDACTED:address]', 'Postal code without space should be redacted');
  assert(redactPII('Multiple codes: K1A 0A6 and H3Z 2Y7') === 'Multiple codes: [REDACTED:address] and [REDACTED:address]', 'Multiple postal codes should be redacted');
  assert(redactPII('Not postal: 123 456') === 'Not postal: 123 456', 'Invalid format should not be redacted');
});

// Test 6: Address redaction
runTest('Address redaction', () => {
  assert(redactPII('I live at 123 Main Street') === 'I live at [REDACTED:address]', 'Street address should be redacted');
  assert(redactPII('Address: 456 Maple Ave') === 'Address: [REDACTED:address]', 'Avenue address should be redacted');
  assert(redactPII('Located at 789 Oak Road') === 'Located at [REDACTED:address]', 'Road address should be redacted');
  assert(redactPII('Visit 321 Pine Dr') === 'Visit [REDACTED:address]', 'Drive address should be redacted');
  assert(redactPII('Find me at 654 Elm Boulevard') === 'Find me at [REDACTED:address]', 'Boulevard address should be redacted');
  
  // Should not redact non-addresses
  assert(redactPII('Invoice number 123') === 'Invoice number 123', 'Numbers without street names should not be redacted');
  assert(redactPII('Meeting at 3pm') === 'Meeting at 3pm', 'Times should not be redacted');
});

// Test 7: Passport redaction
runTest('Passport redaction', () => {
  assert(redactPII('My passport is AB123456') === 'My passport is [REDACTED:passport]', 'Passport with prefix should be redacted');
  assert(redactPII('Passport: CD789012') === 'Passport: [REDACTED:passport]', 'Passport with colon should be redacted');
  assert(redactPII('Document XY345678') === 'Document [REDACTED:passport]', 'Passport-like format should be redacted');
  
  // Should not redact other alphanumeric codes
  assert(redactPII('Order #ABC12345') === 'Order #ABC12345', 'Shorter codes should not be redacted');
  assert(redactPII('Code: ABCD12345') === 'Code: ABCD12345', 'Longer codes should not be redacted');
});

// Test 8: Complex integration test
runTest('Complex integration test', () => {
  const input = 'My name is Jane, SIN: 123-456-789, email jane@example.com. I live at 456 Maple St, Toronto, ON M5V 2T6. Call me at (416) 123-4567. My passport is AB123456.';
  const expected = 'My name is Jane, SIN: [REDACTED:sin], email [REDACTED:email]. I live at [REDACTED:address], Toronto, ON [REDACTED:address]. Call me at [REDACTED:phone]. My passport is [REDACTED:passport].';
  
  const result = redactPII(input);
  assert(result === expected, `Complex integration failed.\nExpected: ${expected}\nGot: ${result}`);
});

// Test 9: Edge cases and false positives
runTest('Edge cases and false positives', () => {
  // Should not redact common patterns that aren't PII
  assert(redactPII('Order #123456789') === 'Order #123456789', 'Order numbers should not be redacted');
  assert(redactPII('Version 1.2.3') === 'Version 1.2.3', 'Version numbers should not be redacted');
  assert(redactPII('Date: 2023-01-01') === 'Date: 2023-01-01', 'Dates should not be redacted');
  assert(redactPII('Price: $123.45') === 'Price: $123.45', 'Prices should not be redacted');
  assert(redactPII('Meeting room A1B 2C3') === 'Meeting room A1B 2C3', 'Room numbers should not be redacted');
  
  // Should preserve formatting around redacted content
  assert(redactPII('Email: (jane@example.com)') === 'Email: ([REDACTED:email])', 'Parentheses should be preserved');
  assert(redactPII('SIN "123-456-789"') === 'SIN "[REDACTED:sin]"', 'Quotes should be preserved');
});

// Test 10: Multiple PII types in one string
runTest('Multiple PII types', () => {
  const input = 'Contact info: john@email.com, 416-555-1234, SIN 987-654-321, lives at 789 Oak St, M4B 1Y2, passport CD567890';
  const result = redactPII(input);
  
  // Verify all PII types are redacted
  assert(result.includes('[REDACTED:email]'), 'Email should be redacted');
  assert(result.includes('[REDACTED:phone]'), 'Phone should be redacted');
  assert(result.includes('[REDACTED:sin]'), 'SIN should be redacted');
  assert(result.includes('[REDACTED:address]'), 'Address should be redacted');
  assert(result.includes('[REDACTED:passport]'), 'Passport should be redacted');
  
  // Verify non-PII content is preserved
  assert(result.includes('Contact info:'), 'Non-PII text should be preserved');
  assert(result.includes('lives at'), 'Non-PII text should be preserved');
});

console.log('\n✓ All tests passed! PII redaction utility is working correctly.');