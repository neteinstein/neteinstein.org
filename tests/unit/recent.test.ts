import { describe, expect, it } from 'vitest';
import { MAX_RECENT, formatMonth, latest } from '../../src/lib/recent';

describe('latest', () => {
  const item = (date: string, title: string) => ({ date, title });

  it('keeps the newest four, newest first', () => {
    const items = [
      item('2026-08', 'a'),
      item('2026-11', 'b'),
      item('2026-09', 'c'),
      item('2026-10', 'd'),
      item('2026-07', 'e'),
    ];
    expect(latest(items).map((entry) => entry.title)).toEqual(['b', 'd', 'c', 'a']);
    expect(MAX_RECENT).toBe(4);
  });

  it('keeps the listed order within a month', () => {
    const items = [item('2026-11', 'first'), item('2026-11', 'second'), item('2026-12', 'newest')];
    expect(latest(items).map((entry) => entry.title)).toEqual(['newest', 'first', 'second']);
  });

  it('does not change the list it was given', () => {
    const items = [item('2026-01', 'a'), item('2026-02', 'b')];
    latest(items);
    expect(items.map((entry) => entry.title)).toEqual(['a', 'b']);
  });
});

describe('formatMonth', () => {
  it('names the month in the page language', () => {
    expect(formatMonth('2026-11', 'en')).toBe('Nov 2026');
    expect(formatMonth('2026-11', 'pt-PT')).toBe('nov. 2026');
  });
});
