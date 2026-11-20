import { getRedirectPath, resolveRedirectOrigin } from '../utils.js';

describe('getRedirectPath', () => {
  it('returns correct path for contact success (en)', () => {
    expect(getRedirectPath('en', 'contact', 'success')).toBe('/en/contact/thanks');
  });
  it('returns correct path for contact success (fr)', () => {
    expect(getRedirectPath('fr', 'contact', 'success')).toBe('/fr/contactez/merci');
  });
  it('returns correct path for unsubscribe success (en)', () => {
    expect(getRedirectPath('en', 'unsubscribe', 'success')).toBe('/en/unsubscribe/success');
  });
  it('returns correct path for unsubscribe success (fr)', () => {
    expect(getRedirectPath('fr', 'unsubscribe', 'success')).toBe('/fr/se-desabonner/succes');
  });
  it('returns correct path for unsubscribe error (en)', () => {
    expect(getRedirectPath('en', 'unsubscribe', 'error')).toBe('/en/unsubscribe/error');
  });
  it('returns correct path for unsubscribe error (fr)', () => {
    expect(getRedirectPath('fr', 'unsubscribe', 'error')).toBe('/fr/se-desabonner/erreur');
  });
}); 
describe('getRedirectPath (invalid)', () => {
  it('returns the contact error page (en)', () => {
    expect(getRedirectPath('en', 'contact', 'invalid')).toBe('/en/contact/error');
  });
  it('returns the contact error page (fr)', () => {
    expect(getRedirectPath('fr', 'contact', 'invalid')).toBe('/fr/contactez/erreur');
  });
  it('returns the unsubscribe error page for invalid unsubscribe requests', () => {
    expect(getRedirectPath('en', 'unsubscribe', 'invalid')).toBe('/en/unsubscribe/error');
  });
});

describe('resolveRedirectOrigin', () => {
  it('uses an allowlisted origin', () => {
    expect(resolveRedirectOrigin('https://systeme-design.canada.ca', null, 'en')).toBe(
      'https://systeme-design.canada.ca',
    );
  });
  it('falls back to the forwarded host when Origin is null', () => {
    expect(resolveRedirectOrigin('null', 'https://design-system.canada.ca', 'fr')).toBe(
      'https://design-system.canada.ca',
    );
  });
  it('never redirects to a site that is not allowlisted', () => {
    expect(resolveRedirectOrigin('https://another-website.com', 'https://another-website.com', 'fr')).toBe(
      'https://systeme-design.canada.ca',
    );
  });
});
