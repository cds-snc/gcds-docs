import assert from 'node:assert/strict';
import test from 'node:test';

import { defaultLocale } from '../i18n/config';
import { getLocalizedRecord, resolveLocaleFromPathname } from './i18n';

test('resolveLocaleFromPathname returns fr for French paths', () => {
  assert.equal(resolveLocaleFromPathname('/fr/contactez/'), 'fr');
});

test('resolveLocaleFromPathname falls back to default locale when locale segment is missing', () => {
  assert.equal(resolveLocaleFromPathname('/about-us'), defaultLocale);
});

test('resolveLocaleFromPathname falls back to default locale for unsupported locales', () => {
  assert.equal(resolveLocaleFromPathname('/es/about-us'), defaultLocale);
});

test('getLocalizedRecord falls back to the default locale when requested locale is unsupported', () => {
  const record = {
    en: { label: 'English' },
    fr: { label: 'Français' },
  } as const;

  assert.deepEqual(getLocalizedRecord(record, 'es', defaultLocale), record.en);
});

