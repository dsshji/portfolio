/** Resolve a /public path ('/work/x.gif') against Vite's base URL, so it
    works both on localhost ('/') and on GitHub Pages ('/portfolio/').
    External URLs and relative paths pass through unchanged. */
export function asset(path: string): string;
export function asset(path: string | undefined): string | undefined;
export function asset(path: string | undefined) {
  if (!path || !path.startsWith('/') || path.startsWith('//')) return path;
  return import.meta.env.BASE_URL + path.slice(1);
}
