import { getSiteMap } from "~/components/site/siteNav";

// indexable pages of the site (German addresses, English under /en) – used for
// sitemap.xml (legal pages are noindex)
export const siteUrl = "https://hschaletzky.com";

// every page of the navigation (start page first), without external links, the
// guide (its articles come from ratgeber.server.ts) and mail or phone links
export const sitePages = [
  "/",
  ...getSiteMap("de")
    .flatMap((group) => group.links)
    .filter(
      (link) =>
        !link.external &&
        link.href.startsWith("/") &&
        !link.href.startsWith("/ratgeber"),
    )
    .map((link) => link.href),
];
