import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";

type Offer = {
  title: string;
  price: string;
  text: string;
  href: string;
  link?: string;
  // a small label that marks the tile as the place to start
  badge?: string;
};

const offers: { de: Offer[]; en: Offer[] } = {
  de: [
    {
      title: "Check-up",
      price: "250 €",
      badge: "Guter Einstieg",
      text: "Ich prüfe Ihre Website auf Sicherheit, Technik, Ladezeit und Auffindbarkeit bei Google. Sie bekommen einen klaren Bericht und eine persönliche Besprechung.",
      href: "/website-check-up",
    },
    {
      title: "Neue Website",
      price: "ab 599 €",
      text: "Eine moderne, schnelle Website, die auf jedem Gerät gut aussieht. Impressum und Datenschutz sind dabei, und Sie zahlen erst, wenn sie online ist.",
      href: "/website-erstellen",
    },
    {
      title: "Hosting & Wartung",
      price: "ab 25 € / Monat",
      text: "Hosting in Deutschland, Domain, tägliche Backups, Updates und schnelle Hilfe, wenn etwas hakt. Monatlich kündbar.",
      href: "/hosting-wartung",
    },
    {
      title: "E-Mail-Einrichtung",
      price: "249 €",
      text: "Professionelle Adressen wie info@ihr-betrieb.de, eingerichtet auf Handy und Computer. Ihre alten Mails ziehen mit um, und Ihre Domain ist gegen gefälschte Absender geschützt.",
      href: "/e-mail-einrichtung",
    },
    {
      title: "Google-Sichtbarkeit",
      price: "390 €",
      text: "Google-Unternehmensprofil, Search Console, Seitentitel und Ladezeit: Ich bringe die Grundlagen in Ordnung, damit Kunden Sie bei Google finden.",
      href: "/google-sichtbarkeit",
    },
    {
      title: "Sprechstunde",
      price: "71,40 € / Std.",
      text: "Sie bringen Ihre Fragen mit, wir gehen sie gemeinsam an Ihrer Website durch: Pflege, Updates, Google-Profil oder Ads. Vor Ort in Berlin oder per Video.",
      href: "/website-sprechstunde",
    },
  ],
  en: [
    {
      title: "Check-up",
      price: "250 €",
      badge: "A good place to start",
      text: "I check your website for security, technology, loading time and findability on Google. You get a clear report and a personal call.",
      href: "/website-check-up",
    },
    {
      title: "New website",
      price: "from 599 €",
      text: "A modern, fast website that looks good on every device. Imprint and privacy policy are included, and you only pay once it's online.",
      href: "/website-erstellen",
    },
    {
      title: "Hosting & maintenance",
      price: "from 25 € / month",
      text: "Hosting in Germany, domain, daily backups, updates and quick help when something gets stuck. Cancel any month.",
      href: "/hosting-wartung",
    },
    {
      title: "Email setup",
      price: "249 €",
      text: "Professional addresses like info@your-business.de, set up on phone and computer. Your old mail moves over, and your domain is protected against forged senders.",
      href: "/e-mail-einrichtung",
    },
    {
      title: "Google visibility",
      price: "390 €",
      text: "Google Business Profile, Search Console, page titles and loading time: I put the basics in order so customers find you on Google.",
      href: "/google-sichtbarkeit",
    },
    {
      title: "Office hours",
      price: "71.40 € / hour",
      text: "You bring your questions, we go through them together on your website: upkeep, updates, Google profile or ads. On-site in Berlin or by video.",
      href: "/website-sprechstunde",
    },
  ],
};

// the website offers as equal tiles: all of them on the overview, on an offer page
// only the other website offers (without itself and the AI tile)
export default function OfferTiles({ current }: { current?: string }) {
  const lang = useLang();
  const shown = current
    ? offers[lang].filter((o) => o.href !== current && o.href !== "/contact")
    : offers[lang];
  return (
    <div
      className={`grid gap-6 sm:grid-cols-2 ${shown.length > 4 ? "lg:grid-cols-3" : ""}`}
    >
      {shown.map((offer) => (
        <a
          key={offer.title}
          href={localize(offer.href, lang)}
          className={`group relative flex flex-col rounded-2xl border p-6 transition ${
            offer.badge
              ? "border-teal bg-teal/5 hover:-translate-y-0.5 hover:border-teal-light"
              : "border-white/10 hover:-translate-y-0.5 hover:border-teal/50"
          }`}
        >
          {offer.badge && (
            // sits on the top border, so the titles of all tiles stay in line
            <span className="absolute -top-3 left-6 rounded-full bg-teal px-3 py-1 text-xs font-bold text-navy">
              {offer.badge}
            </span>
          )}
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl font-bold text-white group-hover:text-teal-light">{offer.title}</h3>
            <p className="shrink-0 font-semibold text-teal">{offer.price}</p>
          </div>
          <p className="mt-3 leading-relaxed">{offer.text}</p>
          <p className="mt-auto pt-6 font-semibold text-teal group-hover:text-teal-light">
            {offer.link ?? (lang === "de" ? "Mehr dazu" : "More")}{" "}
            <span
              aria-hidden="true"
              className="inline-block transition-transform group-hover:translate-x-1"
            >
              →
            </span>
          </p>
        </a>
      ))}
    </div>
  );
}

// the other website offers at the end of an offer page, so it isn't a dead end
export function RelatedOffers({
  current,
  className,
}: {
  current: string;
  className?: string;
}) {
  const lang = useLang();
  return (
    <section className={className}>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          eyebrow={lang === "de" ? "Weitere Angebote" : "More offers"}
        >
          {lang === "de" ? "Das passt dazu." : "This goes well with it."}
        </SectionHeading>
        <OfferTiles current={current} />
      </div>
    </section>
  );
}
