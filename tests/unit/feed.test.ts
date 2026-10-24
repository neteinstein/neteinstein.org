import { describe, expect, it } from 'vitest';
import { firstHref, monthIndex, plain } from '../../src/lib/feed';

describe('monthIndex', () => {
  it('maps the talk log month names to zero-based months', () => {
    expect(monthIndex('Jan')).toBe(0);
    expect(monthIndex('Sep')).toBe(8);
    expect(monthIndex('Dec')).toBe(11);
  });

  it('accepts the Portuguese "Set" for September', () => {
    expect(monthIndex('Set')).toBe(8);
  });

  it('dates an unknown month name to January instead of an invalid date', () => {
    expect(monthIndex('Sept')).toBe(0);
    expect(monthIndex('')).toBe(0);
  });
});

describe('plain', () => {
  it('joins strings, links and emphasis into the text as it reads', () => {
    expect(
      plain([
        'A talk at ',
        { label: 'Some Conf', href: 'https://example.com' },
        ' — ',
        { em: ['really ', { label: 'great', href: 'https://example.com/great' }] },
      ]),
    ).toBe('A talk at Some Conf — really great');
  });

  it('trims the result', () => {
    expect(plain([' padded '])).toBe('padded');
  });
});

describe('firstHref', () => {
  it('finds the first link, including inside emphasis', () => {
    expect(firstHref(['no link here'])).toBeUndefined();
    expect(firstHref(['x', { label: 'a', href: '/first' }, { label: 'b', href: '/second' }])).toBe(
      '/first',
    );
    expect(firstHref(['x', { em: ['y', { label: 'a', href: '/nested' }] }])).toBe('/nested');
    expect(firstHref()).toBeUndefined();
  });
});
