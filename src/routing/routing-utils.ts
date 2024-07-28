export function ensureTrailingSlash(url: string) {
  const [pathname, search] = url.split('?');
  let ensuredPathname = pathname;

  if (!pathname.endsWith('/')) {
    ensuredPathname = `${ensuredPathname}/`;
  }

  return search ? `${ensuredPathname}?${search}` : ensuredPathname;
}
