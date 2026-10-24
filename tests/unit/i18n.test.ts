import { describe, expect, it } from 'vitest';
import {
  currentPage,
  getLocale,
  localeFromPath,
  localize,
  localizePath,
  translate,
  unlocalizePath,
} from '../../src/i18n';

describe('localeFromPath', () => {
  it('reads the locale prefix of a base-free path', () => {
    expect(localeFromPath('/pt/tesla')).toBe('pt');
    expect(localeFromPath('/pt')).toBe('pt');
    expect(localeFromPath('/tesla')).toBe('en');
    expect(localeFromPath('/')).toBe('en');
  });

  it('does not mistake a page for a locale', () => {
    expect(localeFromPath('/porto/visit-porto')).toBe('en');
  });
});

describe('localizePath', () => {
  it('prefixes site pages for a translated locale', () => {
    expect(localizePath('/tesla', 'pt')).toBe('/pt/tesla');
    expect(localizePath('/', 'pt')).toBe('/pt');
    expect(localizePath('/tesla', 'en')).toBe('/tesla');
  });

  it('keeps query strings and anchors', () => {
    expect(localizePath('/tesla#referral', 'pt')).toBe('/pt/tesla#referral');
  });

  it('leaves non-pages alone', () => {
    expect(localizePath('/og/tesla.jpg', 'pt')).toBe('/og/tesla.jpg');
    expect(localizePath('https://example.com', 'pt')).toBe('https://example.com');
    expect(localizePath('#anchor', 'pt')).toBe('#anchor');
  });
});

describe('unlocalizePath', () => {
  it('drops the locale prefix', () => {
    expect(unlocalizePath('/pt/tesla')).toBe('/tesla');
    expect(unlocalizePath('/pt')).toBe('/');
    expect(unlocalizePath('/tesla')).toBe('/tesla');
  });

  it('round-trips with localizePath for every nav page', () => {
    expect(unlocalizePath(localizePath('/porto/visit-porto', 'pt'))).toBe('/porto/visit-porto');
  });
});

describe('currentPage and getLocale', () => {
  it('normalises the built file URLs back to site paths', () => {
    expect(currentPage(new URL('https://example.com/tesla.html'))).toBe('/tesla');
    expect(currentPage(new URL('https://example.com/pt/tesla.html'))).toBe('/tesla');
    expect(currentPage(new URL('https://example.com/'))).toBe('/');
    expect(currentPage(new URL('https://example.com/pt/index.html'))).toBe('/');
    expect(getLocale(new URL('https://example.com/pt/tesla.html'))).toBe('pt');
    expect(getLocale(new URL('https://example.com/tesla'))).toBe('en');
  });
});

describe('translate', () => {
  it('falls back to the English text when there is no entry', () => {
    expect(translate('pt', 'Some string with no catalogue entry')).toBe(
      'Some string with no catalogue entry',
    );
  });

  it('translates a catalogued string', () => {
    // From `src/i18n/pt/porto.ts` — a stable, short entry.
    expect(translate('pt', 'Where to eat?')).toBe('Onde comer?');
  });

  it('fills {name} placeholders, translated or not', () => {
    expect(translate('en', '{shown} of {total}', { shown: 3, total: 9 })).toBe('3 of 9');
    expect(translate('en', 'Hello {name}', {})).toBe('Hello {name}');
  });
});

describe('localize', () => {
  it('translates strings and localises hrefs, leaving code keys alone', () => {
    const data = {
      id: 'Where to eat?',
      label: 'Where to eat?',
      href: '/tesla',
      external: 'https://example.com',
    };
    expect(localize(data, 'pt')).toEqual({
      id: 'Where to eat?',
      label: 'Onde comer?',
      href: '/pt/tesla',
      external: 'https://example.com',
    });
  });

  it('returns the value untouched for the default locale', () => {
    const data = { label: 'Where to eat?' };
    expect(localize(data, 'en')).toBe(data);
  });
});
