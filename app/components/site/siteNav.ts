import { localize, type Lang } from "~/i18n";

// main links shown in the desktop header
export function getSiteNav(lang: Lang) {
  const labels =
    lang === "de"
      ? ["Cloud & Integrationen", "Websites", "Über mich"]
      : ["Cloud & Integrations", "Websites", "About"];
  return [
    { label: labels[0], href: localize("/cloud", lang) },
    { label: labels[1], href: localize("/websites", lang) },
    { label: labels[2], href: localize("/about", lang) },
  ];
}

// every page, grouped – used by the mobile menu and the footer
export function getSiteMap(lang: Lang) {
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
          label: de ? "Website-Check-up" : "Website check-up",
          href: localize("/website-check-up", lang),
        },
      ],
    },
    {
      title: de ? "Über mich" : "About me",
      links: [
        { label: de ? "Über mich" : "About", href: localize("/about", lang) },
        { label: "Stack", href: localize("/stack", lang) },
        {
          label: de ? "Hobbyprojekte" : "Side projects",
          href: localize("/side-projects", lang),
        },
      ],
    },
    {
      title: de ? "Kontakt" : "Contact",
      links: [
        { label: de ? "Kontakt" : "Contact", href: localize("/contact", lang) },
        { label: "info@hschaletzky.com", href: "mailto:info@hschaletzky.com" },
      ],
    },
  ];
}

// intro calls – plain link, nothing from cal.com loads on this site
export const calUrl = "https://cal.com/hannesschaletzky";

// the legal pages exist in German only
export const legalPaths = ["/impressum", "/datenschutz"];

export function getLegalLinks(lang: Lang) {
  return [
    { label: lang === "de" ? "Impressum" : "Imprint", href: "/impressum" },
    {
      label: lang === "de" ? "Datenschutz" : "Privacy policy",
      href: "/datenschutz",
    },
  ];
}
