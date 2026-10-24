import { afterEach, describe, expect, it, vi } from 'vitest';

/**
 * `src/lib/url.ts` reads `import.meta.env.BASE_URL` at module scope, so each
 * block stubs the env and re-imports the module to test one deploy shape.
 */
async function urlWithBase(base: string) {
  vi.resetModules();
  vi.stubEnv('BASE_URL', base);
  return import('../../src/lib/url');
}

afterEach(() => {
  vi.unstubAllEnvs();
  vi.resetModules();
});

describe('withBase on the custom domain (no base path)', () => {
  it('leaves site-absolute paths alone', async () => {
    const { withBase } = await urlWithBase('/');
    expect(withBase('/tesla')).toBe('/tesla');
    expect(withBase('/')).toBe('/');
  });

  it('leaves external and protocol-relative URLs alone', async () => {
    const { withBase } = await urlWithBase('/');
    expect(withBase('https://example.com/x')).toBe('https://example.com/x');
    expect(withBase('//example.com/x')).toBe('//example.com/x');
    expect(withBase('#anchor')).toBe('#anchor');
  });
});

describe('withBase on the github.io preview', () => {
  it('prefixes site-absolute paths with the base', async () => {
    const { withBase } = await urlWithBase('/neteinstein.org/');
    expect(withBase('/tesla')).toBe('/neteinstein.org/tesla');
    expect(withBase('/')).toBe('/neteinstein.org/');
  });

  it('does not double-prefix a path that already carries the base', async () => {
    const { withBase } = await urlWithBase('/neteinstein.org/');
    expect(withBase('/neteinstein.org/tesla')).toBe('/neteinstein.org/tesla');
    expect(withBase('/neteinstein.org')).toBe('/neteinstein.org');
  });

  it('leaves protocol-relative URLs alone', async () => {
    const { withBase } = await urlWithBase('/neteinstein.org/');
    expect(withBase('//example.com/x')).toBe('//example.com/x');
  });
});

describe('stripBase', () => {
  it('is the inverse of withBase under a base path', async () => {
    const { stripBase, withBase } = await urlWithBase('/neteinstein.org/');
    expect(stripBase(withBase('/tesla'))).toBe('/tesla');
    expect(stripBase('/neteinstein.org')).toBe('/');
    expect(stripBase('/elsewhere/tesla')).toBe('/elsewhere/tesla');
  });

  it('is a no-op without a base path', async () => {
    const { stripBase } = await urlWithBase('/');
    expect(stripBase('/tesla')).toBe('/tesla');
  });
});

describe('isExternal', () => {
  it('matches absolute, protocol-relative, mailto and tel URLs', async () => {
    const { isExternal } = await urlWithBase('/');
    expect(isExternal('https://example.com')).toBe(true);
    expect(isExternal('http://example.com')).toBe(true);
    expect(isExternal('//example.com')).toBe(true);
    expect(isExternal('mailto:x@example.com')).toBe(true);
    expect(isExternal('tel:+351000000000')).toBe(true);
    expect(isExternal('/tesla')).toBe(false);
    expect(isExternal('#anchor')).toBe(false);
  });
});
