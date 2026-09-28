/** `https://www.ted.com/talks/…` → `ted.com`: a short "where this goes" hint for external links. */
export function hostOf(href: string): string {
  try {
    return new URL(href).hostname.replace(/^(?:www|m|amp)\./, '');
  } catch {
    return '';
  }
}
