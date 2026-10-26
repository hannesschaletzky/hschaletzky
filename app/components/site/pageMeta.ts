import { siteUrl } from "~/components/site/sitePages";

// title, description, link preview (Open Graph) and canonical URL for a public page
export function pageMeta({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = siteUrl + (path === "/" ? "" : path);
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${siteUrl}/og-image.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

// structured data for Google: who offers what, where
export const businessJsonLd = {
  "script:ld+json": {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hannes Schaletzky",
    url: siteUrl,
    image: `${siteUrl}/hannes.jpg`,
    logo: `${siteUrl}/icon-512.png`,
    email: "info@hschaletzky.com",
    telephone: "+49 176 32267236",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    founder: {
      "@type": "Person",
      name: "Hannes Schaletzky",
      jobTitle: "Freelance Integration & Cloud Engineer",
      sameAs: [
        "https://linkedin.com/in/hannesschaletzky/",
        "https://github.com/hannesschaletzky",
      ],
    },
    knowsAbout: [
      "System integration",
      "AWS",
      "Node.js",
      "TypeScript",
      "Websites",
      "Web hosting",
    ],
  },
};
