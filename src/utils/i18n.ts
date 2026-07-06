export type Locale = 'en' | 'tr';

/** Given the current pathname and its locale, returns the equivalent path in the other locale. */
export function getAlternatePath(pathname: string, lang: Locale): string {
  if (lang === 'en') {
    return pathname === '/' ? '/tr/' : `/tr${pathname}`;
  }
  return pathname.replace(/^\/tr\/?/, '/');
}
