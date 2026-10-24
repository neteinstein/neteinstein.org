import { describe, expect, it } from 'vitest';
import rehypeBaseLinks from '../../src/integrations/rehype-base-links';

interface Node {
  type: string;
  tagName?: string;
  properties?: Record<string, unknown>;
  children?: Node[];
}

const link = (href: string): Node => ({
  type: 'element',
  tagName: 'a',
  properties: { href },
  children: [],
});

const tree = (...children: Node[]): Node => ({ type: 'root', children });

const PAGES = ['/', '/tesla', '/porto/visit-porto'];

function run(
  options: { base?: string; locales?: string[] },
  hrefs: string[],
  path = 'src/content/pages/why.mdx',
): string[] {
  const nodes = tree(...hrefs.map(link));
  rehypeBaseLinks({ pages: PAGES, ...options })(nodes, { path });
  return (nodes.children ?? []).map((node) => String(node.properties?.href));
}

describe('rehypeBaseLinks under a base path', () => {
  it('prefixes site-absolute links and leaves everything else alone', () => {
    expect(
      run({ base: '/repo' }, ['/tesla', '/', 'https://example.com', '#anchor', '//cdn.example']),
    ).toEqual(['/repo/tesla', '/repo/', 'https://example.com', '#anchor', '//cdn.example']);
  });

  it('does not double-prefix links already under the base', () => {
    expect(run({ base: '/repo' }, ['/repo/tesla'])).toEqual(['/repo/tesla']);
  });

  it('walks nested elements', () => {
    const nodes = tree({ type: 'element', tagName: 'p', children: [link('/tesla')] });
    rehypeBaseLinks({ base: '/repo', pages: PAGES })(nodes, { path: 'src/content/pages/x.mdx' });
    expect(nodes.children?.[0]?.children?.[0]?.properties?.href).toBe('/repo/tesla');
  });
});

describe('rehypeBaseLinks in a translation', () => {
  it('points page links at the translation, keeping anchors', () => {
    expect(
      run({ locales: ['pt'] }, ['/tesla', '/tesla#referral', '/'], 'src/content/pages/pt/x.mdx'),
    ).toEqual(['/pt/tesla', '/pt/tesla#referral', '/pt']);
  });

  it('leaves non-page links untranslated', () => {
    expect(
      run(
        { locales: ['pt'] },
        ['/og/tesla.jpg', 'https://example.com'],
        'src/content/pages/pt/x.mdx',
      ),
    ).toEqual(['/og/tesla.jpg', 'https://example.com']);
  });

  it('applies locale and base together', () => {
    expect(
      run({ base: '/repo', locales: ['pt'] }, ['/tesla'], 'src/content/pages/pt/x.mdx'),
    ).toEqual(['/repo/pt/tesla']);
  });

  it('does not localise English prose', () => {
    expect(run({ base: '', locales: ['pt'] }, ['/tesla'], 'src/content/pages/why.mdx')).toEqual([
      '/tesla',
    ]);
  });
});
