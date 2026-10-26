import { siteUrl } from "~/components/site/sitePages";

// the classic site is the hidden easter egg – keep crawlers out
export const loader = () =>
  new Response(
    `User-agent: *
Disallow: /classic

Sitemap: ${siteUrl}/sitemap.xml
`,
    {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=3600",
      },
    }
  );
