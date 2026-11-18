import { localize, type Lang } from "~/i18n";

// main links shown in the desktop header (the guide is German only)
export function getSiteNav(lang: Lang) {
  if (lang === "de") {
    return [
      { label: "Cloud & Integrationen", href: "/cloud" },
      { label: "Websites", href: "/websites" },
      { label: "Ratgeber", href: "/ratgeber" },
      { label: "Über mich", href: "/about" },
    ];
  }
  return [
    { label: "Cloud & Integrations", href: "/en/cloud" },
    { label: "Websites", href: "/en/websites" },
    { label: "About", href: "/en/about" },
  ];
}

// external links (GitHub, LinkedIn) open in a new tab
export type SiteLink = { label: string; href: string; external?: boolean };

// every page, grouped – used by the mobile menu and the footer
export function getSiteMap(lang: Lang): { title: string; links: SiteLink[] }[] {
  const de = lang === "de";
  return [
    {
      title: de ? "Angebote" : "Offers",
      links: [
        {
          label: de ? "Cloud & Integrationen" : "Cloud & Integrations",
          href: localize("/cloud", lang),
        },
        { label: "Websites", href: localize("/websites", lang) },
        {
          label: de ? "Website-Sicherheit" : "Website security",
          href: localize("/website-sicherheit", lang),
        },
        {
          label: de ? "Website-Check-up" : "Website check-up",
          href: localize("/website-check-up", lang),
        },
        {
          label: de ? "Website-Erstellung" : "Website creation",
          href: localize("/website-erstellen", lang),
        },
        {
          label: de ? "Hosting & Wartung" : "Hosting & maintenance",
          href: localize("/hosting-wartung", lang),
        },
        {
          label: de ? "Google-Sichtbarkeit" : "Google visibility",
          href: localize("/google-sichtbarkeit", lang),
        },
        {
          label: de ? "E-Mail-Einrichtung" : "Email setup",
          href: localize("/e-mail-einrichtung", lang),
        },
        {
          label: de ? "Website-Sprechstunde" : "Website office hours",
          href: localize("/website-sprechstunde", lang),
        },
        // the guide exists in German only
        ...(de ? [{ label: "Ratgeber", href: "/ratgeber" }] : []),
      ],
    },
    {
      title: "Hannes",
      links: [
        { label: de ? "Über mich" : "About", href: localize("/about", lang) },
        { label: "Stack", href: localize("/stack", lang) },
        {
          label: de ? "Hobbyprojekte" : "Side projects",
          href: localize("/side-projects", lang),
        },
        {
          label: "GitHub",
          href: "https://github.com/hannesschaletzky",
          external: true,
        },
        {
          label: "LinkedIn",
          href: "https://linkedin.com/in/hannesschaletzky/",
          external: true,
        },
      ],
    },
    {
      title: de ? "Kontakt" : "Contact",
      links: [
        { label: de ? "Kontakt" : "Contact", href: localize("/contact", lang) },
        { label: "info@hschaletzky.com", href: "mailto:info@hschaletzky.com" },
        phone,
      ],
    },
  ];
}

// intro calls – plain link, nothing from cal.com loads on this site
export const calUrl = "https://cal.com/hannesschaletzky";

// business number, the same as in the imprint
export const phone = { label: "+49 162 8525830", href: "tel:+491628525830" };

// the legal pages exist in German only
export const legalPaths = ["/impressum", "/datenschutz", "/widerruf"];

// German-only pages: the language switch leads to the English start page
export function isGermanOnly(pathname: string) {
  return (
    legalPaths.includes(pathname) ||
    pathname === "/ratgeber" ||
    pathname.startsWith("/ratgeber/")
  );
}

export function getLegalLinks(lang: Lang) {
  return [
    { label: lang === "de" ? "Impressum" : "Imprint", href: "/impressum" },
    {
      label: lang === "de" ? "Datenschutz" : "Privacy policy",
      href: "/datenschutz",
    },
    {
      label: lang === "de" ? "Widerruf" : "Right of withdrawal",
      href: "/widerruf",
    },
  ];
}
