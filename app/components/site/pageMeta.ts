import { siteUrl } from "~/components/site/sitePages";
import { localize, type Lang } from "~/i18n";
import { mail, phone } from "~/components/site/siteNav";

// title, description, link preview (Open Graph), canonical URL and the links
// between the German and English version of a page
// path is the German address ("/cloud"), the English one is derived from it
// image: own preview under /og/<image>-<lang>.png (2x, centred for square crops)
export function pageMeta({
  title,
  description,
  path,
  lang,
  image,
  germanOnly = false,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  lang: Lang;
  image?: string;
  // pages without an English version (the guide) get no language alternates
  germanOnly?: boolean;
  type?: "website" | "article";
}) {
  const urls = {
    de: siteUrl + (path === "/" ? "" : path),
    en: siteUrl + localize(path, "en"),
  };
  const url = urls[lang];
  const alternates = germanOnly
    ? []
    : [
        { tagName: "link", rel: "alternate", hrefLang: "de", href: urls.de },
        { tagName: "link", rel: "alternate", hrefLang: "en", href: urls.en },
        {
          tagName: "link",
          rel: "alternate",
          hrefLang: "x-default",
          href: urls.de,
        },
        {
          property: "og:locale:alternate",
          content: lang === "de" ? "en_US" : "de_DE",
        },
      ];
  return [
    { title },
    { name: "description", content: description },
    { tagName: "link", rel: "canonical", href: url },
    ...alternates,
    { property: "og:type", content: type },
    { property: "og:site_name", content: "Hannes Schaletzky" },
    { property: "og:locale", content: lang === "de" ? "de_DE" : "en_US" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    {
      property: "og:image",
      content: image
        ? `${siteUrl}/og/${image}-${lang}.png`
        : `${siteUrl}/${lang === "de" ? "og-image-de" : "og-image"}.png`,
    },
    { property: "og:image:width", content: image ? "2400" : "1200" },
    { property: "og:image:height", content: image ? "1260" : "630" },
    { name: "twitter:card", content: "summary_large_image" },
  ];
}

// a service with its starting price (net for companies, gross for consumers)
function offer(
  name: string,
  minPrice?: number,
  vatIncluded?: boolean,
  unitText?: string,
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
export const businessJsonLd = (lang: Lang) => ({
  "script:ld+json": {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Hannes Schaletzky",
    url: siteUrl,
    image: `${siteUrl}/hannes-portrait.jpg`,
    logo: `${siteUrl}/icon-512.png`,
    email: mail,
    telephone: phone.number,
    // the same address as in the imprint
    address: {
      "@type": "PostalAddress",
      streetAddress: "Fasanenstraße 38",
      postalCode: "10719",
      addressLocality: "Berlin",
      addressCountry: "DE",
    },
    // DACH: remote or on-site in Germany, Austria and Switzerland
    areaServed: ["Germany", "Austria", "Switzerland"].map((name) => ({
      "@type": "Country",
      name,
    })),
    founder: {
      "@type": "Person",
      name: "Hannes Schaletzky",
      jobTitle: "Freelance Software Engineer",
      sameAs: [
        "https://linkedin.com/in/hannesschaletzky/",
        "https://github.com/hannesschaletzky",
      ],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: lang === "de" ? "Leistungen" : "Services",
      itemListElement: [
        offer(
          lang === "de"
            ? "Integrations- & Cloud-Projekte"
            : "Integration & cloud projects",
        ),
        offer(
          lang === "de" ? "Website-Check-up" : "Website check-up",
          250,
          true,
        ),
        offer(
          lang === "de" ? "Website-Erstellung" : "Website creation",
          599,
          true,
        ),
        offer(
          lang === "de" ? "Hosting & Wartung" : "Hosting & maintenance",
          25,
          true,
          "month",
        ),
        offer(lang === "de" ? "E-Mail-Einrichtung" : "Email setup", 249, true),
        offer(
          lang === "de"
            ? "Google-Unternehmensprofil"
            : "Google Business Profile",
          149,
          true,
        ),
        offer(
          lang === "de" ? "Google-Sichtbarkeit" : "Google visibility",
          390,
          true,
        ),
        offer(
          lang === "de" ? "Website-Sprechstunde" : "Website office hours",
          71.4,
          true,
          "hour",
        ),
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
});

// structured data for the about page: the person behind the business
export const personJsonLd = {
  "script:ld+json": {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Hannes Schaletzky",
    url: `${siteUrl}/about`,
    image: `${siteUrl}/hannes-portrait.jpg`,
    jobTitle: "Freelance Software Engineer",
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
