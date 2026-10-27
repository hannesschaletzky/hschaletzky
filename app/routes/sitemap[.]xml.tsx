import { siteUrl, sitePages } from "~/components/site/sitePages";
import { localize } from "~/i18n";

// every page in German and English, each entry pointing to both versions
export const loader = () => {
  const urls = sitePages
    .flatMap((page) => {
      const de = siteUrl + (page === "/" ? "" : page);
      const en = siteUrl + localize(page, "en");
      const alternates = `
    <xhtml:link rel="alternate" hreflang="de" href="${de}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${de}"/>`;
      return [de, en].map(
        (loc) => `  <url>
    <loc>${loc}</loc>${alternates}
  </url>`
      );
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
