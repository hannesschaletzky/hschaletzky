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
    { property: "og:site_name", content: "Hannes Schaletzky" },
    { property: "og:locale", content: "en_US" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: `${siteUrl}/og-image.png` },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

// a service with its starting price (net for companies, gross for consumers)
function offer(
  name: string,
  minPrice?: number,
  vatIncluded?: boolean,
  unitText?: string
) {
  return {
    "@type": "Offer",
    itemOffered: { "@type": "Service", name },
    ...(minPrice !== undefined && {
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice,
        priceCurrency: "EUR",
        valueAddedTaxIncluded: vatIncluded,
        ...(unitText && { unitText }),
      },
    }),
  };
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Services",
      itemListElement: [
        offer("Project kickoff", 800, false),
        offer("Integration & cloud projects"),
        offer("Website check-up", 150, true),
        offer("Website creation", 990, true),
        offer("Hosting & maintenance", 49, true, "month"),
        offer("AI & automation"),
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

// structured data for the about page: the person behind the business
export const personJsonLd = {
  "script:ld+json": {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hannes Schaletzky",
    url: `${siteUrl}/about`,
    image: `${siteUrl}/hannes.jpg`,
    jobTitle: "Freelance Integration & Cloud Engineer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "University of Augsburg",
    },
    knowsLanguage: ["de", "en", "fr"],
    sameAs: [
      "https://linkedin.com/in/hannesschaletzky/",
      "https://github.com/hannesschaletzky",
    ],
  },
};
