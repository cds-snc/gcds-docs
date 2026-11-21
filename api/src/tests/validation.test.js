import {
  FORM_NAMES,
  FORMS,
  identifyForm,
  isAllowedOrigin,
  isFromAnotherSite,
  isGcEmail,
  isValidEmail,
  parseOriginList,
  validateSubmission,
} from '../validation.js';

describe('identifyForm', () => {
  it('accepts exactly our four form names', () => {
    expect(FORM_NAMES).toEqual(['contactEN', 'contactFR', 'unsubscribeEN', 'unsubscribeFR']);
  });

  it('identifies each of our forms', () => {
    expect(identifyForm({ 'form-name': 'contactFR' })).toMatchObject({ type: 'contact', lang: 'fr' });
    expect(identifyForm({ 'form-name': 'unsubscribeEN' })).toMatchObject({ type: 'unsubscribe', lang: 'en' });
  });

  it.each([
    [undefined],
    [{}],
    [{ 'form-name': 'toString' }],
    [{ 'form-name': '__proto__' }],
    [{ 'form-name': ['contactEN'] }],
    [{ 'form-name': 'contactEN', extra: 'x' }],
    [{ 'form-name': 'contactEN', name: ['a', 'b'] }],
    [{ 'form-name': 'unsubscribeEN', name: 'a' }],
  ])('rejects %p', body => {
    expect(identifyForm(body)).toBeNull();
  });
});

describe('validateSubmission', () => {
  const contact = { name: 'Jane', email: 'jane@gc.ca', familiarityGCDS: 'yes' };

  it('returns no errors for a valid contact submission', () => {
    expect(validateSubmission(contact, FORMS.contactEN)).toEqual({});
  });

  it('rejects blank required fields', () => {
    expect(validateSubmission({ name: '  ' }, FORMS.contactEN)).toEqual({
      name: 'required',
      email: 'required',
      familiarityGCDS: 'required',
    });
  });

  it('rejects a non-GC email on the contact form', () => {
    expect(validateSubmission({ ...contact, email: 'jane@gmail.com' }, FORMS.contactFR)).toEqual({
      email: 'gcEmail',
    });
  });

  it('allows any real-looking email when unsubscribing', () => {
    expect(validateSubmission({ email: 'jane@gmail.com' }, FORMS.unsubscribeEN)).toEqual({});
  });

  it('rejects a malformed email when unsubscribing', () => {
    expect(validateSubmission({ email: 'jane.doe@gmail' }, FORMS.unsubscribeEN)).toEqual({
      email: 'invalidEmail',
    });
  });
});

describe('isGcEmail', () => {
  it.each([
    'jane.doe@gc.ca',
    'jane.doe@tbs-sct.gc.ca',
    'Jane.Doe@SSC-SPC.GC.CA',
    'jane@canada.ca',
    'jane@servicecanada.canada.ca',
    'jane@cds-snc.ca',
    ' jane@forces.gc.ca ',
  ])('accepts %s', email => {
    expect(isGcEmail(email)).toBe(true);
  });

  it.each([
    'jane@gmail.com',
    'jane@notgc.ca',
    'jane@gc.ca.evl.com',
    'jane@evilcanada.ca',
    'jane@x@gc.ca',
    'jane doe@gc.ca',
    '.jane@gc.ca',
    'ja..ne@gc.ca',
    'jane@gc..ca',
    'jane@-tbs.gc.ca',
    'x_7c4a8d09ca37@tbs-sct.gc.ca',
    '0008_solver_adc90bad56@tbs-sct.gc.ca',
    '9f86d081884c7d659a2feaa0c55ad015@gc.ca',
    'f47ac10b-58cc-4372-a567-0e02b2c3d479@canada.ca',
    'gc.ca',
    '@gc.ca',
    'jane@',
    '',
    undefined,
    ['jane@gc.ca'],
  ])('rejects %p', email => {
    expect(isGcEmail(email)).toBe(false);
  });
});

describe('isValidEmail', () => {
  it.each([
    'someone@gmail.com',
    'first.last+news@outlook.com',
    'jane@tbs-sct.gc.ca',
    'JANE@Sub.Domain.co.uk',
    'jane.doe1985@gmail.com',
    'jsmith2024@outlook.com',
    'cafe.owner@gmail.com',
    'bob.1234567890@gmail.com',
    'deadbeefcafe@gmail.com',
    'dee5551234@gmail.com',
    'abe19850101@gmail.com',
    'ada6045551234@gmail.com',
    'deb1985cafe@gmail.com',
    // Random-looking addresses are allowed to unsubscribe (see isValidEmail)
    '0008_solver_adc90bad56@gmail.com',
    'user_3f9a2c7b1e@outlook.com',
  ])('accepts %s', email => {
    expect(isValidEmail(email)).toBe(true);
  });

  it.each([
    'asdf',
    'asdf@',
    '@gmail.com',
    'a@b',
    'a@b.c',
    'a@b.123',
    'a b@gmail.com',
    'a@gm ail.com',
    'a@@gmail.com',
    '.a@gmail.com',
    'a.@gmail.com',
    'a..b@gmail.com',
    'a@-gmail.com',
    'a@gmail-.com',
    'a@gmail..com',
    '<script>@gmail.com',
    'a@gmail.com<script>',
    `${'a'.repeat(65)}@gmail.com`,
    `a@${'b'.repeat(250)}.com`,
    'root@localhost',
    undefined,
    ['someone@gmail.com'],
  ])('rejects %p', email => {
    expect(isValidEmail(email)).toBe(false);
  });
});

describe('origins', () => {
  it('accepts only the exact production origins', () => {
    expect(isAllowedOrigin('https://design-system.canada.ca')).toBe(true);
    expect(isAllowedOrigin('https://systeme-design.canada.ca')).toBe(true);
    expect(isAllowedOrigin('https://another-website.com')).toBe(false);
    expect(isAllowedOrigin('http://design-system.canada.ca')).toBe(false);
    expect(isAllowedOrigin('https://design-system.canada.ca.another-website.com')).toBe(false);
    expect(isAllowedOrigin('null')).toBe(false);
    expect(isAllowedOrigin(undefined)).toBe(false);
  });

  it('accepts extra origins from the config', () => {
    const extra = parseOriginList(
      ' https://astro-staging.design-system.canada.ca, ,https://astro-staging.systeme-design.canada.ca',
    );
    expect(extra).toEqual([
      'https://astro-staging.design-system.canada.ca',
      'https://astro-staging.systeme-design.canada.ca',
    ]);
    expect(isAllowedOrigin('https://astro-staging.systeme-design.canada.ca', extra)).toBe(true);
  });
});

describe('isFromAnotherSite', () => {
  it('is false for our own form posts (Origin: null, same-origin)', () => {
    expect(isFromAnotherSite({ origin: 'null', secFetchSite: 'same-origin' })).toBe(false);
  });

  it('is false without browser headers', () => {
    expect(isFromAnotherSite({})).toBe(false);
  });

  it('is true for cross-site requests', () => {
    expect(isFromAnotherSite({ origin: 'null', secFetchSite: 'cross-site' })).toBe(true);
  });

  it('is true for a foreign Origin', () => {
    expect(isFromAnotherSite({ origin: 'https://another-website.com' })).toBe(true);
  });
});
