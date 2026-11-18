import { localize, type Lang } from "~/i18n";

// main links shown in the desktop header (the guide sits on /websites instead)
export function getSiteNav(lang: Lang) {
  if (lang === "de") {
    return [
      { label: "Cloud & Integrationen", href: "/cloud" },
      { label: "Websites", href: "/websites" },
      { label: "Über mich", href: "/about" },
    ];
  }
  return [
    { label: "Cloud & Integrations", href: "/en/cloud" },
    { label: "Websites", href: "/en/websites" },
    { label: "About", href: "/en/about" },
  ];
}

// external links (blog, GitHub, LinkedIn) open in a new tab
export type SiteLink = { label: string; href: string; external?: boolean };

// every page, grouped – used by the mobile menu and the footer
export function getSiteMap(lang: Lang): { title: string; links: SiteLink[] }[] {
  const de = lang === "de";
  return [
    {
      title: de ? "Cloud & Integrationen" : "Cloud & Integrations",
      links: [
        {
          label: de ? "Übersicht" : "Overview",
          href: localize("/cloud", lang),
        },
        {
          label: de ? "Architektur-Review" : "Architecture review",
          href: localize("/cloud/architektur-review", lang),
        },
        {
          label: de ? "Systemintegration" : "System integration",
          href: localize("/cloud/systemintegration", lang),
        },
        {
          label: de ? "Migration nach AWS" : "Migration to AWS",
          href: localize("/cloud/aws-migration", lang),
        },
        {
          label: de ? "Betrieb & Rufbereitschaft" : "Operations & on-call",
          href: localize("/cloud/betrieb", lang),
        },
      ],
    },
    {
      title: "Websites",
      links: [
        {
          label: de ? "Übersicht" : "Overview",
          href: localize("/websites", lang),
        },
        {
          label: "Check-up",
          href: localize("/websites/check-up", lang),
        },
        {
          label: de ? "Neue Website" : "New website",
          href: localize("/websites/neue-website", lang),
        },
        {
          label: de ? "Hosting & Wartung" : "Hosting & maintenance",
          href: localize("/websites/hosting-wartung", lang),
        },
        {
          label: de ? "E-Mail-Einrichtung" : "Email setup",
          href: localize("/websites/e-mail-einrichtung", lang),
        },
        {
          label: de ? "Google-Sichtbarkeit" : "Google visibility",
          href: localize("/websites/google-sichtbarkeit", lang),
        },
        {
          label: de ? "Sprechstunde" : "Office hours",
          href: localize("/websites/sprechstunde", lang),
        },
        {
          label: de ? "Website-Sicherheit" : "Website security",
          href: localize("/websites/sicherheit", lang),
        },
        // the guide exists in German only
        ...(de ? [{ label: "Ratgeber", href: "/ratgeber" }] : []),
      ],
    },
    {
      title: de ? "Über mich" : "About",
      links: [
        {
          label: de ? "Übersicht" : "Overview",
          href: localize("/about", lang),
        },
        { label: "Stack", href: localize("/stack", lang) },
        {
          label: de ? "Hobbyprojekte" : "Side projects",
          href: localize("/side-projects", lang),
        },
        {
          label: "Blog",
          href: "https://blog.hschaletzky.com",
          external: true,
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
        {
          label: de ? "Alle Kontaktwege" : "All ways to reach me",
          href: localize("/contact", lang),
        },
        {
          label: de ? "Erstgespräch buchen" : "Book an intro call",
          href: calUrl,
          external: true,
        },
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
