import { getRedirectPath } from '../utils.js';

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