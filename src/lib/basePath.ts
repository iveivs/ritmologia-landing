// GitHub Pages serves this project from https://iveivs.github.io/ritmologia-landing/,
// i.e. under a sub-path, not the domain root. Next.js does not auto-prefix
// hardcoded `public/` asset paths (only next/link and next/router get that),
// so every next/image `src` referencing `/images/...` must go through
// `withBasePath`. Keep this in sync with `basePath` in next.config.ts (which
// imports this same constant, so there is only one place to edit).
export const basePath =
  process.env.NODE_ENV === "production" ? "/ritmologia-landing" : "";

export function withBasePath(path: string): string {
  return `${basePath}${path}`;
}
