import SectionHeading from "~/components/site/sectionHeading";
import { localize, useLang } from "~/i18n";

type Offer = {
  title: string;
  price: string;
  text: string;
  href: string;
  link?: string;
};

const offers: { de: Offer[]; en: Offer[] } = {
  de: [
    {
      title: "Website-Check-up",
      price: "250 €",
      text: "Ich prüfe Ihre Website auf Sicherheit, Technik, Ladezeit und Auffindbarkeit bei Google. Sie bekommen einen klaren Bericht und eine persönliche Besprechung.",
      href: "/website-check-up",
    },
    {
      title: "Website-Erstellung",
      price: "ab 599 €",
      text: "Eine moderne, schnelle Website, die auf jedem Gerät gut aussieht. Impressum und Datenschutz sind dabei, und Sie zahlen erst, wenn sie online ist.",
      href: "/website-erstellen",
    },
    {
      title: "Hosting & Wartung",
      price: "ab 25 € / Monat",
      text: "Hosting in Deutschland, Domain, tägliche Backups, Updates und schnelle Hilfe, wenn etwas hakt. Nach drei Monaten monatlich kündbar.",
      href: "/hosting-wartung",
    },
    {
      title: "KI & Automatisierung",
      price: "auf Anfrage",
      text: "Wiederkehrende Arbeit automatisieren, zum Beispiel E-Mails, Termine und Routinen. Ich baue nur, was Ihnen wirklich Arbeit abnimmt.",
      href: "/contact",
      link: "Anfragen",
    },
  ],
  en: [
    {
      title: "Website check-up",
      price: "250 €",
      text: "I check your website for security, technology, loading time and findability on Google. You get a clear report and a personal call.",
      href: "/website-check-up",
    },
    {
      title: "Website creation",
      price: "from 599 €",
      text: "A modern, fast website that looks good on every device. Imprint and privacy policy are included, and you only pay once it's online.",
      href: "/website-erstellen",
    },
    {
      title: "Hosting & maintenance",
      price: "from 25 € / month",
      text: "Hosting in Germany, domain, daily backups, updates and quick help when something gets stuck. Cancel monthly after three months.",
      href: "/hosting-wartung",
    },
    {
      title: "AI & automation",
      price: "on request",
      text: "Automate recurring work such as emails, appointments and routines. I only build what really saves you work.",
      href: "/contact",
      link: "Ask me",
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
    <div className="grid gap-6 sm:grid-cols-2">
      {shown.map((offer) => (
        <a
          key={offer.title}
          href={localize(offer.href, lang)}
          className="group flex flex-col rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
        >
          <div className="flex items-baseline justify-between gap-4">
            <h3 className="text-xl font-bold text-white">{offer.title}</h3>
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
