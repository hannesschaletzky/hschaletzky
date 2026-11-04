import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";

// slim version of the two service cards
const offers = {
  de: [
    {
      eyebrow: "Für Unternehmen",
      title: "Cloud & Integrationen",
      items: [
        "Projekt-Kickoff – ab 800 € zzgl. MwSt.",
        "Systemintegration & Datenflüsse",
        "AWS-Architektur & Migrationen",
        "CI/CD, Tests & Produktionsbetrieb",
      ],
      href: "/cloud",
      cta: "Mehr zu Cloud & Integrationen",
    },
    {
      eyebrow: "Für kleine Unternehmen & Vereine",
      title: "Website · Hosting · Wartung",
      items: [
        "Website-Check-up – 250 € inkl. MwSt.",
        "Website-Erstellung – ab 599 € inkl. MwSt.",
        "Hosting & Wartung – ab 25 € / Monat inkl. MwSt.",
        "KI & Automatisierung",
      ],
      href: "/websites",
      cta: "Mehr zu Websites",
    },
  ],
  en: [
    {
      eyebrow: "For companies",
      title: "Cloud & Integrations",
      items: [
        "Project kickoff – from 800 € plus VAT",
        "System integration & data flows",
        "AWS architecture & migrations",
        "CI/CD, testing & production operation",
      ],
      href: "/cloud",
      cta: "More about cloud & integrations",
    },
    {
      eyebrow: "For small businesses & clubs",
      title: "Website · Hosting · Maintenance",
      items: [
        "Website check-up – 250 € incl. VAT",
        "Website creation – from 599 € incl. VAT",
        "Hosting & maintenance – from 25 € / month incl. VAT",
        "AI & automation",
      ],
      href: "/websites",
      cta: "More about websites",
    },
  ],
};

export default function Offers() {
  const lang = useLang();
  return (
    <section id="offers" className="scroll-mt-20">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading eyebrow={lang === "de" ? "Angebote" : "Offers"}>
          {lang === "de" ? "Womit ich helfen kann." : "How I can help."}
        </SectionHeading>
        <div className="grid gap-6 md:grid-cols-2">
          {offers[lang].map((offer) => (
            // the whole card is clickable: the link's ::after covers the card, so
            // screen readers still announce just the one link
            <article
              key={offer.title}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-navy-light p-8 transition hover:border-teal/40 has-[a:focus-visible]:border-teal"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal">
                {offer.eyebrow}
              </p>
              <h3 className="mt-3 text-2xl font-bold text-white">
                {offer.title}
              </h3>
              <ul className="mt-6 flex-1 space-y-2">
                {offer.items.map((item) => (
                  <li key={item} className="flex gap-3 text-white">
                    <span className="text-teal">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={localize(offer.href, lang)}
                className="mt-8 font-semibold text-teal after:absolute after:inset-0 after:rounded-2xl after:content-[''] focus:outline-hidden group-hover:text-teal-light"
              >
                {offer.cta}{" "}
                <span
                  aria-hidden="true"
                  className="inline-block transition-transform group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
