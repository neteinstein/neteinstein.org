import { describe, expect, it } from 'vitest';
import {
  clampSlide,
  formatMinutes,
  partMinutes,
  sessionMinutes,
  slideAt,
} from '../../src/lib/slide-deck';

describe('clampSlide', () => {
  it('keeps an index inside the deck', () => {
    expect(clampSlide(-1, 10)).toBe(0);
    expect(clampSlide(4, 10)).toBe(4);
    expect(clampSlide(12, 10)).toBe(9);
  });

  it('rounds to the nearest slide', () => {
    expect(clampSlide(2.4, 10)).toBe(2);
    expect(clampSlide(2.6, 10)).toBe(3);
  });

  it('stays at 0 for an empty deck', () => {
    expect(clampSlide(3, 0)).toBe(0);
  });
});

describe('slideAt', () => {
  it('maps a scroll offset to the slide it rests on', () => {
    expect(slideAt(0, 800, 5)).toBe(0);
    expect(slideAt(1600, 800, 5)).toBe(2);
    expect(slideAt(1990, 800, 5)).toBe(2);
    expect(slideAt(2010, 800, 5)).toBe(3);
  });

  it('never runs past the last slide', () => {
    expect(slideAt(99_999, 800, 5)).toBe(4);
  });

  it('is 0 before the track has a width', () => {
    expect(slideAt(500, 0, 5)).toBe(0);
  });
});

describe('session timing', () => {
  const parts = [{ minutes: 15 }, { minutes: 10, perPerson: true }, { minutes: 10 }];

  it('multiplies only the per-person parts', () => {
    expect(partMinutes(parts[0]!, 6)).toBe(15);
    expect(partMinutes(parts[1]!, 6)).toBe(60);
  });

  it('adds the parts up', () => {
    expect(sessionMinutes(parts, 6)).toBe(85);
    expect(sessionMinutes(parts, 2)).toBe(45);
  });
});

describe('formatMinutes', () => {
  it('reads as minutes under an hour', () => {
    expect(formatMinutes(45)).toBe('45 min');
  });

  it('reads as hours and minutes from an hour up', () => {
    expect(formatMinutes(60)).toBe('1 h');
    expect(formatMinutes(85)).toBe('1 h 25 min');
    expect(formatMinutes(145)).toBe('2 h 25 min');
  });
});
