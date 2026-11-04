import type { MetaFunction } from "react-router";
import ContactBox from "~/components/site/contactBox";
import FaqSection from "~/components/site/faqSection";
import Footer from "~/components/site/footer";
import Header from "~/components/site/header";
import PageHero from "~/components/site/pageHero";
import { pageMeta } from "~/components/site/pageMeta";
import ReferencesSection from "~/components/site/referencesSection";
import SectionHeading from "~/components/site/sectionHeading";
import { calUrl } from "~/components/site/siteNav";
import { langFromParams, langLoader, localize, useLang } from "~/i18n";

export const loader = langLoader;

// overview of the website offers: one tile each, the details live on their own pages
const text = {
  de: {
    title: "Websites für kleine Unternehmen & Vereine | Hannes Schaletzky",
    description:
      "Website-Check-up für 250 €, neue Websites ab 599 €, Hosting ab 25 € im Monat. Persönlich und fair, für kleine Unternehmen, Vereine und Selbstständige.",
    hero: {
      eyebrow: "Für kleine Unternehmen & Vereine",
      title: "Ihre Website,",
      highlight: "einfach gut betreut.",
      cta: "Kostenloses Erstgespräch buchen",
      text: "Persönlich, fair, vor Ort oder remote. Für Selbstständige, kleine Unternehmen und Vereine.",
    },
    offersEyebrow: "Angebote & Preise",
    offersHeading: "Klare Preise, keine Überraschungen.",
    more: "Mehr dazu",
    offers: [
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
        text: "Hosting in Deutschland, Backups, Updates und schnelle Hilfe, wenn etwas hakt. Monatlich kündbar.",
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
    vat: "Alle Preise inkl. 19 % MwSt.",
    faqHeading: "Gut zu wissen.",
    faqs: [
      {
        question: "Brauche ich technisches Wissen?",
        answer:
          "Nein. Ich kümmere mich um die Technik und erkläre Ihnen alles so, dass Sie es verstehen.",
      },
      {
        question: "Können Sie meine bestehende Website übernehmen?",
        answer:
          "Ja. Nach einem Website-Check-up sage ich Ihnen, ob ich sie so weiter betreuen kann oder ob ein Neuaufbau sinnvoller ist.",
      },
      {
        question: "Arbeiten Sie auch vor Ort?",
        answer:
          "Ja, gern. Ich komme vorbei oder wir arbeiten remote, ganz wie es Ihnen lieber ist.",
      },
    ],
  },
  en: {
    title: "Websites for Small Businesses & Clubs | Hannes Schaletzky",
    description:
      "Website check-up for 250 €, new websites from 599 €, hosting from 25 € a month. Personal and fair, for self-employed people, small businesses and clubs.",
    hero: {
      eyebrow: "For small businesses & clubs",
      title: "Your website,",
      highlight: "simply taken care of.",
      cta: "Book a free intro call",
      text: "Personal, fair, on-site or remote. For self-employed people, small businesses and clubs.",
    },
    offersEyebrow: "Offers & prices",
    offersHeading: "Clear prices, no surprises.",
    more: "More",
    offers: [
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
        text: "Hosting in Germany, backups, updates and quick help when something gets stuck. Cancel any month.",
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
    vat: "All prices incl. 19 % VAT.",
    faqHeading: "Good to know.",
    faqs: [
      {
        question: "Do I need any technical knowledge?",
        answer:
          "No. I take care of the technology and explain everything in a way that makes sense to you.",
      },
      {
        question: "Can you take over my existing website?",
        answer:
          "Yes. After a check-up I'll tell you whether I can maintain it as it is or whether a rebuild makes more sense.",
      },
      {
        question: "Do you work on-site?",
        answer:
          "Yes, happily. I can come by or we work remotely, whatever you prefer.",
      },
    ],
  },
};

export const meta: MetaFunction = ({ params }) => {
  const lang = langFromParams(params);
  return pageMeta({
    title: text[lang].title,
    description: text[lang].description,
    path: "/websites",
    lang,
  });
};

export default function Websites() {
  const lang = useLang();
  const t = text[lang];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <PageHero
          eyebrow={t.hero.eyebrow}
          title={t.hero.title}
          highlight={t.hero.highlight}
          cta={{ label: t.hero.cta, href: calUrl }}
        >
          {t.hero.text}
        </PageHero>

        {/* offers: equal tiles, each one links to its own page */}
        <section className="bg-navy-lighter">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
            <SectionHeading eyebrow={t.offersEyebrow}>
              {t.offersHeading}
            </SectionHeading>
            <div className="grid gap-6 sm:grid-cols-2">
              {t.offers.map((offer) => (
                <a
                  key={offer.title}
                  href={localize(offer.href, lang)}
                  className="group flex flex-col rounded-2xl border border-white/10 p-6 transition hover:border-teal/50"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-xl font-bold text-white">
                      {offer.title}
                    </h3>
                    <p className="shrink-0 font-semibold text-teal">
                      {offer.price}
                    </p>
                  </div>
                  <p className="mt-3 leading-relaxed">{offer.text}</p>
                  <p className="mt-auto pt-6 font-semibold text-teal group-hover:text-teal-light">
                    {offer.link ?? t.more}{" "}
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
            {/* final prices incl. VAT, required when consumers may order (PAngV) */}
            <p className="mt-6 text-sm text-slate-400">{t.vat}</p>
          </div>
        </section>

        <ReferencesSection />

        <FaqSection
          heading={t.faqHeading}
          faqs={t.faqs}
          className="bg-navy-light"
        />

        {/* the faq has its own background, so the box needs its own gap */}
        <div className="pt-16 sm:pt-24">
          <ContactBox />
        </div>
      </main>

      <Footer />
    </div>
  );
}
